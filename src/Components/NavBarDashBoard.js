import React from "react";
import Logo from "../img/Group 256.svg";


function NavBarDashBoard(){
    let State = false;

    const LogoClick = () => {
        State = !State;
    }
    const jumpOut = () => {
        const DashBoard = document.getElementById("DashboardMenu");
        const LogoText = document.getElementById("EduText");

        DashBoard.style.display="block";
        setTimeout(function (){
            DashBoard.style.transform = "visibility 0s";
            DashBoard.style.visibility = "visible";
            DashBoard.style.transform = "translateX(200px)";
            DashBoard.style.transitionDuration = "1s";
        },10);
        LogoText.style.opacity = "1";
        LogoText.style.transform = "translateX(0px)";
    }
    const Hidden = () => {
        if (State === false) {
            const DashBoard = document.getElementById("DashboardMenu");
            const LogoText = document.getElementById("EduText");

            DashBoard.style.transform = "translateX(-200px)";
            DashBoard.style.transform = "visibility 0s";
            DashBoard.style.visibility = "hidden";
            setTimeout(function(){DashBoard.style.display = "none";}, 600);

            LogoText.style.opacity = "0";
            LogoText.style.transform = "translateX(-70px)";
        }
    }

    return (
      <div>
          <div className = {"text-center fs-5 text-white"} id ={"DashboardMenu"}>
            <ul style={{position: 'relative'}}>
               <li id = "Nav-item">Home</li>
               <li id = "Nav-item">Process</li>
               <li id = "Nav-item">Student</li>
               <li id = "Nav-item">Lectures</li>
            </ul>
          </div>
          <div id = {"EduText"} className={'fw-bolder'}>EduUS</div>
          <img src={Logo} id = {"Logo"} onMouseOver = {jumpOut} onMouseLeave = {Hidden} onClick = {LogoClick} alt={"Logo"}></img>

      </div>
    );
}
export default NavBarDashBoard;