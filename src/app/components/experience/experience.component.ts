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
          `Effectively coordinate and collaborate with numerous teams and individuals
             across Lockheed Martin, subcontractors, and the US Government.`,
          `Perform continuous learning to shore up program areas of expertise.`,
          `Focuses include: Angular, Typescript, Spring, and Java among others`
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
          `Created and maintained relational databases and web-based applications such as E-commerce websites`,
          `Inspected and documented professional Computer Aid, Inc. applications to ensure smoother knowledge transfer in the future`,
          `Gained experience in professional communication and coordination by interacting with
            multiple teams and interns in service of completing my assignments`,
          `Gained experience in C#, ASP.NET, Javascript, CSS, Bootstrap, HTML, jQuery, WinForms, and SQLServer`
        ],
        dates: 'June 2017 - August 2017'
      }
    ];
  }
}
