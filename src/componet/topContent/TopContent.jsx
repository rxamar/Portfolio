import React from "react";
import { Link } from "react-scroll";
import "./topContent.css";
// export const TopContent = () => {
//   return (
//     <div className="topContent">
//       <div className="topContent_container">
//         <h1>Mr.Amarnath</h1>
//         <p>A Professional Web Developer</p>
//         <a href="resumeLink">
//           <button className="downloadButton">Download Cv</button>
//         </a>
//         <Link to="project" smooth={true} duration={500}>
//           <button className="workButton">My Work</button>
//         </Link>
//       </div>
//     </div>
//   );
// };

export const TopContent = () => {
  // Replace 'YOUR_GOOGLE_DRIVE_LINK' with the actual shareable link to your resume
  const resumeLink = "file:///C:/Users/DELL/Documents/Final%20resume.pdf";

  return (
    <div className="topContent">
      <div className="topContent_container">
        <h1>Mr.Amarnath</h1>
        <p>A Professional Web Developer</p>
        <a href={resumeLink} download="Final Resume.pdf">
          <button className="downloadButton">Download Cv</button>
        </a>
        <Link to="project" smooth={true} duration={500}>
          <button className="workButton">My Work</button>
        </Link>
      </div>
    </div>
  );
};
