STUDENT MANAGEMENT SYSTEM

A full-stack Student Management System developed using React.js, Vite, Node.js, Express.js, MongoDB Atlas and Mongoose. The system manages student information as well as subjects, semester marks, grades, GPA and CGPA with secure Admin and Student authentication.

Features:
Admin and Student login with JWT authentication
Role-based access control
Student profile management
Add, view, search, update and delete students
Student register number management
Subject management
Add, update and delete subjects
Semester-wise marks management
Automatic grade and pass/fail calculation
Semester GPA calculation
Overall CGPA calculation
Average marks and GPA calculation
Student academic performance tracking
Admin dashboard with academic statistics
Department-wise student statistics
Semester-wise performance statistics
Students can view only their own academic profile
Responsive and user-friendly React interface

FRONTEND

The frontend is developed using React.js and Vite. It provides separate interfaces for Admin and Student users and communicates with the backend through REST APIs.

Frontend Technologies:
React.js
Vite
JavaScript
HTML5
CSS3
Fetch API

Frontend Modules:

1. Login Module
Provides separate login options for:
Admin
Student
JWT tokens are stored after successful authentication and are used for protected API requests.

2. Admin Dashboard
The Admin dashboard displays:
Total students
Total subjects
Number of departments
Average CGPA
Highest CGPA
Department-wise statistics
Semester-wise performance

3. Student Management
Admin can:
Add students
View students
Search students
Update student details
Delete students

4. Student information includes:
Register number
Name
Department
Year
Email
Phone

5. Subject Management
Admin can manage:
Subject code
Subject name
Credits
Department
Semester

6. Marks & Performance
Admin can enter semester-wise marks for students.
The frontend displays:
Marks
Grade
Grade Point
Pass/Fail result
Semester GPA
Overall CGPA
Average marks
Performance improvement

7. Student Profile
After student login, the student can view:
Personal information
Semester details
Subjects
Marks
Grades
GPA
CGPA
Academic performance

Students cannot access other students' profiles.

BACKEND

The backend is developed using Node.js and Express.js. It provides REST APIs, authentication, authorization, database operations and academic calculation logic.

Backend Technologies:
Node.js
Express.js
MongoDB Atlas
Mongoose
JWT
bcryptjs
CORS
dotenv

Backend Modules:

1. Authentication
The backend provides secure authentication using:
JWT
bcryptjs
Role-based authorization
Two roles are supported:
Admin
Student

2. Student Management API
GET     /api/students
GET     /api/students/:id
GET     /api/students/search
GET     /api/students/me
POST    /api/students
PUT     /api/students/:id
DELETE  /api/students/:id

3. Subject Management API
GET     /api/subjects
POST    /api/subjects
PUT     /api/subjects/:id
DELETE  /api/subjects/:id

4. Marks Management API
POST    /api/students/:id/marks
DELETE  /api/students/:id/marks/:semester/:subjectCode

5. Dashboard API
GET /api/dashboard

The dashboard API provides:
Total students
Total subjects
Department statistics
Average CGPA
Highest CGPA
Semester performance
Academic Calculation

The backend automatically calculates grades from marks.

Marks	Grade	Grade Point	Result
90–100	A+	10	PASS
80–89	A	9	PASS
70–79	B+	8	PASS
60–69	B	7	PASS
50–59	C	6	PASS
40–49	D	5	PASS
Below 40	F	0	FAIL
GPA
GPA = Σ(Grade Point × Credits) / Σ Credits
CGPA

The overall CGPA is calculated using the grade points and credits of the student's recorded subjects.

DATABASE

The project uses MongoDB Atlas for cloud-based persistent storage and Mongoose for database modeling.

The system stores:
Student Records
Register Numbers
Personal Details
Subjects
Subject Credits
Semester Records
Semester Marks
Grades
Grade Points
Pass/Fail Results
GPA
CGPA
System Flow
Admin / Student
       ↓
React + Vite Frontend
       ↓
REST API Request
       ↓
Node.js + Express.js
       ↓
JWT Authentication
       ↓
Role-Based Access
       ↓
Business Logic
       ↓
Mongoose
       ↓
MongoDB Atlas
       ↓
Database Response
       ↓
React Frontend

Project Structure
Students-Management-System/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.css
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
Environment Variables

HOW TO RUN

Backend
From the project root:
npm install
node server.js
Backend:
http://localhost:3000

Frontend
Open another terminal:
cd frontend
npm install
npm run dev
Frontend:
http://localhost:5173

Future Scope:
Attendance management
Attendance percentage reports
Email and mobile notifications
Password change and account recovery
Advanced academic analytics
PDF report generation
Exportable student reports
Pagination
Cloud deployment

Project Status:
Frontend              
Backend               
MongoDB Atlas         
REST APIs             
JWT Authentication    
Role-Based Access     
Student Management    
Subject Management    
Marks Management      
Grade Calculation
GPA Calculation       
CGPA Calculation      
Admin Dashboard       
Student Profile       
