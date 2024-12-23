import React from "react";
import {
  FaTachometerAlt,
  FaBed,
  FaFileInvoice,
  FaChartLine,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";

const Footer = ({ isAuthenticated, onLogout }) => {
  const navigationLinks = [
    { name: "Dashboard", icon: <FaTachometerAlt />, href: "/dashboard" },
    { name: "Check-In", icon: <FaBed />, href: "/checkin" },
    { name: "Check-Out", icon: <FaBed />, href: "/checkout" },
    { name: "Reservations", icon: <FaFileInvoice />, href: "/reservations" },
    { name: "Reports", icon: <FaChartLine />, href: "/reports" },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, href: "https://facebook.com", title: "Facebook" },
    { icon: <FaTwitter />, href: "https://twitter.com", title: "Twitter" },
    { icon: <FaInstagram />, href: "https://instagram.com", title: "Instagram" },
    { icon: <FaLinkedin />, href: "https://linkedin.com", title: "LinkedIn" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-700 dark:text-gray-300 py-12">
      <div className="container mx-auto px-6">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Hotel Management</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Simplifying hotel operations with seamless check-in, reservation, and report management tools for receptionists.
            </p>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl transition-transform duration-300 transform hover:scale-110"
                  title={link.title}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {link.icon}
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaPhoneAlt />
                <span>+91 7856247890</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope />
                <a
                  href="mailto:support@hotelmanagement.com"
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  support@hotelmanagement.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Subscribe to Our Newsletter</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Stay updated with the latest news and offers.
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 dark:hover:bg-blue-400 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-300 dark:border-gray-700 pt-4 text-center text-sm">
          {isAuthenticated ? (
            <button
              onClick={onLogout}
              className="text-gray-800 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition-colors"
            >
              <FaSignOutAlt className="inline-block mr-2" />
              Logout
            </button>
          ) : (
            <a
              href="/login"
              className="text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              <FaSignInAlt className="inline-block mr-2" />
              Login
            </a>
          )}
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Rushikesh Satpute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
