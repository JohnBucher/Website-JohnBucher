import { Component, OnInit, AfterContentInit, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes, query, stagger } from '@angular/animations';
import { delay } from 'q';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css', '../app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BackgroundComponent implements OnInit, AfterContentInit {
  backgroundBlurb: string = `Software Engineer specializing in Web Development and Web Service technologies. I graduated with a bachelor’s degree in
                              Computer Science from Shippensburg University and have plans to continue my education with a master’s degree in the very
                              near future. I am currently working for Lockheed Martin as an Asc Software Engineer in the Space department. I am currently
                              focused on learning the industry and developing as an early-career professional.`

  constructor() {

  }

  ngOnInit() {
    
  }

  ngAfterContentInit() {
    
  }
}
