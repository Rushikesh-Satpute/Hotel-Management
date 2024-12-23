import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from "axios";

export default function MyForm(props) {
  const [isError, setError] = useState(false);
  const [getPinError, setPinError] = useState(false);
  const [getAdhar, setAdhar] = useState(false);
  const [getAccountType, setAccountType] = useState("Customer");

  // State variables for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    adharNumber: '',
    birthday: '',
    state: '',
    city: '',
    pincode: '',
    accountType:''
  });
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    const { value, name, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post("http://localhost:5000/api/users/register", formData);

    if (data.data.success) {
      showSuccessToast();
      setFormData({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        adharNumber: '',
        birthday: '',
        state: '',
        city: '',
        pincode: '',
        accountType: '',
      });
    }
  };

  const statesOfIndia = [
    "Choose a State", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  const showSuccessToast = () => {
    alert("Data saved successfully.");
    navigate('/Book');
  };

  const handleClick = () => {
    navigate('/');
  };

  const changeState = (e) => {
    e.preventDefault();
    setAccountType((prev) => (prev === "Customer" ? "Hotel" : "Customer"));
  };

  const validate = (evt) => {
    const regex = /[^0-9]/;
    let val = evt.target.value;
    if (regex.test(val) || val.length > 10) {
      evt.target.value = evt.target.value.substr(0, val.length - 1);
      setError(true);
    } else {
      if (isError === true) setError(false);
    }
  };

  const validateAdhar = (evt) => {
    const regex = /[^0-9]/;
    let val2 = evt.target.value;
    if (regex.test(val2) || val2.length > 12) {
      evt.target.value = val2.substr(0, val2.length - 1);
      setAdhar(true);
    } else {
      if (getAdhar === true) setAdhar(false);
    }
  };

  const validatePin = (evt) => {
    const regex = /[^0-9]/;
    let val1 = evt.target.value;
    if (regex.test(val1) || val1.length > 6) {
      evt.target.value = val1.substr(0, val1.length - 1);
      setPinError(true);
    } else {
      if (getPinError === true) setPinError(false);
    }
  };

 

  return (
    <div className="md:flex h-[92vh] items-center bg-cover bg-center">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden p-4 lg:p-0 bg-white dark:bg-gray-900 rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-6xl">
        <div className="hidden bg-cover lg:block lg:w-1/2" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')" }}></div>
        <div className="flex items-center w-full max-w-3xl py-10 mx-auto lg:px-12 lg:w-3/5">
          <div className="w-full">
            <h1 className="text-2xl font-semibold tracking-wider text-gray-800 dark:text-white">
              <div className='flex'>
                {props.title}
                <div className='ms-auto'></div>
                <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" className=" w-6 h-6 hover:bg-slate-200 hover:dark:bg-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <p className="w-14 h-1 mt-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </h1>

            {/* <div className="mt-4">
              <p className="text-gray-500 dark:text-gray-400">Select type of account</p>
              <div className="mt-3 md:flex md:items-center md:-mx-2">
                <button onClick={() => setAccountType("Customer")} className={`flex justify-center w-full px-6 py-3 rounded-lg md:w-auto md:mx-2 focus:outline-none ${accountType === "Customer" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-600 hover:bg-gray-400"}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="mx-2">User</span>
                </button>

                <button onClick={changeState} className={`flex justify-center w-full px-6 py-3 mt-4 rounded-lg md:mt-0 md:w-auto md:mx-2 focus:outline-none ${accountType === "Hotel" ? "bg-blue-500 text-white" : "text-blue-500 border border-blue-500 hover:bg-blue-100"}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="mx-2">Admin</span>
                </button>
              </div>
            </div> */}

            <form onSubmit={handlesubmit} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
              <input type="hidden" onChange={handleOnChange} id="accountType" name="accountType" value={getAccountType} />
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                <input type="text" id="firstName" name="firstName"  onChange={handleOnChange} placeholder="John" className="block w-full px-5 py-3 mt-2 text-white placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last Name</label>
                <input type="text" id="lastName" name="lastName" onChange={handleOnChange}  placeholder="Doe" className="block w-full px-5 py-3 mt-2 text-white placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Phone Number</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" onChange={handleOnChange}  onInput={validate} placeholder="Enter Phone Number" className={`block w-full px-5 py-3 mt-2 text-white placeholder-gray-400 bg-white border ${isError ? "border-red-500" : "border-gray-200"} rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`} />
                {isError && <p className="text-red-500 text-sm">Invalid phone number</p>}
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Adhar Number</label>
                <input type="text" id="adharNumber" name="adharNumber" onChange={handleOnChange} onInput={validateAdhar} placeholder="Enter Adhar Number" className={`block w-full px-5 py-3 mt-2 text-white placeholder-gray-400 bg-white border ${getAdhar ? "border-red-500" : "border-gray-200"} rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`} />
                {getAdhar && <p className="text-red-500 text-sm">Invalid Adhar number</p>}
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Birthday</label>
                <input type="date" name="birthday" id="birthday" onChange={handleOnChange} className="block w-full px-5 py-3 mt-2 text-white placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">State</label>
                <select name="state" id="state" onChange={handleOnChange} className="block w-full px-5 py-3 mt-2 text-white placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  {statesOfIndia.map((state, index) => (
                    <option key={index} value={state}>{state}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">City</label>
                <input type="text" id="city" name="city" onChange={handleOnChange} placeholder="Enter City" className="block w-full px-5 py-3 mt-2 text-white placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Pincode</label>
                <input type="text" id="pincode" name="pincode" onChange={handleOnChange} onInput={validatePin} placeholder="Enter Pincode" className={`block w-full px-5 py-3 mt-2 text-white placeholder-gray-400 bg-white border ${getPinError ? "border-red-500" : "border-gray-200"} rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`} />
                {getPinError && <p className="text-red-500 text-sm">Invalid Pincode</p>}
              </div>
              <div className="md:flex md:items-center md:justify-between md:gap-4">
                <button type="submit" className="flex justify-center w-full px-6 py-3 mt-6 text-lg font-semibold text-white bg-blue-500 rounded-lg md:w-auto hover:bg-blue-600 focus:outline-none">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
