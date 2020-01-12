import { Component, AfterContentInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css', '../app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SkillsComponent implements AfterContentInit {

  state = 'small';
  frontEndSymbol = '</ >';
  frontEndText = 'Front End';
  backEndSymbol = '{ }';
  backEndText = 'Back End';

  // Dialog booleans
  frontEndDialog = false;
  backEndDialog = false;
  industryStandardsDialog = false;
  otherSkillsDialog = false;

  constructor() {
  }

  ngAfterContentInit() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

  showFrontEndDialog() { this.frontEndDialog = true; }
  showBackEndDialog() { this.backEndDialog = true; }
  showIndustryStandardsDialog() { this.industryStandardsDialog = true; }
  showOtherSkillsDialog() { this.otherSkillsDialog = true; }
}
