import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import Checkout from '../components/Checkout'

export default function AboutUsscreen() {



    return (
        <div>
            
            <div class="mission">
                <div class="content">
                    <div class="main">
                        <hr></hr>
                        <br></br>
                        <h11>Our Mission</h11>
                        <br></br>

                        <p11>
                            Oyee Car is a Professional Automobile Platform. Here we will provide you only interesting content, which you will like
                            very much. We're dedicated to providing you the best of Automobile, with a focus on dependability and Rent and selling. We're working to turn our passion for Automobile into a booming online website. We hope you enjoy our Automobile as much as we enjoy offering them to you.
                            I will keep posting more important posts on my Website for all of you. Please give your support and love.
                            Thanks For Visiting Our Site

                        </p11>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h4>
                            Have a nice day !
                        </h4>
                        <hr></hr>
                    </div>
                    <div className="image">
                        <img src="https://i.ibb.co/YQkfsMT/car.png" />
                        {/* <a href="https://imgbb.com/"><img src="https://i.ibb.co/YQkfsMT/car.png" alt="car" border="0"></a> */}
                    </div>
                </div>
            </div>












            {/* <div className='row justify-content-center '>
                <div className='col-md-5 mt-5 shadow-lg p-5 mb-5 bg-white rounded'>
                    <h2>About Us !</h2>
                    <h3 className="text-align: center">Welcome To <span id="W_Name1">Oyee Car</span></h3>
                    <div className="image">
                        <img src= "https://freesvg.org/img/1536281054.png"/>
                    </div>
                    <p>
                        <span id="W_Name2">Oyee Car</span>
                        is a Professional
                        <span id="W_Type1"> Automobile</span>
                        Platform. Here we will provide you only interesting content, which you <br></br>will like very much. We're dedicated to providing you the best of
                        <span id="W_Type2">Automobile</span>, with a focus on dependability and
                        <span id="W_Spec"> Rent and selling</span>. We're working to turn our passion for
                        <span id="W_Type3">Automobile</span> into a booming online website. We<br></br> hope you enjoy our
                        <span id="W_Type4">Automobile</span> as much as we enjoy offering them to you.</p>
                    <p>I will keep posting more important posts on my Website for all of you. Please give your support and love.</p>
                    <p className="font-weight: bold; text-align: center;">Thanks For Visiting Our Site</p>
                    <p><span className="color: blue; font-size: 16px; font-weight: bold; text-align: center;">Have a nice day !</span></p>
                </div>
            </div> */}
        </div>
    )
}
