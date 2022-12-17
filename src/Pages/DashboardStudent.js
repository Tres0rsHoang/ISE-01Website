import React, { Fragment } from "react";
import NavBarDashBoard from "../Components/NavBarDashBoard";
function Test(){
    return(
        <Fragment>
            <div style={{backgroundColor: "#074F6B", width: "100%", height: "100%"}}>
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
                            Content ở đây.
                        </td>
                    </tr>
                </table>
            </div>
        </Fragment>
    );
}
export default Test;