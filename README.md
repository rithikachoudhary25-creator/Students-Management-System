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


