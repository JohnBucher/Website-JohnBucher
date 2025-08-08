import { Component, ViewEncapsulation } from '@angular/core';
import { experience } from 'src/app/data/experience';
import { TimelineItem } from '../../models/timeline-model';
import { TimelineComponent } from '../common-lib/timeline/timeline.component';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [TimelineComponent]
})
export class ExperienceComponent {
  public jobs: TimelineItem[] = experience;
}
