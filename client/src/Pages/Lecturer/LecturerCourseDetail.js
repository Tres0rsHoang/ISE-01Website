import React, { Fragment, useEffect, useState } from "react";
import { LecturerNavBar } from "../../Components/LecturerNavBar";
import { Button, Breadcrumb } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import fileIcon from "../../img/fileIcon.svg";
import axios from "axios";

function LecturerCourseDetail () {
    const search = useLocation();
    const courseID = search.pathname.split("/")[3];
    var lessonNth = search.pathname.split("/")[4];
    var assignmentPath;
    var materialPath;
    var courseDetailPath = "";
    if(lessonNth === undefined){
        courseDetailPath = search.pathname;
        assignmentPath = search.pathname + "/Assignments";
        materialPath = search.pathname + "/Materials";
        lessonNth = 'Lesson 01';
    } 
    else {
        courseDetailPath = search.pathname.substring(0, search.pathname.lastIndexOf("/"));
        assignmentPath = search.pathname.replace(search.pathname.split("/")[4], "Assignments");
        materialPath = search.pathname.replace(search.pathname.split("/")[4], "Materials");
        lessonNth = lessonNth.replace("%20", " ");
    }
    const myCoursesPath = courseDetailPath.substring(0, courseDetailPath.lastIndexOf("/"));
    const lecturerDashboardPath = myCoursesPath.substring(0, myCoursesPath.lastIndexOf("/"));
    const addLessonPath = courseDetailPath + "/AddLesson";
    const coursePathName = search.pathname;
    const [state, setState] = useState({
        courseName: '',
        lecturerName: '',
        lessonName: '',
        lessonDescription: '',
        lessonVideoPath: '',
        lessonsList: []
    });
    useEffect(() =>{
        axios.get('/Lecturer/CourseDetail', { params: { userId: 4, courseId: courseID, lessonName: lessonNth } }).then(result => {
            setState({
                courseName: result.data.courseDetail.coursename,
                lecturerName: result.data.courseDetail.fullname,
                lessonName: result.data.courseDetail.lessonname,
                lessonDescription: result.data.courseDetail.lessondescription,
                lessonVideoPath: result.data.courseDetail.linkvideo,
                lessonsList: result.data.lessons
            })
        });
    }, [5]);
    const resLessons = [];
    var lessonPath;
    for (let i = 0;i < state.lessonsList.length; i++){
        if(search.pathname.split("/")[4] === undefined){
            lessonPath = coursePathName + "/" + state.lessonsList[i].lessonname.split("-")[0];
        }
        else {
            lessonPath = coursePathName.replace(search.pathname.split("/")[4], state.lessonsList[i].lessonname.split("-")[0]);
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
    return (
        <Fragment>
            <LecturerNavBar>
                <div id="lecturerCourseDetail" className="d-flex" style={{ padding: "2rem" }}>
                    <div className="courseSection" style={{ width: "70%" }}>
                        <h3 className="mt-4" style={{ fontWeight: "600" }}>{state.courseName}</h3>
                        <Breadcrumb className="breadcrumb mb-0">
                            <Breadcrumb.Item href={lecturerDashboardPath}>Dashboard</Breadcrumb.Item>
                            <Breadcrumb.Item href={myCoursesPath}>My Courses</Breadcrumb.Item>
                            <Breadcrumb.Item href={courseDetailPath}>{state.courseName}</Breadcrumb.Item>
                        </Breadcrumb>
                        <ReactPlayer url={state.lessonVideoPath} width="90%" height="70%" style={{ borderRadius: "32px"}} controls></ReactPlayer>
                        <div className="currentLessonDetail">
                            <h4 className="currentLessonName mt-4 mb-2" style={{ fontWeight: "600" }}>{state.lessonName}</h4>
                            <p className="lecturerName" style={{ fontWeight: "600" }}>{state.lecturerName}</p>
                            <p className="currentLessonDesc" style={{ width: "90%", fontSize: "0.8rem", textAlign: "justify" }}>
                                {state.lessonDescription}
                            </p>
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
export default LecturerCourseDetail;