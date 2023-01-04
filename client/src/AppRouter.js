import React from 'react';
import { Route, Routes} from "react-router-dom";

import HomePage from "./Pages/HomePage";
import EmptyPage from "./Pages/EmptyPage";
import DashboardStudent from "./Pages/Student/DashboardStudent";
import LoginPage from "./Pages/LoginPage";
import DashboardAdmin from "./Pages/Admin/DashboardAdmin";
import StudentManagement from "./Pages/Admin/StudentManagmentAdmin";
import Test from "./Pages/Test";
import AddNewStudent from "./Pages/Admin/AddNewStudentAdmin";
import CourseAdmin from "./Pages/Admin/CourseAdmin";
import EditStudent from "./Pages/Admin/EditStudent";
import LectureManagement from "./Pages/Admin/LectureManagmentAdmin";
import AddNewLecture from "./Pages/Admin/AddNewLectureAdmin";
import EditLecture from "./Pages/Admin/EditLecture";


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
                <Route path='/Admin/LectureManagement' element={<LectureManagement/>}/>
                <Route path='/Admin/CourseManagement' element={<CourseAdmin/>}/>

                <Route path='/Admin/EditStudent/:id' element={<EditStudent />}/>
                <Route path='/Admin/EditLecture/:id' element={<EditLecture />}/>

                <Route path='/Admin/AddNewStudent' element={<AddNewStudent/>}/>
                <Route path='/Admin/AddNewLecture' element={<AddNewLecture/>}/>

                <Route path='/Admin/DeleteStudent/:id' element={<StudentManagement/>}/>
                <Route path="/Test" element = {<Test/>}/>
        </Routes>
    )
}