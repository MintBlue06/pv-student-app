import {
  createContext,
  useReducer,
  useContext as useReactContext,
  useEffect,
} from "react";
import studentService from "../services/studentService";
import { useToast } from "@chakra-ui/react";

const StudentContext = createContext();

const actionTypes = {
  SET_STUDENTS: "SET_STUDENTS",
};

const initialState = {
  students: [],
};

const studentReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_STUDENTS:
      return {
        ...state,
        students: action.payload,
      };
    default:
      return state;
  }
};

export const StudentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(studentReducer, initialState);
  const toast = useToast();

  useEffect(() => {
    dispatch({
      type: actionTypes.SET_STUDENTS,
      payload: studentService.getAllStudents(),
    });
  }, []);

  const addStudent = (studentData) => {
    try {
      studentService.addStudent(studentData);
      dispatch({
        type: actionTypes.SET_STUDENTS,
        payload: studentService.getAllStudents(),
      });
      toast({
        title: "Éxito",
        description: "Alumno agregado correctamente.",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      return true;
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      return false;
    }
  };

  const updateStudent = (lu, studentData) => {
    try {
      studentService.updateStudent(lu, studentData);
      dispatch({
        type: actionTypes.SET_STUDENTS,
        payload: studentService.getAllStudents(),
      });
      toast({
        title: "Éxito",
        description: "Alumno actualizado correctamente.",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      return true;
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      return false;
    }
  };

  const deleteStudent = (lu) => {
    try {
      studentService.deleteStudent(lu);
      dispatch({
        type: actionTypes.SET_STUDENTS,
        payload: studentService.getAllStudents(),
      });
      toast({
        title: "Éxito",
        description: `Alumno LU: ${lu} eliminado.`,
        status: "info",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      return true;
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      return false;
    }
  };

  const getStudentByLu = (lu) => {
    return studentService.getStudentByLu(lu);
  };

  const value = {
    state,
    addStudent,
    updateStudent,
    deleteStudent,
    getStudentByLu,
  };

  return (
    <StudentContext.Provider value={value}>{children}</StudentContext.Provider>
  );
};

export const useStudents = () => useReactContext(StudentContext);
