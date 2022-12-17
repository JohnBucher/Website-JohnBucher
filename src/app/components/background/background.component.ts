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
   I graduated from Shippensburg University of Pennsylvania in the Spring of 2018 with a Bachelor of Science in Computer Science.
   I graduated Cum Laude and as a member of the Shippensburg Honor’s Program. I am currently attending the University of Colorado
   Boulder pursuing a Master of Engineering degree in Engineering Management.<br /><br />
   I am currently working for Lockheed Martin as a Software Engineer in the Space Department. My main duties involve
   designing, developing, and maintaining web-based applications using frameworks and languages such as Angular, Spring/Java, and
   SQL among others.
  `;
  
}
