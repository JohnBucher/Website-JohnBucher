import { TimelineItem } from "../models/timeline-model";

export const experience = [
    {
      name: 'Lockheed Martin',
      image: './assets/Experience/LM-Logo.png',
      dates: 'July 2018 - Present',
      positions: [
        {
          title: 'Full Stack Software Engineer Staff',
          dates: 'April 2024 - Present',
          descriptors: [
            `Created and maintained Full-Stack web applications and tools to support internal Lockheed Martin users and programs.`,
            `Developed Golang and Python microservices to serve as the backend for our applications; deployed functions into AWS Lambda.`,
            `Worked extensively with AWS Services such as EC2, Lambda, SQS, S3, and RDS to develop for and ensure the stability of our applications.`,
            `Automated code changes and updates to our running environments through CICD tools such as ArgoCD to deploy code changes to Kubernetes clusters, 
              Terraform to provision and manage our cloud resources, Renovate to monitor and upgrade dependency versions, and GitLab Pipelines to build, test, 
              and deploy our various code bases.`,
            `Became a subject matter expert for our applications and performed presentations and demos for stakeholders of varying roles and technical levels.`
          ]
        },
        {
          title: 'Senior Software Engineer',
          dates: 'July 2022 - April 2024',
          descriptors: [
            `Designed and developed Full-Stack web-applications used by agencies of the US Government.`,
            `Served as Scrum Master of a development team: helped to coordinate features and fixes, facilitated developers towards task
              completion, and collaborated with various cross-functional stakeholders across Lockheed Martin, subcontractors, and the
              US Government.`,
            `Built, maintained, and upgraded multiple Angular and React applications to deliver improved and reliable capabilities to
              end-users. Worked closely with stakeholders to identify issues and improve user experience in an agile fashion.`,
            `Implemented and configured the services needed to deploy a new Full-Stack application through Amazon Web Services (AWS),
              such as EC2, Lambda, and OpenSearch. Ensured a scalable and maintainable environment as well as a smooth transition of app
              hosting.`,
            `Created a consolidated monitoring and analytics tool using Elasticsearch (ELK Stack) that collects logs from the system's
              servers and makes the data explorable in Kibana, thus making the entire system easier to maintain and monitor without deep
              technical knowledge.`,
            `Constructed an external-API for system data using Java and Spring, as well as a rate-limiter and proper logging to ensure that
              previous system performance was not impacted. Allowed for the additional capability of outside entities querying and utilizing
              our system's data.`,
          ]
        },
        {
          title: 'Software Engineer',
          dates: 'August 2020 - July 2022'
        },
        {
          title: 'Associate Software Engineer',
          dates: 'July 2018 - August 2020'
        }
      ],
    },
    {
      name: 'Computer Aid, Inc',
      image: './assets/Experience/CAI-Logo.png',
      dates: 'May 2017 - August 2017',
      positions: [
        {
          title: 'Software Development Intern',
          dates: 'May 2017 - August 2017',
          descriptors: [
            `Designed, created, and maintained relational databases and web-based applications such as E-commerce websites,
              utilizing ASP.NET and C#.`,
            `Inspected, documented, and aided in knowledge transfer process of applications through interviews and collaborations
              with the developer teams.`,
            `Gained experience in C#, ASP.NET, Javascript, CSS, Bootstrap, HTML, jQuery, WinForms, and SQLServer.`
          ]
        }
      ],
    }
] as TimelineItem[];