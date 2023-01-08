import React from 'react';
import { Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import EmptyPage from "./Pages/EmptyPage";
import LoginPage from "./Pages/LoginPage";

import Dashboard from "./Pages/Admin/Dashboard";
import StudentManagement from "./Pages/Admin/StudentManagment";
import Test from "./Pages/Test";
import AddNewStudent from "./Pages/Admin/AddNewStudent";
import CourseAdmin from "./Pages/Admin/CourseManagement";
import EditStudent from "./Pages/Admin/EditStudent";
import LectureManagement from "./Pages/Admin/LectureManagment";
import AddNewLecture from "./Pages/Admin/AddNewLecture";
import EditLecture from "./Pages/Admin/EditLecture";

import DashboardLecturer from './Pages/Lecturer/LecturerDashboard';
import LecturerCourses from './Pages/Lecturer/LecturerMyCourses';
import LecturerCourseDetail from './Pages/Lecturer/LecturerCourseDetail';
import LecturerCourseAssignments from './Pages/Lecturer/LecturerCourseAssignments';
import LecturerCourseMaterials from './Pages/Lecturer/LecturerCourseMaterials';
import LecturerAssignmentDetail from './Pages/Lecturer/LecturerAssignmentDetail';
import LecturerAddLesson from './Pages/Lecturer/LecturerAddLesson';
import LecturerInformation from './Pages/Lecturer/LecturerInformation';
import LecturerChangePassword from './Pages/Lecturer/LecturerChangePassword';

import DashboardStudent from "./Pages/Student/DashboardStudent";
import StudentCourseDetail from "./Pages/Student/StudentCourseDetail";
import StudentCourseAssignments from "./Pages/Student/StudentCourseAssignments";
import StudentAssignmentDetail from "./Pages/Student/StudentAssignmentDetail";
import StudentCourseMaterials from './Pages/Student/StudentCourseMaterial';

export default function AppRouter(){
    return (
        <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/EmptyPage' element={<EmptyPage/>} />
                
                <Route path='/Login' element={<LoginPage/>}/>
                
                <Route path='/Admin' element={<Dashboard/>}/>
                <Route path='/Admin/StudentManagement' element={<StudentManagement/>}/>
                <Route path='/Admin/LecturerManagement' element={<LectureManagement/>}/>
                <Route path='/Admin/CourseManagement' element={<CourseAdmin/>}/>

                <Route path='/Admin/EditStudent/:id' element={<EditStudent />}/>
                <Route path='/Admin/EditLecture/:id' element={<EditLecture />}/>

                <Route path='/Admin/AddNewStudent' element={<AddNewStudent/>}/>
                <Route path='/Admin/AddNewLecture' element={<AddNewLecture/>}/>

                <Route path='/Admin/DeleteStudent/:id' element={<StudentManagement/>}/>

                <Route path='/Lecturer' element={<DashboardLecturer/>}/>
                <Route path='/Lecturer/Courses' element={<LecturerCourses/>}/>
                <Route path='/Lecturer/Courses/:courseid' element={<LecturerCourseDetail/>}/>
                <Route path='/Lecturer/Courses/:courseid/:lessonNth' element={<LecturerCourseDetail/>}/>
                <Route path='/Lecturer/Courses/:courseid/Assignments' element={<LecturerCourseAssignments/>}/>
                <Route path='/Lecturer/Courses/:courseid/Materials' element={<LecturerCourseMaterials/>}/>
                <Route path='/Lecturer/Courses/:courseid/Assignments/:assignmentname' element={<LecturerAssignmentDetail/>}/>
                <Route path='/Lecturer/Courses/:courseid/AddLesson' element={<LecturerAddLesson/>}/>
                <Route path='/Lecturer/Information' element={<LecturerInformation/>}/>
                <Route path='/Lecturer/Password' element={<LecturerChangePassword/>}/>
                
                <Route path='/Student' element={<DashboardStudent/>}/>
                <Route path='/Student/:courseid' element={<StudentCourseDetail/>}/>
                <Route path='/Student/:courseid/:lessonNth' element={<StudentCourseDetail/>}/>
                <Route path='/Student/:courseid/Assignments' element={<StudentCourseAssignments/>}/>
                <Route path='/Student/:courseid/Assignments/:assignmentname' element={<StudentAssignmentDetail/>}/>
                <Route path='/Student/:courseid/Materials' element={<StudentCourseMaterials/>}/>

                <Route path="/Test" element = {<Test/>}/>
        </Routes>
    )
}