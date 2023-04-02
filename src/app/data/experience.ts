import { TimelineItem } from "../models/timeline-model";

export const experience = [
    {
        name: 'Lockheed Martin',
        image: './assets/Experience/LM-Logo.png',
        titles: [
          { name: 'Senior Software Engineer', dates: 'July 2022 - Present' },
          { name: 'Software Engineer', dates: 'August 2020 - July 2022' },
          { name: 'Associate Software Engineer', dates: 'July 2018 - August 2020' }
        ],
        descriptors: [
          `Design and develop Full-Stack web-applications used by agencies of the US Government.`,
          `Serve as Scrum Master of a development team: help to coordinate features and fixes, facilitate developers towards task
            completion, and collaborate with various cross-functional stakeholders across Lockheed Martin, subcontractors, and the
            US Government.`,
          `Built, maintained, and upgraded multiple Angular applications to deliver improved and reliable capabilities to end-users.
            Worked closely with stakeholders to identify issues and improve user experience in an agile fashion.`,
          `Implemented and configured the services needed to deploy a new Full-Stack application through Amazon Web Services (AWS),
            such as EC2, Lambda, and OpenSearch. Ensured a scalable and maintainable environment as well as a smooth transition of app
            hosting.`,
          `Created a consolidated monitoring and analytics tool using Elasticsearch (ELK Stack) that collects logs from the system's
            servers and makes the data explorable in Kibana, thus making the entire system easier to maintain and monitor without deep
            technical knowledge.`,
          `Constructed an external-API for system data using Java and Spring, as well as a rate-limiter and proper logging to ensure that
            previous system performance was not impacted. Allowed for the additional capability of outside entities querying and utilizing
            our system's data.`,
        ],
        dates: 'July 2018 - Present'
    },
    {
        name: 'Computer Aid, Inc',
        image: './assets/Experience/CAI-Logo.png',
        titles: [
          { name: 'Software Development Intern', dates: 'May 2017 - August 2017' }
        ],
        descriptors: [
          `Designed, created, and maintained relational databases and web-based applications such as E-commerce websites,
            utilizing ASP.NET and C#.`,
          `Inspected, documented, and aided in knowledge transfer process of applications through interviews and collaborations
            with the developer teams.`,
          `Gained experience in C#, ASP.NET, Javascript, CSS, Bootstrap, HTML, jQuery, WinForms, and SQLServer.`
        ],
        dates: 'May 2017 - August 2017'
    }
] as TimelineItem[];