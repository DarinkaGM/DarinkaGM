import React from 'react';
import InfoExperience from '../components/infoExperience';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';


function ExperienceSection() {
  return (
    <>
    <div>
      <h2>Work experience</h2>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          <InfoExperience 
              title="Systems Operation Assistant"
              dateRange="11/2021 - Present"
              location="Shape Games. Copenhagen, Denmark"
              description="Responsible for monitoring the company's client services through the system alarms and surveillance systems."
            />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          <InfoExperience 
              title="Internship UX/UI designer"
              dateRange="02/2021 - 04/2021"
              location="ReDI School of Integration. Copenhagen, Denmark"
              description="The goal of the project was to create a tool for newcomers in Denmark who are looking for job or education within the IT industry.
              Tasks:
              - Conducting qualitative and quantitative research
              - Working on conceptualization, information architecture and user requirements specifications
              - Creating wireframes, mockups, and prototypes
              - Conducting usability tests"
            />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent> 
            <InfoExperience 
              title="Au pair"
              dateRange="09/2019 - 9/2021"
              location="Copenhagen, Denmark"
              description="- Looked after children aged 2 and 4
              - Cultural exchange that provided me a great insight on Danish language and culture"
            /></TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent> 
          <InfoExperience 
              title="Au pair"
              dateRange="08/2018 - 08/2019"
              location="Malmø, Sweden"
              description="- Looked after children aged 1 and 4
              - Cultural exchange that provided me a great insight on Swedish language and culture"
            />
            </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
    <div>
    <h2>Education</h2>
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <InfoExperience 
          title="MSc in Software Design, IT-Universitet i København"
          dateRange="08/2021 - 01/2024"
          location="Copenhagen, Denmark"
          description="Specialization in Technical Interaction Design"
        />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <InfoExperience 
          title="User Interface design, ReDI School of Integration"
          dateRange="04/2021 - 07/2021"
          location="Copenhagen, Denmark"
          description=""
        />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent> 
        <InfoExperience 
          title="Web Development, Hack Your Future"
          dateRange="12/2020 - 07/2021"
          location="Copenhagen, Denmark"
          description=""
        />
          </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent> 
          <InfoExperience 
            title="User Experience design, ReDI School of Integration"
            dateRange="09/2020 - 12/2020"
            location="Copenhagen, Denmark"
            description=""
          />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent> 
          <InfoExperience 
            title="B.A. in English teaching, Universidad Autónoma de Chiapas"
            dateRange="08/2013 - 12/2017"
            location="Chiapas, México"
            description=""
          />
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
    </>
  );
}

export default ExperienceSection;
