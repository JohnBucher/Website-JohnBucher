import { Component, ViewEncapsulation } from '@angular/core';
import { education } from 'src/app/data/education';
import { TimelineItem } from '../../models/timeline-model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EducationComponent {
  schools: TimelineItem[] = education;
}
