import React from "react";
// import { VscGithubAlt } from "react-icons/vsc";
// import { AiOutlineLinkedin } from "react-icons/ai";

// function Footer() {
//     return (
//         <footer>
//             <h2>Portfolio created by Bhavika Mevada</h2>
//             <p>
//                 <ul>
//                     <a href="https://github.com/bmevada">
//                         <li className="logo">
//                             <VscGithubAlt />
//                         </li>
//                     </a>
//                     <a href="https://www.linkedin.com/in/mbhavika/">
//                         <li className="logo">
//                             <AiOutlineLinkedin />
//                         </li>
//                     </a>
//                 </ul>
//             </p>
//         </footer>
//     );
// }

function Footer(){
      // Replace links with social media profiles
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/bmevada"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/mbhavika"
    }
  ]

  return (
    <footer className="flex-row px-1">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;