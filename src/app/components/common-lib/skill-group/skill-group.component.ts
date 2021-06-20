import { Component, ViewEncapsulation, Input } from '@angular/core';
import { SkillGroup } from 'src/app/models/skill-group-model';

@Component({
    selector: 'app-skill-group',
    templateUrl: './skill-group.component.html',
    styleUrls: ['./skill-group.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class SkillGroupComponent {
    @Input() skillGroupData: SkillGroup;
    @Input() class: any;

    constructor() {
    }

    get skillsString() {
        return this.skillGroupData.skills.join(', ');
    }
}
