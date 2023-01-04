import React, {Component, Fragment} from "react";
import { AdminNavBar } from "../../Components/AdminNavBar";
import axios from "axios";
import EmptyPage from "../EmptyPage";
import moment from "moment";

class EditLecture extends Component{
    state = {
        mess: '',
        user: {},
        Lecture: {},
    }
    async componentDidMount() {
        const id = window.location.pathname.toString().split('/')[3];
        const config = {
            headers:{
                Authorization: localStorage.getItem('accessToken'),
                refreshtoken: localStorage.getItem('refreshToken'),
            }
        }
        await axios.get('/Admin/EditLecture/' + id, config).then(res=>{
            this.setState({user: res.data.user, Lecture: res.data.Lecture});
        });
    }
    sendInfo(event){
        if (this.accountusername === undefined) this.accountusername = this.state.Lecture.accountusername;
        if (this.accountpassword === undefined) this.accountpassword = this.state.Lecture.accountpassword;
        if (this.fullname === undefined) this.fullname = this.state.Lecture.fullname;
        if (this.dateofbirth === undefined) this.dateofbirth = this.state.Lecture.dateofbirth;
        if (this.email === undefined) this.email = this.state.Lecture.email;
        if (this.phone === undefined) this.phone = this.state.Lecture.phone;

        const id = window.location.pathname.toString().split('/')[3];
        event.preventDefault();
        let cDate = new Date();

        const newLecture = {
            accountusername: this.accountusername,
            accountpassword: this.accountpassword,
            fullname: this.fullname,
            dateofbirth: this.dateofbirth,
            phone: this.phone,
            email: this.email,
            registerdate: cDate,
            usertype: 2
        }
        axios.post('/Admin/EditLecture/' + id, newLecture).then(
            res=>{
                this.setState({mess: res.data.mess});
                console.log(this.state.mess);
            }
        );
    }
    render() {

        if (localStorage.getItem("accessToken") === '' || this.state.user.usertype !== 1) return <EmptyPage/>
        return (
            <Fragment>
                <AdminNavBar>
                    <form style={{margin: "10px 50px 0"}} onSubmit={event => this.sendInfo(event)}>
                        <label htmlFor={"AccountUserName"} className={"form-label"}>Username</label>
                        <input type={"text"} className={"form-control"} id={"AccountUserName"} name={"accountusername"}
                               onChange={event => this.accountusername = event.target.value} placeholder={this.state.Lecture.accountusername}/>

                        <label htmlFor={"Password"} className={"form-label"}>Password</label>
                        <input type={"text"} className={"form-control"} id={"Password"} name={"accountpassword"}
                               onChange={event => this.accountpassword = event.target.value} placeholder={this.state.Lecture.accountpassword}/>

                        <label htmlFor={"FullName"} className={"form-label"}>Full Name</label>
                        <input type={"text"} className={"form-control"} id={"FullName"} name={"fullname"}
                               onChange={event => this.fullname = event.target.value} placeholder={this.state.Lecture.fullname}/>

                        <label htmlFor={"Birthday"} className={"form-label"}>Birthday</label>
                        <input type={"date"} className={"form-control"} id={"Birthday"} name={"dateofbirth"}
                               onChange={event => this.dateofbirth = event.target.value} placeholder={moment(this.state.Lecture.dateofbirth.toString()).format('yyyy-MM-DD')}/>

                        <label htmlFor={"Phone"} className={"form-label"}>Phone</label>
                        <input type={"text"} className={"form-control"} id={"Phone"} name={"phone"}
                               onChange={event => this.phone = event.target.value} placeholder={this.state.Lecture.phone}/>

                        <label htmlFor={"Email"} className={"form-label"}>Email</label>
                        <input type={"email"} className={"form-control"} id={"Email"} name={"email"}
                               onChange={event => this.email = event.target.value} placeholder={this.state.Lecture.email}/>

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
export default EditLecture;