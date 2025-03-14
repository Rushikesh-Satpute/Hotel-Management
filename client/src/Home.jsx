import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const redirect = (key) => {
    switch (key) {
      case 1:
        navigate('/Register')
        break;
      case 2:
        navigate('/Book')
        break;
      case 3:
        navigate('/manage_hotels');
        break;
      case 4:
        navigate('/bookings');
        break;
      default:
        break;
    }
  };
  return (
    <section className="relative min-h-screen">
      {/* Header Section */}
      <div className="container mx-auto px-6 pt-8 pb-2 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white lg:text-6xl">
          Welcome to Hotel Reception
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Effortlessly manage your hotel operations with our advanced dashboard.
        </p>
      </div>

      {/* Dashboard Features Section */}
      <div className="container mx-auto max-w-3xl text-center px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">

        {/* Feature 1: Guest Registration */}
        <div onClick={() => redirect(1)} className="bg-white border dark:border-0 dark:bg-gray-800 rounded-lg shadow-lg px-4 py-8 transform transition hover:scale-105">
          <div className="flex justify-center items-center h-16 w-16 bg-teal-100 dark:bg-teal-600 rounded-full mx-auto">

            <svg className="w-8 h-8 text-teal-600 dark:text-white"
              fill="currentColor"
              stroke=""
              xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" id="user">
              <path d="M6 7C6 5.89543 6.89543 5 8 5 9.10457 5 10 5.89543 10 7 10 8.10457 9.10457 9 8 9 6.89543 9 6 8.10457 6 7zM8 6C7.44772 6 7 6.44772 7 7 7 7.55228 7.44772 8 8 8 8.55228 8 9 7.55228 9 7 9 6.44772 8.55228 6 8 6zM5.6952 10C5.36398 10 5.00445 10.2376 4.97432 10.6569 4.9517 10.9715 4.97959 11.5787 5.43412 12.1095 5.89642 12.6495 6.70398 13 8 13 9.29602 13 10.1036 12.6495 10.5659 12.1095 11.0204 11.5787 11.0483 10.9715 11.0257 10.6569 10.9956 10.2376 10.636 10 10.3048 10H5.6952zM6.19371 11.4591C6.06795 11.3123 6.00856 11.1482 5.98385 11H10.0162C9.99145 11.1482 9.93205 11.3123 9.8063 11.4591 9.60217 11.6975 9.12822 12 8 12 6.87178 12 6.39784 11.6975 6.19371 11.4591z"></path>
              <path d="M10.9146 2H11.5C12.3284 2 13 2.67157 13 3.5V13.5C13 14.3284 12.3284 15 11.5 15H4.5C3.67157 15 3 14.3284 3 13.5V3.5C3 2.67157 3.67157 2 4.5 2H5.08535C5.29127 1.4174 5.84689 1 6.5 1H9.5C10.1531 1 10.7087 1.4174 10.9146 2ZM5.08535 3H4.5C4.22386 3 4 3.22386 4 3.5V13.5C4 13.7761 4.22386 14 4.5 14H11.5C11.7761 14 12 13.7761 12 13.5V3.5C12 3.22386 11.7761 3 11.5 3H10.9146C10.7087 3.5826 10.1531 4 9.5 4H6.5C5.84689 4 5.29127 3.5826 5.08535 3ZM6 2.5C6 2.77614 6.22386 3 6.5 3H9.5C9.77614 3 10 2.77614 10 2.5C10 2.22386 9.77614 2 9.5 2H6.5C6.22386 2 6 2.22386 6 2.5Z"></path>
            </svg>
          </div>
          <h3 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
            Guest Registration
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Add new Guest, make entry in hotel
          </p>
        </div>

        {/* Feature 2: Book Room */}
        <div onClick={() => redirect(2)} className="bg-white border dark:border-0 dark:bg-gray-800 rounded-lg shadow-lg px-4 py-8 transform transition hover:scale-105">
          <div className="flex justify-center items-center h-16 w-16 bg-yellow-200 dark:bg-yellow-600 rounded-full mx-auto">
            <svg
              className="text-yellow-600 dark:text-white"
              fill="none"
              height={24}
              width={24}
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M3 21H5M5 21H10M5 21V3M10 21H14M10 21V16L8 16C10 13.3333 14 13.3333 16 16L14 16V21M14 21H19M19 21H21M19 21V3M3 3H5M5 3H19M19 3H21M9 6.5H10M14 6.5H15M9 10.5H10M14 10.5H15"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </div>
          <h3 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
            Room Booking
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Book your room online easily.
          </p>
        </div>

        {/* Feature 3: Room Management */}
        <div onClick={() => redirect(3)} className="bg-white border dark:border-0 dark:bg-gray-800 rounded-lg shadow-lg px-4 py-8 transform transition hover:scale-105">
          <div className="flex justify-center items-center h-16 w-16 bg-indigo-100 dark:bg-indigo-600 rounded-full mx-auto">
            <svg
              className="text-indigo-600 dark:text-white"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" clipRule="evenodd" id="room-door">
              <path d="M385,42L385,22C385,21.448 385.448,21 386,21L398,21C398.552,21 399,21.448 399,22L399,42C399,42 400.5,42 400.5,42C400.633,42 400.76,42.053 400.854,42.146C400.947,42.24 401,42.367 401,42.5C401,42.633 400.947,42.76 400.854,42.854C400.76,42.947 400.633,43 400.5,43L383.5,43C383.367,43 383.24,42.947 383.146,42.854C383.053,42.76 383,42.633 383,42.5C383,42.367 383.053,42.24 383.146,42.146C383.24,42.053 383.367,42 383.5,42L385,42ZM398,22L386,22L386,42L398,42L398,22ZM389.914,33C389.708,33.582 389.153,34 388.5,34C387.672,34 387,33.328 387,32.5C387,31.672 387.672,31 388.5,31C389.153,31 389.709,31.418 389.915,32L391.5,32C391.633,32 391.76,32.053 391.854,32.147C391.947,32.24 392,32.368 392,32.5C392,32.633 391.947,32.76 391.854,32.854C391.76,32.948 391.633,33 391.5,33L389.914,33ZM388.5,32C388.776,32 389,32.224 389,32.5C389,32.776 388.776,33 388.5,33C388.224,33 388,32.776 388,32.5C388,32.224 388.224,32 388.5,32Z" transform="translate(-380 -20)"></path>
            </svg>
          </div>
          <h3 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
            Room Management
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Add or update hotel information.
          </p>
        </div>

        {/* Feature 3: View Bookings */}
        <div onClick={() => redirect(4)} className="bg-white border dark:border-0 dark:bg-gray-800 rounded-lg shadow-lg px-4 py-8 transform transition hover:scale-105">
          <div className="flex justify-center items-center h-16 w-16 bg-green-100 dark:bg-green-600 rounded-full mx-auto">

            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-600 dark:text-white"
              fill="currentColor"
              stroke="currentColor"
              viewBox="0 0 512 512" id="reports">
              <path d="m285.79,116.41c-4.88-4.88-4.88-12.8,0-17.68l31.39-31.39c4.88-4.88,12.8-4.88,17.68,0l31.39,31.39c4.88,4.88,4.88,12.8,0,17.68-2.44,2.44-5.64,3.66-8.84,3.66s-6.4-1.22-8.84-3.66l-10.05-10.05v48.43c0,6.9-5.6,12.5-12.5,12.5s-12.5-5.6-12.5-12.5v-48.43l-10.05,10.05c-4.88,4.88-12.8,4.88-17.68,0Zm38.24,93.31c0,6.9,5.6,12.5,12.5,12.5h42.86c6.9,0,12.5-5.6,12.5-12.5s-5.6-12.5-12.5-12.5h-42.86c-6.9,0-12.5,5.6-12.5,12.5Zm55.36,35.04h-42.86c-6.9,0-12.5,5.6-12.5,12.5s5.6,12.5,12.5,12.5h42.86c6.9,0,12.5-5.6,12.5-12.5s-5.6-12.5-12.5-12.5Zm-227.1-27.81l10.05-10.05v48.43c0,6.9,5.6,12.5,12.5,12.5s12.5-5.6,12.5-12.5v-48.43l10.05,10.05c2.44,2.44,5.64,3.66,8.84,3.66s6.4-1.22,8.84-3.66c4.88-4.88,4.88-12.8,0-17.68l-31.39-31.39c-4.88-4.88-12.8-4.88-17.68,0l-31.39,31.39c-4.88,4.88-4.88,12.8,0,17.68,4.88,4.88,12.8,4.88,17.68,0Zm75.91,80.81h-106.72c-6.9,0-12.5,5.6-12.5,12.5s5.6,12.5,12.5,12.5h106.72c6.9,0,12.5-5.6,12.5-12.5s-5.6-12.5-12.5-12.5Zm0,47.54h-106.72c-6.9,0-12.5,5.6-12.5,12.5s5.6,12.5,12.5,12.5h106.72c6.9,0,12.5-5.6,12.5-12.5s-5.6-12.5-12.5-12.5Zm233.16,43.67c0,57.89-47.1,104.99-104.99,104.99-35.31,0-66.61-17.53-85.65-44.34-4.44,1.58-9.22,2.45-14.2,2.45H93.14c-23.43,0-42.5-19.06-42.5-42.5v-248.48c0-23.43,19.07-42.5,42.5-42.5h108.69v-58.03c0-23.44,19.06-42.5,42.5-42.5h163.38c23.43,0,42.5,19.06,42.5,42.5v248.47c0,8.11-2.29,15.69-6.24,22.14,10.98,16.59,17.39,36.46,17.39,57.8ZM226.83,118.58h29.69c23.44,0,42.5,19.07,42.5,42.5v139.99c16.5-10.8,36.2-17.09,57.35-17.09,26.3,0,50.36,9.72,68.8,25.75,0-.24.04-.47.04-.71V60.55c0-9.65-7.86-17.5-17.5-17.5h-163.38c-9.65,0-17.5,7.85-17.5,17.5v58.03Zm31.66,308.37c-4.59-11.79-7.11-24.59-7.11-37.98,0-24.55,8.47-47.15,22.64-65.05v-162.83c0-9.64-7.85-17.5-17.5-17.5H93.14c-9.65,0-17.5,7.86-17.5,17.5v248.48c0,9.65,7.85,17.5,17.5,17.5h163.38c.67,0,1.33-.04,1.97-.11Zm177.86-37.98c0-44.11-35.88-79.99-79.99-79.99s-79.99,35.88-79.99,79.99,35.88,79.99,79.99,79.99,79.99-35.88,79.99-79.99Zm-71.15-52.35c-4.88-4.88-12.8-4.88-17.68,0l-34.75,34.75c-4.88,4.88-4.88,12.8,0,17.68,4.88,4.88,12.8,4.88,17.68,0l13.41-13.41v56.85c0,6.9,5.6,12.5,12.5,12.5s12.5-5.6,12.5-12.5v-56.85l13.41,13.41c2.44,2.44,5.64,3.66,8.84,3.66s6.4-1.22,8.84-3.66c4.88-4.88,4.88-12.8,0-17.68l-34.75-34.75Z"></path>
            </svg>
          </div>
          <h3 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
            View Bookings
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Access room booking with detailed information.
          </p>
        </div>

        {/* Feature 4: Staff Management
        <div onClick={() => redirect(3)} className="bg-white border dark:border-0 dark:bg-gray-800 rounded-lg shadow-lg p-4 transform transition hover:scale-105">
          <div className="flex justify-center items-center h-16 w-16 bg-sky-100 dark:bg-sky-600 rounded-full mx-auto">

            <svg className="w-8 h-8 text-sky-600 dark:text-white"
              fill="currentColor"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="staff-setting">
              <path d="M61.8,42.88H60.71a10.33,10.33,0,0,0-.84-2l.77-.77a1.09,1.09,0,0,0,0-1.53L58.4,36.31a1.1,1.1,0,0,0-1.53,0l-.77.77a9.25,9.25,0,0,0-2-.84V35.16A1.08,1.08,0,0,0,53,34.08H49.83a1.08,1.08,0,0,0-1.08,1.08v1.09a9.25,9.25,0,0,0-2,.84L46,36.32a1.09,1.09,0,0,0-1.53,0l-2.24,2.24a1.07,1.07,0,0,0,0,1.52l.77.77a10.32,10.32,0,0,0-.48,1l-3.65-1.33-1.45-2.1V34.2l.16-.16a7,7,0,0,0,1.61-3.91l.07-.7h0c1.21-.42,1.81-2.38,2.09-4,.16-.87.55-3.52-.27-4.88A3.11,3.11,0,0,1,42.47,18a1,1,0,0,0,.45-.84c-.12-8.11-2-12.54-5.77-13.53-7-7.2-21-1.6-21.59-1.36A1,1,0,0,0,15,3a1,1,0,0,0,.31.89l.45.39c-3,2.41-4.56,6.64-4.55,12.62a1,1,0,0,0,.29.7,5.9,5.9,0,0,1,1.4,3.26c-.72,1.27-.4,3.55-.2,4.57.24,1.29.86,3.51,2.17,4l.05,0,.07.68A6.94,6.94,0,0,0,16.57,34c.17.2.36.4.56.6v3.31a1.75,1.75,0,0,0-.23.24l-1.63,2.35L6.2,43.83l-.14,0a6.73,6.73,0,0,0-4.17,6l-.77,13a1,1,0,0,0,.27.73,1,1,0,0,0,.7.3L27,64H51.41a1,1,0,0,0,1-1V57H53a1.08,1.08,0,0,0,1.08-1.08V54.84a9.25,9.25,0,0,0,2-.84l.77.78a1.1,1.1,0,0,0,1.53,0l2.23-2.23a1.06,1.06,0,0,0,.32-.77,1.18,1.18,0,0,0-.31-.76l-.77-.77a10.59,10.59,0,0,0,.84-2H61.8a1.09,1.09,0,0,0,1.08-1.08V44A1.09,1.09,0,0,0,61.8,42.88ZM19.07,36.3a26.5,26.5,0,0,0,3.42,2.14,3.39,3.39,0,0,0,1.55.39h6a3.32,3.32,0,0,0,1.54-.39A26.67,26.67,0,0,0,35.43,36V37.9l-.09.07-.1.1-.41.52-7.77,7.85-7.69-7.92-.3-.27Zm14.11,15-4.67-3.6L36.13,40l1.08,1.57-2.5,6Zm5.16-23,.64-.72h0ZM17.8,5.25a1,1,0,0,0,.47-.74,1,1,0,0,0-.33-.82l-.14-.13C21.52,2.37,31.13,0,35.93,5.19a1.05,1.05,0,0,0,.52.3c2.83.58,4.35,4.36,4.52,11.22a4.84,4.84,0,0,0-1.7,2.86c0-.24,0-.47-.06-.7s0-.45-.05-.66-.08-.51-.12-.76,0-.41-.09-.61-.12-.46-.18-.69a4.42,4.42,0,0,0-.14-.55c-.07-.23-.15-.43-.23-.65s-.12-.33-.19-.49-.2-.4-.3-.59-.14-.29-.22-.43-.26-.38-.39-.57-.15-.24-.24-.35a7,7,0,0,0-.52-.57c-.07-.08-.14-.17-.22-.25a8.3,8.3,0,0,0-.85-.72,1,1,0,0,0-1.07-.06S31.07,12.81,24.52,12a10.68,10.68,0,0,0-3.11.05c-2.77.47-6.05,2.22-6.46,7.77h-.3a7.51,7.51,0,0,0-1.53-3.3C13.18,10.85,14.75,7.05,17.8,5.25Zm-1.07,23a1,1,0,0,0-.61-.78.92.92,0,0,0-.36-.07,1.15,1.15,0,0,0-.37.06,7.42,7.42,0,0,1-.9-2.82,5.87,5.87,0,0,1,0-2.75l.09-.08a2.82,2.82,0,0,1,1,.07,1,1,0,0,0,1.2-.94c0-4.18,1.58-6.39,4.88-7a8.36,8.36,0,0,1,2.56,0c5.61.67,9.12-.48,10.47-1.07,1.78,1.59,2.59,4,2.59,7.77a1,1,0,0,0,.86,1l1.29.15a10.42,10.42,0,0,1-.81,5.68,1,1,0,0,0-1.32.81l-.16,1.68a5.17,5.17,0,0,1-1.16,2.84,11.09,11.09,0,0,1-1.14,1.13,22.55,22.55,0,0,1-4.22,2.82,1.37,1.37,0,0,1-.63.16H24a1.44,1.44,0,0,1-.64-.16,23.61,23.61,0,0,1-4.06-2.68,11.16,11.16,0,0,1-1.29-1.28,5,5,0,0,1-1.16-2.83ZM18,39.94l7.56,7.78-.22.17,0,0h0l-4.43,3.4-2.52-6-1.52-3.67ZM3.83,50a4.83,4.83,0,0,1,2.83-4.31l.14,0,8.4-3.06,1.52,3.67,2.54,6.1a1.65,1.65,0,0,0,.76.86h0l.25.1.1,0h.09a1.54,1.54,0,0,0,.3,0h.1a2.2,2.2,0,0,0,.37-.06l.13,0a1.86,1.86,0,0,0,.41-.23l1-.76,3.29-2.53V62H12v-3.6a1,1,0,0,0-1.94,0V62H3.12Zm46.61,12h-7V58.44a1,1,0,0,0-1.93,0v3.61H28V49.78L32.19,53l.13.1h0a1.47,1.47,0,0,0,.41.22l.11,0a1.76,1.76,0,0,0,.39.06h.08a1.27,1.27,0,0,0,.34-.05h.06a1.66,1.66,0,0,0,.31-.12l0,0a1.65,1.65,0,0,0,.76-.86l1.77-4.25,2.29-5.52,1.44.53a1,1,0,0,0-.4.81v3.17A1.09,1.09,0,0,0,41,48.21h1.09a10.59,10.59,0,0,0,.84,2l-.77.77a1.09,1.09,0,0,0,0,1.53l2.24,2.24a1.1,1.1,0,0,0,1.53,0l.77-.77a9.25,9.25,0,0,0,2,.84v1.09A1.08,1.08,0,0,0,49.83,57h.61Zm10.5-15.79H60a1.07,1.07,0,0,0-1.05.86,7.72,7.72,0,0,1-1.1,2.65A1.07,1.07,0,0,0,58,51.13l.64.64-1,1L57,52.15A1.12,1.12,0,0,0,55.64,52,7.72,7.72,0,0,1,53,53.11a1.09,1.09,0,0,0-.86,1.06v.9H50.69v-.9a1.09,1.09,0,0,0-.86-1.06A7.72,7.72,0,0,1,47.18,52a1.12,1.12,0,0,0-1.36.14l-.64.64-1-1,.64-.64a1.07,1.07,0,0,0,.14-1.35,7.69,7.69,0,0,1-1.1-2.66,1.07,1.07,0,0,0-1.05-.85h-.91V44.82h.91A1.07,1.07,0,0,0,43.84,44a7.72,7.72,0,0,1,1.1-2.65A1.07,1.07,0,0,0,44.8,40l-.64-.64,1-1,.64.64a1.09,1.09,0,0,0,1.36.13A7.73,7.73,0,0,1,49.82,38a1.09,1.09,0,0,0,.87-1.06V36h1.44v.9A1.09,1.09,0,0,0,53,38a7.7,7.7,0,0,1,2.65,1.09A1.09,1.09,0,0,0,57,38.94l.64-.64,1,1L58,40a1.07,1.07,0,0,0-.14,1.35A7.51,7.51,0,0,1,59,44a1.09,1.09,0,0,0,1.06.86h.91Z"></path>
              <path d="M51.41,38.89a6.66,6.66,0,1,0,6.65,6.66A6.66,6.66,0,0,0,51.41,38.89Zm0,11.37a4.72,4.72,0,1,1,4.71-4.71A4.72,4.72,0,0,1,51.41,50.26Z"></path>
            </svg>
          </div>
          <h3 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
            Staff Management
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Organize schedules and optimize workforce operations.
          </p>
        </div> */}
      </div>
    </section >
  );
}

export default Home;
