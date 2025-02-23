# Hotel Management System

A full-stack web application for managing hotel rooms, customers, and bookings. This project provides features for CRUD operations, real-time check-ins and check-outs, and dynamic room pricing.

## Features

- **Room Management**: Add, update, and delete room details.
- **Customer Management**: Handle customer information and their bookings.
- **Booking System**:
  - Allocate rooms based on availability.
  - Efficiently manage check-ins and check-outs.
- **Dynamic Pricing**:
  - Calculate room prices based on addons, number of guests, and other parameters.
- **Responsive UI**: Built using React and Tailwind CSS for a seamless user experience.
- **Secure Backend**: Developed with Node.js, Express.js, and MongoDB for robust and secure data handling.

## Tech Stack

### Frontend
- React
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB

## Installation

Follow the steps below to run the application locally.

### Prerequisites
- Node.js (v14 or above)
- MongoDB
- npm or yarn

### Steps

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd hotel-management-system
   ```

2. **Install dependencies**:
   ```bash
   # For both backend and frontend
   cd client
   npm install

   cd ../server
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the `server` directory and add the following:
   ```env
   MONGO_URI=<your-mongodb-connection-string>
   PORT=5000
   ```

4. **Run the application**:
   - Start the backend server:
     ```bash
     cd server
     npm start
     ```
   - Start the frontend application:
     ```bash
     cd client
     npm start
     ```

5. **Access the application**:
   Open your browser and navigate to `http://localhost:3000`.

## Screenshots

<<<<<<< HEAD
### Home
![Home](https://github.com/Rushikesh-Satpute/Hotel-Management/images/img1.png)

### Room Booking
![Register user](https://github.com/Rushikesh-Satpute/Hotel-Management/images/img2.png)
=======
![Home](https://github.com/Rushikesh-Satpute/Hotel-Management/images/img1.png)

![Book Hotel](https://github.com/Rushikesh-Satpute/Hotel-Management/images/img2.png)

![Register user](https://github.com/Rushikesh-Satpute/Hotel-Management/images/img1.png)

![Book Room](https://github.com/Rushikesh-Satpute/Hotel-Management/images/img1.png)

### Dashboard
[Add a screenshot of the dashboard here.]
>>>>>>> 28dc63d660dab481a49fa3561fb94ede3142332f

### Room Management
![Book Management](https://github.com/Rushikesh-Satpute/Hotel-Management/images/img5.png)

### Booking System
![Book Room](https://github.com/Rushikesh-Satpute/Hotel-Management/images/img4.png)

### Register Guest
![Register user](https://github.com/Rushikesh-Satpute/Hotel-Management/images/img3.png)

## Live Demo
[Hotel Management System Live](your-deployed-site-link)

## Folder Structure
```
hotel-management-system
├── client           # Frontend code (React)
├── server           # Backend code (Node.js, Express.js)
├── README.md        # Project documentation
```

## Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Commit your changes and push them to your fork.
4. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For questions or feedback, contact:
- **Name**: Rushikesh Satpute
- **Email**: Rushikeshsatpute3558@gmail.com
- **GitHub**: [Rushikesh-Satpute](https://github.com/Rushikesh-Satpute)
