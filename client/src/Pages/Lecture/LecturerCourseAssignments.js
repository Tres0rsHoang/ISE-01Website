import React, { Fragment } from "react";
import { Content } from "../../Components/Content";
import { Button, Breadcrumb } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import fileIcon from "../../img/fileIcon.svg";

function LecturerCourseAssignments() {
    return (
        <Fragment>
            <Content>
                <div id="lecturerCourseAssignments" className="d-flex" style={{ padding: "2rem" }}>
                    <div className="courseSection" style={{ width: "70%" }}>
                        <div className="courseTitleBtn d-flex justify-content-between align-items-center">
                            <h3 className="mt-4" style={{ width: "70%", fontWeight: "600" }}>Intro To Software Engineering - Assignments</h3>
                            <Button className="newAssignmentBtn mt-4 me-5 d-flex justify-content-center align-items-center" style={{ height: "36px" }}>New Assignment</Button>
                        </div>
                        <Breadcrumb className="breadcrumb mb-0">
                            <Breadcrumb.Item href="/LecturerDashboard">Dashboard</Breadcrumb.Item>
                            <Breadcrumb.Item href="/LecturerMyCourses">My Courses</Breadcrumb.Item>
                            <Breadcrumb.Item href="/LecturerCourseDetail">Intro To Software Engineering</Breadcrumb.Item>
                            <Breadcrumb.Item href="/LecturerCourseAssignments">Assignments</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="listAssignments mt-3 d-flex flex-column justify-content-start" style={{ maxHeight: "520px" }}>
                            <NavLink to="/LecturerAssignmentDetail" className="assignment w-75 pb-3 mb-4 d-flex align-items-center" style={{ fontWeight: "600" }}>
                                <Button className="assignmentButton mx-3 d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px" }}>
                                    <img src={fileIcon} alt="fileIcon"></img>
                                </Button>
                                <p className="assignmentName w-75 mb-0">Assignment 1 - Due: 12/12/2022</p>
                            </NavLink>
                            <NavLink to="/LecturerAssignmentDetail" className="assignment w-75 pb-3 mb-4 d-flex align-items-center" style={{ fontWeight: "600" }}>
                                <Button className="assignmentButton mx-3 d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px" }}>
                                    <img src={fileIcon} alt="fileIcon"></img>
                                </Button>
                                <p className="assignmentName w-75 mb-0">Assignment 2 - Due: 12/12/2022</p>
                            </NavLink>
                            <NavLink to="/LecturerAssignmentDetail" className="assignment w-75 pb-3 mb-4 d-flex align-items-center" style={{ fontWeight: "600" }}>
                                <Button className="assignmentButton mx-3 d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px" }}>
                                    <img src={fileIcon} alt="fileIcon"></img>
                                </Button>
                                <p className="assignmentName w-75 mb-0">Assignment 3 - Due: 12/12/2022</p>
                            </NavLink>
                            <NavLink to="/LecturerAssignmentDetail" className="assignment w-75 pb-3 mb-4 d-flex align-items-center" style={{ fontWeight: "600" }}>
                                <Button className="assignmentButton mx-3 d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px" }}>
                                    <img src={fileIcon} alt="fileIcon"></img>
                                </Button>
                                <p className="assignmentName w-75 mb-0">Assignment 4 - Due: 12/12/2022</p>
                            </NavLink>
                            <NavLink to="/LecturerAssignmentDetail" className="assignment w-75 pb-3 mb-4 d-flex align-items-center" style={{ fontWeight: "600" }}>
                                <Button className="assignmentButton mx-3 d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px" }}>
                                    <img src={fileIcon} alt="fileIcon"></img>
                                </Button>
                                <p className="assignmentName w-75 mb-0">Assignment 5 - Due: 12/12/2022</p>
                            </NavLink>
                        </div>
                    </div>
                    <div className="lessonSection" style={{ width: "30%" }}>
                        <div className="lessonTitleGroup pt-4 pb-5 d-flex justify-content-between align-items-center">
                            <h4 className="mb-0 ps-3 d-flex align-items-center" style={{ fontWeight: "600" }}>Lessons</h4>
                            <Button className="d-flex justify-content-center align-items-center" style={{ height: "36px" }}>New Lesson</Button>
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
export default LecturerCourseAssignments;