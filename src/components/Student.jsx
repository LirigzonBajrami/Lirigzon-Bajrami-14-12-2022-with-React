import React from "react";
import { deleteStudent } from "../features/studentsSlice";
import { useDispatch } from "react-redux";

const Student = ({ student }) => {
  const dispatch = useDispatch();

  const deleteSingleStudent = () => {
    dispatch(deleteStudent(student.index));
  };

  return (
    <tr key={student.index}>
      <td>{student.index}</td>
      <td>{student.name}</td>
      <td>{student.dateOfBirthday}</td>
      <td>{student.municipality}</td>
      <td>
        <button className="delete-button" onClick={deleteSingleStudent}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Student;
