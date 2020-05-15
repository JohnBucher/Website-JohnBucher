import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { TimelineItem } from '../models/timeline-model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class EducationComponent implements OnInit {
  schools: TimelineItem[];

  constructor() {
    this.schools = [
      {
        name: 'Shippensburg University',
        title: 'Computer Science',
        dates: 'August 2014 - June 2018',
        image: 'assets/Education/Ship-Logo.png',
        descriptors: [
          'Shippensburg Honors Program',
          'Computer Programming Team',
          `Participant in the 2018 Minds at Work Conference presenting the research project:
            \"The Prevalence and Impact of the \'QWERTY Effect\' on the Russian Language\"`
        ]
      },
      {
        name: 'Elizabethtown Area High School',
        title: 'High School Diploma',
        dates: 'August 2012 - June 2014',
        image: 'assets/Education/EAHS-Logo.png',
        descriptors: [
          'National Honor Society',
          'Bronze and Silver Duke of Edinburgh (Awards for Community Service)',
          'Lancaster Lebanon Scholar Athlete Award'
        ]
      }
    ];
  }

  ngOnInit() {
  }
}
