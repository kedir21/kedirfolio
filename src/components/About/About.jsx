// import React from "react";
// import "./About.css";

// const About = () => {
//   return (
//     <div
//       className=" min-h-screen w-full m-30 p-30 md:flex md:flex-col-2 md:ml-9"
//       id="about"
//     >
//         <div className="ml-40 mt-40 mr-20 w-50 ">
//           <img src="https://www.kedirn.com/img/p.jpg" alt="Profile" />
//         </div>
      
//       <div className=" w-25">
//         <h2 className="text-center text-white text-5xl m-10">About Me</h2>
//         <p className="">
//           My name is Kedir Nasir, and I am a passionate developer from Addis
//           Ababa, Ethiopia. My focus on writing clean, efficient code and staying
//           current with the latest tech news and trends has honed my skills in
//           React, Full Stack development, and SharePoint.
//         </p>
//         <br />
//         <p className="m-5">
//           My specialization lies in crafting cutting-edge applications that
//           satisfy the unique needs of today's businesses. Whether it's creating
//           dynamic user interfaces with React, managing all aspects of front-end
//           design and server-side architecture as a Full Stack developer, or
//           streamlining processes and improving collaboration with SharePoint, I
//           possess the expertise and experience to design and implement effective
//           solutions.
//         </p>
//         <br />
//         <p className="m-5">
//           My unwavering dedication to technology, combined with my vast
//           knowledge of different development tools and frameworks, make me an
//           invaluable addition to any team looking to innovate and achieve their
//           goals through technology. I am eager to leverage my skills and
//           experience to contribute meaningfully to the success of your
//           organization.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;


import myImage from './p.jpg';

const About = () => {
  return (
    <div div className="md:flex md:flex-col-2">
      <div className="w-full md:w-1/2 p-4 m-4">
        
        <img
          className="md:ml-30  h-auto"
          src={myImage}
          alt="Your Picture"
        />
      </div>
      <div className="w-full md:w-1/2 p-4 m-4">
      <h1 className=" m-30 p-30 text-center text-4xl md:ml-9"
      id="about"> about </h1>
       
        <p className="text-lg">
        My name is Kedir Nasir, and I am a passionate developer from Addis
          Ababa, Ethiopia. My focus on writing clean, efficient code and staying
           current with the latest tech news and trends has honed my skills in
           React, Full Stack development, and SharePoint.
        </p>
        <p className="text-lg">
        My specialization lies in crafting cutting-edge applications that
           satisfy the unique needs of today's businesses. Whether it's creating
           dynamic user interfaces with React, managing all aspects of front-end
           design and server-side architecture as a Full Stack developer, or
           streamlining processes and improving collaboration with SharePoint, I
           possess the expertise and experience to design and implement effective
           solutions.
        </p>
        <p className="text-lg">
        My unwavering dedication to technology, combined with my vast
           knowledge of different development tools and frameworks, make me an
           invaluable addition to any team looking to innovate and achieve their
           goals through technology. I am eager to leverage my skills and
           experience to contribute meaningfully to the success of your
           organization.
        </p>
    </div>
    </div>
  );
};

export default About;








