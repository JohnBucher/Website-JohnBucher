import { Component, OnInit, AfterContentInit, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes, query, stagger } from '@angular/animations';
import { delay } from 'q';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css', '../app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectsComponent implements OnInit, AfterContentInit {

  constructor() {
  }

  ngOnInit() {

  }

  ngAfterContentInit() {

  }
}
