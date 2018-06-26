import React from "react";
import { Card, CardTitle } from "react-materialize";
import style from "./ProjectList.css";

const ProjectList = () => {
        return ( 
            <div className={style.container}> 
                <Card className={ style.card } header={ <CardTitle reveal image = { "../../../style/images/Sts.png" }
                    waves= "light"
                    alt= "Sport-Team-Scheduler" /> }
                    title= "Sport-Team-Scheduler"
                    reveal= { 
                        <p> An app for sports scheduling that will allow coaches and parents to chat with each other,
                            coaches can create roster and schedule.Parents can view schedule and roster that coaches created.
                            Tech used: react, axios, socket.io, mongodb, mongoose, redux, express, react-materialize-component for the
                            web, react-forecast and react-google-maps. </p> }> 
                        <p> 
                            <a href= "https://agile-stream-27904.herokuapp.com/"
                                target= "_blank"
                                rel= "noopener noreferrer">Click Me to see working App </a> 
                        </p>
                </Card>

                <Card className={ style.card } header= {<CardTitle reveal image = {"../../../style/images/Stna.png"} 
                    waves= "light"
                    alt= "Scraped-that-News-App" /> }
                    title= "Scraped-that-News"
                    reveal= { 
                        <p> A web app that lets users view and leave comments on the latest news.Tech used: Mongoose and Cheerio </p>}> 
                        <p>
                            <a href= "https://evening-stream-73257.herokuapp.com/"
                                target= "_blank"
                                rel= "noopener noreferrer" >Click Me to see working App </a> 
                        </p> 
                </Card>

                <Card className={ style.card } header= { <CardTitle reveal image = { "../../../style/images/Cta.png" }
                        waves= "light"
                        alt= "Customer-Ticketing-App" />}
                        title= "Customer-Ticketing"
                        reveal= { 
                            <p> App to facilitate service for Agents and Clients using chat rooms and text messages.
                                Tech used: twilio, socket.io, sequelize, express, etc. </p> }> 
                            <p>
                                <a href= "https://esm-customer-support-app.herokuapp.com/"
                                    target= "_blank"
                                    rel= "noopener noreferrer">Click Me to see working App </a> 
                            </p> 
                </Card>

                <Card className={ style.card } header= { <CardTitle reveal image = { "../../../style/images/Edb.png" }
                        waves= "light"
                        alt= "Eat-da-Burger" /> }
                        title= "Eat-da-Burger"
                        reveal= { 
                            <p> A restaurant app that lets users input the names of burgers they would like to eat.
                                Tech used: MySQL, Node, Express, Handlebars and sequelize. </p>}> 
                            <p>
                                <a href= "https://morning-falls-11723.herokuapp.com/"
                                    target= "_blank"
                                    rel= "noopener noreferrer">Click Me to see working App </a> 
                            </p> 
                </Card>

                <Card className={ style.card } header = { <CardTitle reveal image = { "../../../style/images/Liri.png" }
                        waves= "light"
                        alt= "liri-node-app" /> }
                        title= "liri-node-app"
                        reveal= { 
                            <p> A command line node app that takes in parameters and gives you back data.LIRI is a node app which stands
                                for Language Interpretation and Recognition Interface.It is like SIRI(from an iphone).
                                Tech used: Nodejs, tweeter api, spotify api, ombd api </p>}> 
                            <p>
                                <a href= "https://github.com/shirleymramirez/liri-node-app"
                                    target= "_blank"
                                    rel= "noopener noreferrer" >Click Me to see working App </a> 
                            </p> 
                </Card>

                <Card className={ style.card } header = { <CardTitle reveal image = { "../../../style/images/ff.png" }
                        waves= "light"
                        alt= "FriendFinder" /> }
                        title= "FriendFinder"
                        reveal= { 
                            <p> Node and Express Servers dating app.This full - stack site will take in results from your users surveys,
                                then compare their answers with those from other users.The app will then display the name and picture of the user with 
                                the best overall match.
                                Tech used: Express, body - parser, path, javascript, jquery, ajax, nodejs </p>}> 
                            <p>
                                <a href= "https://young-coast-19729.herokuapp.com/"
                                    target= "_blank"
                                    rel= "noopener noreferrer" > Click Me to see working App </a> 
                            </p> 
                </Card> 

            </div>
                                    
        );
    };

export default ProjectList;