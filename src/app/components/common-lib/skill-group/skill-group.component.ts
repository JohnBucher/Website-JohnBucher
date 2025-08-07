import { Component, ViewEncapsulation, Input } from '@angular/core';
import { SkillGroup } from 'src/app/models/skill-group-model';

@Component({
    selector: 'app-skill-group',
    templateUrl: './skill-group.component.html',
    styleUrls: ['./skill-group.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: true
})
export class SkillGroupComponent {
    @Input() skillGroupData: SkillGroup;
    @Input() class;

    get skillsString() {
        return this.skillGroupData.skills.join(', ');
    }
}
