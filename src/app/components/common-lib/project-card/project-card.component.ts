import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Project } from 'src/app/models/project-model';

@Component({
    selector: 'app-project-card',
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: true
})
export class ProjectCardComponent {
    @Input() project: Project;

}
