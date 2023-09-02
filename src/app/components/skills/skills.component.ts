import { Component, ViewEncapsulation } from '@angular/core';
import { skillList } from 'src/app/data/skills';
import { certificates } from '../../data/certificates';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss', '../../app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SkillsComponent {
  public readonly skillData = skillList;
  public certificateList = certificates;

}
