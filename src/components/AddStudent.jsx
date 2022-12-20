import React, { useState } from "react";
import { addStudent } from "../features/studentsSlice";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";

const AddStudent = () => {
  const [studentName, setStudentName] = useState("");
  const [studentBirthday, setStudentBirthday] = useState("");
  const [studentMunicipality, setStudentMunicipality] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      index: uuid(),
      name: studentName,
      dateOfBirthday: studentBirthday,
      municipality: studentMunicipality,
    };

    dispatch(addStudent(newStudent));

    // Reset
    setStudentName("");
    setStudentBirthday("");
    setStudentMunicipality("");
  };

  return (
    <form className="add-student-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="">Name</label>
        <input
          type="text"
          value={studentName}
          required="required"
          onChange={(e) => setStudentName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Birthday</label>
        <input
          type="date"
          required="required"
          value={studentBirthday}
          onChange={(e) => setStudentBirthday(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Municipality</label>
        <input
          type="text"
          required="required"
          value={studentMunicipality}
          onChange={(e) => setStudentMunicipality(e.target.value)}
        />
      </div>
      <div className="form-group">
        <button>Add Student</button>
      </div>
    </form>
  );
};

export default AddStudent;
