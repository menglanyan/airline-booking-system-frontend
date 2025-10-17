# ✈️ Airline Booking System — Fullstack (Spring Boot + React + MySQL)

A comprehensive airline management platform enabling **flight booking, scheduling, and role-based operations** for customers, pilots, and administrators. Includes automated email notifications for user register and booking.    
The backend is built with **Spring Boot** for scalability and security, while the frontend (React) offers an intuitive and responsive interface — all powered by **MySQL** and **JWT authentication**.

---

## 🧠 Project Overview

### 🧩 Backend — Powered by Spring Boot

**🔹 Database Architecture**  
Designed a relational database in **MySQL** with structured entities for **Users**, **Roles**, **Flights**, **Bookings**, and **Airports**.    
Established **one-to-many** and **many-to-one** relationships to maintain data integrity and ensure efficient lookups for flight and booking datasets.

**🔹 RESTful API Development**  
Developed modular REST endpoints for handling **authentication, user management, bookings, and flight operations**.  
Used a standardized response structure (`Response<T>`) across all endpoints for better API consistency.

**🔹 Security and Authentication**  
Implemented **Spring Security** with **JWT** for stateless authentication.  
Each user is authenticated via token-based and role-based access control restricting access to sensitive endpoints.

**🔹 Role-Based Access Control**  
Three main roles are defined:
- **Customer:** Can search and book flights.
- **Pilot:** Can view assigned flights and update flight status.
- **Admin:** Has full access to manage users, flights, airports, and bookings.

**🔹 Email Notifications**  
Integrated **JavaMailSender** to deliver automated transactional emails, such as:
- Welcome emails after registration
- Booking confirmations

---

### 🎨 Frontend — Built with React

**🔹 Role-Based User Interface**  
Designed an intuitive and responsive interface for different user roles:
- **Customer**: Search and book flights, manage bookings, update personal profile
- **Pilot**: View assigned flights and update flight statuses
- **Admin**: Manage all flights, airports, users, and assign pilot roles

**🔹 Real-Time Flight Search**  
Integrated API-based flight filtering by **airport**, **status**, **date**, and **time**, allowing customers to easily find available flights

**🔹 API Integration**  
Seamlessly connected to the Spring Boot backend using **Axios** for secure data transactions
Implemented interceptors to attach JWT tokens for authorized requests

**🔹 Authentication & Security**
Implemented **JWT-based authentication** with automatic token management and logout on expiration  
Restricted route access through **React Router DOM** and role-specific guards

**🔹 Modern Design**
Developed dynamic dashboards that adapt to each user’s role and permissions
Responsive layout with reusable React components for naviagtion bar, footer, and message display
Integrated notification and toast messages for user experience

---

## 🚀 Features

### 👤 User & Role Management
- Secure user registration and login via **JWT**
- Role-based permissions (**Customer**, **Admin**, **Pilot**)
- Admin can register users to assign roles
- Secure password hashing with **Spring Security**

### ✈️ Flight Management
- Create, update, and delete flights
- Assign pilots to flights
- Filter flights by airport, date, and status
- Public endpoints for flight browsing (unauthenticated)

### 🧾 Booking Management
- Customers can **book** and **view** their bookings
- Unique booking reference automatically generated
- Admins can access and update all bookings
- Linked flight and passenger details per booking

### 👨‍✈️ Pilot Dashboard
- Pilots can view their assigned flights only
- Flights are ordered by departure time
- Access restricted via role validation

### 📨 Email Notifications
- Welcome and booking confirmation emails
- Modular service class for easy extension

---

## 🖥️ Frontend Overview

### 💻 Tech Stack
| Area | Technology |
|------|-------------|
| **Language** | JavaScript, HTML, CSS |
| **Framework** | React 19 |
| **Routing** | React Router DOM |
| **HTTP Client** | Axios |
| **State Management** | React Hooks (`useState`, `useEffect`) |
| **Build Tool** | Create React App |

### 🧩 Core Features

#### 🔐 Authentication & Authorization
- Secure **JWT-based authentication** integrated with the backend API
- Role-aware interface: navigation menus and routes render conditionally based on user role (**CUSTOMER, PILOT, ADMIN**)
- Axios interceptor automatically attaches  
  `Authorization: Bearer <token>` to authenticated requests
- Automatic logout on token expiration or invalid credentials

### 🧭 Routing
- **Public Routes:** Home (Flight Search), Login, Register
- **Private Routes:** Dashboard, My Bookings, Profile
- **Role-Based Routes**:
  - **Pilot**: My Flights
  - **Admin**: Manage Flights, Airports, Bookings, and Users
- Route guards ensure unauthorized users cannot access protected pages
- nvalid or expired sessions automatically redirect to /login

### ✈️ Flight & Booking Management
- **Customers**:
  - Search for flights by origin, destination, and date
  - Book flights with multiple passengers in one transaction
  - View and manage past bookings under “My Bookings”

- **Pilots**:
	-	Access assigned flights via “My Flights” dashboard
	-	Update flight statuses

- **Admins**:
	-	Add and manage flights and airports and view all bookings
	-	Assign pilots to flights and create special-role users

---

### 🔗 Backend Repository
**👉 [airline-booking-system-backend](https://github.com/menglanyan/airline-booking-system-backend)**