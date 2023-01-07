import React, { Fragment } from "react";
import { LecturerNavBar } from "../../Components/LecturerNavBar";
import { Breadcrumb, Table, Button } from "react-bootstrap";
function LecturerSubmittedList() {
    return (
        <Fragment>
            <LecturerNavBar>
                <div id="lecturerAssignmentDetail" className="d-flex" style={{ padding: "2rem" }}>
                    <div className="courseSection" style={{ width: "100%" }}>
                        <h3 className="mt-4" style={{ fontWeight: "600" }}>Intro To Software Engineering - Assignment 02 Submitted List</h3>
                        <Breadcrumb className="breadcrumb mb-0">
                            <Breadcrumb.Item href="/LecturerDashboard">Dashboard</Breadcrumb.Item>
                            <Breadcrumb.Item href="/LecturerMyCourses">My Courses</Breadcrumb.Item>
                            <Breadcrumb.Item href="/LecturerCourseDetail">Intro To Software Engineering</Breadcrumb.Item>
                            <Breadcrumb.Item href="/LecturerCourseAssignments">Assignments</Breadcrumb.Item>
                        </Breadcrumb>
                        <Table style={{width: "100%", textAlign: "center", borderCollapse: "separate", borderSpacing: "0px 1rem"}}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Student ID</th>
                                    <th>Email</th>
                                    <th>Last Modified</th>
                                    <th>Submission File</th>
                                    <th>Grading</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Nguyen Ngoc Quang</td>
                                    <td>20127297</td>
                                    <td>nnquang20@clc.fitus.edu.vn</td>
                                    <td>31/12/2022</td>
                                    <td style={{textDecoration: "underline"}}>20127297.pdf</td>
                                    <td>10</td>
                                    <Button className="py-1 px-2">Edit Grade</Button>
                                </tr>
                                <tr>
                                    <td>Nguyen Ngoc Quang</td>
                                    <td>20127297</td>
                                    <td>nnquang20@clc.fitus.edu.vn</td>
                                    <td>31/12/2022</td>
                                    <td style={{textDecoration: "underline"}}>20127297.pdf</td>
                                    <td>10</td>
                                    <Button className="py-1 px-2">Edit Grade</Button>
                                </tr>
                                <tr>
                                    <td>Nguyen Ngoc Quang</td>
                                    <td>20127297</td>
                                    <td>nnquang20@clc.fitus.edu.vn</td>
                                    <td>31/12/2022</td>
                                    <td style={{textDecoration: "underline"}}>20127297.pdf</td>
                                    <td>10</td>
                                    <Button className="py-1 px-2">Edit Grade</Button>
                                </tr>
                                <tr>
                                    <td>Nguyen Ngoc Quang</td>
                                    <td>20127297</td>
                                    <td>nnquang20@clc.fitus.edu.vn</td>
                                    <td>31/12/2022</td>
                                    <td style={{textDecoration: "underline"}}>20127297.pdf</td>
                                    <td>10</td>
                                    <Button className="py-1 px-2">Edit Grade</Button>
                                </tr>
                                <tr>
                                    <td>Nguyen Ngoc Quang</td>
                                    <td>20127297</td>
                                    <td>nnquang20@clc.fitus.edu.vn</td>
                                    <td>31/12/2022</td>
                                    <td style={{textDecoration: "underline"}}>20127297.pdf</td>
                                    <td>10</td>
                                    <Button className="py-1 px-2">Edit Grade</Button>
                                </tr>
                                <tr>
                                    <td>Nguyen Ngoc Quang</td>
                                    <td>20127297</td>
                                    <td>nnquang20@clc.fitus.edu.vn</td>
                                    <td>31/12/2022</td>
                                    <td style={{textDecoration: "underline"}}>20127297.pdf</td>
                                    <td>10</td>
                                    <Button className="py-1 px-2">Edit Grade</Button>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </LecturerNavBar>
        </Fragment>
    );
}
export default LecturerSubmittedList;