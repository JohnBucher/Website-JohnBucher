import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { TimelineItem } from '../models/timeline-model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExperienceComponent implements OnInit {
  jobs: TimelineItem[];

  constructor() {

    this.jobs = [
      {
        name: 'Lockheed Martin',
        title: 'Asc Software Engineer',
        dates: 'July 2018 - Present',
        image: 'assets/Experience/LM-Logo.png',
        descriptors: [
          `Engineer, develop, and maintain web-based applications used by various agencies of the US Government`,
          `Coordinate and collaborate with numerous teams and inviduals across
            Lockheed Martin, the US Government, and various Subcontractors`,
          `Perform continuous-learning on current and future technologies to
             both shore up team areas of expertise as well as keeping an eye on technologies to improve the program`,
          `Particular focuses include: Angular, Spring, and Java among others`
        ]
      },
      {
        name: 'Computer Aid, Inc',
        title: 'Software Development Intern',
        dates: 'June 2017 - August 2017',
        image: 'assets/Experience/CAI-Logo.png',
        descriptors: [
          `Created and maintained relational databases and web-based applications such as E-commerce websites`,
          `Inspected and documented professional Computer Aid, Inc. applications to ensure smoother knowledge transfer in the future`,
          `Gained experience in professional communication and coordination by interacting with
            multiple teams and interns in service of completing my assignments`,
          `Gained experience in C#, ASP.NET, Javascript, CSS, Bootstrap, HTML, jQuery, WinForms, and SQLServer`
        ]
      }
    ];
  }

  ngOnInit() {
  }
}
