import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ExperienceComponent implements OnInit {
  jobs: Job[];

  constructor() {

    this.jobs = [
      {
        companyName: 'Lockheed Martin',
        jobTitle: 'Asc Software Engineer',
        dates: 'July 2018 - Present',
        image: 'assets/LM-Logo.png',
        responsibilities: [
          `Engineer, develop, and maintain web-based applications used by various agencies of the US Government`,
          `Coordinate and collaborate with numerous teams and inviduals across
            Lockheed Martin, the US Government, and various Subcontractors`,
          `Perform continuous-learning on current and future technologies to
             both shore up team areas of expertise as well as keeping an eye on technologies to improve the program`,
          `Particular focuses include: Angular, Spring, and Java among others`
        ]
      },
      {
        companyName: 'Computer Aid, Inc',
        jobTitle: 'Software Development Intern',
        dates: 'June 2017 - August 2017',
        image: 'assets/CAI-Logo.png',
        responsibilities: [
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
    this.populateSkillsCarousel();
  }

  populateSkillsCarousel() {
    const container = document.getElementById('skill-carousel');
    let activeCounter = 0;

    this.jobs.forEach((job) => {
      let constructedString = '';
      if (activeCounter === 0) {
        constructedString += '<div class="carousel-item active">';
        activeCounter++;
      } else {
        constructedString += '<div class="carousel-item">';
      }

      constructedString += `<div class="ui-row company-picture">
                              <img src="` + job.image + `" class="experience-picture" />
                            </div>
                            <div class="ui-row company-name">
                              <span class="text">` + job.companyName + `</span>
                            </div>
                            <div class="ui-row job-title">
                              <span class="text">` + job.jobTitle + `</span>
                            </div>
                            <div class="ui-row dates">
                              <span class="text"> <span class="date">Date:</span>` + job.dates + `</span>
                            </div>
                            <div class="ui-row responsibilities">
                              <span class="text responsibility-header">Responsibilities:</span>
                            </div>
                            <div class="ui-row responsibilities-list">
                              <ul class="list">`;
      job.responsibilities.forEach((responsibility: string) => {
        constructedString += `<li class="li-list">` + responsibility + `</li>`;
      });
      constructedString += `  </ul>
                            </div>`;

      container.innerHTML += constructedString;
    });
  }
}

export class Job {
  companyName: string;
  jobTitle: string;
  dates: string;
  responsibilities: string[];
  image: string;
}
