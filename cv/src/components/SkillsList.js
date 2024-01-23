import React from 'react';

function SkillsList({ title, skills }) {
  return (
    <div>
      <h2>{title}</h2>
      <ul className="two-columns-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsList;
