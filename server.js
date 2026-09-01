const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 3000;

// Allows server to read JSON data
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB connected successfully");

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error.message);
    });

// Student Schema
const studentSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
});

// Student Model
const Student = mongoose.model("Student", studentSchema);

// Home route
app.get("/", (req, res) => {
    res.send("Student Management API is Running");
});

// GET all students
app.get("/api/students", async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching students"
        });
    }
});

// Search students by name
app.get("/api/students/search", async (req, res) => {
    try {
        const name = req.query.name;

        const students = await Student.find({
            name: { $regex: name, $options: "i" }
        });

        res.json(students);
    } catch (error) {
        res.status(500).json({
            message: "Error searching students"
        });
    }
});


// GET student by ID
app.get("/api/students/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const student = await Student.findOne({ id: id });

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json(student);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching student"
        });
    }
});

// POST - Add a new student
app.post("/api/students", async (req, res) => {
    try {
        const lastStudent = await Student.findOne().sort({ id: -1 });

        const newId = lastStudent ? lastStudent.id + 1 : 1;

        const newStudent = new Student({
            id: newId,
            name: req.body.name,
            department: req.body.department,
            year: req.body.year
        });

        const savedStudent = await newStudent.save();

        res.status(201).json(savedStudent);
    } catch (error) {
        res.status(500).json({
            message: "Error adding student"
        });
    }
});

// PUT - Update a student
app.put("/api/students/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const student = await Student.findOneAndUpdate(
            { id: id },
            {
                name: req.body.name,
                department: req.body.department,
                year: req.body.year
            },
            { new: true }
        );

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json(student);
    } catch (error) {
        res.status(500).json({
            message: "Error updating student"
        });
    }
});

// DELETE - Delete a student
app.delete("/api/students/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const student = await Student.findOneAndDelete({ id: id });

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json({
            message: "Student deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting student"
        });
    }
});