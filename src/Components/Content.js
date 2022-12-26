import React from "react";
import {NavBarDashBoard} from "./NavBarDashBoard";

export class Content extends React.Component{
    render() {
        return (
            <NavBarDashBoard>{this.props.children}</NavBarDashBoard>
        );
    }
}