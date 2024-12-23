import React from 'react';
import { useNavigate } from 'react-router-dom';

function CartModel(props) {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleBooking = () => {
    // Pass the room details as state
    navigate('/booking', {
      state: {
        title: props.title,
        description: props.description,
        price: props.price,
        imageUrl: props.imageUrl,
      },
    });
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white pb-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="h-56 w-full">
        <a href="#">
          <img className="mx-auto rounded-t-lg h-full w-auto dark:hidden" src={props.imageUrl} alt={props.title} />
          <img className="mx-auto rounded-t-lg bg-cover hidden h-full w-full dark:block" src={props.imageUrl} alt={props.title} />
        </a>
      </div>
      <div className="pt-6 px-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">Up to 35% off</span>
          <div className="flex items-center justify-end gap-1">
            <button type="button" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="sr-only">View Details</span>
              <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </button>

            <button type="button" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="sr-only">Add to Wishlist</span>
              <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z" />
              </svg>
            </button>
          </div>
        </div>

        <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">{props.title}</a>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{props.description}</p>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 dark:text-white">₹{props.price}</span>
          <button
            type="button"
            onClick={handleBooking} // Add the click handler here
            className="rounded-lg bg-primary-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600"
          >
            Book
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartModel;
