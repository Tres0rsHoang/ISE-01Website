import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import EmptyPage from "./Pages/EmptyPage";
import HomePage from "./Pages/HomePage";
import DashboardStudent from "./Pages/DashboardStudent";
import LoginPage from "./Pages/LoginPage";
import Test from "./Pages/Test";
import DashboardAdmin from "./Pages/DashboardAdmin";
import StudentManagement from "./Pages/StudentManagmentAdmin";
import AddNewStudent from "./Pages/AddNewStudentAdmin";

function App() {
  return (
      <Router>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/EmptyPage' element={<EmptyPage/>} />
            <Route path='/DashboardStudent' element={<DashboardStudent/>}/>
            <Route path='/LoginPage' element={<LoginPage/>}/>
            <Route path='/Student' element={<DashboardStudent/>}/>
            <Route path='/Admin' element={<DashboardAdmin/>}/>
            <Route path='/Admin/StudentManagement' element={<StudentManagement/>}/>
            <Route path="/Test" element = {<Test/>}/>
            <Route path='/Admin/AddNewStudent' element={<AddNewStudent/>}/>
        </Routes>
      </Router>
  );
}
export default App;
