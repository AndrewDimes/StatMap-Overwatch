import React from 'react';


import { Link } from 'react-router-dom';



export default function HomePage() {
    return (
        <div id="main" className="ui vertically divided grid">
            <div className="row">
                <div id="left-side"  className="blue eight wide column BigLogo">

                    <div className="BigLogo-content">
                    <img className="ow" src="../../retry.png"></img><br></br> 

                    </div>

                </div>
                <div style={{background:'fixed'}}id="sidebar" className="eight wide column LandingMessage container">
                    <div id="right-items" className="content">
                        <h1 className="title">OverStats</h1>
                        <span className="subtitle"><h4>Overwatch statistics made easy. Developed with MongoDB, Express, React & Node</h4></span><br></br>
                        <div id="buttons" className="row">
                            <Link to='/login'><button id="button" className="ui blue button">Log In</button></Link>
                            <Link to='/signup'><button id="button" className="ui grey button">Sign Up</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )

}