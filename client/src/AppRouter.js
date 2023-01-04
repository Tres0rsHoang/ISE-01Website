import React from 'react';
import { Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import EmptyPage from "./Pages/EmptyPage";
import DashboardStudent from "./Pages/DashboardStudent";
import LoginPage from "./Pages/LoginPage";
import DashboardAdmin from "./Pages/DashboardAdmin";
import StudentManagement from "./Pages/StudentManagmentAdmin";
import Test from "./Pages/Test";
import AddNewStudent from "./Pages/AddNewStudentAdmin";
import CourseAdmin from "./Pages/CourseAdmin";
import DashboardLecturer from './Pages/LecturerDashboard';
import LecturerCourses from './Pages/LecturerMyCourses';
import LecturerCourseDetail from './Pages/LecturerCourseDetail';

export default function AppRouter(){
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/EmptyPage' element={<EmptyPage/>} />
            <Route path='/DashboardStudent' element={<DashboardStudent/>}/>
            <Route path='/Login' element={<LoginPage/>}/>
            <Route path='/Student' element={<DashboardStudent/>}/>
            <Route path='/Admin' element={<DashboardAdmin/>}/>
            <Route path='/Admin/StudentManagement' element={<StudentManagement/>}/>
            <Route path='Admin/CourseManagement' element={<CourseAdmin/>}/>
            <Route path="/Test" element = {<Test/>}/>
            <Route path='/Admin/AddNewStudent' element={<AddNewStudent/>}/>
            <Route path='/Lecturer' element={<DashboardLecturer/>}/>
            <Route path='/Lecturer/Courses' element={<LecturerCourses/>}/>
            <Route path='/Lecturer/Courses/:id' element={<LecturerCourseDetail/>}/>
        </Routes>
    )
}