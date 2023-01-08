import React, { Component, Fragment } from "react";
import { LecturerNavBar } from "../../Components/LecturerNavBar";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import EmptyPage from "../EmptyPage";
import axios from "axios";
class LecturerDashboard extends Component {
    state={
        user: {},
        courseNum: ''
    }
    async componentDidMount() {
        const config = {
            headers:{
                Authorization: localStorage.getItem('accessToken'),
                RefreshToken: localStorage.getItem('refreshToken'),
            }
        }
        await axios.get('/Lecturer', config).then(result =>{
            this.setState({
                courseNum: result.data.CourseCount,
                user: result.data.user
            });
        });
        if(this.state.user.accessToken !== undefined) localStorage.setItem("accessToken", this.state.user.accessToken);
    }
    render() {
        if (localStorage.getItem("accessToken") === '' || this.state.user.usertype !== 2) return <EmptyPage/>;
        return (
            <Fragment>
                <LecturerNavBar>
                    <div id={"lecturerDashboard"} style={{ padding: "2rem" }}>
                        <NavLink to={"/Lecturer/Courses"} style={{ color: "black" }}>
                            <Card className={"cardDashboard p-3"} style={{ width: "240px", backgroundColor: "#FEF6FB" }}>
                                <Card.Title className={"card-title"}>
                                    <FontAwesomeIcon icon={faBookmark} id={'bookmarkIcon'} style={{ fontSize: "28px", color: "#C358A5" }}></FontAwesomeIcon>
                                </Card.Title>
                                <p className={"cardName"} style={{ fontSize: "14px", fontWeight: "600", opacity: "0.7" }}>My Courses</p>
                                <p className={"cardValue mb-0 d-flex justify-content-end"} style={{ fontSize: "28px", fontWeight: "900" }}>{this.state.courseNum}</p>
                            </Card>
                        </NavLink>
                    </div>
                </LecturerNavBar>
            </Fragment>
        );
    }
}
export default LecturerDashboard;