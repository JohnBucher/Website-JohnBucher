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
            `Built and maintained Full-Stack web applications and tools used by Lockheed Martin programs and subcontractors.`,
            `Reduced our program's AWS Cloud costs by ~28%; identified and documented additional savings of ~40%.`,
            `Identified a gap in our product's capabilities and built a Front-End Chrome Extension using Typescript and HTML
              to address the need. Integrated tool with internal APIs, automated builds through a CI/CD pipeline, distributed to
              ~30 users for an initial Beta test, and implemented new features from user feedback.`,
            `Ensured application scalability and performance during periods of high traffic; altered Kubernetes rules and
              Kafka partitions to allow for more pods, re-architected microservice logic to parallelize operations, and utilized
              caching to resolve rate-limiting issues on an external API.`,
            `Developed microservices in Java/Spring, Golang, and Python; deployed into AWS Lambda and Kubernetes clusters.`,
            `Automated code changes and updates to our running environments through CICD tools such as ArgoCD to deploy code
              changes to Kubernetes clusters, Terraform to provision and manage our AWS Cloud resources, Renovate to monitor and
              upgrade dependency versions, and GitLab Pipelines to build, test, and deploy our various code bases.`,
            `Became a Subject Matter Expert on our applications and presented at a virtual conference to ~150 people.`
          ]
        },
        {
          title: 'Senior Software Engineer',
          dates: 'July 2022 - April 2024',
          descriptors: [
            `Acted as System Architect and Tech Lead on our team's Full-Stack web applications; made apps production-ready by creating
              system designs, implementing features, containerizing using Docker, and securing access permissions.`,
            `Created a solution to complex system monitoring difficulties for our users and deployment teams. We utilized the ELK Stack,
              where application logs and system diagnostics were collected, stored in Elasticsearch, and the entire system's health and
              logs were presented in a consolidated set of Kibana dashboards.`,
            `Built, maintained, and upgraded multiple Angular and React applications to deliver improved and reliable capabilities to
              end-users. Worked closely with stakeholders to identify issues and improve user experience in an agile fashion.`,
            `Implemented and configured the services needed to deploy a new Full-Stack application through Amazon Web Services (AWS),
              such as EC2, Lambda, and OpenSearch. Ensured a scalable and maintainable environment as well as a smooth transition of app
              hosting.`,
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