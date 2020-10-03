import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { TimelineItem } from '../models/timeline-model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EducationComponent implements OnInit {
  schools: TimelineItem[];

  constructor() {
    this.schools = [
      {
        name: 'Shippensburg University',
        image: 'assets/Education/Ship-Logo.png',
        titles: [
          { name: 'Bachelor of Computer Science', dates: 'August 2014 - June 2018' }
        ],
        descriptors: [
          'Shippensburg Honors Program',
          'Computer Programming Team',
          `Participant in the 2018 Minds at Work Conference presenting the research project:
            \"The Prevalence and Impact of the \'QWERTY Effect\' on the Russian Language\"`
        ]
      },
      {
        name: 'Elizabethtown Area High School',
        image: 'assets/Education/EAHS-Logo.png',
        titles: [
          { name: 'High School Diploma', dates: 'August 2012 - June 2014' }
        ],
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
