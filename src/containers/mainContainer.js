import React from 'react';
import ExperienceSection from './experienceSection';
import SkillsList from '../components/SkillsList';
import InfoAbout from '../components/infoAbout';

function MainContainer() {
    const skills = [
      "Java", "Kotlin", "JavaScript", 
         "SQL", "HTML, CSS", "React", 
        "FIGMA / Adobe XD", "Agile Methodologies"
      ];
    const languages = [
        "Spanish (Native)", "English (Proficient)", "French (Intermediate)", "Danish (Intermediate)", "Swedish (Beginner)"
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
        <SkillsList title="Languages" skills={languages} />
        </div>   
    </div>
  );
}

export default MainContainer;
