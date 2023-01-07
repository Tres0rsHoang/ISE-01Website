import React, {Component, Fragment} from "react";
import { AdminNavBar } from "../../Components/AdminNavBar";
import axios from "axios";
import EmptyPage from "../EmptyPage";
import moment from "moment";

class EditStudent extends Component{
    state = {
        mess: '',
        user: {},
        student: {},
    }
    async componentDidMount() {
        const id = window.location.pathname.toString().split('/')[3];
        const config = {
            headers:{
                Authorization: localStorage.getItem('accessToken'),
                refreshtoken: localStorage.getItem('refreshToken'),
            }
        }
        await axios.get('/Admin/EditStudent/' + id, config).then(res=>{
            this.setState({user: res.data.user, student: res.data.student});
        });
    }
    sendInfo(event){
        const id = window.location.pathname.toString().split('/')[3];
        event.preventDefault();
        let cDate = new Date();

        const newStudent = {
            accountusername: this.accountusername,
            accountpassword: this.accountpassword,
            fullname: this.fullname,
            dateofbirth: this.dateofbirth,
            phone: this.phone,
            email: this.email,
            registerdate: cDate,
            usertype: 3
        }
        axios.post('/Admin/EditStudent/' + id, newStudent).then(
            res=>{
                this.setState({mess: res.data.mess});
                console.log(this.state.mess);
            }
        );
    }
    render() {
        this.accountusername = this.state.student.accountusername;
        this.accountpassword = this.state.student.accountpassword;
        this.fullname = this.state.student.fullname;
        this.dateofbirth = this.state.student.dateofbirth;
        this.email = this.state.student.email;
        this.phone = this.state.student.phone;
        if (localStorage.getItem("accessToken") === '' || this.state.user.usertype !== 1) return <EmptyPage/>
        return (
            <Fragment>
                <AdminNavBar>
                    <form style={{margin: "10px 50px 0"}} onSubmit={event => this.sendInfo(event)}>
                        <label htmlFor={"AccountUserName"} className={"form-label"}>Username</label>
                        <input type={"text"} className={"form-control"} id={"AccountUserName"} name={"accountusername"}
                               onChange={event => this.accountusername = event.target.value} value={this.state.student.accountusername}/>

                        <label htmlFor={"Password"} className={"form-label"}>Password</label>
                        <input type={"text"} className={"form-control"} id={"Password"} name={"accountpassword"}
                               onChange={event => this.accountpassword = event.target.value} value={this.state.student.accountpassword}/>

                        <label htmlFor={"FullName"} className={"form-label"}>Full Name</label>
                        <input type={"text"} className={"form-control"} id={"FullName"} name={"fullname"}
                               onChange={event => this.fullname = event.target.value} value={this.state.student.fullname}/>

                        <label htmlFor={"Birthday"} className={"form-label"}>Birthday</label>
                        <input type={"date"} className={"form-control"} id={"Birthday"} name={"dateofbirth"}
                               onChange={event => this.dateofbirth = event.target.value} value={moment(this.state.student.dateofbirth.toString()).format('yyyy-MM-DD')}/>

                        <label htmlFor={"Phone"} className={"form-label"}>Phone</label>
                        <input type={"text"} className={"form-control"} id={"Phone"} name={"phone"}
                               onChange={event => this.phone = event.target.value} value={this.state.student.phone}/>

                        <label htmlFor={"Email"} className={"form-label"}>Email</label>
                        <input type={"email"} className={"form-control"} id={"Email"} name={"email"}
                               onChange={event => this.email = event.target.value} value={this.state.student.email}/>

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
export default EditStudent;