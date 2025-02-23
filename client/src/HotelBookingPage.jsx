import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaAngleLeft, FaPlus, } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const HotelBookingForm = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { title, description, price, imageUrl } = location.state || {};
    const goBack = () => {
        navigate(-1); // Navigate back to the previous page
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [previousBookings, setPreviousBookings] = useState([]);
    const [bookingDetails, setBookingDetails] = useState({});
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [guestCount, setGuests] = useState(1);

    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        checkInDate: '',
        checkOutDate: '',
        roomType: "Standard",
        registrationNumber: registrationNumber,
    });

    // Room types and their respective prices
    const roomTypes = [
        { type: 'Single Room', price: 1000, capacity: 1 },
        { type: 'Deluxe Room', price: 1500, capacity: 2 },
        { type: 'Family Suite', price: 3000, capacity: 4 }
    ];
    const [selectedRoomType, setSelectedRoomType] = useState(roomTypes[0]);
    const [errors, setErrors] = useState({});


    const toggleModal = () => {
        if (error) {
            setError(null);
        }
        if (isModalOpen) {
            setPreviousBookings([]);
        }
        setIsModalOpen(!isModalOpen);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleDateChange = (date, field) => {
        setFormData((prevData) => ({ ...prevData, [field]: date }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name) newErrors.name = "Name is required.";
        if (!formData.email) newErrors.email = "Email is required.";
        if (!formData.phone) newErrors.phone = "Phone number is required.";
        if (!formData.checkInDate) newErrors.checkInDate = "Check-in date is required.";
        if (!formData.checkOutDate) newErrors.checkOutDate = "Check-out date is required.";
        if (formData.checkInDate && formData.checkOutDate && new Date(formData.checkOutDate) <= new Date(formData.checkInDate)) {
            newErrors.checkOutDate = "Check-out date must be after check-in date.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            const regNumber = generateRegistrationNumber(formData.name, selectedRoomType.type);
            const isRegistered = await checkUserRegistration();
            const bookingData = {
                guestName:formData.name,
                roomType: selectedRoomType.type,
                guestCount,
                checkInDate: formData.checkInDate,
                checkOutDate: formData.checkOutDate,
                total: calculateTotal(),
                registrationNumber: regNumber,
            };
            if (guestCount > selectedRoomType.capacity) {
                setError(`Maximum capacity for ${selectedRoomType.type} is ${selectedRoomType.capacity} guests.`);
                return;
            }

            if (!isRegistered) {
                setError('You are not registered. Please register first.');
                return;
            }
            if (previousBookings.includes(regNumber)) {
                setError('This booking has already been made.');
                return;
            }
            setBookingDetails(bookingData);
            setRegistrationNumber(regNumber);
            setPreviousBookings([...previousBookings, regNumber]); // Save the registration number
            toggleModal();
        }
    };

    // Confirm booking in the modal
    const confirmBooking = async () => {
        setLoading(true);
        toggleModal();
        try {
            console.log('Booking details sent to server:', bookingDetails);
            const response = await axios.post('https://hotelmng.onrender.com/api/bookings', bookingDetails);
            console.log('Server response:', response);

            if (response.status === 200 || response.status === 201) {
                setIsFormSubmitted(true);
            } else {
                setError('Failed to confirm booking. Please try again.');
            }
        } catch (error) {
            console.error('Error during booking confirmation:', error.response ? error.response.data : error.message);
            setError('An internal server error occurred. Please try again.');
        }
        setLoading(false);
    };

    // Calculate total price based on guests and nights
    const calculateTotal = () => {
        const nights = Math.abs(new Date(formData.checkOutDate) - new Date(formData.checkInDate)) / (1000 * 60 * 60 * 24);
        return nights > 0 ? (selectedRoomType.price * guestCount * nights) : 0;
    };

    // Generate unique registration number
    const generateRegistrationNumber = (guestName, roomType) => {
        const shortName = guestName.slice(0, 4).toUpperCase();
        const shortRoomType = roomType.slice(0, 5).toUpperCase();
        const uniqueId = uuidv4().slice(0, 8).toUpperCase(); // Short unique ID

        return `${shortName}${shortRoomType}-${uniqueId}`;
    };

    // Check if user is registered
    const checkUserRegistration = async () => {
        try {
            const response = await axios.post('https://hotelmng.onrender.com/api/users/check-user', { phoneNumber: formData.phone });
            return response.data.registered;
        } catch (error) {
            console.error("Error checking registration status:", error);
            setError('Error checking registration status. Please try again.');
            return false;
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-6 bg-gray-100 dark:bg-inherit antialiased">
            <div className="bg-white dark:bg-gray-800 p-8 dark:border-0 border rounded-lg shadow-xl w-full max-w-3xl relative">
                {/* Button to show modal */}
                <button
                    onClick={goBack}
                    className="absolute top-4 left-4 text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white p-2"
                >
                    <FaAngleLeft size={24} />
                </button>

                <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
                    Hotel Room Booking
                </h2>

                {isFormSubmitted && (
                    <div className="flex items-center justify-end bg-green-100 text-green-700 p-4 mb-4 rounded-md">
                        <p className="w-full">Your booking has been successfully submitted!</p>
                        <FaPlus className="rotate-45 cursor-pointer" onClick={() => setIsFormSubmitted(false)} />
                    </div>
                )}

                {error && (
                    <div className="flex items-center justify-end bg-red-100 text-red-700 p-4 mb-4 rounded-md">
                        <p className="w-full">{error}</p>
                        <FaPlus className="rotate-45 cursor-pointer" onClick={() => setError(null)} />
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        {[
                            { label: "Full Name", name: "name", type: "text", placeholder: "Enter your name" },
                            { label: "Email Address", name: "email", type: "email", placeholder: "Enter your email" },
                            { label: "Phone Number", name: "phone", type: "tel", placeholder: "Enter your phone number" },
                        ].map((field) => (
                            <div key={field.name}>
                                <label htmlFor={field.name} className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                                    {field.label}
                                </label>
                                <input
                                    {...field}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    className="mt-2 p-3 w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500"
                                />
                                {errors[field.name] && <p className="text-red-600 text-sm mt-2">{errors[field.name]}</p>}
                            </div>
                        ))}

                        {/* Guests Count */}
                        <div className="flex space-x-4">
                            {[
                                { label: "Number Guests", field: "guestCount" },
                            ].map((dateField) => (
                                <div className="w-full" key={dateField.field}>
                                    <label
                                        htmlFor={dateField.field}
                                        className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
                                    >
                                        {dateField.label}
                                    </label>
                                    <input
                                        type="number"
                                        name="guestCount"
                                        value={guestCount}
                                        min = "1"
                                        onChange={(e) => setGuests(Number(e.target.value))}
                                        className="mt-2 p-3 w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500"
                                    />

                                    {errors[dateField.field] && (
                                        <p className="text-red-600 text-sm mt-2">{errors[dateField.field]}</p>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Dates */}
                        <div className="flex space-x-4">
                            {[
                                { label: "Check-in Date", field: "checkInDate" },
                                { label: "Check-out Date", field: "checkOutDate" },
                            ].map((dateField) => (
                                <div className="w-full" key={dateField.field}>
                                    <label
                                        htmlFor={dateField.field}
                                        className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
                                    >
                                        {dateField.label}
                                    </label>
                                    <DatePicker
                                        selected={formData[dateField.field]}
                                        onChange={(date) => handleDateChange(date, dateField.field)}
                                        className="mt-2 p-3 w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-md"
                                        minDate={dateField.field === "checkOutDate" ? formData.checkInDate : new Date()}
                                        dateFormat="MM/dd/yyyy"
                                    />
                                    {errors[dateField.field] && (
                                        <p className="text-red-600 text-sm mt-2">{errors[dateField.field]}</p>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Room Type */}
                        <div>
                            <label htmlFor="roomType" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                                Room Type
                            </label>
                            <select
                                id="roomType"
                                name="roomType"
                                value={selectedRoomType.type}
                                onChange={(e) => {
                                    const room = roomTypes.find(r => r.type === e.target.value);
                                    setSelectedRoomType(room);
                                }}
                                className="mt-2 p-3 w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500"
                            >
                                {roomTypes.map((room, index) => (
                                    <option key={index} value={room.type}>{room.type}</option>
                                ))}
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="mt-6 w-full bg-blue-500 text-white font-semibold p-3 rounded-md hover:bg-blue-600"
                        >
                            Book Room
                        </button>
                    </div>
                </form>
            </div>

            {/* Modal for Room Details */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl w-96">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Room Booking Details</h3>
                        <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                            <li><strong>Registration Number:</strong> <br />{registrationNumber}</li>
                            {console.log(registrationNumber)}
                            <li><strong>Name:</strong> {formData.name}</li>
                            <li><strong>Email:</strong> {formData.email}</li>
                            <li><strong>Phone:</strong> {formData.phone}</li>
                            <li>
                                <strong>Check-in Date:</strong>{" "}
                                {formData.checkInDate ? formData.checkInDate.toLocaleDateString() : "Not selected"}
                            </li>
                            <li>
                                <strong>Check-out Date:</strong>{" "}
                                {formData.checkOutDate ? formData.checkOutDate.toLocaleDateString() : "Not selected"}
                            </li>
                            <li><strong>Room Type:</strong> {formData.roomType}</li>
                        </ul>
                        <div className="mt-6 text-center">
                            <button
                                onClick={() => { confirmBooking() }}
                                className="bg-green-500 mx-6 text-white p-2 rounded-md hover:bg-green-600">
                                Confirm
                            </button>
                            <button
                                onClick={toggleModal}
                                className="bg-red-500 mx-6 text-white p-2 rounded-md hover:bg-red-600"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default HotelBookingForm;
