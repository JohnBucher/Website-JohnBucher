import { Component, OnInit, AfterContentInit, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes, query, stagger } from '@angular/animations';
import { delay } from 'q';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class EducationComponent implements OnInit, AfterContentInit {
  schools: School[];

  constructor() {
    this.schools = [
      {
        schoolName: 'Shippensburg University',
        location: 'Shippensburg, PA',
        degree: 'Computer Science',
        dates: 'August 2014 - June 2018',
        image: '../../assets/Ship-Logo.png',
        activities: [
          'Shippensburg Honors Program',
          'Computer Programming Team',
          'Participant in the 2018 Minds at Work Conference presenting the research project: \'The Prevalence and Impact of the \'QWERTY Effect\' on the Russian Language\''
        ]
      },
      {
        schoolName: 'Elizabethtown Area High School',
        location: 'Elizabethtown, PA',
        degree: 'High School Diploma',
        dates: 'August 2012 - June 2014',
        image: '../../assets/EAHS-Logo.png',
        activities: [
          'National Honor Society',
          'Bronze and Silver Duke of Edinburgh (Awards for Community Service)',
          'Lancaster Lebanon Scholar Athlete Award'
        ]
      }
    ];
  }

  ngOnInit() {
    
  }

  ngAfterContentInit() {
    
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
