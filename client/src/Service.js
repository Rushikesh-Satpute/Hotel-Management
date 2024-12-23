import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Service = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-slate-900">
            <HeroSection />
            <Testimonials />
            <Footer />
        </div>
    );
};


const HeroSection = () => {
return(
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/bg.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60"></div>
        <div className="relative flex flex-col items-center justify-center h-full text-white p-4 space-y-4">
        <ModelsSection />
        </div>
    </div>
)
};

const ModelsSection = () => (
    <div className="flex flex-col items-center justify-center p-6 space-y-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Select an Option</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {modelsData.map((model, index) => (
                <a
                    key={index}
                    href={model.onClick}
                    className="bg-white text-center dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-100 dark:hover:bg-gray-700 block"
                >
                    <img src={model.icon} alt={model.title} className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{model.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{model.desc}</p>
                </a>
            ))}
        </div>
    </div>
);

const Testimonials = () => (
    <div className="my-10 px-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-6">What Our Guests Say</h2>
        <Carousel
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            interval={3000}
            transitionTime={500}
        >
            {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-4">
                    <p className="italic text-gray-600 dark:text-gray-300">{testimonial.text}</p>
                    <p className="font-bold text-right mt-4">{testimonial.author}</p>
                </div>
            ))}
        </Carousel>
    </div>
);

const Footer = () => (
    <footer className="bg-gray-800 text-white py-6">
        <div className="text-center space-y-2">
            <p>&copy; {new Date().getFullYear()} Our Hotel. All rights reserved.</p>
            <p>
                For inquiries, contact us at{' '}
                <a href="mailto:info@rushikeshsatpute.com" className="text-blue-400 hover:underline">
                    info@rushikeshsatpute.com
                </a>
            </p>
        </div>
    </footer>
);

const modelsData = [
    {
        icon: "light_register.svg",
        title: "User Registration",
        desc: "Sign up for exclusive services.",
        onClick: "/Register",
    },
    {
        icon: "booking.png",
        title: "Room Booking",
        desc: "Book your room online easily.",
        onClick: "/Book",
    },
    {
        icon: "hotelmng.png",
        title: "Hotel Management",
        desc: "Add or update hotel information.",
        onClick: "/manage_hotels",
    },
    {
        icon: "contact.png",
        title: "Contact Us",
        desc: "Get in touch for support.",
        onClick: "/contact",
    },
    {
        icon: "service.png",
        title: "About Us",
        desc: "Discover our hotel and services.",
        onClick: "/about",
    },
    {
        icon: "more.png",
        title: "Bookings",
        desc: "Show all bookings.",
        onClick: "/bookings",
    },
];



const testimonials = [
    {
        text: "The best hotel experience I've ever had! The staff was friendly, and the service was impeccable.",
        author: "Jane D.",
    },
    {
        text: "An exceptional stay with luxurious amenities. Highly recommend to anyone looking for comfort!",
        author: "John S.",
    },
    {
        text: "Absolutely stunning! The ambiance and service made it a memorable trip.",
        author: "Sarah W.",
    },
];

export default Service;
