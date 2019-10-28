import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

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
trigger('logoBAnimate', [
  state('in', style({ opacity: 1, transform: 'translateY(0%)', width: '150px', height: '150px' })),
  state('resize', style({ opacity: 1, width: '36px', height: '36px', margin: '7px 0px 0px 20px', float: 'left' })),
  state('disappear', style({ display: 'none' })),
  transition('in => resize', animate('0.75s 1s ease-in')),
  transition('resize => disappear', animate('1s 0s')),
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-30%)', width: '150px', height: '150px' }),
    animate('1s 500ms ease-in-out')
  ]),
]),
//-------------------------------------------------------------------------------------------
trigger('logoJAnimate', [
  state('in', style({ opacity: 1, transform: 'translateX(0%)', width: '150px', height: '150px' })),
  state('resize', style({ opacity: 1, width: '36px', height: '36px', margin: '7px 0px 0px 20px', float: 'left' })),
  state('disappear', style({ display: 'none' })),
  transition('in => resize', animate('0.75s 1s ease-in')),
  transition('resize => disappear', animate('1s 0s')),
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-30%)', width: '150px', height: '150px' }),
    animate('1s 500ms ease-in-out')
  ]),
]),
//-------------------------------------------------------------------------------------------
trigger('maskAnimate', [
  state('in', style({ opacity: 0, display: 'none' })),
  transition(':enter', [
    style({ opacity: 1 }),
    animate('1s 2.5s ease-in-out')
  ]),
]),
//-------------------------------------------------------------------------------------------
  ],
})
export class HomeComponent implements OnInit {
  display: boolean;

  logo_B_state: string = 'in';
  logo_J_state: string = 'in';

  constructor() {
  }

  ngOnInit() {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    // Then we set the value in the --vh custom property to the root of the document
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);


    // Set initial values for skill-column colorings
    this.checkSkillColumnColors();


    // Keep track of the current scroll position for CSS
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      // If the user has scrolled past the home-page, set the tollbar to be fixed at the top of the page
      if (scrolled >= (window.innerHeight - 65)) {
        let toolbar = document.getElementsByClassName('toolbar')[0];
        toolbar.setAttribute("style", "position: fixed; z-index: 1000; background-color: 	#050E1F; width: 100%;");
      }
      else if (scrolled <= (window.innerHeight - 65)) {
        let toolbar = document.getElementsByClassName('toolbar')[0];
        toolbar.setAttribute("style", "position: initial;");
      }
    })

    // Keep track of the current screen width for CSS purposes
    window.addEventListener('resize', () => {
      this.checkSkillColumnColors();
    })
  }

  checkSkillColumnColors() {
    const width = window.innerWidth;

      // If the skill sections collapse into one column account for that by getting the 3rd and 4th section and alter the color ordering
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
  }

  scrollToSection(el: string) {
    const section = document.getElementById(el);
    // Account for the height of the fixed header when determining how much to scroll
    const headerHeight = 50

    // Get the amount you need to scroll to reach the desired section
    const scrollAmount = section.offsetTop - window.pageYOffset - headerHeight;
    window.scrollBy({ top: scrollAmount, left: 0, behavior: 'smooth' });
  }

  onJLogoAnimationEvent( event: AnimationEvent ) {
    if (this.logo_J_state === 'in') {
      this.logo_J_state = 'resize';
    } else if (this.logo_J_state === 'resize') {
      this.logo_J_state = 'disappear';
    }
  }
  onBLogoAnimationEvent( event: AnimationEvent ) {
    if (this.logo_B_state === 'in') {
      this.logo_B_state = 'resize';
    } else if (this.logo_B_state === 'resize') {
      this.logo_B_state = 'disappear';
    }
  }
}
