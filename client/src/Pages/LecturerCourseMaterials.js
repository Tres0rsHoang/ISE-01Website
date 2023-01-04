import React, { Fragment } from "react";
import { Content } from "../Components/Content";
import { Button, Breadcrumb } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faTrash } from '@fortawesome/free-solid-svg-icons'
import fileIcon from "../img/fileIcon.svg";


function LecturerCourseMaterials() {
    return (
        <Fragment>
            <Content>
                <div id="lecturerCourseMaterials" className="d-flex" style={{ padding: "2rem" }}>
                    <div className="courseSection" style={{ width: "70%" }}>
                        <div className="courseTitleBtn d-flex justify-content-between align-items-center">
                            <h3 className="mt-4" style={{ width: "70%", fontWeight: "600" }}>Intro To Software Engineering - Materials</h3>
                            <Button className="uploadMaterialBtn mt-4 me-5 d-flex justify-content-center align-items-center" style={{ height: "36px" }}>Upload New File</Button>
                        </div>
                        <Breadcrumb className="breadcrumb mb-0">
                            <Breadcrumb.Item href="/LecturerDashboard">Dashboard</Breadcrumb.Item>
                            <Breadcrumb.Item href="/LecturerMyCourses">My Courses</Breadcrumb.Item>
                            <Breadcrumb.Item href="/LecturerCourseDetail">Intro To Software Engineering</Breadcrumb.Item>
                            <Breadcrumb.Item href="/LecturerCourseMaterials">Materials</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="listMaterials mt-3 d-flex flex-column justify-content-start" style={{ maxHeight: "520px" }}>
                            <div className="material w-75 pb-3 mb-4 d-flex align-items-center" style={{ fontWeight: "600" }}>
                                <p className="materialName w-75 ps-3 mb-0">File Material For Course</p>
                                <Button className="downloadButton me-3" style={{ width: "40px", height: "40px" }}>
                                    <FontAwesomeIcon icon={faDownload}/>
                                </Button>
                                <Button className="deleteButton" style={{ width: "40px", height: "40px" }}>
                                    <FontAwesomeIcon icon={faTrash}/>
                                </Button>
                            </div>
                            <div className="material w-75 pb-3 mb-4 d-flex align-items-center" style={{ fontWeight: "600" }}>
                                <p className="materialName w-75 ps-3 mb-0">File Material For Course</p>
                                <Button className="downloadButton me-3" style={{ width: "40px", height: "40px" }}>
                                    <FontAwesomeIcon icon={faDownload}/>
                                </Button>
                                <Button className="deleteButton" style={{ width: "40px", height: "40px" }}>
                                    <FontAwesomeIcon icon={faTrash}/>
                                </Button>
                            </div>
                            <div className="material w-75 pb-3 mb-4 d-flex align-items-center" style={{ fontWeight: "600" }}>
                                <p className="materialName w-75 ps-3 mb-0">File Material For Course</p>
                                <Button className="downloadButton me-3" style={{ width: "40px", height: "40px" }}>
                                    <FontAwesomeIcon icon={faDownload}/>
                                </Button>
                                <Button className="deleteButton" style={{ width: "40px", height: "40px" }}>
                                    <FontAwesomeIcon icon={faTrash}/>
                                </Button>
                            </div>
                            <div className="material w-75 pb-3 mb-4 d-flex align-items-center" style={{ fontWeight: "600" }}>
                                <p className="materialName w-75 ps-3 mb-0">File Material For Course</p>
                                <Button className="downloadButton me-3" style={{ width: "40px", height: "40px" }}>
                                    <FontAwesomeIcon icon={faDownload}/>
                                </Button>
                                <Button className="deleteButton" style={{ width: "40px", height: "40px" }}>
                                    <FontAwesomeIcon icon={faTrash}/>
                                </Button>
                            </div>
                            <div className="material w-75 pb-3 mb-4 d-flex align-items-center" style={{ fontWeight: "600" }}>
                                <p className="materialName w-75 ps-3 mb-0">File Material For Course</p>
                                <Button className="downloadButton me-3" style={{ width: "40px", height: "40px" }}>
                                    <FontAwesomeIcon icon={faDownload}/>
                                </Button>
                                <Button className="deleteButton" style={{ width: "40px", height: "40px" }}>
                                    <FontAwesomeIcon icon={faTrash}/>
                                </Button>
                            </div>
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
                            <Button href="/LecturerCourseAssignments" className="assignmentsBtn w-50 mb-4 d-flex justify-content-center align-items-center" style={{ height: "44px" }}><img className="me-2" src={fileIcon} alt="fileIcon"></img>Assignments</Button>
                            <Button href="/LecturerCourseMaterials" className="materialsBtn w-50 d-flex justify-content-center align-items-center" style={{ height: "44px" }}><img className="me-2" src={fileIcon} alt="fileIcon"></img>Materials</Button>
                        </div>
                    </div>
                </div>
            </Content>
        </Fragment>
    );
}
export default LecturerCourseMaterials;