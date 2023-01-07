import React, { Component, Fragment } from "react";
import { LecturerNavBar } from "../../Components/LecturerNavBar";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import coursesThumbnail from "../../img/CoursesThumbnail.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

class LecturerMyCourses extends Component {
    state = {
        courseList: []
    }
    componentDidMount() {
        axios.get('/Lecturer/Courses', { params: { userId: 4 } }).then(result => {
            this.setState({
                courseList: result.data.list
            });
        });
    }
    render() {
        
        const res = []
        this.state.courseList.forEach((course, index) => {
            var courseURL = "/Lecturer/Courses/" + course.courseid;
            console.log(courseURL);
            res.push(
                <NavLink to={courseURL} className="d-flex justify-content-center mb-5 mx-5" style={{ width: "25%", color: "black" }}>
                    <Card className="cardDashboard" style={{ width: "100%" }}>
                        <img src={coursesThumbnail} alt="courses thumbnail"></img>
                        <p className="courseName mt-3 px-3" style={{ fontSize: "1.25rem" }}>{course.coursename}</p>
                        <div className="courseDescription px-3">
                            <p className="lecturerName" style={{ fontSize: "0.8rem" }}><FontAwesomeIcon className="me-2" icon={faUser}/>{course.fullname}</p>
                        </div>
                    </Card>
                </NavLink>
            );
        });
        return (
            <Fragment>
                <LecturerNavBar>
                    <div id="lecturerMyCourses" style={{ padding: "2rem" }}>
                        <h3 className="my-4" style={{ fontWeight: "600" }}>My Courses</h3>
                        <div id="listOfCourse" className="d-flex justify-content-between flex-wrap">
                            {res}
                            {/* <NavLink to="/LecturerCourseDetail" className="d-flex justify-content-center mb-5 mx-5" style={{ width: "25%", color: "black" }}>
                                <Card className="cardDashboard" style={{ width: "100%" }}>
                                    <img src={coursesThumbnail} alt="courses thumbnail"></img>
                                    <p className="courseName mt-3 px-3" style={{ fontSize: "1.25rem" }}>Intro To Software Engineering</p>
                                    <div className="courseDescription px-3 d-flex justify-content-between">
                                        <p className="lecturerName" style={{ fontSize: "0.8rem" }}><i className="fa-solid fa-user me-2"></i>Mai Anh Tuan</p>
                                    </div>
                                </Card>
                            </NavLink>
                            <NavLink to="/LecturerCourseDetail" className="d-flex justify-content-center mb-5 mx-5" style={{ width: "25%", color: "black" }}>
                                <Card className="cardDashboard" style={{ width: "100%" }}>
                                    <img src={coursesThumbnail} alt="courses thumbnail"></img>
                                    <p className="courseName mt-3 px-3" style={{ fontSize: "1.25rem" }}>Intro To Software Engineering</p>
                                    <div className="courseDescription px-3 d-flex justify-content-between">
                                        <p className="lecturerName" style={{ fontSize: "0.8rem" }}><i className="fa-solid fa-user me-2"></i>Mai Anh Tuan</p>
                                    </div>
                                </Card>
                            </NavLink>
                            <NavLink to="/LecturerCourseDetail" className="d-flex justify-content-center mb-5 mx-5" style={{ width: "25%", color: "black" }}>
                                <Card className="cardDashboard" style={{ width: "100%" }}>
                                    <img src={coursesThumbnail} alt="courses thumbnail"></img>
                                    <p className="courseName mt-3 px-3" style={{ fontSize: "1.25rem" }}>Intro To Software Engineering</p>
                                    <div className="courseDescription px-3 d-flex justify-content-between">
                                        <p className="lecturerName" style={{ fontSize: "0.8rem" }}><i className="fa-solid fa-user me-2"></i>Mai Anh Tuan</p>
                                    </div>
                                </Card>
                            </NavLink>
                            <NavLink to="/LecturerCourseDetail" className="d-flex justify-content-center mb-5 mx-5" style={{ width: "25%", color: "black" }}>
                                <Card className="cardDashboard" style={{ width: "100%" }}>
                                    <img src={coursesThumbnail} alt="courses thumbnail"></img>
                                    <p className="courseName mt-3 px-3" style={{ fontSize: "1.25rem" }}>Intro To Software Engineering</p>
                                    <div className="courseDescription px-3 d-flex justify-content-between">
                                        <p className="lecturerName" style={{ fontSize: "0.8rem" }}><i className="fa-solid fa-user me-2"></i>Mai Anh Tuan</p>
                                    </div>
                                </Card>
                            </NavLink>
                            <NavLink to="/LecturerCourseDetail" className="d-flex justify-content-center mb-5 mx-5" style={{ width: "25%", color: "black" }}>
                                <Card className="cardDashboard" style={{ width: "100%" }}>
                                    <img src={coursesThumbnail} alt="courses thumbnail"></img>
                                    <p className="courseName mt-3 px-3" style={{ fontSize: "1.25rem" }}>Intro To Software Engineering</p>
                                    <div className="courseDescription px-3 d-flex justify-content-between">
                                        <p className="lecturerName" style={{ fontSize: "0.8rem" }}><i className="fa-solid fa-user me-2"></i>Mai Anh Tuan</p>
                                    </div>
                                </Card>
                            </NavLink>
                            <NavLink to="/LecturerCourseDetail" className="d-flex justify-content-center mb-5 mx-5" style={{ width: "25%", color: "black" }}>
                                <Card className="cardDashboard" style={{ width: "100%" }}>
                                    <img src={coursesThumbnail} alt="courses thumbnail"></img>
                                    <p className="courseName mt-3 px-3" style={{ fontSize: "1.25rem" }}>Intro To Software Engineering</p>
                                    <div className="courseDescription px-3 d-flex justify-content-between">
                                        <p className="lecturerName" style={{ fontSize: "0.8rem" }}><i className="fa-solid fa-user me-2"></i>Mai Anh Tuan</p>
                                    </div>
                                </Card>
                            </NavLink> */}
                        </div>
                    </div>
                </LecturerNavBar>
            </Fragment>
        );
    }
}
export default LecturerMyCourses;