import React, { Fragment, useEffect, useState } from "react";
import { LecturerNavBar } from "../../Components/StudentNavBar";
import { Button, Breadcrumb, Form, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import fileIcon from "../../img/fileIcon.svg";
import axios from "axios";

function StudentAssignmentDetail() {
    const search = useLocation();
    const courseID = search.pathname.split("/")[3];
    var assignmentPath = search.pathname.replace(search.pathname.split("/")[5], "");
    assignmentPath = assignmentPath.substring(0, assignmentPath.length - 1);
    const materialPath = assignmentPath.replace("Assignments", "Materials");
    var assignmentName = search.pathname.split("/")[5];
    assignmentName = assignmentName.replace("%20", " ");
    const courseDetailPath = assignmentPath.substring(0, assignmentPath.lastIndexOf("/"));
    const myCoursesPath = courseDetailPath.substring(0, courseDetailPath.lastIndexOf("/"));
    const lecturerDashboardPath = myCoursesPath.substring(0, myCoursesPath.lastIndexOf("/"));
    const [state, setState] = useState({
        courseName: '',
        assignmentDescription: '',
        assignmentFilename: '',
        numberSubmitted: '',
        lessonsList: []
    });
    useEffect(() => {
        axios.get('/Student/AssignmentDetail', { params: {courseId: courseID, assignmentName: assignmentName } }).then(result => {
            setState({
                courseName: result.data.courseName.coursename,
                assignmentDescription: result.data.assignmentDetail[0].assignmentdescription,
                assignmentFilename: `${result.data.assignmentDetail[0].filename}.${(result.data.assignmentDetail[0].filetype).trim()}`,
                lessonsList: result.data.lessons
            })
        });
    }, [5]);
    // console.log(`${process.env.PUBLIC_URL}/${courseID}/assignments/${state.assignmentFilename}`);
    const resLessons = [];
    var lessonPath;
    for (let i = 0; i < state.lessonsList.length; i++) {
        if (search.pathname.split("/")[4] === undefined) {
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
    return (
        <Fragment>
            <LecturerNavBar>
                <div id="lecturerAssignmentDetail" className="d-flex" style={{ padding: "2rem" }}>
                    <div className="courseSection" style={{ width: "70%" }}>
                        <h3 className="mt-4" style={{ fontWeight: "600" }}>{state.courseName} - Assignments</h3>
                        <Breadcrumb className="breadcrumb mb-0">
                            <Breadcrumb.Item href={lecturerDashboardPath}>Dashboard</Breadcrumb.Item>
                            <Breadcrumb.Item href={myCoursesPath}>My Courses</Breadcrumb.Item>
                            <Breadcrumb.Item href={courseDetailPath}>{state.courseName}</Breadcrumb.Item>
                            <Breadcrumb.Item href={assignmentPath}>Assignments</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="currentAssignmentDetail">
                            <h4 className="currentAssignmentName my-3" style={{ fontWeight: "600" }}>{assignmentName}</h4>
                            <Form className="editAssignmentForm w-75">
                                <FormGroup className="assignmentNameGroup mb-3">
                                    <FormLabel className="fw-bold" htmlFor="assignmentName">Assignment Name:</FormLabel>
                                    <FormControl id="assignmentName" name="assignmentName" placeholder="Assignment Name" value={assignmentName} style={{ border: "2px solid black" }} disabled />
                                </FormGroup>
                                <FormGroup className="assignmentDescGroup mb-3">
                                    <FormLabel className="fw-bold" htmlFor="assignmentDesc">Description:</FormLabel>
                                    <FormControl id="assignmentDesc" className="p-3" name="assignmentDesc" as="textarea" rows={6} placeholder="Assignment Description"
                                        value={state.assignmentDescription}
                                        style={{ overflowWrap: "break-word", resize: "none", textAlign: "justify", border: "2px solid black" }} disabled />
                                </FormGroup>
                                <FormGroup className="assignmentNameGroup mb-3">
                                    <FormLabel className="fw-bold" htmlFor="assignmentFile">Attach File:</FormLabel>
                                    <FormControl id="assignmentFile" name="assignmentFile" type="text" value={state.assignmentFilename} style={{ border: "2px solid black" }} disabled />
                                </FormGroup>
                                <div className="d-flex justify-content-center">
                                    <Button id="editBtn" className="px-4" type="button" onClick={() => {
                                        document.getElementById("editBtn").style.display = "none";
                                        document.getElementById("saveBtn").style.display = "flex";
                                        document.getElementById("assignmentName").removeAttribute("disabled");
                                        document.getElementById("assignmentDesc").removeAttribute("disabled");
                                        document.getElementById("assignmentFile").removeAttribute("disabled");
                                        document.getElementById("assignmentFile").type = "file";
                                    }}>Edit</Button>
                                    <Button id="saveBtn" className="px-4" type="submit" style={{display: "none"}} onClick={(event) => {
                                        event.preventDefault();
                                        document.getElementById("saveBtn").style.display = "none";
                                        document.getElementById("editBtn").style.display = "flex";
                                        document.getElementById("assignmentName").disabled = true;
                                        document.getElementById("assignmentDesc").disabled = true;
                                        document.getElementById("assignmentFile").disabled = true;
                                        document.getElementById("assignmentFile").type = "text";
                                    }}>Save</Button>
                                </div>
                            </Form>
                            <div id="submittedGroup" className="w-75 mt-3 d-flex align-items-center">
                                <p className="fw-bold m-0 me-3">Number of student submitted: </p>
                                <p className="m-0 me-3 py-1 px-2" style={{ border: "2px solid black", borderRadius: "8px", backgroundColor: "rgba(0, 0, 0, 0.1)" }}>0</p>
                                <Button className="viewSubmittedBtn" href="/LecturerSubmittedList">View list</Button>
                            </div>
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
export default StudentAssignmentDetail;