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
          `Design, develop, and maintain web-applications used by agencies of the US Government.`,
          `Work across the applications' Full-Stack to implement features, utilizing a variety of technologies, including Angular,
            React, Typescript, Java, Spring, Elasticsearch (ELK Stack), and Amazon Web Services (AWS).`,
          `Act as a program technical lead on many Front-End technologies, such as Angular and React, to create new applications,
            participate in design sessions, and set coding standards.`,
          `Lead, perform, and communicate important dependency and baseline upgrades across a multitude of independent
            applications to ensure transition completion and ease. For example, upgrading the baseline's major version of Angular
            and identifying and fixing the resulting issues.`,
          `Serve as Scrum Master of a development team: help to coordinate features and fixes, facilitate developers
            towards task completion, and collaborate with various cross-functional stakeholders across Lockheed Martin,
            subcontractors, and the US Government.`,
          `Continuously learn new technologies and systems as needs arise.`,
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