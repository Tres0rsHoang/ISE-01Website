import React, {Fragment, useEffect, useState} from "react";
import { AdminNavBar } from "../Components/AdminNavBar";
import axios from "axios";
import moment from "moment/moment";
import {Link, useLocation} from "react-router-dom";
import Pagination from 'react-bootstrap/Pagination';

function StudentManagement(){
    const [state, setState] = useState({List: {}, user: {}});
    useEffect(() => {
        axios.get(`/Admin/StudentManagement${window.location.search}` ).then(
            result=>{
                setState({
                    List: result.data.List,
                    user: result.data.user,
                })
            }
        )
    });

    let res = [];
    for (let i = 0;i<state.List.length;i++){
        let dateFormat = state.List[i].registerdate;
        dateFormat = moment().format('D/MM/YYYY');
        res.push(
            <tr>
                <td>{state.List[i].id}</td>
                <td>{state.List[i].accountusername}</td>
                <td>{state.List[i].fullname}</td>
                <td>{state.List[i].email}</td>
                <td>{state.List[i].phone}</td>
                <td>{dateFormat}</td>
            </tr>
        );
    }

    const search = useLocation().search;
    let page = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === page}>
                {number}
            </Pagination.Item>,
        );
    }

    const paginationBasic = (
        <div>
            <Pagination>{items}</Pagination>
            <br />
        </div>
    );
    if (Number(new URLSearchParams(search).get('page')) !== 0)  page = Number(new URLSearchParams(search).get('page'));


    return (
        <Fragment>
            <AdminNavBar>
                <div style={{width: "100%", marginTop: "20px"}}>
                    <div className={"fs-4 fw-bold"} style={{display: "inline-block", marginLeft: "50px"}}>Student List
                    </div>
                    <Link to={'/Admin/AddNewStudent'}>
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
                    </Link>
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
                {paginationBasic}
            </AdminNavBar>
        </Fragment>
    );
}
export default StudentManagement;