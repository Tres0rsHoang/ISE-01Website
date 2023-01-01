import React, { Component, Fragment } from "react";
import { Content } from "../Components/Content";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import axios from "axios";
class LecturerDashboard extends Component {
    state={
        courseNum: ''
    }
    componentDidMount() {
        axios.get('/Lecturer', {params: {userId: 4}}).then(result =>{
            this.setState({
                courseNum: result.data.CourseCount
            });
        });
    }
    render() {
        return (
            <Fragment>
                <Content>
                    <div id={"lecturerDashboard"} style={{ padding: "2rem" }}>
                        <NavLink to={"/LecturerMyCourses"} style={{ color: "black" }}>
                            <Card className={"cardDashboard p-3"} style={{ width: "240px", backgroundColor: "#FEF6FB" }}>
                                <Card.Title className={"card-title"}>
                                    <FontAwesomeIcon icon={faBookmark} id={'bookmarkIcon'} style={{ fontSize: "28px", color: "#C358A5" }}></FontAwesomeIcon>
                                </Card.Title>
                                <p className={"cardName"} style={{ fontSize: "14px", fontWeight: "600", opacity: "0.7" }}>My Courses</p>
                                <p className={"cardValue mb-0 d-flex justify-content-end"} style={{ fontSize: "28px", fontWeight: "900" }}>{this.state.courseNum}</p>
                            </Card>
                        </NavLink>
                    </div>
                </Content>
            </Fragment>
        );
    }
}
export default LecturerDashboard;