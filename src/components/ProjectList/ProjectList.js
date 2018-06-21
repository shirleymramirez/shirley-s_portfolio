import React from "react";
import { Col, Card, CardTitle } from "react-materialize";

const ProjectList = () => {
    return <div>
        <Card header={<CardTitle reveal image={"../../images/Sts.png"} waves="light" alt="Sport-Team-Scheduler" />} title="Sport-Team-Scheduler" reveal={<p
            >
              An app for sports scheduling that will allow coaches and
              parents to chat with each other, coaches can create roster and
              schedule. Parents can view schedule and roster that coaches
              created. Tech used: react, axios, socket.io, mongodb,
              mongoose, redux, express, react-materialize-component for the
              web, react-forecast and react-google-maps.
            </p>}>
          <p>
            <a href="https://agile-stream-27904.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              Click Me to see working App
            </a>
          </p>
        </Card>
      </div>;
};

export default ProjectList;