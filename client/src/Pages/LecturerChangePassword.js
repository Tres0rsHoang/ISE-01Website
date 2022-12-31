import React, { Fragment } from "react";
import { Content } from "../Components/Content";
import { Button, Breadcrumb } from "react-bootstrap";


function LecturerChangePassword() {
    return (
        <Fragment>
            <Content>
                <div id="lecturerChangeInfo" className="d-flex" style={{ padding: "2rem" }}>
                    <div className="AccountInformation" style={{ width: "50%" }}>
                        <h3> Account Information</h3>
                        <div className="courseElementBtns pt-5 d-flex flex-column" >
                            <Button href="/LecturerInformation" className="assignmentsBtn w-50 mb-4"
                                style={{
                                    height: "40px",
                                    float: "left",
                                    borderColor: "white",
                                    backgroundColor: "white",
                                    color: "black"
                                }}>Information</Button>

                            <Button href="/LecturerChangePassword" className="assignmentsBtn w-50 mb-4"
                                style={{
                                    height: "40px",
                                    float: "left",
                                    borderWidth:"2px",
                                    borderRadius:"10px",
                                    borderColor: "#074F6B",
                                    backgroundColor: "white",
                                    color: "black"
                                }}>Change Password</Button>

                        </div>

                        <Breadcrumb className="breadcrumb mb-0">
                            <Breadcrumb.Item href="/LecturerDashboard">Dashboard</Breadcrumb.Item>

                        </Breadcrumb>
                    </div>

                    <div id="FormInformation" style={{
                        width: "500px", border: "1px solid black", borderRadius: "10px"
                    }}>
                        <form style={{ margin: "10px 50px 0", width: "400px" }} >
                            <label className={"form-label"}>Current Password</label>
                            <input type={"text"} className={"form-control"} id={"CurrentPassword"} name={"currentpassword"}/>

                            <label className={"form-label"}>New Password</label>
                            <input type={"password"} className={"form-control"} id={"NewPassword"} name={"newpassword"}/>

                            <label className={"form-label"}>Re-enter Password</label>
                            <input type={"text"} className={"form-control"} id={"ReEnterPassword"} name={"reenterpassword"}/>


                            <div style={{ textAlign: "center", margin: "10px 30px" }}>
                                <button type={"submit"} style={{
                                    backgroundColor: "#074F6B",
                                    color: "white",
                                    borderWidth: "0px",
                                    borderRadius: "5px",
                                    padding: "10px",
                                    width: "70px"
                                }} >Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Content>
        </Fragment >
    );
}
export default LecturerChangePassword;