import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class EducationComponent implements OnInit {
  schools: School[];

  constructor() {
    this.schools = [
      {
        schoolName: 'Shippensburg University',
        location: 'Shippensburg, PA',
        degree: 'Computer Science',
        dates: 'August 2014 - June 2018',
        image: 'assets/Ship-Logo.png',
        activities: [
          'Shippensburg Honors Program',
          'Computer Programming Team',
          `Participant in the 2018 Minds at Work Conference presenting the research project:
            \"The Prevalence and Impact of the \'QWERTY Effect\' on the Russian Language\"`
        ]
      },
      {
        schoolName: 'Elizabethtown Area High School',
        location: 'Elizabethtown, PA',
        degree: 'High School Diploma',
        dates: 'August 2012 - June 2014',
        image: 'assets/EAHS-Logo.png',
        activities: [
          'National Honor Society',
          'Bronze and Silver Duke of Edinburgh (Awards for Community Service)',
          'Lancaster Lebanon Scholar Athlete Award'
        ]
      }
    ];
  }

  ngOnInit() {
    this.populateEducationCarousel();
  }

  populateEducationCarousel() {
    const container = document.getElementById('education-carousel');
    let activeCounter = 0;

    this.schools.forEach((school) => {
      let constructedString = '';
      if (activeCounter === 0) {
        constructedString += '<div class="carousel-item active">';
        activeCounter++;
      } else {
        constructedString += '<div class="carousel-item">';
      }

      constructedString += `<div class="ui-row company-picture">
                              <img src="` + school.image + `" class="education-picture" />
                            </div>
                            <div class="ui-row company-name">
                              <span class="text">` + school.schoolName + `</span>
                            </div>
                            <div class="ui-row degree">
                              <span class="text">` + school.degree + `</span>
                            </div>
                            <div class="ui-row dates">
                              <span class="text"> <span class="date">Date:</span>` + school.dates + `</span>
                            </div>
                            <div class="ui-row activities">
                              <span class="text responsibility-header">Honors and Activities:</span>
                            </div>
                            <div class="ui-row activities-list">
                              <ul class="list">`;
      school.activities.forEach((activity: string) => {
        constructedString += `<li class="li-list">` + activity + `</li>`;
      });
      constructedString += `  </ul>
                            </div>`;

      container.innerHTML += constructedString;
    });
  }
}

export class School {
  schoolName: string;
  location: string;
  degree: string;
  dates: string;
  activities: string[];
  image: string;
}
