import { Component, OnInit, AfterContentInit, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes, query, stagger } from '@angular/animations';
import { delay } from 'q';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css', '../app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SkillsComponent implements OnInit, AfterContentInit {

  state: string = 'small';
  frontEndSymbol: string = "</ >";
  frontEndText: string = "Front End";
  backEndSymbol: string = "{ }";
  backEndText: string = "Back End";

  //Dialog booleans
  frontEndDialog: boolean = false;
  backEndDialog: boolean = false;
  industryStandardsDialog: boolean = false;
  otherSkillsDialog: boolean = false;

  testText = '';

  constructor() {

  }

  ngOnInit() {
    
  }

  ngAfterContentInit() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

  showFrontEndDialog() { this.frontEndDialog = true; }
  showBackEndDialog() { this.backEndDialog = true; }
  showIndustryStandardsDialog() { this.industryStandardsDialog = true; }
  showOtherSkillsDialog() { this.otherSkillsDialog = true; }
}
