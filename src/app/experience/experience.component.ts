import { Component, OnInit, AfterContentInit, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes, query, stagger } from '@angular/animations';
import { delay } from 'q';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ExperienceComponent implements OnInit, AfterContentInit {
  jobs: Job[];

  constructor() {

    this.jobs = [
      {
        companyName: 'Lockheed Martin',
        jobTitle: 'Asc Software Engineer',
        dates: 'July 2018 - Present',
        image: 'assets/LM-Logo.png',
        responsibilities: [
          'Create, maintain, and develop for web-based applications used by the US Government',
          'Particular focuses in regards to Angular and the Spring Framework',
          'Coordinate and collaborate with numerous teams and inviduals across Lockheed Martin, the US Government, and Subcontractors ',
          'Continuous learning on current and future technologies and how those could be incorporated into the program'
        ]
      },
      {
        companyName: 'Computer Aid, Inc',
        jobTitle: 'Software Development Intern',
        dates: 'June 2017 - August 2017',
        image: 'assets/CAI-Logo.png',
        responsibilities: [
          'Created and maintained relational databases and web-based application including E-commerce websites',
          'Inspected and documented professional Computer Aid, Inc. applications',
          'Gained experience in C#, ASP.NET, MVC, SQL SErver, Javascript, CSS, Bootstrap, HTML, jQuery, WinForms, C# WPF, and XAML'
        ]
      }
    ];
  }

  ngOnInit() {
    
  }

  ngAfterContentInit() {
    
  }

  /*
  selectJob(job: Job) {
    this.messageService.add({ severity: 'info', summary: 'Job Selected', detail: 'Company Name:' + job.companyName });
  }
  */
}

export class Job {
  companyName: string;
  jobTitle: string;
  dates: string;
  responsibilities: string[];
  image: string;
}
