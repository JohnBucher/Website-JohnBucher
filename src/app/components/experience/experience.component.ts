import { Component, ViewEncapsulation } from '@angular/core';
import { TimelineItem } from '../../models/timeline-model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExperienceComponent {
  jobs: TimelineItem[];

  constructor() {

    this.jobs = [
      {
        name: 'Lockheed Martin',
        image: './assets/Experience/LM-Logo.png',
        titles: [
          { name: 'Software Engineer', dates: 'July 2018 - Present' }
        ],
        descriptors: [
          `Design, develop, and maintain web-based applications used by various agencies of the US Government.`,
          `Stack mainly consists of Angular/Typescript and Spring/Java among other various languages.`,
          `Effectively coordinate and collaborate with numerous teams, individuals, and specializations across
            Lockheed Martin, subcontractors, and the US Government.`,
         ` Lead, perform, and communicate important baseline upgrades to ensure transition ease and effectiveness.`,
          `Act as an intermittent scrum master and tech lead to coordinate developers towards task completion.`,
          `Perform continuous learning on needed technologies and systems.`
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
          `Created and maintained relational databases and web-based applications such as E-commerce websites.`,
          `Inspected, documented, and aided in the knowledge transfer process of professional Computer Aid, Inc.
            applications through interviews and collaborations with the developer teams.`,
          `Gained experience in C#, ASP.NET, Javascript, CSS, Bootstrap, HTML, jQuery, WinForms, and SQLServer.`
        ],
        dates: 'June 2017 - August 2017'
      }
    ];
  }
}
