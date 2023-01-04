import React, {Component, Fragment} from "react";
import { AdminNavBar } from "../../Components/AdminNavBar";

import {BsBookmark} from "react-icons/bs";
import {TiMortarBoard} from "react-icons/ti";
import {IoPeopleOutline} from "react-icons/io5";
import axios from "axios";
import EmptyPage from "../EmptyPage";

class DashboardAdmin extends Component{
    constructor(props){
        super(props);
        this.state ={
            user: {},
            StudentNum: '',
            CourseNum: '',
            LecturerNum: ''
        }
    }
    async componentDidMount() {
        const config = {
            headers:{
                Authorization: localStorage.getItem('accessToken'),
                RefreshToken: localStorage.getItem('refreshToken'),
            }
        }
        await axios.get('/Admin', config).then(result=>{
            this.setState({
                StudentNum: result.data.StudentCount,
                CourseNum: result.data.CourseCount,
                LecturerNum: result.data.LecturerCount,
                user: result.data.user
            });
        });
        if (this.state.user.accessToken !== undefined) localStorage.setItem("accessToken", this.state.user.accessToken);
    }

    render(){
        if (localStorage.getItem("accessToken") === '' || this.state.user.usertype !== 1) return <EmptyPage/>
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