    import React, { useEffect, useState } from 'react';
    import axios from 'axios';

    const BookingList = () => {
        const [bookings, setBookings] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState('');
        const [searchTerm, setSearchTerm] = useState('');
        const [deleting, setDeleting] = useState(null);

        // Fetch bookings from the server
        const fetchBookings = async () => {
            try {
                const response = await axios.get('https://hotelmng.onrender.com/api/bookings');
                setBookings(response.data);
            } catch (err) {
                setError('Failed to fetch bookings.');
            } finally {
                setLoading(false);
            }
        };

        // Delete a booking
        const deleteBooking = async (id) => {
            setDeleting(id);
            try {
                await axios.delete(`https://hotelmng.onrender.com/api/bookings/${id}`);
                setBookings((prev) => prev.filter(booking => booking._id !== id));
            } catch (err) {
                setError('Failed to delete booking.');
            } finally {
                setDeleting(null);
            }
        };

        useEffect(() => {
            fetchBookings();
        }, []);

    
        // Filter bookings based on search term safely
        const filteredBookings = bookings.filter(booking =>
        (booking.registrationNumber?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            booking.guestName?.toLowerCase().includes(searchTerm.toLowerCase()))
        );


        return (
            <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6">
                <h1 className="text-3xl font-bold mb-6">All Bookings</h1>
        
                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Search by Registration Number or Guest Name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full mb-4 p-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-500"
                />
        
                {loading ? (
                    <p className="text-center">Loading bookings...</p>
                ) : error ? (
                    <p className="text-red-500 dark:text-red-400">{error}</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
                            <thead>
                                <tr className="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-300 text-center">
                                    <th className="py-3 px-4">Registration Number</th>
                                    <th className="py-3 px-4">Guest Name</th>
                                    <th className="py-3 px-4">Room Type</th>
                                    <th className="py-3 px-4">Check-In</th>
                                    <th className="py-3 px-4">Check-Out</th>
                                    <th className="py-3 px-4">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredBookings.map((booking) => (
                                    <tr key={booking._id} className="border-b border-gray-300 dark:border-gray-600 text-center">
                                        <td className="py-3 px-4">{booking.registrationNumber}</td>
                                        <td className="py-3 px-4">{booking.guestName}</td>
                                        <td className="py-3 px-4">{booking.roomType}</td>
                                        <td className="py-3 px-4">{booking.checkInDate}</td>
                                        <td className="py-3 px-4">{booking.checkOutDate}</td>
                                        <td className="py-3 px-4">
                                            <button
                                                onClick={() => deleteBooking(booking._id)}
                                                className={`text-red-600 dark:text-red-400 hover:underline ${deleting === booking._id ? 'opacity-50 cursor-not-allowed' : ''}`}
                                                disabled={deleting === booking._id}
                                            >
                                                {deleting === booking._id ? 'Deleting...' : 'Delete'}
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
