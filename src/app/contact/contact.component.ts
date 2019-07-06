import { Component, OnInit, AfterContentInit, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes, query, stagger } from '@angular/animations';
import { delay } from 'q';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', '../app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ContactComponent implements OnInit, AfterContentInit {

  constructor() {

  }

  ngOnInit() {
    
  }

  ngAfterContentInit() {
    
  }
}
