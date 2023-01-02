import React, {useState} from "react";
import eduUs from "../img/Group 82.svg";
import logo from "../img/Group 256.svg"
import { Button, Form, FloatingLabel, FormControl} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons'
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
                    <a href="/"><FontAwesomeIcon icon={faHouse} id={'home-btn'}/></a>
                    {/* fa-solid fa-house */}
                    <div id='introContent'>
                        <img src={logo} alt={'logo'}></img>
                        <img src={eduUs} alt={'logo'}></img>
                        <h1>Welcome Back</h1>
                        <h2>Please login to continue</h2>
                    </div>
                </div>
                <div id='right-container'>
                    <p>Login</p>
                    <Form className={"login-form"}>
                        <FloatingLabel
                            controlId={"userGroup"}
                            className={"mb-3"}
                            label={"Username"}>
                            <FormControl
                                type={"text"}
                                name={"username"}
                                controlId={"username"}
                                placeholder={"Enter username"}
                                required
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId={"passGroup"}
                            className={"mb-3"}
                            label={"Password"}>
                            <FormControl
                                type={"password"}
                                name={"password"}
                                controlId={"password"}
                                placeholder={"Enter password"}
                                required
                            />
                        </FloatingLabel>
                        <Form.Check inline className={"mb-5"}
                            id={"remember"}
                            name={"remember"}
                            label={"Remember"}
                            type={"checkbox"} />
                        <a href="/">Forgot password?</a>
                        <Button type="submit">Continue</Button>
                    </Form>
                </div>
            </div>
        </div>
    );

}
export default LoginPage;