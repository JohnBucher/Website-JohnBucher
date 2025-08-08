import { Component, ViewEncapsulation } from '@angular/core';
import { skillList } from 'src/app/data/skills';
import { certificates } from '../../data/certificates';
import { TitleComponent } from '../common-lib/title/title.component';
import { SkillGroupComponent } from '../common-lib/skill-group/skill-group.component';
import { CertificateComponent } from '../common-lib/certificate/certificate.component';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss', '../../app.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [TitleComponent, SkillGroupComponent, CertificateComponent]
})
export class SkillsComponent {
  public readonly skillData = skillList;
  public certificateList = certificates;

}
