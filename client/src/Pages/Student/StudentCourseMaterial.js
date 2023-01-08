import React, { Fragment, useEffect, useState } from "react";
import { LecturerNavBar } from "../../Components/StudentNavBar";
import { Button, Breadcrumb } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import fileIcon from "../../img/fileIcon.svg";
import EmptyPage from "../EmptyPage";
import axios from "axios";

function StudentCourseMaterials() {
    const search = useLocation();
    const courseID = search.pathname.split("/")[2];
    const materialPath = search.pathname;
    const assignmentPath = search.pathname.replace(search.pathname.split("/")[3], "Assignments");
    const courseDetailPath = materialPath.substring(0, materialPath.lastIndexOf("/"));
    const lecturerDashboardPath = courseDetailPath.substring(0, courseDetailPath.lastIndexOf("/"));
    const [state, setState] = useState({
        user: {},
        courseName: '',
        materialsList: [],
        lessonsList: []
    });
    useEffect(() => {
        const config = {
            headers:{
                Authorization: localStorage.getItem('accessToken'),
                RefreshToken: localStorage.getItem('refreshToken')
            },
            params:{
                courseId: courseID
            }
        }
        axios.get('/Student/CourseMaterials', config).then(result => {
            console.log(result);
            setState({
                courseName: result.data.courseName.coursename,
                materialsList: result.data.materials,
                lessonsList: result.data.lessons,
                user: result.data.user
            })
        });
    }, [5]);
    const materials = [];
    for (let i = 0; i < state.materialsList.length; i++) {
        materials.push(
            <div className="material w-75 pb-3 mb-4 d-flex align-items-center" style={{ fontWeight: "600" }}
            id={`${state.materialsList[i].materialname}.${state.materialsList[i].filetype}`}>
                <p className="materialName w-75 ps-3 mb-0">{state.materialsList[i].materialname + "." + state.materialsList[i].filetype}</p>
                <a href={`${process.env.PUBLIC_URL}/${courseID}/materials/${state.materialsList[i].materialname}.${state.materialsList[i].filetype}`}
                download={state.materialsList[i].materialname} target='_blank' rel="noreferrer">
                    <Button className="downloadButton me-3" style={{ width: "40px", height: "40px" }}>
                        <FontAwesomeIcon icon={faDownload} />
                    </Button>
                </a>
            </div>
        )
    }
    const resLessons = [];
    var lessonPath;
    for (let i = 0; i < state.lessonsList.length; i++) {
        if (search.pathname.split("/")[3] === undefined) {
            lessonPath = materialPath + "/" + state.lessonsList[i].lessonname.split("-")[0];
        }
        else {
            lessonPath = materialPath.replace(search.pathname.split("/")[3], state.lessonsList[i].lessonname.split("-")[0]);
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
                <div id="lecturerCourseMaterials" className="d-flex" style={{ padding: "2rem" }}>
                    <div className="courseSection" style={{ width: "70%" }}>
                        <div className="courseTitleBtn d-flex justify-content-between align-items-center">
                            <h3 className="mt-4" style={{ width: "70%", fontWeight: "600" }}>{state.courseName} - Materials</h3>
                            {/* <Button className="uploadMaterialBtn mt-4 me-5 d-flex justify-content-center align-items-center" style={{ height: "36px" }}>Upload New File</Button> */}
                        </div>
                        <Breadcrumb className="breadcrumb mb-0">
                            <Breadcrumb.Item href={lecturerDashboardPath}>Dashboard</Breadcrumb.Item>
                            <Breadcrumb.Item href={courseDetailPath}>{state.courseName}</Breadcrumb.Item>
                            <Breadcrumb.Item href={materialPath}>Materials</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="listMaterials mt-3 d-flex flex-column justify-content-start" style={{ maxHeight: "520px" }}>
                            {materials}
                        </div>
                    </div>
                    <div className="lessonSection" style={{ width: "30%" }}>
                        <div className="lessonTitleGroup pt-4 pb-5 d-flex justify-content-between align-items-center">
                            <h4 className="mb-0 ps-3 d-flex align-items-center" style={{ fontWeight: "600" }}>Lessons</h4>
                            {/* <Button href={addLessonPath} className="d-flex justify-content-center align-items-center" style={{ height: "36px" }}>New Lesson</Button> */}
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
export default StudentCourseMaterials;