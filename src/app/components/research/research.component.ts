import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss', '../../app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ResearchComponent {
  title = '';
  description = '';

  constructor() {
    this.title = 'The Prevalence and Impact of the \'QWERTY Effect\' on the Russian Language';
    this.description = `Text-based analysis of Russian characters over time using a dataset of 74 million names grouped by
                        birth year to observe if the introduction of the electronic keyboard has influenced the Russian language
                        in similar patterns that have been observed in Roman - character languages. (January 2017 – December 2017)`;
  }
}
