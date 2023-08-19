import React from "react";

export default function Footer() {
    return (
        <>
        <section>

            <footer class="container-fluid justify-content-center text-center">
                <div class="row">
                    <div class="justify-content-end col-6">
                            <img src="/media/Me1.jpg" width={"200px"} alt="#" />
                    </div>
                <div class="col-6 justify-content-start">
                        <div class="">
                        <img src="/Media/programmer.png" alt="programmer" width="20" class="m-5"/>  Evan Doucett
                        </div>
                        <div>
                        <img src="/Media/location.png" alt="programmer" width="15" />  Calgary, Alberta 
                        </div>
                        <div>
                        <img src="/Media/email.png" alt="programmer" width="20" />  Email: edoucett@hotmail.com 
                        </div>                         
                    </div> 
                </div>
            </footer> 
        </section>
        </>
    );
}
