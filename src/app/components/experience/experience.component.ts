import { Component, ViewEncapsulation } from '@angular/core';
import { experience } from 'src/app/data/experience';
import { TimelineItem } from '../../models/timeline-model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExperienceComponent {
  public jobs: TimelineItem[] = experience;
}
