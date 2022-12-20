import { useEffect } from "react";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import { useDispatch } from "react-redux";
import { getStudents, addStudent } from "./features/studentsSlice";
import StudentsPage from "./pages/StudentsPage";
import AddStudent from "./components/AddStudent";

function App() {
  return (
    <div>
      <NavBar />
      <Container>
        <AddStudent />

        <StudentsPage />
      </Container>
    </div>
  );
}

export default App;
