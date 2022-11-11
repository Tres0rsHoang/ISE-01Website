import React from "react";
import {Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";

function EmptyPage(){
    return(
        <div>
            <h1>This is an empty page.</h1>
            <NavLink to='/' activeSheet><Button>Back to the home page.</Button></NavLink>
        </div>
    );

}
export default EmptyPage;