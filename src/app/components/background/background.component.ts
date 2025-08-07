import { Component, ViewEncapsulation } from '@angular/core';
import { background } from 'src/app/data/background';

@Component({
    selector: 'app-background',
    templateUrl: './background.component.html',
    styleUrls: ['./background.component.scss', '../../app.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: true
})
export class BackgroundComponent {
  backgroundBlurb = background;
}
