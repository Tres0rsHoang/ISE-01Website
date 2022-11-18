import React from "react";
import eduUs from "../img/Group 82.svg";
import logo from "../img/Group 256.svg";
import { Form, FormControl, FloatingLabel, Button} from "react-bootstrap";
import "../CssFile/LoginPage.css";

function LoginPage(){
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
                    <p>Login</p>
                    <Form className={"login-form"}>
                        {/* Username */}
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
                        {/* Password */}
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
                            type={"checkbox"}/>
                        <a href="/">Forgot password?</a>
                        <Button type="submit">Continue</Button>
                        {/* Continue</Button> */}
                    </Form>
                </div>
            </div>
        </div>  
    );
}
export default LoginPage;