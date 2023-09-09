import React, { Component } from "react";
    
export class Blurb extends Component { 
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {
    return (
        <>
        <div class="">
        <div className="container-fluid">
        <section class="sticky_title_bar">
            <div class="centered2">
            <div class="centered2"><img src="/media/logocolorbackgroung.png" width={"200px"} alt="logocolor" class="m-5"/></div>
                <div class="ts1">Evan Doucett</div> 
                <div class="ts2"><img src="/Media/iconfire.svg" width={"40px"} alt="hrseperatortop" class="m-5"/> Web Developer Profile <img src="/Media/iconfire.svg" width={"40px"} alt="hrseperatortop" class="m-5"/></div> 
                <div class="ts3">Designer, Frontend Creator / Web Developer / Coder and Consultant</div> 
                <hr/>
                    <div class=""><a class="link ts4" href="#ABOUT">About Me</a></div>
                    <div><a class="link ts4" href="#EDUCATION">Education</a><a class="link ts4" href="#ABILITIES">Abilities</a></div>
                    <div><a class="link ts4" href="#HOBBIES">Hobbies</a><a class="link ts4" href="#PERSONALITY">Personality</a></div>
                    <div><a class="link ts4" href="#RECENT">Recent Work</a></div>
                <hr/>
                <div class="">
                    <div class="ts3 ">Evan Doucett</div>
                        <div class="link-hover ts3" title="Message Me!!"> Email: evandoucett@theprogramforge.com</div>  
                        <a class="" href="www.linkedin.com/in/evan-doucett" ><img src="/Media/iconlinkedin.png" class="img-thumbnail ms-2" width="40em" height="40em" alt="linkedin"/>  </a>
                        <a class="" href="https://github.com/AtomDestructo" ><img src="/Media/github.png" class="img-thumbnail ms-2" width="40em" height="40em" alt="github"/>  </a>
                </div>
            </div>

        </section>
        <div class="fireImage ">
        <div class="welcome centered2">
            <div class=""><img src="/Media/welcomeblurb.svg" width={"700px"} alt="hrseperatortop" class="m-5"/></div> 
        </div>
        <hr class="c"></hr>
        <section class="section_center ">
        <div class="centered2 ts1" id="ABOUT">
            <img src="/Media/tttwinkle.svg" width={"40px"} alt="twinkle" class="m-5 "/>
            About Me
            <img src="/Media/tttwinkle.svg" width={"40px"} alt="twinkle" class="m-5 "/>
        </div>
        <div class="centered2 bar"><img src="/Media/iconfire.svg" width={"40px"} alt="twinkle" class="m-5"/></div>
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
            <div class="ts1" id="EDUCATION">
                <img src="/Media/tttwinkle.svg" width={"40px"} alt="twinkle" class="m-5 "/>
                Education
                <img src="/Media/tttwinkle.svg" width={"40px"} alt="twinkle" class="m-5 "/>
            </div>
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
            <div class="centered2 ts1" id="ABILITIES">
                <img src="/Media/tttwinkle.svg" width={"40px"} alt="twinkle" class="m-5 "/>
                Abilities
                <img src="/Media/tttwinkle.svg" width={"40px"} alt="twinkle" class="m-5 "/>
            </div>
            <div class="centered2 bar"><img src="/Media/iconfire.svg" width={"40px"} alt="hrseperatortop" class="m-5"/></div>
            <hr/>
            <div class="ts3">
                No experience:  <img src="/Media/onestars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/> ~
                Novice: <img src="/Media/twostars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/> ~  
                Intermediate: <img src="/Media/threestars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/> ~  
                Experienced: <img src="/Media/fourstars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/>
                </div>

                <div class="ts2">Working as a Designer</div>
                    <div class="tab ts3">Photoshop <img src="/Media/threestars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/></div>
                    <div class="tab ts3">Lightroom <img src="/Media/threestars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/></div>
                    <div class="tab ts3">Bootstrap <img src="/Media/threestars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/></div>
                    <div class="tab ts3">InkScape  <img src="/Media/threestars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/></div>
                    <div class="tab ts3">CSS <img src="/Media/threestars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/></div>

                <div class="ts2">Sofware i Use</div>    
                    <div class="tab ts3">github <img src="/Media/threestars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/></div>
                    <div class="tab ts3">SAP Crystal Reports <img src="/Media/threestars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/></div>
                    <div class="tab ts3">Visual Studio <img src="/Media/threestars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/></div>
                    <div class="tab ts3">Visual Studio Code <img src="/Media/threestars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/></div>
                    <div class="tab ts3">.NET <img src="/Media/threestars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/></div>
                    <div class="tab ts3">IntelliJ/JetBrains <img src="/Media/twostars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/></div>

                <div class="ts2">As a Coder</div> 
                <div class="tab ts3">Java <img src="/Media/twostars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/></div>
                    <div class="tab ts3">JavaScript <img src="/Media/twostars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/></div>
                    <div class="tab ts3">HTML<img src="/Media/fourstars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/></div>
                    <div class="tab ts3">ReactJS<img src="/Media/twostars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/></div>
                    <div class="tab ts3">Python <img src="/Media/twostars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/></div>
                    <div class="tab ts3">Regex<img src="/Media/threestars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/></div>
                    <div class="tab ts3">C# <img src="/Media/threestars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/></div>

                <div class="ts2">NetWorking Stuff</div> 
                    <div class="tab ts3">SQL Server<img src="/Media/fourstars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/></div>
                    <div class="tab ts3">RESTful <img src="/Media/twostars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/></div>
                    <div class="tab ts3">Relational Database Design<img src="/Media/fourstars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/></div>
                    <div class="tab ts3">MS Azure <img src="/Media/twostars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/></div>

                <div class="ts2">Operating Systems i Know</div>  
                    <div class="tab ts3">MS Windows<img src="/Media/fourstars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/></div>
                    <div class="tab ts3">Linux <img src="/Media/threestars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/></div>
                    <div class="tab ts3">iOS <img src="/Media/threestars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/></div>
                    <div class="tab ts3">Android <img src="/Media/threestars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/></div>    

                <div class="ts2">As an Accountant</div>  
                    <div class="tab ts3">IFRS<img src="/Media/fourstars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/></div>
                    <div class="tab ts3">Finacial Analysis <img src="/Media/fourstars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/></div>
                    <div class="tab ts3">GAAP <img src="/Media/fourstars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/></div>
                    <div class="tab ts3">Inventory Management <img src="/Media/fourstars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/></div> 
                    <div class="tab ts3">Process Improvement <img src="/Media/fourstars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/></div> 
                    <div class="tab ts3">Performance Management <img src="/Media/fourstars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/></div>                     
                    <div class="tab ts3">Employee management <img src="/Media/fourstars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/></div>
                    <div class="tab ts3">Contract Negotiation <img src="/Media/fourstars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/></div>
                    <div class="tab ts3">Full Cycle Accounting <img src="/Media/fourstars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/></div>
                    <div class="tab ts3">CORS Training <img src="/Media/fourstars.svg" width={"60px"} alt="hrseperatortop" class="m-5"/></div>
        </section>

        <section class="section_center">
            <div class="centered2 ts1" id="HOBBIES">
                <img src="/Media/tttwinkle.svg" width={"40px"} alt="twinkle" class="m-5 "/>
                Hobbies
                <img src="/Media/tttwinkle.svg" width={"40px"} alt="twinkle" class="m-5 "/>
            </div>
            <div class="centered2 bar"><img src="/Media/iconfire.svg" width={"40px"} alt="hrseperatortop" class="m-5"/></div>
            <hr/>
                <div class="ts3 centered2">Photography and Editing</div>
                <div class="ts3 centered2">Digital Editing</div>
                <div class="ts3 centered2">Graphic Design</div>
                <div class="ts3 centered2">Painting</div>
                <div class="ts3 centered2">Drawing</div>
                <div class="ts3 centered2">Wellness practices</div>
                <div class="ts3 centered2">Reading</div>
            <div class="centered2 ts1" id="PERSONALITY">
                <img src="/Media/tttwinkle.svg" width={"40px"} alt="twinkle" class="m-5 "/>
                Key Personality Traits
                <img src="/Media/tttwinkle.svg" width={"40px"} alt="twinkle" class="m-5 "/>
            </div>
            <div class="centered2 bar"><img src="/Media/iconfire.svg" width={"40px"} alt="hrseperatortop" class="m-5"/></div>
            <hr/>
            <div class="centered2">
                <div class="ts3">Honest</div>
                <div class="ts3">Imagination and inventive</div>
                <div class="ts3">Teamwork Player</div>
                <div class="ts3">Critical thinker</div>
                <div class="ts3">Great Interpersonal Skills</div>
                <div class="ts3">Open to Change</div>
                <div class="ts3">Openminded</div>
                <div class="ts3">Strong work ethic</div>
                <div class="ts3">Learning/adaptability</div>
                <div class="ts3">Leadership</div>
                <div class="ts3">Self-manager</div>
                <div class="ts3">Highly Organized</div>
            </div>
        </section>

        <section class="section_center">
            <div class="centered2 ts1" id="RECENT">
                <img src="/Media/tttwinkle.svg" width={"40px"} alt="twinkle" class="m-5 "/>
                My Recent Work
                <img src="/Media/tttwinkle.svg" width={"40px"} alt="twinkle" class="m-5 "/>
            </div>
                <div class="centered2"><a class="text-danger" href="https://github.com/AtomDestructo/personalprofile/tree/main/personalprofile"><img src="/Media/github.png" class="img-thumbnail ms-2" width="40em" height="40em" alt="github"/> View this profile website here</a>   </div>   
                <br/>
            <div class="centered2 bar"><img src="/Media/iconfire.svg" width={"40px"} alt="hrseperatortop" class="m-5"/></div>
            <hr/>
            <div class="ts2 centered2">Web Application Developer</div>
            <div class="ts4 centered2">Morrison Homes</div>
                <div class="ts3 tab">As a web application developer, I created, implemented, 
                    and developed a functional interface to integrate with an aging IT landscape. 
                    These functions included:
                </div> 
                <div class="ts3 tab">• Full read / Write functions via SQL Procedures</div>
                <div class="ts3 tab">• Auto logon via http context. (Github does not reflect this.)</div>
                <div class="ts3 tab">• Function for logging</div>
                <div class="ts3 tab">• Procedure for logging to SQL data table</div>
                <br/>
                <div class="centered2"><a class="text-danger" href="https://github.com/AtomDestructo/morrisonhomes/tree/main/oedevelopment/OEWebApplicationApp/OEWebApplicationApp"><img src="/Media/github.png" class="img-thumbnail ms-2" width="40em" height="40em" alt="github"/> View the Source Code Here!!</a>   </div>   
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
            <div class="ts4 centered2">Land Works Resource Management Inc.</div>
                <div class="ts3 tab"> As a web developer it was my responsibility to design, coding, 
                and modifying websites, including all aspects of the website, such as layout,functionality, and user experience. I was also responsible for creatingaesthetically pleasing website designs with functional, 
                user-friendlydesign and clear navigation for optimal usability.
                </div>
                <br/>
                <div class="centered2"><a class="text-danger" href="https://cute-pika-83ca97.netlify.app">View the Website Here!!</a>   </div>   
                <div class="centered2"><a class="text-danger" href="https://github.com/AtomDestructo/SandPiperSolutionsIncWebsite"><img src="/Media/github.png" class="img-thumbnail ms-2" width="40em" height="40em" alt="github"/> View the Source Code Here!!</a>   </div>   
                <br/>
                <div>
                    <div class="ts3 tab">• Branding and consulting.</div>
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
            <div class="ts4 centered2">Caneda Transport Inc.</div>
                <div class="ts3 tab">As a Business Process Solutions Manager, I was responsible for themanagement of department milestones
                /goals, analyzing existingoperations, implementing effective systems, strategies, 
                and processes to improve organizational performance and profitability.
                </div>
                <br/>
                <div>
                <div class="ts3 tab">• Designed and implemented a mobile application from inception to production (focus on product characteristics, information transference,and operational efficiency)</div>      
                <div class="ts3 tab">• Collaborated with a team of 45 team members to determine the appropriate use of existing and new technology systems.</div>   
                <div class="ts3 tab">• Configuring, installing, and supporting desktop computers, laptop computers, mobile devices, printers, monitors, and other peripherals.</div>   
                <div class="ts3 tab">• Diagnosing hardware and software failures.</div>   
                <div class="ts3 tab">• Tracking and recording the assignment of IT assets in an inventory database. Providing off-site home support when required.  </div>               
                </div>

            <div class="centered2 bar"><img src="/Media/iconfire.svg" width={"40px"} alt="hrseperatortop" class="m-5"/></div>
            <hr/>
            <div class="ts2 centered2">Controller</div>
            <div class="ts4 centered2">Caneda Transport Inc.</div>
                <div class="ts3 tab">Oversee activities related to payroll, tax, account payables/ receivables, and customer billing. 
                    Ensure district offices meet with sales to focus on business growth by estimating weekly sales and billing projections.
                    I was also responsible for forecasting weekly costs and determining areas for immediate cost improvement on a weekly basis.
                </div>
                <br/>
                <div>
                <div class="ts3 tab">• Solid participation and execution of successful audits and related accounting functions.</div>      
                <div class="ts3 tab">• Effective training, supervision, deployment, and development of accounting team.</div>                 
                </div>
        </section>
        </div>
        </div>
        </div>
        </>
        )
    }
}
