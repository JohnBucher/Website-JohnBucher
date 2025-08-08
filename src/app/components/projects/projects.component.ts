import { Component, ViewEncapsulation } from '@angular/core';
import { Project } from 'src/app/models/project-model';
import { projects } from '../../data/projects';
import { TitleComponent } from '../common-lib/title/title.component';
import { NgFor } from '@angular/common';
import { ProjectCardComponent } from '../common-lib/project-card/project-card.component';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss', '../../app.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [TitleComponent, NgFor, ProjectCardComponent]
})
export class ProjectsComponent {
  projectList = projects as Project[];
}
