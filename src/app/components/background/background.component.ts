import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss', '../../app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BackgroundComponent {
  backgroundBlurb = `My name is John Bucher and I am a Software Engineer specializing in Full Stack Web Development and Web Service
   technologies. This website was created to serve as a consolidation and showcase of my projects, skills, education,
   and experience!<br /><br />
   I graduated from Shippensburg University in the Spring of 2018 with a Bachelor of Science in Computer Science.
   I graduated Cum Laude and as a member of the Shippensburg Honor’s Program. I plan to continue my education in Computer
   Science with a master’s degree in the very near future.<br /><br />
   I am currently working for Lockheed Martin as a Software Engineer in the Space Department. My main duties involve
   developing and maintaining web-based applications using frameworks and languages such as Angular, Spring, and SQL among others.
  `;

  constructor() {
  }
}
