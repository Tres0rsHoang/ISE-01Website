import React, {Component, Fragment} from "react";
import { AdminNavBar } from "../../Components/AdminNavBar";
import axios from "axios";
import EmptyPage from "../EmptyPage";

class AddNewCourse extends Component{
    state = {
        mess: '',
        user: {},
        subjects: {}
    }
    async componentDidMount() {
        const config = {
            headers:{
                Authorization: localStorage.getItem('accessToken'),
                refreshtoken: localStorage.getItem('refreshToken'),
            }
        }
        await axios.get('/Admin/AddNewCourse', config).then(res=>{
            this.setState({user: res.data.user, subjects: res.data.subjects});
        });
    }
    async sendInfo(event){
        event.preventDefault();
        let cDate = new Date();
        const newCourse = {
            courseid: this.courseid,
            coursename: this.coursename,
            lecturerid: this.lecturerid,
            subjectid: this.subjectid,
            filepath: this.filepath,
            createddate: cDate,
        }
        await axios.post('/Admin/AddNewCourse', newCourse).then(
            res=>{
                this.setState({mess: res.data.mess});
            }
        );
    }
    render() {
        const subjectName = [];
        for (let i=0;i<this.state.subjects.length;i++){
            subjectName.push(
                <option value={this.state.subjects[i].subjectid}>{this.state.subjects[i].subjectname}</option>
            )
        }
        if (localStorage.getItem("accessToken") === '' || this.state.user.usertype !== 1) return <EmptyPage/>
        return (
            <Fragment>
                <AdminNavBar>
                    <form style={{margin: "10px 50px 0"}} onSubmit={event => this.sendInfo(event)}>
                        <label className={"form-label"}>Course ID</label>
                        <input type={"text"} className={"form-control"}
                               onChange={event => this.courseid = event.target.value}/>

                        <label className={"form-label"}>Course Name</label>
                        <input type={"text"} className={"form-control"}
                               onChange={event => this.coursename = event.target.value}/>

                        <label className={"form-label"}>Lecturer ID</label>
                        <input type={"text"} className={"form-control"}
                               onChange={event => this.lecturerid = event.target.value}/>

                        <label className={"form-label"}>Subject Name</label>
                        <select className={"form-select"} aria-label={"Default select example"}
                            onChange={event => this.subjectid = event.target.value}>
                            {subjectName}
                        </select>

                        <label className={"form-label"}>File path</label>
                        <input type={"text"} className={"form-control"}
                               onChange={event => this.filepath = event.target.value}/>

                        <div style={{textAlign: "center", marginTop: "30px"}}>
                            <button type={"submit"} style={{
                                display: "inline-block",
                                backgroundColor: "#287A9A",
                                color:"white",
                                borderWidth: "0px",
                                borderRadius: "5px",
                                padding: "10px"
                            }} aria-describedby={"Noti"}>Submit</button>
                            <div id={"Noti"} className={"form-text"}>{this.state.mess}</div>
                        </div>
                    </form>
                </AdminNavBar>
            </Fragment>
        );
    }
}
export default AddNewCourse;