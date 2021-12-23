import React from 'react';
import photo from '../../ken-photo.jpg';

function About() {

    return(
        <section className="container">
            <h2 class="top-title">About Me</h2>
            <hr></hr>
            <div>
                <img class="mb-5" id="avatar" src={photo} alt='profile'/>
                <p>
                Kenechukwu Ilochonwu, also known as Ken by his close friends worked as an Environmental Specialist for four years specifically tasked to ensure the protection and conservation of natural resources as well as establishing best practices to resolve complex issues. Ken believes achieving success in the workplace begins with having a strong mind, body and spirit which he channels through physical sports, competitive gaming, and travelling. 
                </p>
                <p>
                Ken is currently on a 6 month journey to becoming a full stack web developer, and by the end of this program, he would have acquired the necessary skills and knowledge to effeciently create and improve world wide web applications.
                </p>   
            </div>
        </section>
    ) 
}

export default About;