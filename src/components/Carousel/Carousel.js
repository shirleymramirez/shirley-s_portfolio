import React from 'react';
import { Carousel } from 'react-materialize';
import style from "./Carousel.css"

const CarouselContent = () => {
    return ( <div src="../../../../style/image/square.jpg">
        <Carousel options = {
            { fullWidth: false, indicators: true, dist: -50, padding: 10 } }
        className = { style.carousel }>
            <div className = "grey">
                <h2 className = { style.aboutMe }> About Me </h2> 
            </div> 
            <div className="grey"> 
                <p className = "black-text" className = { style.textColor }>
                    A passionate Web Stack Developer who loves to code and do stuff related to coding. </p> 
            </div> 
            <div className="grey"> 
                <p className = "black-text" className = { style.textColor }>
                    My motto is "Everything can be learned, coding may not be for everyone, but once you put your heart into it, everything is possible". </p> 
            </div> 
            <div className="grey"> 
                <p className = "black-text" className = { style.textColor }>
                    It is like solving a puzzle and putting things one piece at a time </p> 
            </div> 
            <div className="grey"> 
                <p className = "black-text" className = { style.textColor }>
                    I am a straight "A" student in coding bootcamp in University of Arizona.I could write clean, organized and well - written design code by using best software development practices. </p> 
            </div> 
            <div className="grey"> 
                <p className = "black-text"className = { style.textColor }>
                    A motivated, results - oriented Full Stack Developer experienced in HTML, CSS, Javascript, Jquery, Bootstrap, NodeJs, Mysql, Express, MongoDB, ReactJS, and Socket - io among other technical languages. </p> 
            </div> 
            <div className="grey"> 
                <p className = "black-text" className = { style.textColor }>
                    Creative, problem - solving and have a can - do attitude with a sense of urgency to do what it takes to get things done. </p> 
            </div> 
            <div className="grey"> 
                <p className = "black-text" className = { style.textColor }>
                    I find it exciting to develop and design code that reflects the provided architecture, design and content elements within the established frameworks, specifications and overall environment. </p> 
            </div> 

        </Carousel> 

    </div>
    
    );
};

export default CarouselContent;