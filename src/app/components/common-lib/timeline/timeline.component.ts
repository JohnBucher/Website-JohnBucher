import { Component, ViewEncapsulation, Input } from '@angular/core';
import { Position, TimelineItem } from '../../../models/timeline-model';
import { state, style, transition, animate, trigger } from '@angular/animations';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: [
        trigger('openClose', [
            state('open', style({ height: '*' })),
            state('closed', style({ height: '0px' })),
            transition('open => closed', [
                animate('0.5s 0s ease')
            ]),
            transition('closed => open', [
                animate('0.5s 0s ease')
            ])
        ])
    ],
    standalone: true
})
export class TimelineComponent {
  @Input() timelineData: TimelineItem[];
  @Input() descriptorLabel: string;

  public toggleVisibility(item: Position) {
      item.showDescriptors = !item.showDescriptors;
  }
  public getDescriptorButtonText(item: Position): string {
    return (item.showDescriptors ? 'Hide ' : 'View ') + this.descriptorLabel;
  }
}
