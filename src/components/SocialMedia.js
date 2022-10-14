import React from "react";

function socilaLinks({socilaLinks}){
    return(
        <div>
            <a href = {socilaLinks.github}>{socilaLinks.github}</a>
            <a href = {socilaLinks.linkedin}>{socilaLinks.linkedin}</a>
        </div>
    )
    
}

//function SocialMedia({ socialLinks }) {
 //   const { github, linkedin } = socialLinks;
  
    //return (
      //<div>
        //<a href={github}>{github}</a>
        //<a href={linkedin}>{linkedin}</a>
      //</div>
    //);
  //}


  //function SocialMedia({ socialLinks: { github, linkedin } }) {
    //return (
      //<div>
        //<a href={github}>{github}</a>
        //<a href={linkedin}>{linkedin}</a>
      //</div>
    //);
  //}
export default socilaLinks;