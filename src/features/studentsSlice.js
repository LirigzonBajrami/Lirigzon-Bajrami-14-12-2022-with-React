import { createSlice } from "@reduxjs/toolkit";

const studentsSlice = createSlice({
  name: "students",
  initialState: { students: null },
  reducers: {
    getStudents(state, action) {
      state.students = action.payload;
    },
    addStudent(state, action) {
      state.students = [action.payload, ...state.students];
    },
    deleteStudent(state, action) {
      state.students = state.students.filter(
        (student) => student.index !== action.payload
      );
    },
  },
});

export const { getStudents, addStudent, deleteStudent } = studentsSlice.actions;

export default studentsSlice.reducer;
