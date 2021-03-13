import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { SkillGroup } from 'src/app/models/skill-group-model';

@Component({
    selector: 'app-skill-group',
    templateUrl: './skill-group.component.html',
    styleUrls: ['./skill-group.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class SkillGroupComponent implements OnInit {
    @Input() skillGroupData: SkillGroup;
    @Input() class: any;

    public skillsString: string = '';

    constructor() {
    }

    ngOnInit() {
        this.skillsString = this.skillGroupData.skills.join(', ');
    }
}
