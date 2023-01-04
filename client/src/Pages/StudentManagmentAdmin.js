import React, {Component, Fragment} from "react";
import { AdminNavBar } from "../Components/AdminNavBar";
import axios from "axios";
import moment from "moment/moment";

class StudentManagement extends Component{
    state = {
        List: [],
        user: {}
    }
    componentDidMount() {
        axios.get(`/Admin/StudentManagement${window.location.search}` ).then(
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
            let dateFormat = member.registerdate;
            dateFormat = moment().format('D/MM/YYYY');
            res.push(
                <tr>
                    <td>{member.id}</td>
                    <td>{member.accountusername}</td>
                    <td>{member.fullname}</td>
                    <td>{member.email}</td>
                    <td>{member.phone}</td>
                    <td>{dateFormat}</td>
                </tr>
            );
        });
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
                            }}>Add new student
                            </button>
                        </a>
                    </div>
                    <table style={{marginLeft: "50px", width: "100%"}}>
                        <tr>
                            <th>Student ID</th>
                            <th>Username</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
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