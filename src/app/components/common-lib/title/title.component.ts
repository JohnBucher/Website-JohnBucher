import { Component, ViewEncapsulation, Input, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'app-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TitleComponent implements AfterViewInit {
    @Input() title: string;

    public left: string;
    public right: string;

    constructor(private readonly cdr: ChangeDetectorRef) {
    }

    ngAfterViewInit() {
        this.left = `left-${this.title}`;
        this.right = `right-${this.title}`;

        this.cdr.detectChanges();

        this.addResizeListener();
        this.calculateTitleBorders();
    }

    private addResizeListener() {
        // If the window is resized => recalculate the titles' borders
        window.addEventListener('resize', () => {
          this.calculateTitleBorders();
        });
    }

    private calculateTitleBorders() {
        const element = document.getElementById(this.title);
        // Subtract values for margins and gaps from width calculation
            // Margins = 2, 30px left/right margins
            // Gaps = 2, 15px left/right gaps
        const width = ((window.innerWidth - element.offsetWidth - 90)/2);

        document.getElementById(`left-${this.title}`).style.width = `${width < 15 ? 0 : width}px`;
        document.getElementById(`right-${this.title}`).style.width = `${width < 15 ? 0 : width}px`;
    }
}
