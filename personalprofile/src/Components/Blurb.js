import React, { Component } from "react";
    
export class Blurb extends Component { 
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
    return (
        <>
        <div className="container-fluid">
        <section class="sticky_title_bar">
            <div class="centered2">
            <div class="centered2"><img src="/media/logocolorbackgroung.png" width={"200px"} alt="logocolor" class="m-5"/></div>
                <div class="ts1">Evan Doucett</div> 
                <div class="ts2">Web Developer Profile</div> 
                <div class="ts3">Designer, Frontend / Web Developer and Coder</div> 
                <div class="ts3">I design and code beautifully simple things, and I love what I do.</div> 
                <hr/>
                    <div class=""><a class="link ts4" href="#ABOUT">About Me</a></div>
                    <div><a class="link ts4" href="#EDUCATION">Education</a></div>
                    <div><a class="link ts4" href="#ABILITIES">Abilities</a></div>
                    <div><a class="link ts4" href="#RECENT">Recent Work</a></div>
                <hr/>
                <div class="">
                    <div class="ts3 ">Evan Doucett</div>
                        <div class="ts3">Calgary, Alberta </div>
                        <div class="link-hover ts3" title="Message Me!!"> Email: edoucett@hotmail.com</div>  
                        <a class="" href="www.linkedin.com/in/evan-doucett" ><img src="/Media/iconlinkedin.png" class="img-thumbnail ms-2" width="40em" height="40em" alt="linkedin"/>  </a>
                        <a class="" href="www.linkedin.com/in/evan-doucett" ><img src="/Media/github.png" class="img-thumbnail ms-2" width="40em" height="40em" alt="linkedin"/>  </a>
                </div>
            </div>
        </section>
        
        <div class="welcome">
        <div class="centered2 bar"><img src="/Media/iconfire.svg" width={"40px"} alt="hrseperatortop" class="m-5"/></div>
        Welcome to my interactive profile. Please poke around
        </div>
        <hr class="c"></hr>
        <section class="section_center">
        <div class="centered2 ts1" id="ABOUT">About Me</div>
        <div class="centered2 bar"><img src="/Media/iconfire.svg" width={"40px"} alt="hrseperatortop" class="m-5"/></div>
        <hr/>
            <div class="tab ts3">Hi, I'm <b>Evan</b>. Nice to meet you.
                Since beginning my journey as a freelance designer, 
                I've done <b>remote / onsite work</b> for small businesses, <b>consulted</b> for startups business, 
                and collaborated with talented people to <b>create digital products</b> for 
                business use. <c>I'm quietly confident, naturally curious, result-driven, team oriented
                and perpetually working on improving my designs and improving my techniques.</c>
            </div>
        </section>

        <section class="section_center centered2">
            <div class="ts1" id="EDUCATION">Education</div>
            <div class="centered2 bar"><img src="/Media/iconfire.svg" width={"40px"} alt="hrseperatortop" class="m-5"/></div>
            <hr/>
                <div class="ts2">Object Oriented Software Development</div>
                <div class="ts2">SAIT, Advance School for Digital Technology</div>
                <div class="ts3">Grade Point Average: <b>3.99</b></div>
                <div class="ts3">May 2022 - October2022</div>
            <hr class="a"></hr>
                <div class="ts2">Accounting</div> 
                <div class="ts2">SAIT / Athabasca University</div>
                <div class="ts3">Grade Point Average: <b>3.8</b></div>
                <div class="ts3">January 2013 – January 2016</div>
        </section>

        <section class="section_center centered2">
            <div class="centered2 ts1" id="ABILITIES">Abilities</div>
            <div class="centered2 bar"><img src="/Media/iconfire.svg" width={"40px"} alt="hrseperatortop" class="m-5"/></div>
            <hr/>
                <div class="ts2">Designer</div>
                <hr class="a"></hr>
                    <div class="tab ts3">Photoshop, Bootstrap, InkScape</div>
                    <div class="tab ts3">CSS,</div>
                <div class="ts2">Sofware i Have Used</div>    
                    <div class="tab ts3">github, Crystal Reports, InkScape</div>
                    <div class="tab ts3">Visual Studio/ Code, .NET, IntelliJ/JetBrains</div>
                <div class="ts2">As a Coder</div> 
                    <div class="tab ts3">Java, JavaScript, HTML</div>
                    <div class="tab ts3">ReactJS, Python, Regex</div>
                    <div class="tab ts3">C#, </div>
                <div class="ts2">NetWorking Stuff</div>   
                    <div class="tab ts3">SQL Server, RESTful, Relational Database Design</div>  
                    <div class="tab ts3">MS Azure</div>  
                <div class="ts2">Operating Systems i Know</div>  
                    <div class="tab ts3">MS Windows, Linux, MacOS</div>  
                    <div class="tab ts3">iOS, Android</div>                          
        </section>

        <section class="section_center">
            <div class="centered2 ts1" id="RECENT">My Recent Work</div>
            <div class="centered2 bar"><img src="/Media/iconfire.svg" width={"40px"} alt="hrseperatortop" class="m-5"/></div>
            <hr/>
            <div class="ts2 centered2">Web Application Developer</div>
            <div class="ts4">Morrison Homes</div>
                <div class="ts3 tab">As a web application developer, I created, implemented, 
                    and developed a functional interface to integrate with an aging IT landscape. 
                    These functions included full CRUD operations.
                </div>
                <br/>
                <div >
                    <div class="ts3 tab">• Planning site designs, functionality, and navigation along with datacapture points.</div>
                    <div class="ts3 tab">• Meeting with clients or management to discuss the design plan andneeds of the website.</div>
                    <div class="ts3 tab">• Building wire frames and prototypes.</div>
                    <div class="ts3 tab">• Coding in C#, JavaScript, HTML, CSS.</div>
                    <div class="ts3 tab">• Using an MVC profile with Visual Studio.</div>
                    <div class="ts3 tab">• Databases create, read, update, delete (CRUD) function integration.</div>              
                </div>
                <div class="centered2 bar"><img src="/Media/iconfire.svg" width={"40px"} alt="hrseperatortop" class="m-5"/></div>
            <hr/>
            <div class="ts2 centered2">Web Developer/Designer</div>
            <div class="ts4">Land Works Resource Management Inc.</div>
                <div class="ts3 tab"> As a web developer it was my responsibility to design, coding, 
                and modifying websites, including all aspects of the website, such as layout,functionality, and user experience. I was also responsible for creatingaesthetically pleasing website designs with functional, 
                user-friendlydesign and clear navigation for optimal usability.
                </div>
                <br/>
                <div>
                    <div class="ts3 tab">• Understanding UI, cross-browser compatibility, and general webfunctionality and standards.</div>
                    <div class="ts3 tab">• Utilizing web applications and programming languages</div>
                    <div class="ts3 tab">• Meeting with clients or management to discuss the design plan andneeds of the website.</div>
                    <div class="ts3 tab">• Writing code for the website.</div>
                    <div class="ts3 tab">• Collaborating with team members to determine the website’s layout,content, and design.</div>
                    <div class="ts3 tab">• Integrating graphics, audio, and video into the website.</div>
                    <div class="ts3 tab">• Creating and testing applications for the website.</div>
                    <div class="ts3 tab">• Using ReactJS, Visual Studio Code.</div>        
                </div>
                <div class="centered2 bar"><img src="/Media/iconfire.svg" width={"40px"} alt="hrseperatortop" class="m-5"/></div>
            <hr/>
            <div class="ts2 centered2">Business Analytics and Process Design Manager</div>
            <div class="ts4">Caneda Transport Inc.</div>
                <div class="ts3 tab">As a Business Process Solutions Manager, I was responsible for themanagement of department milestones
                /goals, analyzing existingoperations, implementing effective systems, strategies, 
                and processes to improve organizational performance and profitability.
                </div>
                <br/>
                <div>
                <div class="ts3 tab">• Designed and implemented a mobile application from inception toproduction (focus on product characteristics, information transference,and operational efficiency)</div>      
                <div class="ts3 tab">• Collaborated with a team of 45 team members to determine theappropriate use of existing and new technology systems.</div>   
                <div class="ts3 tab">• Configuring, installing, and supporting desktop computers, laptopcomputers, mobile devices, printers, monitors, and other peripherals.</div>   
                <div class="ts3 tab">• Diagnosing hardware and software failures.</div>   
                <div class="ts3 tab">• Tracking and recording the assignment of IT assets in an inventorydatabase. Providing off-site home support when required.  </div>               
                </div>
        </section>
        </div>
        </>
    )

}
}
