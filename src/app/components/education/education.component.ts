import { Component, ViewEncapsulation } from '@angular/core';
import { education } from 'src/app/data/education';
import { TimelineItem } from '../../models/timeline-model';
import { TimelineComponent } from '../common-lib/timeline/timeline.component';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [TimelineComponent]
})
export class EducationComponent {
  schools: TimelineItem[] = education;
}
