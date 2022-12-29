import React, {Component, Fragment} from "react";
import { AdminNavBar } from "../Components/AdminNavBar";

import {BsBookmark} from "react-icons/bs";
import {TiMortarBoard} from "react-icons/ti";
import {IoPeopleOutline} from "react-icons/io5";
import axios from "axios";

class DashboardAdmin extends Component{
    state ={
        StudentNum: '',
        CourseNum: '',
        LecturerNum: ''
    }
    componentDidMount() {
        axios.get('/Admin').then(result=>{
            this.setState({
                StudentNum: result.data.StudentCount,
                CourseNum: result.data.CourseCount,
                LecturerNum: result.data.LecturerCount,
            });
        });

    }
    render(){
        return(
            <Fragment>
                <AdminNavBar>
                    <a href={"/Admin/StudentManagement"} style={{textDecoration: "inherit", color: "inherit"}}>
                        <div className={"itemInHomepage"}>
                            <div style={{marginTop: "20px", marginLeft: "20px"}}>
                                <TiMortarBoard size={50}/>
                                <div>Student</div>
                            </div>
                            <div className="fs-4 fw-bold" style={{float:"right", marginRight: "20px"}}>{this.state.StudentNum}</div>
                        </div>
                    </a>
                    <a href={"/Admin/CourseManagement"} style={{textDecoration: "inherit", color: "inherit"}}>
                        <div className={"itemInHomepage"}>
                            <div style={{marginTop: "20px", marginLeft: "20px"}}>
                                <BsBookmark size={50}/>
                                <div>Course</div>
                            </div>
                            <div className={"fs-4 fw-bold"} style={{float:"right", marginRight: "20px"}}>{this.state.CourseNum}</div>
                        </div>
                    </a>
                    <a href={"/Admin/LecturerManagement"} style={{textDecoration: "inherit", color: "inherit"}}>
                        <div className={"itemInHomepage"}>
                            <div style={{marginTop: "20px", marginLeft: "20px"}}>
                                <IoPeopleOutline size={50}/>
                                <div>Lecture</div>
                            </div>
                            <div className={"fs-4 fw-bold"} style={{float:"right", marginRight: "20px"}}>{this.state.LecturerNum}</div>
                        </div>
                    </a>
                </AdminNavBar>
            </Fragment>
        );
    }
}
export default DashboardAdmin;