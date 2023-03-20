import { TimelineItem } from "../models/timeline-model";

export const education = [
    {
      name: 'University of Colorado Boulder',
      image: './assets/Education/CUBoulder-Logo.png',
      titles: [
        { name: 'Master of Engineering in Engineering Management', dates: 'January 2021 - Present' }
      ],
      descriptors: [
        'Current GPA: 4.0 (7/10 classes completed)',
        'Expected graduation date: Spring 2024',
        `Learning valuable project management and leadership skills such as: effective communication, stakeholder management,
        enabling self-starting teams, project and quality management, statistics and metrics, and project finance among others.`
      ],
      dates: 'January 2021 - Present'
    },
    {
      name: 'Shippensburg University of Pennsylvania',
      image: './assets/Education/Ship-Logo.png',
      titles: [
        { name: 'Bachelor of Science in Computer Science', dates: 'August 2014 - June 2018' }
      ],
      descriptors: [
        'Wood Honors College at Shippensburg University',
        'Computer Programming Team',
        `Participant in the 2018 Minds at Work Conference presenting the research project:
          "The Prevalence and Impact of the 'QWERTY Effect' on the Russian Language"`
      ],
      dates: 'August 2014 - June 2018'
    },
    {
      name: 'Elizabethtown Area High School',
      image: './assets/Education/EAHS-Logo.png',
      titles: [
        { name: 'High School Diploma', dates: 'August 2012 - June 2014' }
      ],
      descriptors: [
        'National Honor Society',
        'Bronze and Silver Duke of Edinburgh (Awards for Community Service)',
        'Lancaster Lebanon Scholar Athlete Award'
      ],
      dates: 'August 2012 - June 2014'
    }
] as TimelineItem[];