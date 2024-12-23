import React from 'react';
import { FaHotel, FaRegSmileBeam, FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center">
            {/* Header Section with Background Image */}
            <header className="relative w-full h-60 bg-cover bg-center" style={{ backgroundImage: "url('https://example.com/hotel-bg.jpg')" }}>
                <div className="absolute inset-0  opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <h1 className="text-4xl font-bold">About Our Hotel</h1>
                    <p className="mt-4 text-gray-300 max-w-xl text-center">
                        Welcome to our luxurious hotel, where comfort meets elegance. Experience a unique blend of modern amenities and traditional hospitality.
                    </p>
                </div>
            </header>

            {/* Features Section */}
            <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl px-4 py-10 bg-transparent">
                {[
                    {
                        icon: <FaHotel className="text-6xl text-blue-500 mb-4" />,
                        title: "Luxury Accommodations",
                        description: "Enjoy spacious rooms with stunning views and top-notch amenities designed for your utmost comfort."
                    },
                    {
                        icon: <FaRegSmileBeam className="text-6xl text-blue-500 mb-4" />,
                        title: "Exceptional Service",
                        description: "Our friendly staff is dedicated to providing personalized service, ensuring your stay is memorable."
                    },
                    {
                        icon: <FaMapMarkerAlt className="text-6xl text-blue-500 mb-4" />,
                        title: "Prime Location",
                        description: "Located in the heart of the city, our hotel offers easy access to popular attractions and local culture."
                    }
                ].map((feature, index) => (
                    <div key={index} className="p-6 bg-gray-800 bg-opacity-80 rounded-lg shadow-lg m-4 transition-transform transform hover:scale-105">
                        {feature.icon}
                        <h2 className="text-2xl font-semibold">{feature.title}</h2>
                        <p className="mt-2 text-gray-400">{feature.description}</p>
                    </div>
                ))}
            </div>

            {/* Testimonials Section */}
            <section className="w-full max-w-6xl px-4 py-10 bg-transparent">
                <h3 className="text-3xl font-bold text-center">What Our Guests Say</h3>
                <div className="flex flex-col lg:flex-row justify-center mt-6 space-y-4 lg:space-y-0 lg:space-x-4">
                    {[
                        {
                            name: "John Doe",
                            review: "The stay was absolutely wonderful! The staff went above and beyond.",
                        },
                        {
                            name: "Jane Smith",
                            review: "Best hotel experience ever! Highly recommend the luxury suite.",
                        },
                        {
                            name: "Mike Johnson",
                            review: "Great location and fantastic service! Will definitely return.",
                        },
                    ].map((testimonial, index) => (
                        <div key={index} className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-md w-full max-w-xs">
                            <p className="text-gray-300 italic">"{testimonial.review}"</p>
                            <p className="mt-4 text-blue-500 font-semibold">{testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="w-full max-w-6xl px-4 py-10 bg-transparent">
                <h3 className="text-3xl font-bold text-center">Frequently Asked Questions</h3>
                <div className="mt-6 space-y-4">
                    {[
                        { question: "What time is check-in?", answer: "Check-in is from 3 PM onwards." },
                        { question: "Is breakfast included?", answer: "Yes, a complimentary breakfast is included with your stay." },
                        { question: "Do you offer airport transfers?", answer: "Yes, we offer airport transfer services upon request." },
                    ].map((faq, index) => (
                        <div key={index} className="bg-gray-800 bg-opacity-80 p-4 rounded-lg">
                            <h4 className="font-semibold text-gray-200">{faq.question}</h4>
                            <p className="text-gray-400">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Us Button */}
            <footer className="mt-10 py-10 text-center bg-transparent">
                <h3 className="text-3xl font-bold">Join Us for a Memorable Experience</h3>
                <p className="mt-4 text-gray-400">Book your stay today and indulge in the finest hospitality. We can't wait to welcome you!</p>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                    Contact Us
                </button>
            </footer>
        </div>
    );
};

export default About;
