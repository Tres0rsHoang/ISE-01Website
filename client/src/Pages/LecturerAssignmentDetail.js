import React, { Fragment } from "react";
import { Content } from "../Components/Content";
import { Button, Breadcrumb, Form, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import fileIcon from "../img/fileIcon.svg";
function LecturerAssignmentDetail() {
    return (
        <Fragment>
            <Content>
                <div id="lecturerAssignmentDetail" className="d-flex" style={{ padding: "2rem" }}>
                    <div className="courseSection" style={{ width: "70%" }}>
                        <h3 className="mt-4" style={{ fontWeight: "600" }}>Intro To Software Engineering - Assignments</h3>
                        <Breadcrumb className="breadcrumb mb-0">
                            <Breadcrumb.Item href="/LecturerDashboard">Dashboard</Breadcrumb.Item>
                            <Breadcrumb.Item href="/LecturerMyCourses">My Courses</Breadcrumb.Item>
                            <Breadcrumb.Item href="/LecturerCourseDetail">Intro To Software Engineering</Breadcrumb.Item>
                            <Breadcrumb.Item href="/LecturerCourseAssignments">Assignments</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="currentAssignmentDetail">
                            <h4 className="currentAssignmentName my-3" style={{ fontWeight: "600" }}>Assignment 02</h4>
                            <Form className="editAssignmentForm w-75">
                                <FormGroup className="assignmentNameGroup mb-3">
                                    <FormLabel className="fw-bold" for="assignmentName">Assignment Name:</FormLabel>
                                    <FormControl id="assignmentName" name="assignmentName" placeholder="Assignment Name" value="Assignment 02" style={{border: "2px solid black"}} disabled/>
                                </FormGroup>
                                <FormGroup className="assignmentDescGroup mb-3">
                                    <FormLabel className="fw-bold" for="assignmentDesc">Description:</FormLabel>
                                    <FormControl id="assignmentDesc" className="p-3" name="assignmentDesc" as="textarea" rows={6} placeholder="Assignment Description" 
                                                 value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere fermentum ultrices. Aliquam non enim iaculis, dignissim metus non, tincidunt velit. Sed porttitor nisi vitae orci lacinia vulputate. Nulla dapibus velit nec eros rutrum cursus. Nullam consequat lorem purus, eu suscipit justo placerat eget. Phasellus nisi elit, auctor ut felis eget, semper interdum diam. Aliquam egestas posuere dolor. Etiam ac lorem maximus, sodales justo vel, molestie lectus. Sed rutrum quam eu libero fermentum, nec vehicula mauris suscipit."
                                                 style={{overflowWrap: "break-word", resize: "none", textAlign:"justify", border: "2px solid black"}} disabled/>
                                </FormGroup>
                                <FormGroup className="assignmentNameGroup mb-3">
                                    <FormLabel className="fw-bold" for="assignmentFile">Attach File:</FormLabel>
                                    <FormControl id="assignmentFile" name="assignmentFile" type="file" style={{border: "2px solid black"}} disabled/>
                                </FormGroup>
                                <div className="d-flex justify-content-center">
                                    <Button className="px-4" type="button">Edit</Button>
                                </div>
                            </Form>
                            <div id="submittedGroup" className="w-75 mt-3 d-flex align-items-center">
                                <p className="fw-bold m-0 me-3">Number of student submitted: </p>
                                <p className="m-0 me-3 py-1 px-2" style={{border: "2px solid black", borderRadius: "8px", backgroundColor: "rgba(0, 0, 0, 0.1)"}}>50/53</p>
                                <Button className="viewSubmittedBtn" href="/LecturerSubmittedList">View list</Button>
                            </div>
                        </div>
                    </div>
                    <div className="lessonSection" style={{ width: "30%" }}>
                        <div className="lessonTitleGroup pt-4 pb-5 d-flex justify-content-between align-items-center">
                            <h4 className="mb-0 ps-3 d-flex align-items-center" style={{ fontWeight: "600" }}>Lessons</h4>
                        </div>
                        <ul className="lessonList ps-3" style={{ height: "404px" }}>
                            <NavLink to="/LecturerCourseDetail">
                                <li className="lesson mb-3">
                                    <p className="lessonName mb-1" style={{ fontWeight: "600" }}>Lesson Name</p>
                                    <div className="lessonDetail d-flex align-items-center" style={{ fontSize: "0.8rem", opacity: "0.7" }}>
                                        <p className="lessonNum" >Lesson 1</p>
                                        <p className="mx-2">&#183;</p>
                                        <p className="lessonLength">10 mins</p>
                                    </div>
                                </li>
                            </NavLink>
                            <NavLink to="/LecturerCourseDetail">
                                <li className="lesson mb-3">
                                    <p className="lessonName mb-1" style={{ fontWeight: "600" }}>Lesson Name</p>
                                    <div className="lessonDetail d-flex align-items-center" style={{ fontSize: "0.8rem", opacity: "0.7" }}>
                                        <p className="lessonNum" >Lesson 1</p>
                                        <p className="mx-2">&#183;</p>
                                        <p className="lessonLength">10 mins</p>
                                    </div>
                                </li>
                            </NavLink>
                            <NavLink to="/LecturerCourseDetail">
                                <li className="lesson mb-3">
                                    <p className="lessonName mb-1" style={{ fontWeight: "600" }}>Lesson Name</p>
                                    <div className="lessonDetail d-flex align-items-center" style={{ fontSize: "0.8rem", opacity: "0.7" }}>
                                        <p className="lessonNum" >Lesson 1</p>
                                        <p className="mx-2">&#183;</p>
                                        <p className="lessonLength">10 mins</p>
                                    </div>
                                </li>
                            </NavLink>
                            <NavLink to="/LecturerCourseDetail">
                                <li className="lesson mb-3">
                                    <p className="lessonName mb-1" style={{ fontWeight: "600" }}>Lesson Name</p>
                                    <div className="lessonDetail d-flex align-items-center" style={{ fontSize: "0.8rem", opacity: "0.7" }}>
                                        <p className="lessonNum" >Lesson 1</p>
                                        <p className="mx-2">&#183;</p>
                                        <p className="lessonLength">10 mins</p>
                                    </div>
                                </li>
                            </NavLink>
                            <NavLink to="/LecturerCourseDetail">
                                <li className="lesson mb-3">
                                    <p className="lessonName mb-1" style={{ fontWeight: "600" }}>Lesson Name</p>
                                    <div className="lessonDetail d-flex align-items-center" style={{ fontSize: "0.8rem", opacity: "0.7" }}>
                                        <p className="lessonNum" >Lesson 1</p>
                                        <p className="mx-2">&#183;</p>
                                        <p className="lessonLength">10 mins</p>
                                    </div>
                                </li>
                            </NavLink>
                        </ul>
                        <div className="courseElementBtns pt-5 d-flex flex-column align-items-center">
                            <Button href="/LecturerCourseAssignments" className="assignmentsBtn w-50 mb-4" style={{ height: "44px" }}><img className="me-2" src={fileIcon} alt="fileIcon"></img>Assignments</Button>
                            <Button href="/LecturerCourseMaterials" className="materialsBtn w-50" style={{ height: "44px" }}><img className="me-2" src={fileIcon} alt="fileIcon"></img>Materials</Button>
                        </div>
                    </div>
                </div>
            </Content>
        </Fragment>
    );
}
export default LecturerAssignmentDetail;