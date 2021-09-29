import React from "react";
import { useState } from "react"
import "./css/docpg.css"
import "./css/tailwind.css"
import speraxlogo from './images/speraxlogo.svg'
import speraxlogo_black from './images/speraxlogo_black.svg'
import Switch from '@mui/material/Switch';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import darkback from "./images/darkback.jpg";
import lightback from "./images/lightback.jpg";
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import Docxplorer from "./docXplorer";

var bgcount = 0;

var Docpg = (props) => {
    var [change_bg_ini, change_bg_up] = useState({
        change_icon: <DarkModeIcon/>,
        change_logo: speraxlogo,
        change_bgPic: darkback,
        change_boxcolor: "text-gray-400 bg-gray-900 body-font",
        change_txtcolor: "text-gray-400 body-font hover:text-white",
        change_headertxt: "title-font font-medium text-white tracking-widest underline text-medium mb-3",
        tile_color_upperTiles: "h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative",
        h2_color_upperTiles: "tracking-widest text-xs title-font font-medium text-gray-500 mb-1",
        h1_color_upperTiles: "title-font sm:text-2xl text-xl font-medium text-white mb-3",
        p_color_upperTiles: "leading-relaxed text-white mb-3",
        a_color_upperTiles: "text-yellow-400 inline-flex items-center",
        div_lowerTiles: "bg-gray-800 rounded flex p-4 h-full items-center",
        svg_lowerTiles: "text-white w-6 h-6 flex-shrink-0 mr-4",
        span_lowerTiles: "title-font font-medium text-white"


    })

    var change_bg = () => {
        ++bgcount;
        if (bgcount % 2 !== 0) {
            document.getElementById('maintitle').style.color = "black"
            document.getElementById('othTitle').style.color = "black"
            document.getElementById('othTitle2').style.color = "black"
            var social_link_elements = document.getElementsByClassName('social_link')
            for (var i = 0; i < social_link_elements.length; i++) {
                social_link_elements[i].style.color = "black"
            }

            change_bg_up({
                change_icon: <LightModeIcon/>,
                change_logo: speraxlogo_black,
                change_bgPic: lightback,
                change_boxcolor: "text-black bg-gray-300 body-font",
                change_txtcolor: "text-black body-font hover:text-gray-600",
                change_headertxt: 'title-font font-medium text-black tracking-widest underline text-medium mb-3',
                tile_color_upperTiles: "h-full bg-gray-200 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative",
                h2_color_upperTiles: "tracking-widest text-xs title-font font-medium text-gray-900 mb-1",
                h1_color_upperTiles: "title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3",
                p_color_upperTiles: "leading-relaxed mb-3",
                a_color_upperTiles: "text-indigo-900 inline-flex items-center",
                div_lowerTiles: "bg-gray-100 rounded flex p-4 h-full items-center",
                svg_lowerTiles: "text-black w-6 h-6 flex-shrink-0 mr-4",
                span_lowerTiles: "title-font font-medium"
            })
        }
        else {
            document.getElementById('maintitle').style.color = "white";
            document.getElementById('othTitle').style.color = "white";
            document.getElementById('othTitle2').style.color = "white";
            var social_link_elements = document.getElementsByClassName('social_link')
            for (var i = 0; i < social_link_elements.length; i++) {
                social_link_elements[i].style.color = "white"
            }

            change_bg_up({
                change_icon: <DarkModeIcon/>,
                change_logo: speraxlogo,
                change_bgPic: darkback,
                change_boxcolor: "text-gray-400 bg-gray-900 body-font",
                change_txtcolor: "text-gray-400 body-font hover:text-white",
                change_headertxt: "title-font font-medium text-white tracking-widest underline text-medium mb-3",
                tile_color_upperTiles: "h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative",
                h2_color_upperTiles: "tracking-widest text-xs title-font font-medium text-gray-500 mb-1",
                h1_color_upperTiles: "title-font sm:text-2xl text-xl font-medium text-white mb-3",
                p_color_upperTiles: "leading-relaxed text-white mb-3",
                a_color_upperTiles: "text-yellow-400 inline-flex items-center",
                div_lowerTiles: "bg-gray-800 rounded flex p-4 h-full items-center",
                svg_lowerTiles: "text-white w-6 h-6 flex-shrink-0 mr-4",
                span_lowerTiles: "title-font font-medium text-white"
            })
        }

    }
    return (
        <div className="docpagediv" style={{ backgroundImage: `url(${change_bg_ini.change_bgPic})`, backgroundSize: "cover", backgroundAttachment: "fixed", height: "100%", width: "100%" }}>
            <header className={change_bg_ini.change_boxcolor} style={{ position: "fixed", zIndex: 10, width: "100%" }}>
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a href = "https://sperax.io/"><img id="speraxlogo" src={change_bg_ini.change_logo} style = {{cursor:"pointer"}}/></a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <a href = "https://sperax.io/USDs" className="mr-5 hover:text-white">USD'S</a>
                        <a href = "https://sperax.io/team" className="mr-5 hover:text-white">About Us</a>
                        <a href = "https://sperax.io/#Resources" className="mr-5 hover:text-white">Resources</a>
                        <a href = "https://sperax.io/put your endpoint here" className="mr-5 hover:text-white">Docs</a>
                        <a href = "https://sperax.io/news" className="mr-5 hover:text-white">News</a>
                        <a href = "https://forum.sperax.io/" className="mr-5 hover:text-white">Forum</a>
                    </nav>
                    <Switch color="warning" onClick={() => { change_bg() }} />
                    {change_bg_ini.change_icon}
                </div>
            </header>
            <div className="indivdoc" style={{ backgroundImage: `url(${change_bg_ini.change_bgPic})`, backgroundSize: "cover", backgroundAttachment: "fixed", height: "100%", width: "100%" }}>
                <h1 id="maintitle" style={{ color: "white" }}>SPERAX DOCS</h1>







                {/*
                These are dummies for upper tiles;; you can chage the texts and make it work
                OR you can copy paste these dummies to add more


                ********one thing to remember*********

                follow those IDs inside eg. "content_1"

                these are IDs of the contents of the docXplorer page(i recommend first follow that then come back here)

                which content you want to tag put that ID here(for each tile)

                same rule follows for small tiles

                rest have fun ;)
                */}

                {/* upper tile dummy 1 */}
                <div class="container px-5 py-14 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 lg:w-1/3 transition duration-500 transform hover:scale-105" style = {{cursor:"pointer"}}>
                            <div class={change_bg_ini.tile_color_upperTiles}>
                                <h2 onClick = {props.pageChange} id = "content_1" class={change_bg_ini.h2_color_upperTiles}>CATEGORY</h2>
                                <h1 onClick = {props.pageChange} id = "content_1" class={change_bg_ini.h1_color_upperTiles}>WHAT IS SPERAX</h1>
                                <p onClick = {props.pageChange} id = "content_1" class={change_bg_ini.p_color_upperTiles}>Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                <a onClick = {props.pageChange} id = "content_1" class={change_bg_ini.a_color_upperTiles}>Learn More
                                    <svg onClick = {props.pageChange} id = "content_1" class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/3 transition duration-500 transform hover:scale-105" style = {{cursor:"pointer"}}>
                            <div class={change_bg_ini.tile_color_upperTiles}>
                                <h2 onClick = {props.pageChange} id = "content_2" class={change_bg_ini.h2_color_upperTiles}>CATEGORY</h2>
                                <h1 onClick = {props.pageChange} id = "content_2" class={change_bg_ini.h1_color_upperTiles}>Ennui Snackwave Thundercats</h1>
                                <p onClick = {props.pageChange} id = "content_2" class={change_bg_ini.p_color_upperTiles}>Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                <a onClick = {props.pageChange} id = "content_2" class={change_bg_ini.a_color_upperTiles}>Learn More
                                    <svg onClick = {props.pageChange} id = "content_2" class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* upper tile dummy 2 */}

                        <div class="p-4 lg:w-1/3 transition duration-500 transform hover:scale-105" style = {{cursor:"pointer"}}>
                            <div class={change_bg_ini.tile_color_upperTiles}>
                                <h2 class={change_bg_ini.h2_color_upperTiles}>CATEGORY</h2>
                                <h1 class={change_bg_ini.h1_color_upperTiles}>Selvage Poke Waistcoat Godard</h1>
                                <p class={change_bg_ini.p_color_upperTiles}>Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                <a class={change_bg_ini.a_color_upperTiles}>Learn More
                                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/3 transition duration-500 transform hover:scale-105" style = {{cursor:"pointer"}}>
                            <div class={change_bg_ini.tile_color_upperTiles}>
                                <h2 class={change_bg_ini.h2_color_upperTiles}>CATEGORY</h2>
                                <h1 class={change_bg_ini.h1_color_upperTiles}>Raclette Blueberry Nextious Level</h1>
                                <p class={change_bg_ini.p_color_upperTiles}>Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                <a class={change_bg_ini.a_color_upperTiles}>Learn More
                                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="container px-5 py-24 mx-auto">
                <h1 id="othTitle" style={{ color: "white", fontSize: "40px" }}>Other Links</h1>
                <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">

                    {/* small tiles dummy 1 */}

                    <div class="p-2 sm:w-1/2 w-full transition duration-500 transform hover:scale-105" style = {{cursor:"pointer"}}>
                        <div class={change_bg_ini.div_lowerTiles}>
                            <svg onClick = {props.pageChange} id = "content_3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class={change_bg_ini.svg_lowerTiles} viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span onClick = {props.pageChange} id = "content_3" class={change_bg_ini.span_lowerTiles}>Authentic Cliche Forage</span>
                        </div>
                    </div>



                    {/* small tiles dummy 2 */}

                    <div class="p-2 sm:w-1/2 w-full transition duration-500 transform hover:scale-105" style = {{cursor:"pointer"}}>
                        <div class={change_bg_ini.div_lowerTiles}>
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class={change_bg_ini.svg_lowerTiles} viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span class={change_bg_ini.span_lowerTiles}>Kinfolk Chips Snackwave</span>
                        </div>
                    </div>

                    
                    <div class="p-2 sm:w-1/2 w-full transition duration-500 transform hover:scale-105" style = {{cursor:"pointer"}}>
                        <div class={change_bg_ini.div_lowerTiles}>
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class={change_bg_ini.svg_lowerTiles} viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span class={change_bg_ini.span_lowerTiles}>Coloring Book Ethical</span>
                        </div>
                    </div>
                    <div class="p-2 sm:w-1/2 w-full transition duration-500 transform hover:scale-105" style = {{cursor:"pointer"}}>
                        <div class={change_bg_ini.div_lowerTiles}>
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class={change_bg_ini.svg_lowerTiles} viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span class={change_bg_ini.span_lowerTiles}>Typewriter Polaroid Cray</span>
                        </div>
                    </div>
                    <div class="p-2 sm:w-1/2 w-full transition duration-500 transform hover:scale-105" style = {{cursor:"pointer"}}>
                        <div class={change_bg_ini.div_lowerTiles}>
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class={change_bg_ini.svg_lowerTiles} viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span class={change_bg_ini.span_lowerTiles}>Pack Truffaut Blue</span>
                        </div>
                    </div>
                    <div class="p-2 sm:w-1/2 w-full transition duration-500 transform hover:scale-105" style = {{cursor:"pointer"}}>
                        <div class={change_bg_ini.div_lowerTiles}>
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class={change_bg_ini.svg_lowerTiles} viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span class={change_bg_ini.span_lowerTiles}>The Catcher In The Rye</span>
                        </div>
                    </div>
                </div>
            </div>





            <div class="container px-5 py-24 mx-auto" style={{ marginTop: "-5%" }}>
                <h1 id="othTitle2" style={{ color: "white", fontSize: "40px" }}>MORE DOCS</h1>
                <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    <div class="p-2 sm:w-1/2 w-full transition duration-500 transform hover:scale-105" style = {{cursor:"pointer"}}>
                        <div class={change_bg_ini.div_lowerTiles}>
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class={change_bg_ini.svg_lowerTiles} viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span class={change_bg_ini.span_lowerTiles}>Authentic Cliche Forage</span>
                        </div>
                    </div>
                    <div class="p-2 sm:w-1/2 w-full transition duration-500 transform hover:scale-105" style = {{cursor:"pointer"}}>
                        <div class={change_bg_ini.div_lowerTiles}>
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class={change_bg_ini.svg_lowerTiles} viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span class={change_bg_ini.span_lowerTiles}>Kinfolk Chips Snackwave</span>
                        </div>
                    </div>
                    <div class="p-2 sm:w-1/2 w-full transition duration-500 transform hover:scale-105" style = {{cursor:"pointer"}}>
                        <div class={change_bg_ini.div_lowerTiles}>
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class={change_bg_ini.svg_lowerTiles} viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span class={change_bg_ini.span_lowerTiles}>Coloring Book Ethical</span>
                        </div>
                    </div>
                    <div class="p-2 sm:w-1/2 w-full transition duration-500 transform hover:scale-105" style = {{cursor:"pointer"}}>
                        <div class={change_bg_ini.div_lowerTiles}>
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class={change_bg_ini.svg_lowerTiles} viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span class={change_bg_ini.span_lowerTiles}>Typewriter Polaroid Cray</span>
                        </div>
                    </div>
                    <div class="p-2 sm:w-1/2 w-full transition duration-500 transform hover:scale-105" style = {{cursor:"pointer"}}>
                        <div class={change_bg_ini.div_lowerTiles}>
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class={change_bg_ini.svg_lowerTiles} viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span class={change_bg_ini.span_lowerTiles}>Pack Truffaut Blue</span>
                        </div>
                    </div>
                    <div class="p-2 sm:w-1/2 w-full transition duration-500 transform hover:scale-105" style = {{cursor:"pointer"}}>
                        <div class={change_bg_ini.div_lowerTiles}>
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class={change_bg_ini.svg_lowerTiles} viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span class={change_bg_ini.span_lowerTiles}>The Catcher In The Rye</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{ backgroundColor: "white", marginTop: "-5%" }} />
            <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", justifyContent: "space-evenly", marginTop: "3%", marginBottom: "2%" }}>
                <div id="social_links">
                    <div className="insocial_links">
                        <TelegramIcon color="default" sx={{ fontSize: 50 }} />
                        <a href = "https://t.me/sperax" className="social_link" style={{ color: "white" }}>connect us on Telegram</a>
                    </div>
                    <div className="insocial_links">
                        <GitHubIcon color="default" sx={{ fontSize: 50 }} />
                        <a href = "https://github.com/Sperax" className="social_link" style={{ color: "white" }}>Explore GitHub</a>
                    </div>
                    <div className="insocial_links">
                        <FacebookIcon color="default" sx={{ fontSize: 50 }} />
                        <a href = "https://www.facebook.com/sperax" className="social_link" style={{ color: "white" }}>Follow us on Facebook</a>
                    </div>
                </div>
            </div>
            <hr style={{ backgroundColor: "white" }} />









            <footer class={change_bg_ini.change_boxcolor}>
                <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a href = "https://sperax.io/" class="flex title-font font-medium items-center md:justify-start justify-center text-white">
                            <img id="speraxlogo" src={change_bg_ini.change_logo} />
                        </a>
                        <p class={change_bg_ini.change_txtcolor}>Connecting you with modern money</p>
                    </div>
                    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div class="lg:w-1/3 md:w-1/2 w-full px-4">
                            <h2 class={change_bg_ini.change_headertxt}>Projects</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a href = "https://sperax.io/bdls" class={change_bg_ini.change_txtcolor}>BDLS</a>
                                </li>
                                <li>
                                    <a href = "https://sperax.io/lifted" class={change_bg_ini.change_txtcolor}>LIFTED</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/3 md:w-1/2 w-full px-4">
                            <h2 class={change_bg_ini.change_headertxt}>About</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a href = "https://sperax.io/team" class={change_bg_ini.change_txtcolor}>Team</a>
                                </li>
                                <li>
                                    <a href = "https://sperax.io/story" class={change_bg_ini.change_txtcolor}>The Sperax Story</a>
                                </li>
                                <li>
                                    <a href = "https://sperax.io/#Timeline" class={change_bg_ini.change_txtcolor}>Roadmap</a>
                                </li>
                                <li>
                                    <a href = "https://sperax.io/news" class={change_bg_ini.change_txtcolor}>News</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/3 md:w-1/2 w-full px-4">
                            <a href = "https://sperax.io/developers" class={change_bg_ini.change_headertxt}>Developers</a>
                            <nav class="list-none mb-10">
                                <li>
                                    <a href = "https://gitcoin.co/hackathon/gr11?org=sperax" class={change_bg_ini.change_txtcolor}>Bounties</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/3 md:w-1/2 w-full px-4">
                            <h2 class={change_bg_ini.change_headertxt}>Resources</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a href = "https://github.com/Sperax/USDs-Whitepaper/blob/main/USDs_Whitepaper.pdf" class={change_bg_ini.change_txtcolor}>Whitepaper</a>
                                </li>
                                <li>
                                    <a href = "https://sperax.io/brandKit" class={change_bg_ini.change_txtcolor}>BrandKit</a>
                                </li>
                                <li>
                                    <a href = "https://etherscan.io/token/0xb4a3b0faf0ab53df58001804dda5bfc6a3d59008" class={change_bg_ini.change_txtcolor}>erc20 Block Explorer</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/3 md:w-1/2 w-full px-4">
                            <h2 class={change_bg_ini.change_headertxt}>Contact</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a href = "contact@sperax.io" class={change_bg_ini.change_txtcolor}>Email</a>
                                </li>
                                <li>
                                    <a href = "https://sperax.io/careers" class={change_bg_ini.change_txtcolor}>Career</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/3 md:w-1/2 w-full px-4">
                            <a href = "https://forum.sperax.io/" class={change_bg_ini.change_headertxt}>Forum</a>
                            <nav class="list-none mb-10">
                                <li>
                                    <a href = "https://sperax.io/play" class={change_bg_ini.change_headertxt}>Sperax Play</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-800 bg-opacity-75">
                    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p class="text-gray-400 text-sm text-center sm:text-left">Sperax Foundation © Sperax 2021. All rights reserved.
                        </p>
                        <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a href = "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=Mzg4NTI1MzU3MA==&scene=124#wechat_redirect" class="text-gray-400">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M21.502 19.525c1.524-1.105 2.498-2.738 2.498-4.554 0-3.326-3.237-6.023-7.229-6.023s-7.229 2.697-7.229 6.023c0 3.327 3.237 6.024 7.229 6.024.825 0 1.621-.117 2.36-.33l.212-.032c.139 0 .265.043.384.111l1.583.914.139.045c.133 0 .241-.108.241-.241l-.039-.176-.326-1.215-.025-.154c0-.162.08-.305.202-.392zm-12.827-17.228c-4.791 0-8.675 3.236-8.675 7.229 0 2.178 1.168 4.139 2.997 5.464.147.104.243.276.243.471l-.03.184-.391 1.458-.047.211c0 .16.13.29.289.29l.168-.054 1.899-1.097c.142-.082.293-.133.46-.133l.255.038c.886.255 1.842.397 2.832.397l.476-.012c-.188-.564-.291-1.158-.291-1.771 0-3.641 3.542-6.593 7.911-6.593l.471.012c-.653-3.453-4.24-6.094-8.567-6.094zm5.686 11.711c-.532 0-.963-.432-.963-.964 0-.533.431-.964.963-.964.533 0 .964.431.964.964 0 .532-.431.964-.964.964zm4.82 0c-.533 0-.964-.432-.964-.964 0-.533.431-.964.964-.964.532 0 .963.431.963.964 0 .532-.431.964-.963.964zm-13.398-5.639c-.639 0-1.156-.518-1.156-1.156 0-.639.517-1.157 1.156-1.157.639 0 1.157.518 1.157 1.157 0 .638-.518 1.156-1.157 1.156zm5.783 0c-.639 0-1.156-.518-1.156-1.156 0-.639.517-1.157 1.156-1.157.639 0 1.157.518 1.157 1.157 0 .638-.518 1.156-1.157 1.156z"/>
                                </svg>
                            </a>
                            <a href = "https://twitter.com/sperax_io" class="ml-3 text-gray-400">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a href = "https://medium.com/sperax" class="ml-3 text-gray-400">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z"/>
                                </svg>
                            </a>
                            <a href = "https://www.linkedin.com/company/sperax/" class="ml-3 text-gray-400">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default Docpg