import { Component, OnInit, AfterContentInit, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes, query, stagger } from '@angular/animations';
import { delay } from 'q';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css', '../app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ResearchComponent implements OnInit, AfterContentInit {
  title: string = '';
  description: string = '';

  constructor() {
    this.title = 'The Prevalence and Impact of the \'QWERTY Effect\' on the Russian Language';
    this.description = `Text-based analysis of Russian characters over time using a dataset of 74 million names grouped by
                        birth year to observe if the introduction of the electronic keyboard has influenced the Russian language
                        in similar patterns that have been observed in Roman - character languages. (January 2017 – December 2017)`;
  }

  ngOnInit() {
    
  }

  ngAfterContentInit() {
    
  }
}
