import React from "react";

import {NavLink} from "react-router-dom";

import pic1 from "../img/nick-morrison-FHnnjk1Yj7Y-unsplash.svg"
import pic2 from "../img/myriam-jessier-eveI7MOcSmw-unsplash.svg"
import logo from "../img/Group 262.svg"
import CourseLogo from "../img/Group 275.svg"
import Fb from "../img/fb.svg"
import In from "../img/in.svg"
import Tw from "../img/tw.svg"
import Ig from "../img/ig.svg"

function HomePage(){
    return(
        <div id={'BackGroundFormat'}>
            <div id = {'PageFormat'} className={'shadow-lg rounded'}>
                <div style={{width: '200px', height: '75px', background: 'white', position: 'absolute'}}></div>
                <div style={{width: '75px', height: '75px', borderRadius: '50%', position: 'absolute', marginLeft: '150px', background: 'white'} }></div>
                <img src={pic1} alt="picture1" style={{marginLeft: '630px', marginTop: '150px'}} className={'picture'}></img>
                <img src={pic2} alt="picture2" style={{marginLeft: '750px', marginTop: '210px'}} className={'picture'}></img>

                <ul>
                    <li><ul>
                            <li style={{display: 'inline-block', marginLeft: '80px', marginTop: '40px', position: 'relative'}}>
                                <img src={logo} alt="logo"></img>
                            </li>
                            <li style={{display: 'inline-block', position: 'relative', top: '10px', color: '#074F6B'}} className={'fs-3 fw-bolder'}>
                                <div style={{width: '89px', height: '42px'}}>EduUS</div>
                            </li>
                            <li style={{display: 'inline-block', float: 'right', marginRight: '80px'}}>
                                <NavLink to={'/EmptyPage'}>
                                    <button className={'btn btn-secondary Contact'}>Contact Us</button>
                                </NavLink>
                            </li>
                    </ul></li>

                    <li><ul style= {{marginTop: '120px', textAlign: 'left', position: 'relative', marginLeft: '115px'}}>
                        <li className="fs-4 ">New Learning Expeience</li>
                        <li className="fs-2 fw-bold">HCMUS Edu</li>
                        <li className="fs-5"><div>Enrich your knowledge and get a head start into your<br></br>next career.</div></li>
                        <li style={{position: 'relative', bottom: '25px'}}>
                            <NavLink to="/LoginPage" activeStyle><button class="btn btn-secondary Contact">Sign in</button></NavLink>
                        </li>
                    </ul></li>

                    <li><ul style={{width: '1080px', position: 'absolute', marginTop: '150px'}} className="text-center">
                        <li style={{marginRight: '35px'}}>
                            <img src={logo} alt="logo"></img>
                        </li>
                        <li className={'fs-4'} style={{marginTop: '10px', marginRight: '35px'}}>Welcome to USEdu</li>
                    </ul></li>

                    <li><ul style={{listStyleType: 'none', width: '1080px', position: 'absolute', marginTop: '280px', padding: '0'}} className={"text-center"}>
                        <li className={"Learning"}>
                            <NavLink to="/EmptyPage" activeStyle>
                                <button className="btn btn-outline-primary Course">
                                    <img src={CourseLogo} alt="CourseLogo" className={"CourseLogo"} style={{bottom: '20px'}}></img>
                                    <div className={"CourseName"}>Online Learning</div>
                                    <div className={"CourseDetail"}>
                                        Lorem ipsum dolor sit amet, consectetur.
                                    </div>
                                </button>
                            </NavLink>
                        </li>
                        <li className="Learning">
                            <NavLink to="/EmptyPage" activeStyle>
                                <button className="btn btn-outline-primary Course">
                                    <img src={CourseLogo} alt="CourseLogo" className={"CourseLogo"} style={{bottom: '20px'}}></img>
                                    <div className={"CourseName"}>Online Learning</div>
                                    <div className={"CourseDetail"}>
                                        Lorem ipsum dolor sit amet, consectetur.
                                    </div>
                                </button>
                            </NavLink>
                        </li>
                        <li className="Learning">
                            <NavLink to="/EmptyPage" activeStyle>
                                <button className="btn btn-outline-primary Course">
                                    <img src={CourseLogo} alt="CourseLogo" className={"CourseLogo"} style={{bottom: '20px'}}></img>
                                    <div className={"CourseName"}>Online Learning</div>
                                    <div className={"CourseDetail"}>
                                        Lorem ipsum dolor sit amet, consectetur.
                                    </div>
                                </button>
                            </NavLink>
                        </li>

                        <li className="Learning">
                            <NavLink to="/EmptyPage" activeStyle>
                                <button className="btn btn-outline-primary Course">
                                    <img src={CourseLogo} alt="CourseLogo" className={"CourseLogo"} style={{bottom: '20px'}}></img>
                                    <div className={"CourseName"}>Online Learning</div>
                                    <div className={"CourseDetail"}>
                                        Lorem ipsum dolor sit amet, consectetur.
                                    </div>
                                </button>
                            </NavLink>
                        </li>
                    </ul></li>

                    <li className={"footer"}><ul>
                        <li style={{display: 'inline-block', float: 'left', color: 'white', marginTop: '300px', marginLeft: '180px'}}>
                            <ul>
                                <li style={{display: 'inline-block'}}><img src={logo} alt="logo"></img></li>
                                <li style={{display: 'inline-block', position: 'relative', top: '10px', color: 'white'}} className="fs-3 fw-bolder">
                                    <div style={{width: '89px', height: '42px'}}>EduUS</div>
                                </li>
                                <li style={{marginTop: '5px', fontSize: '12px', textAlign: 'center'}}>
                                    &#169 Copyright 2022 Online
                                </li>
                            </ul>
                        </li>

                        <li style={{display: 'inline-block', float: 'right', color: 'white', marginTop: '180px'}}>
                            <ul style={{marginRight: '100px', display: 'inline-block', position: 'relative', top: '132px'}}>
                                <li>Information</li>
                                <li>
                                    <div style={{border: 'solid 1px white', width: '80px', marginTop: '10px', marginBottom: '10px'}}></div>
                                </li>

                                <li style={{marginTop: '10px', marginBottom: '10px'}}><NavLink to="/EmptyPage" activeStyle>About Us</NavLink></li>
                                <li style={{marginTop: '10px', marginBottom: '10px'}}><NavLink to="/EmptyPage" activeStyle>Products</NavLink></li>
                                <li style={{marginTop: '10px', marginBottom: '10px'}}><NavLink to="/EmptyPage" activeStyle>Contact Us</NavLink></li>
                                <li style={{marginTop: '10px', marginBottom: '10px'}}><NavLink to="/EmptyPage" activeStyle>Terms of Services</NavLink></li>
                            </ul>
                            <ul style={{marginRight: '100px', display: 'inline-block', position: 'relative', top: '43px'}}>
                                <li>Follow Us</li>
                                <li>
                                    <div style={{border: 'solid 1px white', width: '80px', marginTop: '10px', marginBottom: '10px'}}></div>
                                </li>
                                <li className={"ContactLogo"}><NavLink to="/EmptyPage" activeStyle><img src={Fb} alt={"Fb"}></img></NavLink></li>
                                <li className={"ContactLogo"}><NavLink to="/EmptyPage" activeStyle><img src={In} alt={"In"}></img></NavLink></li>
                                <li className={"ContactLogo"}><NavLink to="/EmptyPage" activeStyle><img src={Tw} alt={"Tw"}></img></NavLink></li>
                                <li className={"ContactLogo"}><NavLink to="/EmptyPage" activeStyle><img src={Ig} alt={"Ig"}></img></NavLink></li>
                            </ul></li>
                    </ul></li>
                </ul>
            </div>
        </div>
    );
}

export default HomePage;