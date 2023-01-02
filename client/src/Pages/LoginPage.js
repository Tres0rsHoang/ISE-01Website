import React, {useState} from "react";

import eduUs from "../img/Group 82.svg";
import logo from "../img/Group 256.svg"

import { Button,Form } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();
    const Login = () =>{
        console.log(username + '   ' + password);
        localStorage.setItem("accessToken", "123456");
        //navigate('/admin');
    }
    return(
        <div id={'background'}>
            <div id={'container'}>
                <div id={'left-container'}>
                    <a href="/"><i className={'fa-solid fa-house'} id={'home-btn'}></i></a>
                    <div id='introContent'>
                        <img src={logo} alt={'logo'}></img>
                        <img src={eduUs} alt={'logo'}></img>
                        <h1>Welcome Back</h1>
                        <h2>Please login to continue</h2>
                    </div>
                </div>
                <div id='right-container'>
                    <h1>Login</h1>
                    <Form action="">
                        <div id="groupName" className="inputGroup">
                            <label>Name:</label>
                            <input type="text" className="inputText" value={username} onChange={(e) => {setUsername(e.target.value);}}></input>
                        </div>
                        <div id="groupPass" className="inputGroup">
                            <label>Password:</label>
                            <input type="password" className="inputText" value={password} onChange={(e)=>{setPassword(e.target.value);}}></input>
                        </div>
                        <div id="moreDetails">
                            <div id="groupRemember">
                                <input type="checkbox" id="remember" name="remember"></input>
                                <label htmlFor="remember">Remember</label>
                            </div>
                            <a href="/">Forgot password?</a>
                        </div>
                        <Button variant="contained" onClick={Login}>Continue</Button>
                    </Form>
                </div>
            </div>
        </div>
    );

}
export default LoginPage;