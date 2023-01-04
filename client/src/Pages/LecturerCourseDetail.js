import React, { Component, Fragment } from "react";
import { Content } from "../Components/Content";
import { Button, Breadcrumb } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import sampleVideo from "../img/sampleMP4Video.mp4";
import fileIcon from "../img/fileIcon.svg";
import axios from "axios";
class LecturerCourseDetail extends Component {
    state = {
        courseName: '',
        lecturerName: '',
        lessonName: '',
        lessonDescription: '',
        lessonsList: []
    }
    componentDidMount() {
        axios.get('/Lecturer/CourseDetail', { params: { userId: 4, courseId: 'CSC101', lessonName: 'Lesson 01' } }).then(result => {
            console.log(result);
            this.setState({
                courseName: result.data.courseDetail.coursename,
                lecturerName: result.data.courseDetail.fullname,
                lessonName: result.data.courseDetail.lessonname,
                lessonDescription: result.data.courseDetail.lessondescription,
                lessonsList: result.data.lessons
            })
            console.log(this.state);
        });
    }
    render() {
        const resLessons = []
        this.state.lessonsList.forEach((lesson, index) => {
            resLessons.push(
                <NavLink to="/LecturerCourseDetail">
                    <li className="lesson mb-3">
                        <p className="lessonName mb-1" style={{ fontWeight: "600" }}>{lesson.lessonname.split("-")[1]}</p>
                        <div className="lessonDetail d-flex align-items-center" style={{ fontSize: "0.8rem", opacity: "0.7" }}>
                            <p className="lessonNum" >{lesson.lessonname.split("-")[0]}</p>
                            {/* <p className="mx-2">&#183;</p>
                            <p className="lessonLength">10 mins</p> */}
                        </div>
                    </li>
                </NavLink>
            )
        });
        return (
            <Fragment>
                <Content>
                    <div id="lecturerCourseDetail" className="d-flex" style={{ padding: "2rem" }}>
                        <div className="courseSection" style={{ width: "70%" }}>
                            <h3 className="mt-4" style={{ fontWeight: "600" }}>Intro To Software Engineering</h3>
                            <Breadcrumb className="breadcrumb mb-0">
                                <Breadcrumb.Item href="/LecturerDashboard">Dashboard</Breadcrumb.Item>
                                <Breadcrumb.Item href="/LecturerMyCourses">My Courses</Breadcrumb.Item>
                                <Breadcrumb.Item href="/LecturerCourseDetail">{this.state.courseName}</Breadcrumb.Item>
                            </Breadcrumb>
                            <video src={sampleVideo} width="90%" height="auto" style={{ borderRadius: "32px" }} controls></video>
                            <div className="currentLessonDetail">
                                <h4 className="currentLessonName mt-4 mb-2" style={{ fontWeight: "600" }}>{this.state.lessonName}</h4>
                                <p className="lecturerName" style={{ fontWeight: "600" }}>{this.state.lecturerName}</p>
                                <p className="currentLessonDesc" style={{ width: "90%", fontSize: "0.8rem", textAlign: "justify" }}>
                                    {this.state.lessonDescription}
                                    {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus sit amet nisi et congue. Aliquam viverra
                                    interdum rutrum. Curabitur lobortis dui metus. Fusce a arcu mauris. Praesent feugiat bibendum tincidunt.
                                    Nam eu malesuada nisl. Vestibulum posuere imperdiet volutpat. Donec metus massa, hendrerit sit amet ante quis,
                                    mollis dictum risus. Vivamus auctor nibh tellus, eget sollicitudin tortor sollicitudin ac. Nulla facilisi.
                                    Sed tincidunt mattis feugiat. Donec porttitor ante ac magna viverra lacinia. */}
                                </p>
                            </div>
                        </div>
                        <div className="lessonSection" style={{ width: "30%" }}>
                            <div className="lessonTitleGroup pt-4 pb-5 d-flex justify-content-between align-items-center">
                                <h4 className="mb-0 ps-3 d-flex align-items-center" style={{ fontWeight: "600" }}>Lessons</h4>
                                <Button className="d-flex justify-content-center align-items-center" style={{ height: "36px" }}>New Lesson</Button>
                            </div>
                            <ul className="lessonList ps-3" style={{ height: "404px" }}>
                                {resLessons}
                                {/* <NavLink to="/LecturerCourseDetail">
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
                                </NavLink> */}
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
}
export default LecturerCourseDetail;