import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import EmptyPage from "./Pages/EmptyPage";
import HomePage from "./Pages/HomePage";
import DashboardStudent from "./Pages/DashboardStudent";
import LoginPage from "./Pages/LoginPage";
import Test from "./Pages/Test";
// Lecturer Screen
import LecturerDashboard from "./Pages/LecturerDashboard";
import LecturerMyCourses from "./Pages/LecturerMyCourses";
import LecturerCourseDetail from "./Pages/LecturerCourseDetail";
import LecturerCourseMaterials from "./Pages/LecturerCourseMaterials";
import LecturerCourseAssignments from "./Pages/LecturerCourseAssignments";
import LecturerAssignmentDetail from "./Pages/LecturerAssignmentDetail";
import LecturerInformation from "./Pages/LecturerInformation";
import LecturerChangePassword from "./Pages/LecturerChangePassword"

function App() {
  return (
      <Router>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/EmptyPage' element={<EmptyPage/>} />
            <Route path='/DashboardStudent' element={<DashboardStudent/>}/>
            <Route path='/LoginPage' element={<LoginPage/>}/>
            {/* <Route path='/Student' element={<DashboardStudent/>}/>
            <Route path='/Admin' element={<DashboardAdmin/>}/>
            <Route path='/Admin/StudentManagement' element={<StudentManagement/>}/> */}
            <Route path="/Test" element = {<Test/>}/>
            <Route path='/LecturerDashboard' element={<LecturerDashboard/>}/>
            <Route path='/LecturerMyCourses' element={<LecturerMyCourses/>}/>
            <Route path='/LecturerCourseDetail' element={<LecturerCourseDetail/>}/>
            <Route path='/LecturerCourseMaterials' element={<LecturerCourseMaterials/>}/>
            <Route path='/LecturerCourseAssignments' element={<LecturerCourseAssignments/>}/>
            <Route path='/LecturerAssignmentDetail' element={<LecturerAssignmentDetail/>}/>
            <Route path='/LecturerInformation' element={<LecturerInformation/>} />
            <Route path='/LecturerChangePassword' element={<LecturerChangePassword/>}/>
        </Routes>
      </Router>
  );
}
export default App;
