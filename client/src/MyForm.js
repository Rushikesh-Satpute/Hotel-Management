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
    const data = await axios.post("https://hotelmng.onrender.com/api/users/register", formData);

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
    <div className="md:flex min-h-[90vh] items-center bg-cover bg-center">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden p-4 lg:p-0 bg-white dark:bg-gray-900 rounded-lg shadow-2xl lg:max-w-6xl">
        <div 
          className="hidden bg-cover lg:block lg:w-1/2" 
          style={{ backgroundImage: "url('bg_img.jpg')" }}
        ></div>
        <div className="flex items-center w-full max-w-3xl py-10 mx-auto lg:px-12 lg:w-3/5">
          <div className="w-full">
            <h1 className="text-2xl font-semibold tracking-wider text-gray-800 dark:text-white">
              <div className='flex'>
                {props.title}
                <div className='ms-auto'></div>
                <svg 
                  onClick={handleClick} 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-6 h-6 cursor-pointer hover:bg-slate-200 hover:dark:bg-gray-700" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <p className="w-14 h-1 mt-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </h1>
  
            <form onSubmit={handlesubmit} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
              <input type="hidden" id="accountType" name="accountType" value={getAccountType} />
              
              {[
                { label: "First Name", id: "firstName", type: "text", placeholder: "John" },
                { label: "Last Name", id: "lastName", type: "text", placeholder: "Doe" },
                { label: "Phone Number", id: "phoneNumber", type: "tel", placeholder: "Enter Phone Number", error: isError, errorMessage: "Invalid phone number", validate: validate },
                { label: "Aadhar Number", id: "adharNumber", type: "text", placeholder: "Enter Aadhar Number", error: getAdhar, errorMessage: "Invalid Aadhar number", validate: validateAdhar },
                { label: "Birthday", id: "birthday", type: "date" },
                { label: "City", id: "city", type: "text", placeholder: "Enter City" },
                { label: "Pincode", id: "pincode", type: "text", placeholder: "Enter Pincode", error: getPinError, errorMessage: "Invalid Pincode", validate: validatePin }
              ].map(({ label, id, type, placeholder, error, errorMessage, validate }) => (
                <div key={id}>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">{label}</label>
                  <input 
                    type={type} 
                    id={id} 
                    name={id} 
                    onChange={handleOnChange} 
                    onInput={validate} 
                    placeholder={placeholder} 
                    className={`block w-full px-5 py-3 mt-2 text-gray-600 dark:text-gray-200 placeholder-gray-400 bg-white border ${error ? "border-red-500" : "border-gray-200"} rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`} 
                  />
                  {error && <p className="text-red-500 text-sm">{errorMessage}</p>}
                </div>
              ))}
              
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">State</label>
                <select 
                  name="state" 
                  id="state" 
                  onChange={handleOnChange} 
                  className="block w-full px-5 py-3 mt-2 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {statesOfIndia.map((state, index) => (
                    <option key={index} value={state}>{state}</option>
                  ))}
                </select>
              </div>
  
              <div className="md:flex md:items-center md:justify-between md:gap-4">
                <button 
                  type="submit" 
                  className="flex justify-center w-full px-6 py-3 mt-4 text-white bg-blue-500 rounded-lg md:mt-0 md:w-auto md:mx-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
