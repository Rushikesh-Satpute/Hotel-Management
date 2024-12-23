import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingList = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    // Fetch bookings from the server
    const fetchBookings = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/bookings');
            setBookings(response.data);
        } catch (err) {
            console.log(err);
            setError('Failed to fetch bookings.');
        } finally {
            setLoading(false);
        }
    };

    // Delete a booking
    const deleteBooking = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/bookings/${id}`);
            // Refresh the bookings list
            setBookings(bookings.filter(booking => booking._id !== id));
        } catch (err) {
            console.log(err);
            console.error(err);
            setError('Failed to delete booking.');
        }
    };

    useEffect(() => {
        fetchBookings();
    }, []);

    // Filter bookings based on search term
    const filteredBookings = bookings.filter(booking =>
        booking.registrationNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.guestName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen text-gray-100 p-6">
            <h1 className="text-3xl font-bold mb-6">All Bookings</h1>
            {loading ? (
                <p className="text-center">Loading bookings...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-gray-800 rounded-lg shadow-lg">
                        <thead>
                            <tr className="bg-gray-700 text-gray-300 text-center">
                                <th className="py-3 px-4 text-center">Registration Number</th>
                                <th className="py-3 px-4 ">Guests</th>
                                <th className="py-3 px-4 ">Room Type</th>
                                <th className="py-3 px-4 ">Check-In</th>
                                <th className="py-3 px-4 ">Check-Out</th>
                                <th className="py-3 px-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredBookings.map((booking) => (
                                <tr key={booking._id} className="border-b border-gray-600 text-center">
                                    <td className="py-3 px-4">{booking.registrationNumber}</td>
                                    <td className="py-3 px-4">{booking.guests}</td>
                                    <td className="py-3 px-4">{booking.roomType}</td>
                                    <td className="py-3 px-4">{booking.checkInDate}</td>
                                    <td className="py-3 px-4">{booking.checkOutDate}</td>
                                    <td className="py-3 px-4">
                                        <button
                                            onClick={() => deleteBooking(booking._id)}
                                            className="text-red-500 hover:underline"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default BookingList;
