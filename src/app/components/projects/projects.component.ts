import { Component, ViewEncapsulation } from '@angular/core';
import { Project } from 'src/app/models/project-model';
import { projects } from '../../data/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss', '../../app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectsComponent {
  projectList = projects as Project[];
}
