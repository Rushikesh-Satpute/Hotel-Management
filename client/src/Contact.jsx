import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email address is invalid";
        }
        if (!formData.message) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSubmitted(false);
        } else {
            setErrors({});
            setSubmitted(true);
            console.log('Form submitted:', formData);
            // Add your form submission logic here
        }
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center">
            {/* Header Section */}
            <header className="py-10">
                <h1 className="text-4xl font-bold text-center">Contact Us</h1>
                <p className="mt-4 text-gray-400 max-w-xl text-center">
                    We would love to hear from you! Reach out for inquiries, bookings, or any assistance you need.
                </p>
            </header>

            {/* Contact Information Section */}
            <section className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl px-4 py-10">
                <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg m-4 flex-1 transition-transform transform hover:scale-105">
                    <FaMapMarkerAlt className="text-4xl text-blue-500 mr-4" />
                    <div>
                        <h2 className="text-2xl font-semibold">Our Location</h2>
                        <p className="mt-2 text-gray-400">Hadapsar, Pune, Maharashtra 411028</p>
                    </div>
                </div>
                <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg m-4 flex-1 transition-transform transform hover:scale-105">
                    <FaPhoneAlt className="text-4xl text-blue-500 mr-4" />
                    <div>
                        <h2 className="text-2xl font-semibold">Phone</h2>
                        <p className="mt-2 text-gray-400">+91 99600 81250</p>
                    </div>
                </div>
                <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg m-4 flex-1 transition-transform transform hover:scale-105">
                    <FaEnvelope className="text-4xl text-blue-500 mr-4" />
                    <div>
                        <h2 className="text-2xl font-semibold">Email</h2>
                        <p className="mt-2 text-gray-400">info@hotel.com</p>
                    </div>
                </div>
            </section>

            {/* Map Embed Section */}
            <section className="w-full max-w-6xl px-4 py-10">
                <h3 className="text-3xl font-bold text-center">Find Us Here</h3>
                <div className="mt-6">
                    <iframe
                        className="w-full h-64 rounded-lg shadow-lg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509078!2d144.95373531531645!3d-37.81627997975177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f5e6db5%3A0x5045675218ceed9b!2s123%20Hotel%20Avenue%2C%20Melbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1635566848383!5m2!1sen!2sus"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="w-full max-w-6xl px-4 py-10 bg-transparent">
                <h3 className="text-3xl font-bold text-center">Get in Touch</h3>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div className="flex flex-col md:flex-row md:space-x-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`bg-gray-800 bg-opacity-80 text-white p-4 rounded-lg w-full transition duration-300 focus:ring-2 focus:ring-blue-500`}
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`bg-gray-800 bg-opacity-80 text-white p-4 rounded-lg w-full transition duration-300 focus:ring-2 focus:ring-blue-500`}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className={`bg-gray-800 bg-opacity-80 text-white p-4 rounded-lg w-full h-32 transition duration-300 focus:ring-2 focus:ring-blue-500`}
                    />
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 transform hover:scale-105"
                    >
                        Send Message
                    </button>
                </form>
                {submitted && <p className="text-green-500 mt-4 text-center">Your message has been sent successfully!</p>}
            </section>

            {/* Additional Information Section */}
            <section className="w-full max-w-6xl px-4 py-10">
                <h3 className="text-3xl font-bold text-center">Additional Information</h3>
                <p className="mt-4 text-gray-400 text-center">
                    For immediate assistance, please call our customer service. We are available 24/7 to help you.
                </p>
            </section>

            {/* Footer Section */}
            <footer className="mt-10 py-10 text-center bg-transparent">
                <h3 className="text-3xl font-bold">We’re Here to Help</h3>
                <p className="mt-4 text-gray-400">Feel free to reach out with any questions or concerns.</p>
            </footer>
        </div>
    );
};

export default Contact;
