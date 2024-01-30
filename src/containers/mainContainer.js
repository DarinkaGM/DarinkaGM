import React from 'react';
import ExperienceSection from './experienceSection';
import SkillsList from '../components/SkillsList';
import InfoAbout from '../components/infoAbout';
import UK from '../media/flags/united-kingdom.png';
import SW from "../media/flags/sweden.png";
import DK from "../media/flags/denmark.png";
import SP from "../media/flags/spain.png";
import FR from "../media/flags/france.png";

function MainContainer() {
    const skills = [
      "Java", "Kotlin", "JavaScript", 
         "SQL", "HTML, CSS", "React", 
        "FIGMA / Adobe XD", "Agile Methodologies"
      ];
    const languages = [
        "Spanish (Native)", "English (Proficient)", "French (Intermediate)", "Danish (Intermediate)", "Swedish (Beginner)"
    ];
    let languageImagePairs = [
      { language: "English (Proficient)",  imagePath: UK },
      { language: "Spanish (Native)", imagePath: SP },
      { language: "Danish (Intermediate)", imagePath: DK },
      { language: "French (Intermediate)", imagePath: FR },
      { language: "Swedish (Beginner)", imagePath: SW }
  ];
  

    const learning = [
        "..."
    ];
      
  return (
    <div className="about">
        <InfoAbout/>
        <div>
        <SkillsList title="Skills" skills={skills} />
        </div>
        {/* <div>
        <SkillsList title="Currently learning" skills={learning} />
        </div> */}
        <div>
        <ExperienceSection/>
        </div>
        <div>
        <SkillsList title="Languages" skills={languageImagePairs} />
        </div>   
    </div>
  );
}

export default MainContainer;
