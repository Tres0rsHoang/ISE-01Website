import React from "react";
import NavBarDashBoard from "../Components/NavBarDashBoard";

export class Content extends React.Component{
    render() {
        return (
        <div style={{backgroundColor: "#074F6B", width: "100%", height: "100%"}}  id = "Content">
            <table style={{width: "100%", height: "100vh"}}>
                <tr>
                    <td rowSpan="2" style={{width: "100px"}}>
                        <NavBarDashBoard />
                    </td>
                    <td style={{height: "80px", backgroundColor: "#074F6B"}}>
                    </td>
                </tr>
                <tr>
                    <td style={{backgroundColor: "white", borderRadius: "50px"}}>
                        <div>
                            {this.props.children}
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        );
    }
}