import React, { Fragment, useEffect, useState } from "react";
import { LecturerNavBar } from "../../Components/LecturerNavBar";
import { Button, Breadcrumb } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import fileIcon from "../../img/fileIcon.svg";
import EmptyPage from "../EmptyPage";
import axios from "axios";

function LecturerCourseAssignments() {
    const search = useLocation();
    const courseID = search.pathname.split("/")[3];
    const assignmentPath = search.pathname;
    const materialPath = search.pathname.replace(search.pathname.split("/")[4], "Materials");
    const courseDetailPath = assignmentPath.substring(0, assignmentPath.lastIndexOf("/"));
    const myCoursesPath = courseDetailPath.substring(0, courseDetailPath.lastIndexOf("/"));
    const addLessonPath = courseDetailPath + "/AddLesson";
    const lecturerDashboardPath = myCoursesPath.substring(0, myCoursesPath.lastIndexOf("/"));
    const [state, setState] = useState({
        user: {},
        courseName: '',
        assignmentsList: [],
        lessonsList: []
    });
    useEffect(() =>{
        const config = {
            headers:{
                Authorization: localStorage.getItem('accessToken'),
                RefreshToken: localStorage.getItem('refreshToken')
            },
            params:{
                courseId: courseID
            }
        }
        axios.get('/Lecturer/CourseAssignments', config).then(result => {
            setState({
                courseName: result.data.courseName.coursename,
                assignmentsList: result.data.assignments,
                lessonsList: result.data.lessons,
                user: result.data.user
            })
        });
    }, [5]);
    const assignments = [];
    var assignmentDetailPath;
    for (let i = 0; i < state.assignmentsList.length; i++) {
        assignmentDetailPath = assignmentPath + "/" + state.assignmentsList[i].assignmentname;
        assignments.push(
            <NavLink to={assignmentDetailPath} className="assignment w-75 pb-3 mb-4 d-flex align-items-center" style={{ fontWeight: "600" }}>
                <Button className="assignmentButton mx-3 d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px" }}>
                    <img src={fileIcon} alt="fileIcon"></img>
                </Button>
                <p className="assignmentName w-75 mb-0">{state.assignmentsList[i].assignmentname}</p>
            </NavLink>
        )
    }
    const resLessons = [];
    var lessonPath;
    for (let i = 0;i < state.lessonsList.length; i++){
        if(search.pathname.split("/")[4] === undefined){
            lessonPath = assignmentPath + "/" + state.lessonsList[i].lessonname.split("-")[0];
        }
        else {
            lessonPath = assignmentPath.replace(search.pathname.split("/")[4], state.lessonsList[i].lessonname.split("-")[0]);
        }
        resLessons.push(
            <a href={lessonPath}>
                <li className="lesson mb-3">
                    <p className="lessonName mb-1" style={{ fontWeight: "600" }}>{state.lessonsList[i].lessonname.split("-")[1]}</p>
                    <div className="lessonDetail d-flex align-items-center" style={{ fontSize: "0.8rem", opacity: "0.7" }}>
                        <p className="lessonNum" >{state.lessonsList[i].lessonname.split("-")[0]}</p>
                    </div>
                </li>
            </a>
        )
    }
    if (state.user.accessToken !== undefined) localStorage.setItem("accessToken", state.user.accessToken);
    if (localStorage.getItem("accessToken") === '' || state.user.usertype !== 2) return <EmptyPage/>;
    return (
        <Fragment>
            <LecturerNavBar>
                <div id="lecturerCourseAssignments" className="d-flex" style={{ padding: "2rem" }}>
                    <div className="courseSection" style={{ width: "70%" }}>
                        <div className="courseTitleBtn d-flex justify-content-between align-items-center">
                            <h3 className="mt-4" style={{ width: "70%", fontWeight: "600" }}>{state.courseName} - Assignments</h3>
                            <Button className="newAssignmentBtn mt-4 me-5 d-flex justify-content-center align-items-center" style={{ height: "36px" }}>New Assignment</Button>
                        </div>
                        <Breadcrumb className="breadcrumb mb-0">
                            <Breadcrumb.Item href={lecturerDashboardPath}>Dashboard</Breadcrumb.Item>
                            <Breadcrumb.Item href={myCoursesPath}>My Courses</Breadcrumb.Item>
                            <Breadcrumb.Item href={courseDetailPath}>{state.courseName}</Breadcrumb.Item>
                            <Breadcrumb.Item href={assignmentPath}>Assignments</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="listAssignments mt-3 d-flex flex-column justify-content-start" style={{ maxHeight: "520px" }}>
                            {assignments}
                        </div>
                    </div>
                    <div className="lessonSection" style={{ width: "30%" }}>
                        <div className="lessonTitleGroup pt-4 pb-5 d-flex justify-content-between align-items-center">
                            <h4 className="mb-0 ps-3 d-flex align-items-center" style={{ fontWeight: "600" }}>Lessons</h4>
                            <Button href={addLessonPath} className="d-flex justify-content-center align-items-center" style={{ height: "36px" }}>New Lesson</Button>
                        </div>
                        <ul className="lessonList ps-3" style={{ height: "404px" }}>
                            {resLessons}
                        </ul>
                        <div className="courseElementBtns pt-5 d-flex flex-column align-items-center">
                            <Button href={assignmentPath} className="assignmentsBtn w-50 mb-4 d-flex justify-content-center align-items-center" style={{ height: "44px" }}><img className="me-2" src={fileIcon} alt="fileIcon"></img>Assignments</Button>
                            <Button href={materialPath} className="materialsBtn w-50 d-flex justify-content-center align-items-center" style={{ height: "44px" }}><img className="me-2" src={fileIcon} alt="fileIcon"></img>Materials</Button>
                        </div>
                    </div>
                </div>
            </LecturerNavBar>
        </Fragment>
    );
}
export default LecturerCourseAssignments;