import { Component, ViewEncapsulation } from '@angular/core';
import { background } from 'src/app/data/background';
import { TitleComponent } from '../common-lib/title/title.component';

@Component({
    selector: 'app-background',
    templateUrl: './background.component.html',
    styleUrls: ['./background.component.scss', '../../app.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [TitleComponent]
})
export class BackgroundComponent {
  backgroundBlurb = background;
}
