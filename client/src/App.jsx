import "./App.css";
import MyForm from "./MyForm";
import Navbar from "./Navbar"
import Footer from "./Footer"
import { useState, useEffect } from "react";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import BookHotel from "./BookHotel";
import ManageHotels from "./ManageHotels";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import BookingList from "./BookingList";
import BookingPage from "./HotelBookingPage";

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const handleLogout = () => {
    setIsAuthenticated(false);
    alert("You have been logged out.");
  };
  const [getTheme, setTheme] = useState(localStorage.getItem('theme') || 'Light');

  useEffect(() => {
    document.body.classList.toggle('dark', getTheme === 'Dark');
    localStorage.setItem('theme', getTheme);
  }, [getTheme])

  const onToggle = () => {
    setTheme(getTheme === 'Dark' ? 'Light' : 'Dark');
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === "Dark") {
      setTheme("Dark");
    }
  }, []);

  return (
    <>
      <Router>
        <div className="bg-cover bg-center dark:bg-[url('./bg.jpg')] bg-[url('./bg.jpg')]">
          <div className="flex w-screen absolute justify-center dark:hidden">
            <picture>
              <source srcSet="https://tailwindcss.com/_next/static/media/docs@30.8b9a76a2.avif" type="image/avif" />
              <img src="https://tailwindcss.com/_next/static/media/docs@tinypng.d9e4dcdc.png" alt="" className="w-[71.75rem] absolute max-w-none dark:hidden" decoding="async" />
            </picture>
          </div>
          <Navbar title="Hotel Management" theme={getTheme} toggle={onToggle} />
          <Routes>
            <Route path="/" element={<Home theme={getTheme} />} />
            <Route path="/Register" element={<MyForm title="Customer Registration" />} />
            <Route path="/Book" element={<BookHotel />} />
            <Route path="*" element={<><div className="flex flex-col dark:text-white dark:bg-slate-900 h-screen w-full p-8"><h1 className="text-4xl">404 - Page Not Found</h1><h2>Something happended page not found.</h2></div></>} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/manage_hotels" element={<ManageHotels />} />
            <Route path="/services" element={<Service />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/bookings" element={<BookingList />} />
           
          </Routes>
          <Footer isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        </div>
      </Router>
    </>
  );
}

export default App;