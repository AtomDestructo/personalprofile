
export default function Navbar(){
    
    return (
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                        <span class="navbar-toggler-icon"></span>
                    </button>

                        <div id="navbarSupportedContent" class="collapse navbar-collapse justify-content-center">

                            <ul class="navbar-nav mr-auto mt-2 mt-lg-0 ">
                                <li style={{listStyleType: "none"}} class="nav-item active">
                                    <a class="nav-link" href="#">TOP</a>
                                </li>
                                <li style={{listStyleType: "none"}} class="nav-item">
                                    <a class="nav-link" href="#">ABOUT ME</a>
                                </li>
                                <li style={{listStyleType: "none"}} class="nav-item">
                                    <a class="nav-link" href="#">CAREERS</a>
                                </li>
                                <li style={{listStyleType: "none"}} class="nav-item">
                                    <a class="nav-link" href="#">EDUCATIONS</a>
                                </li>
                                <li style={{listStyleType: "none"}} class="nav-item">
                                    <a class="nav-link" href="#">ABILITIES</a>
                                </li>
                                <li style={{listStyleType: "none"}} class="nav-item">
                                    <a class="nav-link" href="#">CONTACT</a>
                                </li>
                            </ul>
                        </div>

                </div>
            </nav>
        );
        
    }