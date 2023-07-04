import React from "react";
import "./Services.css";

const Service = () => {
  return (
    <div className="service-section mb-11 w-full md:ml-9" id="services">
      <h2 className="text-center text-5xl mr-50">What I Do</h2>
      <div className="service-container mr-7">
        <div className="service-item">
          <h3 className="text-2xl">Building custom web applications</h3>
          <p>
            I can build custom web applications from scratch using React and the MERN stack (MongoDB, Express, React, and Node.js). This includes creating user interfaces, integrating APIs, implementing payment gateways, and developing custom features and functionalities.
          </p>
        </div>
        <div className="service-item">
          <h3 className="text-2xl">Front-end development</h3>
          <p>
            I work in front-end development using React, developing user interfaces and components that are responsive, scalable, and visually appealing. This includes creating interactive features, animations, and transitions.
          </p>
        </div>
        <div className="service-item">
          <h3 className="text-2xl">Back-end development</h3>
          <p>
            I specialize in back-end development using Node.js and Express, developing APIs and server-side logic for web applications. This includes creating RESTful APIs, implementing security measures, and optimizing server performance.
          </p>
        </div>
        <div className="service-item">
          <h3 className="text-2xl">Full-stack development</h3>
          <p>
            I can offer full-stack development services, combining front-end and back-end development using the MERN stack. This includes building and integrating both the client and server-side components of a web application.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
