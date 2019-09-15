import { Component, OnInit, AfterContentInit, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes, query, stagger } from '@angular/animations';
import { delay } from 'q';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../app.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
//-------------------------------------------------------------------------------------------
    trigger('titleFadeRightAnimation', [
      state('in', style({ opacity: 1, transform: 'scale(1, 1)' })),
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0, 1)' }),
        animate('0.5s 0.75s')
      ]),
    ]),
//-------------------------------------------------------------------------------------------
    trigger('titleFadeLeftAnimation', [
      state('in', style({ opacity: 1, transform: 'scaleX(1)' })),
      transition(':enter', [
        style({ opacity: 0, transform: 'scaleX(0)' }),
        animate('0.5s 0.75s')
      ]),
    ]),
//-------------------------------------------------------------------------------------------
    trigger('titleOpacityAnimation', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s 1.5s')
      ]),
    ]),
//-------------------------------------------------------------------------------------------
    trigger('subTitleOpacityAnimation', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2s 2.5s')
      ]),
    ]),
//-------------------------------------------------------------------------------------------
    trigger('LearnMoreAnimation', [
      state('in', style({ opacity: 1, transform: 'translateY(0%)' })),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30%)' }),
        animate('0.75s 4s ease-in')
      ]),
      transition(':leave', [
        style({ opacity: 0, transform: 'translateY(-30%)' }),
        animate('500ms ease-out')
      ]),
    ]),
//-------------------------------------------------------------------------------------------
  ],
})
export class HomeComponent implements OnInit, AfterContentInit {
  display: boolean;

  constructor() {
    
  }

  ngOnInit() {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);


    const width = window.innerWidth;
    if (width >= 767) {
      let skillBar = document.getElementsByClassName('skill-industry')[0];
      let otherBar = document.getElementsByClassName('skill-other')[0];
      skillBar.setAttribute("style", "height: 175px; color: white; background-color: #495568;");
      otherBar.setAttribute("style", "height: 175px; color: white; background-color: #404a5b;");
    }
    else if (width <= 767) {
      let skillBar = document.getElementsByClassName('skill-industry')[0];
      let otherBar = document.getElementsByClassName('skill-other')[0];
      skillBar.setAttribute("style", "height: 175px; color: white; background-color: #404a5b;");
      otherBar.setAttribute("style", "height: 175px; color: white; background-color: #495568;");
    }


    // Keep track of the current scroll position for CSS
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;

      if (scrolled >= (window.innerHeight - 65)) {
        let toolbar = document.getElementsByClassName('toolbar')[0];
        toolbar.setAttribute("style", "position: fixed; z-index: 1000; background-color: 	#050E1F; width: 100%;");
      }
      else if (scrolled <= (window.innerHeight - 65)) {
        let toolbar = document.getElementsByClassName('toolbar')[0];
        toolbar.setAttribute("style", "position: initial;");
      }
    })

    // Keep track of the current screen width for CSS
    window.addEventListener('resize', () => {
      const width = window.innerWidth;

      if (width >= 767) {
        let skillBar = document.getElementsByClassName('skill-industry')[0];
        let otherBar = document.getElementsByClassName('skill-other')[0];
        skillBar.setAttribute("style", "height: 175px; color: white; background-color: #495568;");
        otherBar.setAttribute("style", "height: 175px; color: white; background-color: #404a5b;");
      }
      else if (width <= 767) {
        let skillBar = document.getElementsByClassName('skill-industry')[0];
        let otherBar = document.getElementsByClassName('skill-other')[0];
        skillBar.setAttribute("style", "height: 175px; color: white; background-color: #404a5b;");
        otherBar.setAttribute("style", "height: 175px; color: white; background-color: #495568;");
      }
    })
  }

  ngAfterContentInit() {
    
  }

  scrollToSection(el: string) {
    const section = document.getElementById(el);
    // Account for the height of the fixed header when determining how much to scroll
    const headerHeight = 50

    // Get the amount you need to scroll to reach the desired section
    const scrollAmount = section.offsetTop - window.pageYOffset - headerHeight;
    window.scrollBy({ top: scrollAmount, left: 0, behavior: 'smooth' });
  }

}
