import React from 'react';

function InfoAbout() {
    const birthDate = '1995-09-01';
    const calculateAge = (birthDate) => {
        const today = new Date();
        const birthDateObj = new Date(birthDate);
        let age = today.getFullYear() - birthDateObj.getFullYear();
        const m = today.getMonth() - birthDateObj.getMonth();
      
        if (m < 0 || (m === 0 && today.getDate() < birthDateObj.getDate())) {
          age--;
        }
        return age;
    };
    const age = calculateAge(birthDate);

  return (
    <div>
     <h2>About</h2>
    <p>I'm a {age} y.o. woman from Mexico. I’m highly motivated and detail oriented software developer with a flair for UX/UI design. I’m keen on problem solving, HCI and UCD.</p> 
    </div>
  );
}

export default InfoAbout;
