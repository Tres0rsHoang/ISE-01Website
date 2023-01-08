import React, {Fragment, useEffect, useState} from "react";
import { AdminNavBar } from "../../Components/AdminNavBar";
import axios from "axios";
import {Link, useLocation} from "react-router-dom";
import EmptyPage from "../EmptyPage";
import {Button} from "react-bootstrap";
import {BsFillTrashFill} from "react-icons/bs";
function StudentOfCourse(){
    const [newStudentID, setNewStudentID] = useState(0);
    const [mess, setMess] = useState('');
    const [state, setState] = useState({List: {}, user: {}});
    const CourseId = window.location.toString().split('/')[5];
    useEffect(() => {
        const config = {
            headers:{
                Authorization: localStorage.getItem('accessToken'),
                RefreshToken: localStorage.getItem('refreshToken')
            }
        }
        axios.get(`/Admin/StudentOfCourse/${CourseId}${window.location.search}`, config).then(
            result=>{
                setState({
                    List: result.data.List,
                    user: result.data.user,
                    pages: result.data.pages,
                })
            }
        )
    }, []);
    const DeleteID = (event) =>{
        const ID = event.currentTarget.id;
        const config = {
            headers:{
                Authorization: localStorage.getItem('accessToken'),
                RefreshToken: localStorage.getItem('refreshToken')
            }
        }
        const conf = window.confirm("Do you really want to delete this student from this course. Student ID is: " + ID);
        if (conf){
            axios.post('/Admin/CourseDeleteStudent/'+CourseId+'?studentid='+ID, config).then(res=>{})
            window.location.reload();
        }
    }
    const AddNewStudent = event =>{
        const config = {
            headers:{
                Authorization: localStorage.getItem('accessToken'),
                RefreshToken: localStorage.getItem('refreshToken')
            }
        }
        axios.post('/Admin/AddNewStudentIntoCourse/'+CourseId+'?studentid='+newStudentID, config).then(res=>{setMess(res.data.mess)});
    }
    if (state.user.accessToken !== undefined) localStorage.setItem("accessToken", state.user.accessToken);
    let res = [];
    let pagesRes = [];
    for (let i = 0;i<state.List.length;i++){;
        res.push(
            <tr>
                <td>{state.List[i].id}</td>
                <td>{state.List[i].accountusername}</td>
                <td>{state.List[i].fullname}</td>
                <td>{state.List[i].email}</td>
                <td>{state.List[i].phone}</td>
                <td><Button id={state.List[i].id} variant="danger" onClick={DeleteID}><BsFillTrashFill/></Button></td>
            </tr>
        );
    }
    const search = useLocation().search;
    let page = 1;
    if (Number(new URLSearchParams(search).get('page')) !== 0)  page = Number(new URLSearchParams(search).get('page'));
    if (localStorage.getItem("accessToken") === '' || state.user.usertype !== 1) return <EmptyPage/>
    if (page <= 1) {
        pagesRes.push(
            <li className="page-item disabled">
                <a className="page-link" href={"?page=" + (page - 1).toString()}>Previous</a>
            </li>
        );
    }
    else {
        pagesRes.push(
            <li className="page-item">
                <a className="page-link" href={"?page=" + (page - 1).toString()}>Previous</a>
            </li>
        );
    }
    for (let i=1;i<=state.pages;i++){
        if (i === page)
            pagesRes.push(<li className="page-item"><a className="page-link active" href={"?page=" + i.toString()}> {i} </a></li>);
        else
            pagesRes.push(<li className="page-item"><a className="page-link" href={"?page=" + i.toString()}> {i} </a></li>);
    }
    if (page === state.pages){
        pagesRes.push(
            <li className="page-item disabled">
                <a className="page-link" href={"?page=" + (page+1).toString()}>Next</a>
            </li>
        );
    }
    else {
        pagesRes.push(
            <li className="page-item">
                <a className="page-link" href={"?page=" + (page+1).toString()}>Next</a>
            </li>
        );
    }
    if (mess === 'Ok') window.location.reload(false);
    return (
        <Fragment>
            <AdminNavBar>
                <div style={{width: "100%", marginTop: "20px"}}>
                    <div className={"fs-4 fw-bold"} style={{display: "inline-block", marginLeft: "50px"}}>
                        Students of course {CourseId}
                    </div>
                    <button style={{
                        display: "inline-block",
                        float: "right",
                        marginRight: "30px",
                        backgroundColor: "#287A9A",
                        color:"white",
                        borderWidth: "0px",
                        borderRadius: "5px",
                        padding: "10px"
                    }} onClick={AddNewStudent}>Add new student
                    </button>
                    <input type={"text"} className={"form-control"}
                           style={{width: "10%", float: "right", marginRight: "10px", marginTop: "5px"}}
                           onChange={event => {setNewStudentID(Number(event.target.value.toString()))}}/>
                    <label className={"form-label"} style={{float: "right", marginTop: "15px", marginRight: "10px"}}>New student ID</label>
                    <div style={{float: "right", marginRight: "10px", marginTop: "15px", color:"red", fontWeight: "700"}}>{mess}</div>
                </div>
                <table style={{marginLeft: "50px", width: "100%"}}>
                    <tr>
                        <th>Student ID</th>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Delete</th>
                    </tr>
                    {res}
                </table>
                <nav style={{marginTop: "100px"}}>
                    <ul className="pagination justify-content-center">
                        {pagesRes}
                    </ul>
                </nav>
            </AdminNavBar>
        </Fragment>
    );
}
export default StudentOfCourse;