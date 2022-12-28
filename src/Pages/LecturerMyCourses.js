import React, { Fragment } from "react";
import { Content } from "../Components/Content";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import coursesThumbnail from "../img/CoursesThumbnail.svg";
function LecturerMyCourses() {
    return (
        <Fragment>
            <Content>
                <div id="lecturerMyCourses" style={{ padding: "2rem" }}>
                    <h3 className = "my-4" style={{ fontWeight: "600" }}>My Courses</h3>
                    <div id="listOfCourse" className="d-flex justify-content-between flex-wrap">
                        <NavLink to="/LecturerCourseDetail" className="d-flex justify-content-center mb-5 mx-5" style={{ width: "25%", color: "black" }}>
                            <Card className="cardDashboard" style={{width:"100%"}}>
                                <img src={coursesThumbnail} alt="courses thumbnail"></img>
                                <p className="courseName mt-3 px-3" style={{fontSize: "1.25rem"}}>Intro To Software Engineering</p>
                                <div className="courseDescription px-3 d-flex justify-content-between">
                                    <p className="lecturerName" style={{fontSize: "0.8rem"}}><i className="fa-solid fa-user me-2"></i>Mai Anh Tuan</p>
                                    <p className="courseDetail" style={{fontSize: "0.8rem"}}>12 lessons &#183; 7 quizzes</p>
                                </div>
                            </Card>
                        </NavLink>
                        <NavLink to="/LecturerCourseDetail" className="d-flex justify-content-center mb-5 mx-5" style={{ width: "25%", color: "black" }}>
                            <Card className="cardDashboard" style={{width:"100%"}}>
                                <img src={coursesThumbnail} alt="courses thumbnail"></img>
                                <p className="courseName mt-3 px-3" style={{fontSize: "1.25rem"}}>Intro To Software Engineering</p>
                                <div className="courseDescription px-3 d-flex justify-content-between">
                                    <p className="lecturerName" style={{fontSize: "0.8rem"}}><i className="fa-solid fa-user me-2"></i>Mai Anh Tuan</p>
                                    <p className="courseDetail" style={{fontSize: "0.8rem"}}>12 lessons &#183; 7 quizzes</p>
                                </div>
                            </Card>
                        </NavLink>
                        <NavLink to="/LecturerCourseDetail" className="d-flex justify-content-center mb-5 mx-5" style={{ width: "25%", color: "black" }}>
                            <Card className="cardDashboard" style={{width:"100%"}}>
                                <img src={coursesThumbnail} alt="courses thumbnail"></img>
                                <p className="courseName mt-3 px-3" style={{fontSize: "1.25rem"}}>Intro To Software Engineering</p>
                                <div className="courseDescription px-3 d-flex justify-content-between">
                                    <p className="lecturerName" style={{fontSize: "0.8rem"}}><i className="fa-solid fa-user me-2"></i>Mai Anh Tuan</p>
                                    <p className="courseDetail" style={{fontSize: "0.8rem"}}>12 lessons &#183; 7 quizzes</p>
                                </div>
                            </Card>
                        </NavLink>
                        <NavLink to="/LecturerCourseDetail" className="d-flex justify-content-center mb-5 mx-5" style={{ width: "25%", color: "black" }}>
                            <Card className="cardDashboard" style={{width:"100%"}}>
                                <img src={coursesThumbnail} alt="courses thumbnail"></img>
                                <p className="courseName mt-3 px-3" style={{fontSize: "1.25rem"}}>Intro To Software Engineering</p>
                                <div className="courseDescription px-3 d-flex justify-content-between">
                                    <p className="lecturerName" style={{fontSize: "0.8rem"}}><i className="fa-solid fa-user me-2"></i>Mai Anh Tuan</p>
                                    <p className="courseDetail" style={{fontSize: "0.8rem"}}>12 lessons &#183; 7 quizzes</p>
                                </div>
                            </Card>
                        </NavLink>
                        <NavLink to="/LecturerCourseDetail" className="d-flex justify-content-center mb-5 mx-5" style={{ width: "25%", color: "black" }}>
                            <Card className="cardDashboard" style={{width:"100%"}}>
                                <img src={coursesThumbnail} alt="courses thumbnail"></img>
                                <p className="courseName mt-3 px-3" style={{fontSize: "1.25rem"}}>Intro To Software Engineering</p>
                                <div className="courseDescription px-3 d-flex justify-content-between">
                                    <p className="lecturerName" style={{fontSize: "0.8rem"}}><i className="fa-solid fa-user me-2"></i>Mai Anh Tuan</p>
                                    <p className="courseDetail" style={{fontSize: "0.8rem"}}>12 lessons &#183; 7 quizzes</p>
                                </div>
                            </Card>
                        </NavLink>
                        <NavLink to="/LecturerCourseDetail" className="d-flex justify-content-center mb-5 mx-5" style={{ width: "25%", color: "black" }}>
                            <Card className="cardDashboard" style={{width:"100%"}}>
                                <img src={coursesThumbnail} alt="courses thumbnail"></img>
                                <p className="courseName mt-3 px-3" style={{fontSize: "1.25rem"}}>Intro To Software Engineering</p>
                                <div className="courseDescription px-3 d-flex justify-content-between">
                                    <p className="lecturerName" style={{fontSize: "0.8rem"}}><i className="fa-solid fa-user me-2"></i>Mai Anh Tuan</p>
                                    <p className="courseDetail" style={{fontSize: "0.8rem"}}>12 lessons &#183; 7 quizzes</p>
                                </div>
                            </Card>
                        </NavLink>
                    </div>
                </div>
            </Content>
        </Fragment>
    );
}
export default LecturerMyCourses;