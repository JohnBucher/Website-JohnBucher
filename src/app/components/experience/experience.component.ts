import { Component, ViewEncapsulation } from '@angular/core';
import { TimelineItem } from '../../models/timeline-model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExperienceComponent {
  public jobs: TimelineItem[];

  constructor() {

    this.jobs = [
      {
        name: 'Lockheed Martin',
        image: './assets/Experience/LM-Logo.png',
        titles: [
          { name: 'Senior Software Engineer', dates: 'July 2022 - Present' },
          { name: 'Software Engineer', dates: 'August 2020 - July 2022' },
          { name: 'Associate Software Engineer', dates: 'July 2018 - August 2020' }
        ],
        descriptors: [
          `Design, develop, and maintain web-based applications used by various agencies of the US Government.`,
          `Act as Scrum Master of a development team. As an SM: help to schedule and coordinate tasks, facilitate
            developers towards task completion, and collaborate with various cross-functional stakeholders across
            Lockheed Martin, subcontractors, and the US Government.`,
          `Work across the applications' Full-Stack to implement fixes and features, utilizing a variety of technologies
            and frameworks such as Angular, React, Java, Spring, SQL, Elasticsearch, and AWS among others.`,
          `Lead, perform, and communicate important dependency and baseline upgrades to ensure transition ease and effectiveness.`,
          `Perform continuous learning on technologies and systems as needs arise.`,
        ],
        dates: 'July 2018 - Present'
      },
      {
        name: 'Computer Aid, Inc',
        image: './assets/Experience/CAI-Logo.png',
        titles: [
          { name: 'Software Development Intern', dates: 'June 2017 - August 2017' }
        ],
        descriptors: [
          `Created and maintained relational databases and web-based applications such as E-commerce websites,
            utilizing ASP.NET and C#.`,
          `Inspected, documented, and aided in the knowledge transfer process of professional Computer Aid, Inc.
            applications through interviews and collaborations with the developer teams.`,
          `Gained experience in C#, ASP.NET, Javascript, CSS, Bootstrap, HTML, jQuery, WinForms, and SQLServer.`
        ],
        dates: 'June 2017 - August 2017'
      }
    ];
  }
}
