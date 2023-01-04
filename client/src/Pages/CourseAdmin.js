import React, {Component, Fragment} from "react";
import { AdminNavBar } from "../Components/AdminNavBar";
import axios from "axios";
import moment from "moment/moment";
import EmptyPage from "./EmptyPage";

class StudentManagement extends Component{
    state = {
        List: [],
        user: {}
    }
    componentDidMount() {
        const config = {
            headers:{
                Authorization: localStorage.getItem('accessToken'),
            }
        }
        axios.get(`/Admin/CourseManagement${window.location.search}` , config).then(
            result=>{
                this.setState({
                    List: result.data.List,
                    user: result.data.user,
                })
            }
        )
    }
    render() {
        const res = []
        this.state.List.forEach((member, index)=>{
            let dateFormat = member.createddate;
            dateFormat = moment().format('D/MM/YYYY');
            res.push(
                <tr>
                    <td>{member.courseid}</td>
                    <td>{member.coursename}</td>
                    <td>{member.lecturerid}</td>
                    <td>{member.subjectid}</td>
                    <td>{dateFormat}</td>
                </tr>
            );
        });
        if (localStorage.getItem("accessToken") === '' || this.state.user.usertype !== 1) return <EmptyPage/>
        return (
            <Fragment>
                <AdminNavBar>
                    <div style={{width: "100%", marginTop: "20px"}}>
                        <div className={"fs-4 fw-bold"} style={{display: "inline-block", marginLeft: "50px"}}>Student List
                        </div>
                        <a href={'/Admin/AddNewStudent'}>
                            <button style={{
                                display: "inline-block",
                                float: "right",
                                marginRight: "30px",
                                backgroundColor: "#287A9A",
                                color:"white",
                                borderWidth: "0px",
                                borderRadius: "5px",
                                padding: "10px"
                            }}>Add new course
                            </button>
                        </a>
                    </div>
                    <table style={{marginLeft: "50px", width: "100%"}}>
                        <tr>
                            <th>Course ID</th>
                            <th>Course Name</th>
                            <th>Lecture ID</th>
                            <th>Subject ID</th>
                            <th>Create Date</th>
                        </tr>
                        {res}
                    </table>

                    <nav style={{marginTop: "100px"}}>
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                                <a className="page-link">Previous</a>
                            </li>
                            <li className="page-item"><a className="page-link active" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                </AdminNavBar>
            </Fragment>
        );
    }
}
export default StudentManagement;