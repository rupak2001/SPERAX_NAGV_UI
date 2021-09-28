import React from "react";
import { useState } from "react"
import "./css/docXplorer.css"
import "./css/tailwind.css"
import speraxlogo from './images/speraxlogo.svg'
import speraxlogo_black from './images/speraxlogo_black.svg'
import Switch from '@mui/material/Switch';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CopyToClipboard } from 'react-copy-to-clipboard';

var bgcount = 0;
var prevID_cont;
var prevQlink_cont;
var Docxplorer = (props) => {
    prevID_cont = props.prevID;

    var loadFirstDoc = () => {
        prevQlink_cont = "quicklinks_" + prevID_cont.substr(8, prevID_cont.length);
        console.log(prevID_cont + prevQlink_cont)
        document.getElementById(prevID_cont).style.display = "flex"
        document.getElementById(prevQlink_cont).style.display = "flex"
    }

    setTimeout(() => {
        loadFirstDoc()
    }, 1000);

    //this hook is responsible for all color switch between light and dark mode
    var [change_bg_ini, change_bg_up] = useState({
        change_icon: <DarkModeIcon />,
        change_logo: speraxlogo,
        change_boxcolor: "text-gray-400 bg-gray-900 body-font",
        change_txtcolor: "text-gray-400 body-font hover:text-white",
        change_snippetcolor: atomOneDark,
        change_bg_color: "rgb(5, 1, 15)",
        change_nagv_link_color: "rgb(211, 220, 228)",
        change_headertxt: "title-font font-medium text-white tracking-widest underline text-medium mb-3",
    })




    /*
    When you make a new reference of a page Make sure you must populate the 2 arrays below and follow order
    accordingly;; like: for content_1 is for 1st article as in nagivation sidebar(donot make subparts for dropdown)

    you should also populate the reference for quicklinks too like above way


    keep in mind: those values are ID's (i will comment that also below)
    */


    var page_refs = ["content_1", "content_2", "content_3"]
    var q_link_refs = ["quicklinks_1", "quicklinks_2", "quicklinks_3"]







    var switchContent = (id) => {
        var content_id = id.target.id
        content_id = Number(content_id.substr(5, content_id.length - 1))
        document.getElementById(prevID_cont).style.display = "none";
        document.getElementById(prevQlink_cont).style.display = "none";

        if (!document.getElementById(page_refs[content_id - 1]).style.display || document.getElementById(page_refs[content_id - 1]).style.display === "none") {
            document.getElementById(page_refs[content_id - 1]).style.display = "flex"
            document.getElementById(q_link_refs[content_id - 1]).style.display = "flex"
        }
        prevID_cont = page_refs[content_id - 1];
        prevQlink_cont = q_link_refs[content_id - 1];
    }

    var show_copied_msg = (id) => {
        document.getElementById(id.target.id).innerHTML = "copied";
        setTimeout(() => { document.getElementById(id.target.id).innerHTML = "copy" }, 1000)
    }


    var change_bg = () => {
        ++bgcount;
        if (bgcount % 2 !== 0) {
            change_bg_up({
                change_icon: <LightModeIcon />,
                change_logo: speraxlogo_black,
                change_boxcolor: "text-black bg-gray-300 body-font",
                change_txtcolor: "text-black body-font hover:text-gray-600",
                change_snippetcolor: docco,
                change_bg_color: "#E8F6EF",
                change_nagv_link_color: "black",
                change_headertxt: 'title-font font-medium text-black tracking-widest underline text-medium mb-3',
            })

            document.getElementById('content').style.color = "black";
            document.getElementById('quicklink').style.color = "black";
            document.getElementById("nagv").style.borderColor = "black";
            document.getElementById("quicklink").style.borderColor = "black";
        }
        else {
            change_bg_up({
                change_icon: <DarkModeIcon />,
                change_logo: speraxlogo,
                change_boxcolor: "text-gray-400 bg-gray-900 body-font",
                change_txtcolor: "text-gray-400 body-font hover:text-white",
                change_snippetcolor: atomOneDark,
                change_bg_color: "rgb(5, 1, 15)",
                change_nagv_link_color: "rgb(211, 220, 228)",
                change_headertxt: "title-font font-medium text-white tracking-widest underline text-medium mb-3",
            })

            document.getElementById('content').style.color = "white";
            document.getElementById('quicklink').style.color = "white";
            document.getElementById("nagv").style.borderColor = "white";
            document.getElementById("quicklink").style.borderColor = "white";
        }
    }

    var opensubmenu = (bid) => {
        var actid = bid.target.id + "_div";
        if (!document.getElementById(actid).style.display || document.getElementById(actid).style.display === "none") {
            document.getElementById(actid).style.display = "flex"
        }
        else {
            document.getElementById(actid).style.display = "none"
        }
    }









    /*
    to put a code snippet code on your doc make a variable as i did below
    just name it properly like (code_pageNumberAccordingToNagv_numberOfCodeUsingInThatContent) example 
    code_1_1, code_5_2
    then do the same as
    */

    var code_1_1 = `class FactorialExample{  
        public static void main(String args[]){  
         int i,fact=1;  
         int number=5;//It is the number to calculate factorial    
         for(i=1;i<=number;i++){    
             fact=fact*i;    
         }    
         System.out.println("Factorial of "+number+" is aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa: "+fact);    
        }  
       }`



    return (
        <div className="docpagediv" style={{ backgroundColor: change_bg_ini.change_bg_color, height: "100%", width: "100%" }}>
            <header className={change_bg_ini.change_boxcolor} style={{ position: "fixed", zIndex: 10, width: "100%" }}>
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a href = "https://sperax.io/"><img id="speraxlogo" src={change_bg_ini.change_logo} style={{ cursor: "pointer" }} /></a>
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


            <div className="indivdocx" style={{ height: "100%", width: "100%" }}>
                <div id="nagv" style={{ color: "white" }}>
                    <div id="menus" style={{ color: "white" }}>

                        {/*here you can make nagivation links 
                        just follow basic ascending order(donot make nagivation id different for submenus)

                        i have made dummy links(only 3 i have done; rest is for you ;)  )
                        */ }

                        <a id="nagv_1" style={{ color: change_bg_ini.change_nagv_link_color }} href="#" onClick={(id) => { switchContent(id) }}>what is sperax</a>
                        <a id="nagv_2" onClick={(id) => { switchContent(id) }} style={{ color: change_bg_ini.change_nagv_link_color }}>nothing 1</a>
                        <a id="nagv_3" onClick={(id) => { switchContent(id) }} style={{ color: change_bg_ini.change_nagv_link_color }}>nothing 2</a>
                        <button id="submenu1" style={{ color: change_bg_ini.change_nagv_link_color }} onClick={(bid) => { opensubmenu(bid) }}>submenushow1--></button>
                        <div className="submenu" id="submenu1_div">
                            <a id="nagv_4" onClick={(id) => { switchContent(id) }} style={{ color: change_bg_ini.change_nagv_link_color }}>nothing 1</a>
                            <a id="nagv_5" onClick={(id) => { switchContent(id) }} style={{ color: change_bg_ini.change_nagv_link_color }}>nothing 2</a>
                            <a id="nagv_6" onClick={(id) => { switchContent(id) }} style={{ color: change_bg_ini.change_nagv_link_color }}>nothing 3</a>
                            <a id="nagv_7" onClick={(id) => { switchContent(id) }} style={{ color: change_bg_ini.change_nagv_link_color }}>nothing 4</a>
                        </div>
                        <a id="nagv_8" onClick={(id) => { switchContent(id) }} style={{ color: change_bg_ini.change_nagv_link_color }}>content number 1</a>
                        <a id="nagv_9" onClick={(id) => { switchContent(id) }} style={{ color: change_bg_ini.change_nagv_link_color }}>content number 2</a>
                        <a id="nagv_10" onClick={(id) => { switchContent(id) }} style={{ color: change_bg_ini.change_nagv_link_color }}>content number 3</a>
                        <a id="nagv_11" onClick={(id) => { switchContent(id) }} style={{ color: change_bg_ini.change_nagv_link_color }}>content number 4</a>

                    </div>
                </div>






                <div id="content" >

                    {/*
                    here you put the main contents of you doc page
                    here you can just put any html(in react style) and it will work

                    (for giving code snippets follow my dummy to add more
                     and put the actual code above as i mentioned earlier)


                     and for each div of content giv proper ID(proper order) and reference in those above 2 arrays
                     as i mentioned


                     follow my dummies:dummy 1
                    */}


                    <div className="contents" id="content_1" style={{ display: "none" }}>
                        <h1>checking h1 tags</h1>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean massa
                            <strong>strong</strong>. Cum sociis natoque penatibus
                            et magnis dis parturient montes, nascetur ridiculus
                            mus. Donec quam felis, ultricies nec, pellentesque
                            eu, pretium quis, sem. Nulla consequat massa quis
                            enim. Donec pede justo, fringilla vel, aliquet nec,
                            vulputate eget, arcu. In enim justo, rhoncus ut,
                            imperdiet a, venenatis vitae, justo. Nullam dictum
                            felis eu pede <a class="external ext" href="#">link</a>
                            mollis pretium. Integer tincidunt. Cras dapibus.
                            Vivamus elementum semper nisi. Aenean vulputate
                            eleifend tellus. Aenean leo ligula, porttitor eu,
                            consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                            dapibus in, viverra quis, feugiat a, tellus. Phasellus
                            viverra nulla ut metus varius laoreet. Quisque rutrum.
                            Aenean imperdiet. Etiam ultricies nisi vel augue.
                            Curabitur ullamcorper ultricies nisi.</p>


                        {/*
                        this is the dummy code snippet syntax just copy paste it where you need
                        and change the following
                         */}

                        <div classname="code_snippet" >
                            <CopyToClipboard text={code_1_1}>{/*change the name of text as told above*/}
                                <button id="code_p1_c1" onClick={(id) => { show_copied_msg(id) }} className=" focus:outline-none bg-transparent hover:bg-gray-400 text-green-700 text-white font-bold py-2 px-4" style={{ cursor: "pointer" }}>copy</button>
                            </CopyToClipboard>
                            <SyntaxHighlighter className="syntaxparts" language='javascript' style={change_bg_ini.change_snippetcolor} lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }} showLineNumbers wrapLines={true}>
                                {code_1_1} {/*change here too*/}
                            </SyntaxHighlighter>
                        </div>



                        <h1>Lorem ipsum dolor sit amet consectetuer adipiscing
                            elit</h1>
                        <a id="test_link_1" href="#">test link 1</a>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean massa
                            <strong>strong</strong>. Cum sociis natoque penatibus
                            et magnis dis parturient montes, nascetur ridiculus
                            mus. Donec quam felis, ultricies nec, pellentesque
                            eu, pretium quis, sem. Nulla consequat massa quis
                            enim. Donec pede justo, fringilla vel, aliquet nec,
                            vulputate eget, arcu. In enim justo, rhoncus ut,
                            imperdiet a, venenatis vitae, justo. Nullam dictum
                            felis eu pede <a class="external ext" href="#">link</a>
                            mollis pretium. Integer tincidunt. Cras dapibus.
                            Vivamus elementum semper nisi. Aenean vulputate
                            eleifend tellus. Aenean leo ligula, porttitor eu,
                            consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                            dapibus in, viverra quis, feugiat a, tellus. Phasellus
                            viverra nulla ut metus varius laoreet. Quisque rutrum.
                            Aenean imperdiet. Etiam ultricies nisi vel augue.
                            Curabitur ullamcorper ultricies nisi.</p>
                        <h1>Lorem ipsum dolor sit amet consectetuer adipiscing
                            elit</h1>
                        <h2>Aenean commodo ligula eget dolor aenean massa</h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean massa.
                            Cum sociis natoque penatibus et magnis dis parturient
                            montes, nascetur ridiculus mus. Donec quam felis,
                            ultricies nec, pellentesque eu, pretium quis, sem.</p>
                        <h2>Aenean commodo ligula eget dolor aenean massa</h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean massa.
                            Cum sociis natoque penatibus et magnis dis parturient
                            montes, nascetur ridiculus mus. Donec quam felis,
                            ultricies nec, pellentesque eu, pretium quis, sem.</p>
                        <ul>
                            <li>Lorem ipsum dolor sit amet consectetuer.</li>
                            <li>Aenean commodo ligula eget dolor.</li>
                            <li>Aenean massa cum sociis natoque penatibus.</li>
                        </ul>
                        <a id="test_link_2" href="#">test link 2</a>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean massa.
                            Cum sociis natoque penatibus et magnis dis parturient
                            montes, nascetur ridiculus mus. Donec quam felis,
                            ultricies nec, pellentesque eu, pretium quis, sem.</p>
                        <form action="#" method="post">
                            <fieldset>
                                <label for="name">Name:</label>
                                <input type="text" id="name" placeholder="Enter your full name" style={{ backgroundColor: "black" }} />

                                <label for="email">Email:</label>
                                <input type="email" id="email" placeholder="Enter your email address" style={{ backgroundColor: "black" }} />

                                <label for="message">Message:</label>
                                <textarea id="message" placeholder="What's on your mind?" style={{ backgroundColor: "black" }}></textarea>

                                <input type="submit" value="Send message" style={{ backgroundColor: "black" }} />

                            </fieldset>
                        </form>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean massa.
                            Cum sociis natoque penatibus et magnis dis parturient
                            montes, nascetur ridiculus mus. Donec quam felis,
                            ultricies nec, pellentesque eu, pretium quis, sem.</p>
                        <table class="data">
                            <tr>
                                <th>Entry Header 1</th>
                                <th>Entry Header 2</th>
                                <th>Entry Header 3</th>
                                <th>Entry Header 4</th>
                            </tr>
                            <tr>
                                <td>Entry First Line 1</td>
                                <td>Entry First Line 2</td>
                                <td>Entry First Line 3</td>
                                <td>Entry First Line 4</td>
                            </tr>
                            <tr>
                                <td>Entry Line 1</td>
                                <td>Entry Line 2</td>
                                <td>Entry Line 3</td>
                                <td>Entry Line 4</td>
                            </tr>
                            <tr>
                                <td>Entry Last Line 1</td>
                                <td>Entry Last Line 2</td>
                                <td>Entry Last Line 3</td>
                                <td>Entry Last Line 4</td>
                            </tr>
                        </table>
                        <p id="test_link_3">Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean massa.
                            Cum sociis natoque penatibus et magnis dis parturient
                            montes, nascetur ridiculus mus. Donec quam felis,
                            ultricies nec, pellentesque eu, pretium quis, sem.</p>
                    </div>



                    {/*dummy content no.2 */}


                    <div id="content_2" class="contents" style={{ display: "none" }}>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                            <li>Aliquam tincidunt mauris eu risus.</li>
                            <li>Vestibulum auctor dapibus neque.</li>
                        </ul>
                        <h1>HTML Ipsum Presents</h1>

                        <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>

                        <h2>Header Level 2</h2>

                        <ol>
                            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                            <li>Aliquam tincidunt mauris eu risus.</li>
                        </ol>

                        <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>

                        <h3>Header Level 3</h3>

                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                            <li>Aliquam tincidunt mauris eu risus.</li>
                        </ul>
                    </div>




                    {/*dummy content no.3*/}


                    <div id="content_3" class="contents" style={{ display: "none" }}>
                        <dl>
                            <dt>Definition list</dt>
                            <dd>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.</dd>
                            <dt>Lorem ipsum dolor sit amet</dt>
                            <dd>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.</dd>
                        </dl>

                        <nav>
                            <ul>
                                <li><a href="#nowhere" title="Lorum ipsum dolor sit amet">Lorem</a></li>
                                <li><a href="#nowhere" title="Aliquam tincidunt mauris eu risus">Aliquam</a></li>
                                <li><a href="#nowhere" title="Morbi in sem quis dui placerat ornare">Morbi</a></li>
                                <li><a href="#nowhere" title="Praesent dapibus, neque id cursus faucibus">Praesent</a></li>
                                <li><a href="#nowhere" title="Pellentesque fermentum dolor">Pellentesque</a></li>
                            </ul>
                        </nav>

                        <ul>
                            <li>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</li>
                            <li>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</li>
                            <li>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</li>
                            <li>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</li>
                        </ul>

                    </div>
                </div>




                {/* 
                here you make quick links for your document 
                put as many links as you want
                
                but as like other 2 parts follow the order while giving ID
                
                i made 3 dummy quicklinks for 3 dummy content

                (one thing to remember ====>>
                if you donot want to give any quick link in a document just make an empty div with right numbering for ID
                and do referencing in the array above as mentioned
                )
                */}




                {/*quick link dummy 1*/}



                <div id="quicklink" >
                    <h2 style={{ textDecoration: "underline", fontSize: "larger" }}>QUICK NAV</h2>
                    <div id="quicklinks_1" style={{ display: "none", flexDirection: "column" }}>
                        <a className="hover:underline" href="#test_link_1">hello world</a>
                        <a className="hover:underline" href="#test_link_2">hello world</a>
                        <a className="hover:underline" href="#test_link_3">hello world</a>
                        <a className="hover:underline">hello world</a>
                    </div>

                    {/*quick link dummy 2*/}


                    <div id="quicklinks_2" style={{ display: "none", flexDirection: "column" }}>
                        <a className="hover:underline">hello world</a>
                    </div>

                    {/*quick link dummy 3*/}


                    <div id="quicklinks_3" style={{ display: "none", flexDirection: "column" }}>
                        <a className="hover:underline">hello earth</a>
                    </div>

                </div>
            </div>



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

export default Docxplorer