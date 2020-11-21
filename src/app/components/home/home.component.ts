import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ThemeUtilityService } from '../../services/theme-utility-service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
  // -------------------------------------------------------------------------------------------
    trigger('JBLogoAnimate', [
      state('visible', style({ opacity: 1 })),
      state('invisible', style({ opacity: 0 })),
      transition('invisible => visible', [
        animate('1ms 3.75s')
      ]),
    ]),
  // -------------------------------------------------------------------------------------------
      trigger('LearnMoreAnimation', [
        state('in', style({ opacity: 1, transform: 'translateY(0%)' })),
        transition(':enter', [
          style({ opacity: 0, transform: 'translateY(30%)' }),
          animate('0.75s 4s ease-in')
        ]),
      ]),
  // -------------------------------------------------------------------------------------------
  trigger('logoBAnimate', [
    state('out', style({ opacity: 0, transform: 'translateY(-30%)' })),
    state('in', style({ opacity: 1, transform: 'translateY(0%)' })),
    state('resize', style({ opacity: 1, transform: 'scale(0.24, 0.24)', 'transform-origin': 'left top',
                            'margin-top': '7px', 'margin-left': '20px' })),
    state('mobile-fade-out', style({ opacity: 0 })),
    state('disappear', style({ display: 'none' })),

    transition('out => in', animate('1s 500ms ease-in-out')),
    transition('in => mobile-fade-out', animate('0.5s 0.5s')),
    transition('in => resize', animate('0.75s 1s ease-in-out')),
    transition('resize => disappear', animate('0.5s 0s')),
  ]),
  // -------------------------------------------------------------------------------------------
  trigger('logoJAnimate', [
    state('out', style({ opacity: 0, transform: 'translateX(-30%)' })),
    state('in', style({ opacity: 1, transform: 'translateX(0%)' })),
    state('resize', style({ opacity: 1, transform: 'scale(0.24, 0.24)', 'transform-origin': 'left top',
                            'margin-top': '7px', 'margin-left': '20px' })),
    state('mobile-fade-out', style({ opacity: 0 })),
    state('disappear', style({ display: 'none' })),

    transition('out => in', animate('1s 500ms ease-in-out')),
    transition('in => mobile-fade-out', animate('0.5s 0.5s')),
    transition('in => resize', animate('0.75s 1s ease-in-out')),
    transition('resize => disappear', animate('0.5s 0s')),
  ]),
  // -------------------------------------------------------------------------------------------
  trigger('maskAnimate', [
    state('in', style({ opacity: 0, display: 'none' })),
    transition(':enter', [
      style({ opacity: 1 }),
      animate('1s 2.5s ease-in-out')
    ]),
  ]),
]})
export class HomeComponent implements OnInit {
  display: boolean;

  logoBFragmentState = 'out';
  logoJFragmentState = 'out';
  jbFullLogoState = 'visible';
  isMobile = false;

  themeOptions: SelectItem[] = [{label: 'Dark', value: 'DARK'}, {label: 'White', value: 'WHITE'}];
  theme = 'DARK';

  constructor(private readonly themeUtilitySvc: ThemeUtilityService) {
    // Detect if the device is mobile to determine what animations to play
    this.isMobile = window.matchMedia('only screen and (max-width: 760px)').matches;

    this.changeTheme();
  }

  ngOnInit() {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    // Then we set the value in the --vh custom property to the root of the document
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // Set initial values for skill-column colorings
    this.checkSkillColumnColors();

    // Keep track of the current scroll position for CSS
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const toolbar = document.getElementsByClassName('toolbar')[0];
      // If the user has scrolled past the home-page, set the tollbar to be fixed at the top of the page
      if (scrolled >= (window.innerHeight - 65)) {
        toolbar.setAttribute('style', 'position: fixed; z-index: 1000; background-color: #050E1F; width: 100%;');
      } else if (scrolled <= (window.innerHeight - 65)) {
        toolbar.setAttribute('style', 'position: initial;');
      }
    });

    // Keep track of the current screen width for CSS purposes
    window.addEventListener('resize', () => {
      this.checkSkillColumnColors();
    });

    if (!this.isMobile) {
      // IF the device is not mobile, then set the main logo to the first animation state
      // which will enable the rest of the animation steps
      this.jbFullLogoState = 'invisible';
    }
  }

  checkSkillColumnColors() {
    const width = window.innerWidth;
    const skillBar = document.getElementsByClassName('skill-industry')[0];
    const otherBar = document.getElementsByClassName('skill-other')[0];

    // If the skill sections collapse into one column account for that by getting the 3rd and 4th section and alter the color ordering
    if (width >= 767) {
      skillBar.setAttribute('style', 'min-height: 175px; color: white; background-color: #495568;');
      otherBar.setAttribute('style', 'min-height: 175px; color: white; background-color: #404a5b;');
    } else if (width <= 767) {
      skillBar.setAttribute('style', 'min-height: 175px; color: white; background-color: #404a5b;');
      otherBar.setAttribute('style', 'min-height: 175px; color: white; background-color: #495568;');
    }
  }

  scrollToSection(el: string) {
    const section = document.getElementById(el);
    // Account for the height of the fixed header when determining how much to scroll
    const headerHeight = 50;

    // Get the amount you need to scroll to reach the desired section
    const scrollAmount = section.offsetTop - window.pageYOffset - headerHeight;
    window.scrollBy({ top: scrollAmount, left: 0, behavior: 'smooth' });
  }

  onJLogoAnimationEvent( event: AnimationEvent ) {
    if (this.logoJFragmentState === 'out') {
      this.logoJFragmentState = 'in';
    } else if (this.isMobile && this.logoJFragmentState === 'in') {
      this.logoJFragmentState = 'mobile-fade-out';
    } else if (this.logoJFragmentState === 'in') {
      this.logoJFragmentState = 'resize';
    } else if (this.logoJFragmentState === 'resize') {
      this.logoJFragmentState = 'disappear';
    }
  }
  onBLogoAnimationEvent( event: AnimationEvent ) {
    if (this.logoBFragmentState === 'out') {
      this.logoBFragmentState = 'in';
    } else if (this.isMobile && this.logoBFragmentState === 'in') {
      this.logoBFragmentState = 'mobile-fade-out';
    } else if (this.logoBFragmentState === 'in') {
      this.logoBFragmentState = 'resize';
    } else if (this.logoBFragmentState === 'resize') {
      this.logoBFragmentState = 'disappear';
    }
  }
  onJBLogoAnimate( event: AnimationEvent ) {
    if (this.jbFullLogoState === 'invisible') {
      this.jbFullLogoState = 'visible';
    }
  }

  changeTheme() {
    if (this.theme === 'DARK') {
      this.themeUtilitySvc.changeToDarkTheme();
    } else {
      this.themeUtilitySvc.changeToWhiteTheme();
    }
  }
}
