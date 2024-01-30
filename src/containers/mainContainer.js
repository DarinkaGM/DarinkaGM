import React from 'react';
import ExperienceSection from './experienceSection';
import SkillsList from '../components/SkillsList';
import InfoAbout from '../components/infoAbout';

import UK from '../media/flags/united-kingdom.png';
import SW from "../media/flags/sweden.png";
import DK from "../media/flags/denmark.png";
import SP from "../media/flags/spain.png";
import FR from "../media/flags/france.png";

import Java from '../media/it/java.png';
import Kotlin from "../media/it/android.png";
import JS from "../media/it/js.png";
import WEB from "../media/it/code.png";
import AG from "../media/it/agile.png";
import Atm from "../media/it/atom.png";
import Fig from "../media/it/figma.png";
import Sql from "../media/it/sql.png";

function MainContainer() {

    let skillsImagePairs = [
        { language: "Java",  imagePath: Java },
        { language: "Kotlin", imagePath: Kotlin },
        { language: "JavaScript", imagePath: JS },
        { language: "HTML, CSS", imagePath: WEB },
        { language: "SQL", imagePath: Sql },
        { language: "React", imagePath: Atm },
        { language: "FIGMA / Adobe XD", imagePath: Fig },
        { language: "Agile Methodologies", imagePath: AG }
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
        <SkillsList title="Skills" skills={skillsImagePairs} />
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
