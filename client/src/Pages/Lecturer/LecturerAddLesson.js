import React, { Fragment, useEffect, useState } from "react";
import { LecturerNavBar } from "../../Components/LecturerNavBar";
import { Button, Breadcrumb, Form, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import fileIcon from "../../img/fileIcon.svg";
import axios from "axios";

function LecturerCourseAssignments() {
    const search = useLocation();
    const courseID = search.pathname.split("/")[3];
    const assignmentPath = search.pathname.replace(search.pathname.split("/")[4], "Assignments");
    const materialPath = search.pathname.replace(search.pathname.split("/")[4], "Materials");
    const courseDetailPath = assignmentPath.substring(0, assignmentPath.lastIndexOf("/"));
    const myCoursesPath = courseDetailPath.substring(0, courseDetailPath.lastIndexOf("/"));
    const lecturerDashboardPath = myCoursesPath.substring(0, myCoursesPath.lastIndexOf("/"));
    const [state, setState] = useState({
        courseName: '',
        lessonsList: [],
    });
    useEffect(() => {
        axios.get('/Lecturer/AddLesson', { params: { userId: 4, courseId: courseID } }).then(result => {
            setState({
                courseName: result.data.courseName.coursename,
                lessonsList: result.data.lessons
            })
        });
    }, [5]);
    const resLessons = [];
    var lessonPath;
    for (let i = 0; i < state.lessonsList.length; i++) {
        lessonPath = assignmentPath.replace(assignmentPath.split("/")[4], state.lessonsList[i].lessonname.split("-")[0]);
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
    async function addNewLesson(event){
        event.preventDefault();
        const newLesson = {
            courseId: courseID,
            lessonName: event.target.lessonName.value,
            lessonDesc: event.target.lessonDesc.value,
            lessonLink: event.target.lessonLink.value
        }
        await axios.post('/Lecturer/AddLesson', newLesson).then(   
            res => {
                var addMess = res.data.addMess;
                if(addMess === 'Add new lesson successfully'){
                    alert(addMess);
                    window.location.assign(courseDetailPath);
                }
                else alert(addMess);
            }
        )
    }
    return (
        <Fragment>
            <LecturerNavBar>
                <div id="lecturerAddLesson" className="d-flex" style={{ padding: "2rem" }}>
                    <div className="courseSection" style={{ width: "70%" }}>
                        <div className="courseTitleBtn d-flex justify-content-between align-items-center">
                            <h3 className="mt-4" style={{ width: "70%", fontWeight: "600" }}>{state.courseName} - Add New Lesson</h3>
                        </div>
                        <Breadcrumb className="breadcrumb mb-0">
                            <Breadcrumb.Item href={lecturerDashboardPath}>Dashboard</Breadcrumb.Item>
                            <Breadcrumb.Item href={myCoursesPath}>My Courses</Breadcrumb.Item>
                            <Breadcrumb.Item href={courseDetailPath}>{state.courseName}</Breadcrumb.Item>
                        </Breadcrumb>
                        <Form className="addLessonForm w-75" onSubmit={event => addNewLesson(event)}>
                            <FormGroup className="lessonNameGroup mb-3">
                                <FormLabel className="fw-bold" htmlFor="lessonName">Lesson Name:</FormLabel>
                                <FormControl id="lessonName" name="lessonName" placeholder="Lesson Number - Lesson Name" style={{ border: "2px solid black" }} required/>
                            </FormGroup>
                            <FormGroup className="lessonDescGroup mb-3">
                                <FormLabel className="fw-bold" htmlFor="lessonDesc">Description:</FormLabel>
                                <FormControl id="lessonDesc" className="p-2" name="lessonDesc" as="textarea" rows={6} placeholder="Lesson Description"
                                    style={{ overflowWrap: "break-word", resize: "none", textAlign: "justify", border: "2px solid black" }}/>
                            </FormGroup>
                            <FormGroup className="lessonLinkGroup mb-3">
                                <FormLabel className="fw-bold" htmlFor="lessonLink">Link for lesson video:</FormLabel>
                                <FormControl id="lessonLink" name="lessonLink" type="text" placeholder="Link for lesson video" style={{ border: "2px solid black" }} required/>
                            </FormGroup>
                            <div className="d-flex justify-content-center">
                                <Button id="addBtn" className="px-4" type="submit">Add</Button>
                            </div>
                        </Form>
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
export default LecturerCourseAssignments;