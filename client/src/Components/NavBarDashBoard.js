import React from "react";
import Logo from "../img/Group 256.svg";
import Logout from "../img/sign-out-alt 1.svg";

export class NavBarDashBoard extends React.Component{
    render()
    {
        let State = false;
        let Lock = false;
        function sleep(ms) {
            return new Promise(
                resolve => setTimeout(resolve, ms)
            );
        }
        const LogoClick = async () => {
            if (State && !Lock){
                jumpOut();
            }
            else if (!State && !Lock) {
                jumpOut();
                State = !State;
            }
            else if (Lock && State) {
                Hidden();
                State = !State;
                await sleep(1000);
            }
            Lock = !Lock;
        }
        const LogoIO =  () => {
            if (!Lock){
                if (!State) jumpOut();
                else Hidden();
                State = !State;
            }
        }
        const jumpOut = () => {
            const DashBoard = document.getElementById("DashboardMenu");
            const LogoText = document.getElementById("EduText");
            const main = document.getElementById("main");

            LogoText.style.opacity = "1";
            LogoText.style.transform = "translateX(0px)";
            DashBoard.style.display="block";
            main.style.marginLeft = "200px";
        }
        const Hidden = () => {
            const DashBoard = document.getElementById("DashboardMenu");
            const LogoText = document.getElementById("EduText");
            const main = document.getElementById("main");

            LogoText.style.opacity = "0";
            LogoText.style.transform = "translateX(-70px)";

            DashBoard.style.display = "none";
            main.style.marginLeft = "0%";
        }
        return (
            <div>
                <div style={{backgroundColor: "#074F6B", position:"absolute", width:"100vw", height:"100vh"}}></div>
                <div style={{width: "100%", height:"100px",backgroundColor:"#074F6B"}}></div>
                <div className={"w3-animate-left"} id={"DashboardMenu"} style={{height: "calc(100vh - 100px"}}>
                    <ul>
                        <li id="Nav-item">Home</li>
                        <li id="Nav-item">Process</li>
                        <li id="Nav-item">Student</li>
                        <li id="Nav-item">Lectures</li>
                        <li id="Nav-item" style={{marginTop: "500px"}}><img src={Logout} alt={"LogoutIcon"}/>Logout</li>
                    </ul>
                </div>
                <div id={"EduText"} className={'fw-bolder'}>EduUS</div>
                <img src={Logo} id={"Logo"} onMouseOver={LogoIO} onMouseLeave={LogoIO} onClick={LogoClick}
                     alt={"Logo"}></img>
                <div id={"main"} style={{overflow: "scroll", height: "calc(100vh - 100px", overflowX: "hidden"}}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}