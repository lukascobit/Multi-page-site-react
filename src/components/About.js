import React from 'react';
import {useHistory} from 'react-router-dom';


function About() {

    let history = useHistory()

    return (
        <div>
            <h1>About us</h1>
            <p>We have alot of projects thats you can visit on our</p>
            <button onClick={()=>{
                history.push("/projects");
            }}>Projects page</button>
        </div>
    )
}

export default About
