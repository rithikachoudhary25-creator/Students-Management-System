STUDENT MANAGEMENT SYSTEM:-

Description:
The Student Management System is a RESTful backend application developed using Node.js, Express.js, and MongoDB.
It allows student information to be added, viewed, updated, deleted, and searched through REST APIs. The project demonstrates backend development, database integration, API design, and CRUD operations.

Features:
- Add a new student
- View all students
- View a student by ID
- Update student details
- Delete a student
- Search students by name
- Store student data permanently using MongoDB
- Error handling for invalid student IDs

Technology used:
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- REST API
- Git & GitHub

Student Data:
Each student contains->
- ID
- Name
- Department
- Year

API Endpoints:
| Method | Endpoint | Descrpition |->
| GET | `/api/students` | Get all students |
| GET | `/api/students/:id` | Get student by ID |
| POST | `/api/students` | Add a new student |
| PUT | `/api/students/:id` | Update student |
| DELETE | `/api/students/:id` | Delete student |
| GET | `/api/students/search?name=Arun` | Search by name |

TO RUN:-
Clone the Repository:
'bash
git clone https://github.com/rithikachoudhary25-creator/Students-Management-System.git

Frontend:
The frontend of the Student Management System is developed using React.js and Vite. It provides a simple and user-friendly interface for managing student details.

Frontend Feature:
- Add new student details
- Display all student records
- Search students by name
- Update existing student information
- Delete student records
- Communicates with the backend using REST APIs
- Responsive and simple user interface

Technologies used:
- React.js
- Vite
- JavaScript
- HTML
- CSS
- Fetch API

Frontend Structure:
frontend/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
└── vite.config.js

Frontend Working:
The React frontend communicates with the Node.js and Express.js backend through REST APIs. Student data is retrieved from MongoDB through the backend and displayed in the frontend.

Users can add, search, update, and delete student records directly through the web interface.

Running Frontend:
Navigate to the frontend folder:
```bash
cd frontend

<img width="1917" height="956" alt="image" src="https://github.com/user-attachments/assets/eb7bfce7-75e2-45e5-8314-05f1caf3bb20" />








