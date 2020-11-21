import { Component, AfterContentInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss', '../../app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SkillsComponent implements AfterContentInit {

  state = 'small';
  frontEndSymbol = '</ >';
  frontEndText = 'Front End';
  backEndSymbol = '{ }';
  backEndText = 'Back End / Other';

  // HTML
  starHtml = '<i class="pi pi-star skill-year-star"></i>';

  // Dialog booleans
  frontEndDialog = false;
  backEndDialog = false;
  industryStandardsDialog = false;
  otherSkillsDialog = false;

  frontEndSkillMap = new Map([
    ['Angular', '2'],
    ['AngularJS', '2'],
    ['HTML', '3'],
    ['CSS', '3'],
    ['Typescript', '3'],
    ['Javascript', '2'],
    ['Bootstrap', '3'],
    ['jQuery', '2'],
  ]);
  backEndSkillMap = new Map([
    ['C#', '3'],
    ['Java', '7'],
    ['C', '5'],
    ['SQL', '3'],
    ['ASP.NET', '1'],
    ['Ruby On Rails', '1'],
    ['Python', '1'],
    ['Kotlin', '1'],
    ['Spring', '1'],
  ]);
  industrySkillMap = new Map([
    ['Agile', '2'],
    ['Git', '4'],
    ['VSCode', '2'],
    ['IntelliJ', '2'],
    ['Visual Studio', '3'],
    ['Eclipse', '4'],
    ['JSON', '3'],
    ['XML', '1'],
    ['Relational Databases', '3'],
    ['SQL Server', '1'],
  ]);
  otherSkillList = ['Continuous Self-Learning', 'Microsoft Office Products'];

  constructor() {
  }

  ngAfterContentInit() {
    this.state = (this.state === 'small' ? 'large' : 'small');
    this.populateSkillLabels();
  }

  populateSkillLabels() {
    const frontEndElementHTML = document.getElementById('frontEndSkillList');
    const backEndElementHTML = document.getElementById('backEndSkillList');
    const industryElementHTML = document.getElementById('industrySkillList');
    const otherElementHTML = document.getElementById('otherSkillList');

    // Front End
    this.frontEndSkillMap.forEach((value: string, key: string) => {
      frontEndElementHTML.innerHTML += (key + ', ');
    });
    frontEndElementHTML.innerHTML = frontEndElementHTML.innerHTML.substr(0, frontEndElementHTML.innerHTML.length - 2);

    // Back End
    this.backEndSkillMap.forEach((value: string, key: string) => {
      backEndElementHTML.innerHTML += (key + ', ');
    });
    backEndElementHTML.innerHTML = backEndElementHTML.innerHTML.substr(0, backEndElementHTML.innerHTML.length - 2);

    // Industry
    this.industrySkillMap.forEach((value: string, key: string) => {
      industryElementHTML.innerHTML += (key + ', ');
    });
    industryElementHTML.innerHTML = industryElementHTML.innerHTML.substr(0, industryElementHTML.innerHTML.length - 2);

    // Other
    this.otherSkillList.forEach((item: string) => {
      otherElementHTML.innerHTML += (item + ', ');
    });
    otherElementHTML.innerHTML = otherElementHTML.innerHTML.substr(0, otherElementHTML.innerHTML.length - 2);
  }

  populateFrontEndDialog() {
    this.frontEndSkillMap.forEach((value: string, key: string) => {
      const container = document.getElementById(key);
      container.innerHTML = '<div class="popUp-skill-title"> ' + key + ' </div>';

      for (let i = 0; i < parseInt(value, 10); i++) {
        container.innerHTML += this.starHtml;
      }
      container.innerHTML += ' (' + value + ')';
    });
  }

  populateBackEndDialog() {
    this.backEndSkillMap.forEach((value: string, key: string) => {
      const container = document.getElementById(key);
      container.innerHTML = '<div class="popUp-skill-title"> ' + key + ' </div>';

      for (let i = 0; i < parseInt(value, 10); i++) {
        container.innerHTML += this.starHtml;
      }
      container.innerHTML += ' (' + value + ')';
    });
  }

  populateIndustryDialog() {
    this.industrySkillMap.forEach((value: string, key: string) => {
      const container = document.getElementById(key);
      container.innerHTML = '<div class="popUp-skill-title"> ' + key + ' </div>';

      for (let i = 0; i < parseInt(value, 10); i++) {
        container.innerHTML += this.starHtml;
      }
      container.innerHTML += ' (' + value + ')';
    });
  }

  showFrontEndDialog() { this.frontEndDialog = true; }
  showBackEndDialog() { this.backEndDialog = true; }
  showIndustryStandardsDialog() { this.industryStandardsDialog = true; }
  showOtherSkillsDialog() { this.otherSkillsDialog = true; }
}
