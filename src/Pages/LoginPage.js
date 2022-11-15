import React from "react";

import eduUs from "../asset/img/Group 82.svg";
import logo from "../asset/img/Group 256.svg"
import { Button, Form, FormLabel, FormText } from "react-bootstrap";
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
                    <h1>Login</h1>
                    <Form action="">
                        <div id="groupName" class="inputGroup">
                            <FormLabel for="name">Name:</FormLabel>
                            <FormText type="text" id="name" class="inputText" name="name"></FormText>
                        </div>
                        <div id="groupPass" class="inputGroup">
                            <label for="pass">Password:</label>
                            <input type="password" id="pass" class="inputText" name="password"></input>
                        </div>
                        <div id="moreDetails">
                            <div id="groupRemember">
                                <input type="checkbox" id="remember" name="remember"></input>
                                <label for="remember">Remember</label>
                            </div>
                            <a href="/">Forgot password?</a>
                        </div>
                        <Button variant="contained">Continue</Button>
                    </Form>
                </div>
            </div>
        </div>  
    );
}
export default LoginPage;