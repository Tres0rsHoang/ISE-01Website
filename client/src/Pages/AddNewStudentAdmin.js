import React, {Component, Fragment} from "react";
import { AdminNavBar } from "../Components/AdminNavBar";
import axios from "axios";
import EmptyPage from "./EmptyPage";

class AddNewStudent extends Component{
    state = {
        mess: '',
        user: {}
    }
    async componentDidMount() {
        const config = {
            headers:{
                Authorization: localStorage.getItem('accessToken'),
            }
        }
        await axios.get('/Admin/AddNewStudent', config).then(res=>{this.setState({user: res.data.user})});
    }
    async sendInfo(event){
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

        await axios.post('/Admin/AddNewStudent', newStudent).then(
            res=>{
                this.setState({mess: res.data.mess, user: res.data.user});
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
                                onChange={event => this.accountusername = event.target.value}/>

                        <label htmlFor={"Password"} className={"form-label"}>Password</label>
                        <input type={"password"} className={"form-control"} id={"Password"} name={"accountpassword"}
                               onChange={event => this.accountpassword = event.target.value}/>

                        <label htmlFor={"FullName"} className={"form-label"}>Full Name</label>
                        <input type={"text"} className={"form-control"} id={"FullName"} name={"fullname"}
                               onChange={event => this.fullname = event.target.value}/>

                        <label htmlFor={"Birthday"} className={"form-label"}>Birthday</label>
                        <input type={"date"} className={"form-control"} id={"Birthday"} name={"dateofbirth"}
                               onChange={event => this.dateofbirth = event.target.value}/>

                        <label htmlFor={"Phone"} className={"form-label"}>Phone</label>
                        <input type={"text"} className={"form-control"} id={"Phone"} name={"phone"}
                               onChange={event => this.phone = event.target.value}/>

                        <label htmlFor={"Email"} className={"form-label"}>Email</label>
                        <input type={"email"} className={"form-control"} id={"Email"} name={"email"}
                               onChange={event => this.email = event.target.value}/>

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
export default AddNewStudent;