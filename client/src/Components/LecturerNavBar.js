import React from "react";
import Logo from "../img/Group 256.svg";
import {AiOutlineHome} from "react-icons/ai";
import {BsBookmark} from "react-icons/bs";
import {IoLogOutOutline} from "react-icons/io5";
import {MdOutlineAccountCircle} from "react-icons/md";
import ___img_SearchIcon_svg from "../img/SearchIcon.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {Button} from "react-bootstrap";
export class LecturerNavBar extends React.Component{
    render() {
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
        const Logout = () => {
            localStorage.setItem("accessToken", '');
            localStorage.setItem("refreshToken", '');
        }
        return (
            <div>
                <div style={{backgroundColor: "#074F6B", position:"absolute", width:"100vw", height:"100vh"}}></div>
                <div style={{width: "100%", height:"100px",backgroundColor:"#074F6B"}}></div>
                <div className={"w3-animate-left"} id={"DashboardMenu"} style={{height: "calc(100vh - 100px)"}}>
                    <ul>
                        <a href={"/Lecturer"}><li id="Nav-item"  className="d-flex align-items-center"><AiOutlineHome className="me-2"/>Dashboard</li></a>
                        <a href={"/Lecturer/Courses"}><li id="Nav-item" className="d-flex align-items-center"><BsBookmark className="me-2"/>My Courses</li></a>
                        <a href={"/"}><li id="Nav-item" style={{marginTop: "calc(100vh - 500px)"}}><Button onClick={Logout}><IoLogOutOutline/> Logout</Button></li></a>
                    </ul>
                </div>
                <div id={"EduText"} className={'fw-bolder'}>EduUS</div>
                <img src={Logo} id={"Logo"} onMouseOver={LogoIO} onMouseLeave={LogoIO} onClick={LogoClick}
                     alt={"Logo"}></img>

                <div id={"main"} style={{overflow: "scroll", height: "calc(100vh - 100px", overflowX: "hidden"}}>
                    <form className="form-inline my-2 my-lg-0">
                        <button style={{
                            float: "right",
                            marginRight: "50px",
                            outline: 'none',
                            borderWidth: '0px',
                            backgroundColor: 'transparent'
                        }}>
                            <MdOutlineAccountCircle size={38}/>
                        </button>
                        <div className="form-control mr-sm-2" style={{
                            borderRadius: '30px',
                            width: '90%',
                            marginTop: "20px",
                            marginLeft: "50px",
                            backgroundColor: "#F6F6F5"
                        }}>
                            <button type="submit"
                                    style={{outline: 'none', borderWidth: '0px', backgroundColor: 'transparent'}}>
                                {/* <img src={___img_SearchIcon_svg} alt={"SearchIcon"}/> */}
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="me-2"></FontAwesomeIcon>
                            </button>
                            <input type="search" placeholder="Search" aria-label="Search" style={{
                                outline: "none",
                                borderWidth: '0px',
                                backgroundColor: 'transparent'
                            }}></input>
                        </div>
                    </form>
                    {this.props.children}
                </div>
            </div>
        );
    }
}