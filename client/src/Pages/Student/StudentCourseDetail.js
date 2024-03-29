import React, { Fragment, useEffect, useState } from "react";
import { LecturerNavBar } from "../../Components/StudentNavBar";
import { Button, Breadcrumb } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import fileIcon from "../../img/fileIcon.svg";
import EmptyPage from "../EmptyPage";
import axios from "axios";

function StudentCourseDetail () {
    const search = useLocation();
    const courseID = search.pathname.split("/")[2];
    var lessonNth = search.pathname.split("/")[3];
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
        assignmentPath = search.pathname.replace(search.pathname.split("/")[3], "Assignments");
        materialPath = search.pathname.replace(search.pathname.split("/")[3], "Materials");
        lessonNth = lessonNth.replace("%20", " ");
    }
    const lecturerDashboardPath = courseDetailPath.substring(0, courseDetailPath.lastIndexOf("/"));
    const coursePathName = search.pathname;
    const [state, setState] = useState({
        user: {},
        courseName: '',
        lecturerName: '',
        lessonName: '',
        lessonDescription: '',
        lessonVideoPath: '',
        lessonsList: []
    });
    
    useEffect(() =>{
        const config = {
            headers:{
                Authorization: localStorage.getItem('accessToken'),
                RefreshToken: localStorage.getItem('refreshToken')
            },
            params:{
                courseId: courseID, 
                lessonName: lessonNth
            }
        }
        axios.get('/Student/CourseDetail', config).then(result => {
            setState({
                courseName: result.data.courseDetail.coursename,
                lecturerName: result.data.courseDetail.fullname,
                lessonName: result.data.courseDetail.lessonname,
                lessonDescription: result.data.courseDetail.lessondescription,
                lessonVideoPath: result.data.courseDetail.linkvideo,
                lessonsList: result.data.lessons,
                user: result.data.user
            })
        });
    }, [5]);
    const resLessons = [];
    var lessonPath;
    for (let i = 0;i < state.lessonsList.length; i++){
        if(search.pathname.split("/")[3] === undefined){
            lessonPath = coursePathName + "/" + state.lessonsList[i].lessonname.split("-")[0];
        }
        else {
            lessonPath = coursePathName.replace(search.pathname.split("/")[3], state.lessonsList[i].lessonname.split("-")[0]);
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
    if (localStorage.getItem("accessToken") === '' || state.user.usertype !== 3) return <EmptyPage/>;
    return (
        <Fragment>
            <LecturerNavBar>
                <div id="lecturerCourseDetail" className="d-flex" style={{ padding: "2rem" }}>
                    <div className="courseSection" style={{ width: "70%" }}>
                        <h3 className="mt-4" style={{ fontWeight: "600" }}>{state.courseName}</h3>
                        <Breadcrumb className="breadcrumb mb-0">
                            <Breadcrumb.Item href={lecturerDashboardPath}>Dashboard</Breadcrumb.Item>
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
export default StudentCourseDetail;