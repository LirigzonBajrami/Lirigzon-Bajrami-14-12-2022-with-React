import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Student from "../components/Student";
import data from "../data.json";
import { getStudents } from "../features/studentsSlice";
import { AiOutlineSortAscending } from "react-icons/ai";
import { AiOutlineSortDescending } from "react-icons/ai";

const StudentsPage = () => {
  const students = useSelector((state) => state.students.students);
  let [studentData, setStudentData] = useState(null);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setStudentData(data);
    dispatch(getStudents(studentData));
  }, [dispatch, studentData]);

  // ASC
  const ascendingSort = () => {
    studentData = [...students].sort((a, b) => (a.name > b.name ? 1 : -1));
    dispatch(getStudents(studentData));
  };

  // DESC
  const descendingSort = () => {
    studentData = [...students].sort((a, b) => (a.name < b.name ? 1 : -1));
    dispatch(getStudents(studentData));
  };

  return (
    <Fragment>
      <div className="info-search">
        <h3>Students informations</h3>
        {/* Search */}
        <input
          type="text"
          className="search"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <table>
        <thead className="table-head">
          <tr>
            <th>Index</th>
            <th>
              Name{" "}
              <AiOutlineSortAscending className="asc" onClick={ascendingSort} />
              <AiOutlineSortDescending
                className="desc"
                onClick={descendingSort}
              />
            </th>
            <th>DoB</th>
            <th>
              Municipality{" "}
              <AiOutlineSortAscending className="asc" onClick={ascendingSort} />
              <AiOutlineSortDescending
                className="desc"
                onClick={descendingSort}
              />{" "}
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students
            ?.filter(
              (student) =>
                student.name.toLowerCase().includes(query) ||
                student.municipality.toLowerCase().includes(query)
            )
            .map((student) => (
              <Student key={student.index} student={student} />
            ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default StudentsPage;
