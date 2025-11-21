import React from "react";
import '../App.css';
import Nishan from '../assets/nishan.png';


function Home(){
    return(
        <div className="page home-page">
            <img src={Nishan} className="profile-img"/>
            <h1>Nishan H Kamath</h1>
            <p>I am a passionate developer building projects with React, Modern UI and clean code</p>
        </div>
    )
}
export default Home;