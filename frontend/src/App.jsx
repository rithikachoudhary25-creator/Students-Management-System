import { useEffect, useState } from "react";
import "./App.css";

const API = "http://localhost:3000/api/students";

function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    name: "",
    department: "",
    year: ""
  });
  const [search, setSearch] = useState("");

  // Get all students
  const getStudents = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setStudents(data);
  };

  useEffect(() => {
    getStudents();
  }, []);

  // Add student
  const addStudent = async (e) => {
    e.preventDefault();

    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        department: form.department,
        year: Number(form.year)
      })
    });

    setForm({ name: "", department: "", year: "" });
    getStudents();
  };

  // Search
  const searchStudent = async () => {
    if (!search.trim()) {
      getStudents();
      return;
    }

    const res = await fetch(
      `${API}/search?name=${encodeURIComponent(search)}`
    );
    const data = await res.json();
    setStudents(data);
  };

  // Delete
  const deleteStudent = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "DELETE"
    });

    getStudents();
  };

  // Update
  const updateStudent = async (student) => {
    const name = prompt("Enter new name:", student.name);
    const department = prompt("Enter new department:", student.department);
    const year = prompt("Enter new year:", student.year);

    if (!name || !department || !year) return;

    await fetch(`${API}/${student.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        department,
        year: Number(year)
      })
    });

    getStudents();
  };

  return (
    <div className="container">
      <h1>Student Management System</h1>
      <p className="subtitle">Full-Stack Student Management Application</p>

      <div className="card">
        <h2>Add Student</h2>

        <form onSubmit={addStudent}>
          <input
            type="text"
            placeholder="Student Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            required
          />

          <input
            type="text"
            placeholder="Department"
            value={form.department}
            onChange={(e) =>
              setForm({ ...form, department: e.target.value })
            }
            required
          />

          <input
            type="number"
            placeholder="Year"
            value={form.year}
            onChange={(e) =>
              setForm({ ...form, year: e.target.value })
            }
            required
          />

          <button type="submit">Add Student</button>
        </form>
      </div>

      <div className="card">
        <h2>Search Students</h2>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button onClick={searchStudent}>Search</button>
          <button onClick={getStudents}>Show All</button>
        </div>
      </div>

      <div className="card">
        <h2>Student Details</h2>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Year</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student._id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.department}</td>
                <td>{student.year}</td>
                <td>
                  <button
                    className="update"
                    onClick={() => updateStudent(student)}
                  >
                    Update
                  </button>

                  <button
                    className="delete"
                    onClick={() => deleteStudent(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {students.length === 0 && (
          <p className="empty">No students found.</p>
        )}
      </div>
    </div>
  );
}

export default App;