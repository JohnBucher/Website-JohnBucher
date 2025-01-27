import { TimelineItem } from "../models/timeline-model";

export const education = [
    {
      name: 'University of Colorado Boulder',
      image: './assets/Education/CUBoulder-Logo.png',
      dates: 'January 2021 - May 2024',
      positions: [
        {
          title: 'Master of Engineering in Engineering Management',
          dates: 'January 2021 - May 2024',
          descriptors: [
            `GPA: 4.0`,
            `Learned valuable project management and leadership skills such as: effective communication, stakeholder management,
              enabling self-starting teams, project and quality management, statistics and metrics, and project finance among others.`
          ]
        }
      ]
    },
    {
      name: 'Shippensburg University of Pennsylvania',
      image: './assets/Education/Ship-Logo.png',
      dates: 'August 2014 - June 2018',
      positions: [
        {
          title: 'Bachelor of Science in Computer Science',
          dates: 'August 2014 - June 2018',
          descriptors: [
            'Wood Honors College at Shippensburg University',
            'Computer Programming Team',
            `Participant in the 2018 Minds at Work Conference presenting the research project:
              "The Prevalence and Impact of the 'QWERTY Effect' on the Russian Language"`
          ]
        }
      ]
    },
    {
      name: 'Elizabethtown Area High School',
      image: './assets/Education/EAHS-Logo.png',
      dates: 'August 2012 - June 2014',
      positions: [
        {
          title: 'High School Diploma',
          dates: 'August 2012 - June 2014',
          descriptors: [
            'National Honor Society',
            'Bronze and Silver Duke of Edinburgh (Awards for Community Service)',
            'Lancaster Lebanon Scholar Athlete Award'
          ]
        }
      ]
    }
] as TimelineItem[];