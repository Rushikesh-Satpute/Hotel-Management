import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify'; // For notifications

function ManageHotels() {
  const [hotels, setHotels] = useState([]);
  const [hotelId, setHotelId] = useState(null);
  const [hotelName, setHotelName] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    // Fetch hotels from API (Update with your endpoint)
    const response = await fetch('https://hotelmng.onrender.com/api/hotels/getHotels');
    const data = await response.json();
    setHotels(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hotelData = { hotelName, location, price, description, imageUrl };

    try {
        console.log(hotelId);
        
      if (hotelId) {
        // Edit hotel
        const response = await fetch(`https://hotelmng.onrender.com/api/hotels/editHotel/${hotelId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(hotelData),
        });

        console.log(response);

        
        if (response.ok) {
          toast.success('Hotel updated successfully!');
          alert("Hotel updated successfully!")
        }
      } else {
        // Add hotel
        const response = await fetch('https://hotelmng.onrender.com/api/hotels/addHotel', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(hotelData),
        });

        if (response.ok) {
          toast.success('Hotel added successfully!');
          alert("Hotel added successfully!")
        }
      }

      // Reset form fields and fetch updated list
      resetForm();
      fetchHotels();
    } catch (error) {
      console.error('Error processing hotel:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  const resetForm = () => {
    setHotelId(null);
    setHotelName('');
    setLocation('');
    setPrice('');
    setDescription('');
    setImageUrl('');
  };

  const handleEdit = (hotel) => {
    setHotelId(hotel._id);
    setHotelName(hotel.hotelName);
    setLocation(hotel.location);
    setPrice(hotel.price);
    setDescription(hotel.description);
    setImageUrl(hotel.imageUrl);
  };

  const handleDelete = async (hotelId) => {
    if (window.confirm('Are you sure you want to delete this hotel?')) {
      try {
        const response = await fetch(`https://hotelmng.onrender.com/api/hotels/deleteHotel/${hotelId}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          toast.success('Hotel deleted successfully!');
          alert("Hotel deleted successfully!")
          fetchHotels();
        } else {
          toast.error('Failed to delete hotel. Please try again.');
          alert("Failed to delete hotel. Please try again.");
        }
      } catch (error) {
        console.error('Error deleting hotel:', error);
        toast.error('An error occurred. Please try again.');
        alert("error")
      }
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen py-8 antialiased">
      <div className="mx-auto max-w-screen-lg px-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Manage Hotels</h2>
  
        <form onSubmit={handleSubmit} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md mb-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="hotelName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Hotel Name</label>
              <input
                type="text"
                id="hotelName"
                value={hotelName}
                onChange={(e) => setHotelName(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-600"
                placeholder="Enter hotel name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Location</label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-600"
                placeholder="Enter hotel location"
                required
              />
            </div>
          
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Price per Night</label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-600"
                placeholder="Enter price"
                required
              />
            </div>
          
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-600"
                placeholder="Enter hotel description"
                required
              />
            </div>
          
            <div>
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Image URL</label>
              <input
                type="url"
                id="imageUrl"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-600"
                placeholder="Enter image URL"
                required
              />
            </div>
          </div>
  
          <button
            type="submit"
            className="mt-6 w-full flex justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
          >
            {hotelId ? 'Update Hotel' : 'Add Hotel'}
          </button>
        </form>
  
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Existing Hotels</h3>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md">
          {hotels.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400">No hotels available.</p>
          ) : (
            <ul className="space-y-4">
              {hotels.map((hotel) => (
                <li key={hotel._id} className="flex justify-between items-center bg-gray-200 dark:bg-gray-700 rounded-lg p-4">
                  <div className="text-gray-900 dark:text-gray-300">
                    <h4 className="text-lg font-semibold">{hotel.hotelName}</h4>
                    <p>{hotel.location} - ${hotel.price} per night</p>
                    <p className="text-sm">{hotel.description}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(hotel)}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(hotel._id)}
                      className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
  
}

export default ManageHotels;
