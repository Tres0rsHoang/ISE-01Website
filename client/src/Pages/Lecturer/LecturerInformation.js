import React, { Fragment } from "react";
import { LecturerNavBar } from "../../Components/LecturerNavBar";
import { Button, Breadcrumb } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function LecturerInformation() {
    return (
        <Fragment>
            <LecturerNavBar>
                <div id="lecturerChangeInfo" className="d-flex" style={{ padding: "2rem" }}>
                    <div className="AccountInformation w-25" style={{marginRight: "20%"}}>
                        <h3 style={{color:"black"}}> Account Informations</h3>
                        <div className="courseElementBtns pt-5 d-flex flex-column" style={{ borderRight: "2px solid black" }} >
                            <Button href="/Lecturer/Information" className="assignmentsBtn mb-4 ps-4 py-2 fs-5 d-flex justify-content-start align-items-center"
                                style={{
                                    width: "80%",
                                    fontWeight: "bold",
                                    border: "2px solid #074F6B",
                                    borderRadius: "10px",
                                    backgroundColor: "white",
                                    color: "black"
                                }}> <FontAwesomeIcon icon={faUser} className="me-2"/>Information</Button>

                            <Button href="/Lecturer/Password" className="assignmentsBtn mb-4 ps-4 py-2 fs-5 d-flex justify-content-start align-items-center"
                                style={{
                                    width: "80%",
                                    height: "40px",
                                    borderColor: "white",
                                    backgroundColor: "white",
                                    fontWeight: "bold",
                                    color: "black"
                                }}>
                                <FontAwesomeIcon icon={faLock} className={"me-2"}/> Change Password</Button>

                        </div>

                        <Breadcrumb className="breadcrumb mb-0">
                            <Breadcrumb.Item href="/LecturerDashboard">Dashboard</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>

                    <div id="FormInformation" className={"mt-4"} style={{
                        width: "500px", border: "2px solid black", borderRadius: "10px"
                    }}>
                        <form style={{ margin: "10px 50px 0", width: "400px" }} >
                            <label className={"form-label"}>Lecturer ID</label>
                            <input type={"text"} className={"form-control"} id={"LecturerID"}
                                name={"lecturerid"} value={"1"} style={{ border: "2px solid black" }} disabled />

                            <label className={"form-label"}>Username</label>
                            <input type={"text"} className={"form-control"} id={"AccountUserName"}
                                name={"accountusername"} value={"nva"} style={{ border: "2px solid black" }} disabled />

                            <label className={"form-label"}>Full Name</label>
                            <input type={"text"} className={"form-control"} id={"FullName"}
                                name={"fullname"} value={"Nguyen Van A"} style={{ border: "2px solid black" }} disabled />

                            <label className={"form-label"}>Birthday</label>
                            <input type={"date"} className={"form-control"} id={"Birthday"}
                                name={"dateofbirth"} value={"1990-01-12"} style={{ border: "2px solid black" }} disabled />

                            <label className={"form-label"}>Phone</label>
                            <input type={"text"} className={"form-control"} id={"Phone"}
                                name={"phone"} value={"0791234567"} style={{ border: "2px solid black" }} disabled />

                            <label className={"form-label"}>Email</label>
                            <input type={"email"} className={"form-control"} id={"Email"}
                                name={"email"} value={"nva@mail.com"} style={{ border: "2px solid black" }} disabled />

                            <div style={{ textAlign: "center", margin: "10px 30px" }}>
                                <button type={"submit"} style={{
                                    backgroundColor: "#074F6B",
                                    color: "white",
                                    borderWidth: "0px",
                                    borderRadius: "5px",
                                    padding: "10px",
                                    width: "80px",
                                }} >Edit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </LecturerNavBar>
        </Fragment >
    );
}
export default LecturerInformation;