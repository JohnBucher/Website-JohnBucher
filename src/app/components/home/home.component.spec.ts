import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, fakeAsync, ComponentFixture } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeUtilityService } from 'src/app/services/theme-utility-service';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
    let fixture: ComponentFixture<HomeComponent>;
    let component: HomeComponent;

    beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
    imports: [
        BrowserAnimationsModule,
        HomeComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    providers: [
        ThemeUtilityService
    ]
}).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.debugElement.componentInstance;
        component.ngOnInit();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should call scrollToSection()', () => {
        spyOn(window, 'scrollBy');

        const dummyElement = document.createElement('test');
        document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyElement);

        component.scrollToSection('test');
        expect(window.scrollBy).toHaveBeenCalled();
    });

    it('should call onJLogoAnimationEvent()', () => {
        // DESKTOP
        component.isMobile = false;
        expect(component.logoJFragmentState).toEqual('out');
        component.onJLogoAnimationEvent();
        expect(component.logoJFragmentState).toEqual('in');
        component.onJLogoAnimationEvent();
        expect(component.logoJFragmentState).toEqual('resize');
        component.onJLogoAnimationEvent();
        expect(component.logoJFragmentState).toEqual('disappear');

        // MOBILE
        component.logoJFragmentState = 'out';
        component.isMobile = true;
        component.onJLogoAnimationEvent();
        expect(component.logoJFragmentState).toEqual('in');
        component.onJLogoAnimationEvent();
        expect(component.logoJFragmentState).toEqual('mobile-fade-out');

        // NULL-CASE
        component.logoJFragmentState = 'null';
        component.onJLogoAnimationEvent();
        expect(component.logoJFragmentState).toEqual('null');
    });

    it('should call onBLogoAnimationEvent()', () => {
        // DESKTOP
        component.isMobile = false;
        expect(component.logoBFragmentState).toEqual('out');
        component.onBLogoAnimationEvent();
        expect(component.logoBFragmentState).toEqual('in');
        component.onBLogoAnimationEvent();
        expect(component.logoBFragmentState).toEqual('resize');
        component.onBLogoAnimationEvent();
        expect(component.logoBFragmentState).toEqual('disappear');

        // MOBILE
        component.logoBFragmentState = 'out';
        component.isMobile = true;
        component.onBLogoAnimationEvent();
        expect(component.logoBFragmentState).toEqual('in');
        component.onBLogoAnimationEvent();
        expect(component.logoBFragmentState).toEqual('mobile-fade-out');

        // NULL-CASE
        component.logoBFragmentState = 'null';
        component.onBLogoAnimationEvent();
        expect(component.logoBFragmentState).toEqual('null');
    });

    it('should call onJBLogoAnimate()', () => {
        // DESKTOP
        component.jbFullLogoState = 'invisible';
        component.isMobile = false;
        component.onJBLogoAnimate();
        expect(component.jbFullLogoState).toEqual('visible');

        // MOBILE
        component.jbFullLogoState = 'visible';
        component.isMobile = true;
        component.onJBLogoAnimate();
        expect(component.jbFullLogoState).toEqual('visible');
    });

    it('should call changeTheme()', () => {
        spyOn(component.themeUtilitySvc, 'changeToDarkTheme');
        spyOn(component.themeUtilitySvc, 'changeToLightTheme');

        // Should INVERT the selectedTheme that begins the changeTheme() method

        // CHANGE TO DARK THEME
        expect(component.themeUtilitySvc.selectedTheme).toEqual('DARK');
        component.changeTheme();
        expect(component.themeUtilitySvc.changeToLightTheme).toHaveBeenCalled();

        // CHANGE TO LIGHT THEME
        component.themeUtilitySvc.selectedTheme = 'LIGHT';
        component.changeTheme();
        expect(component.themeUtilitySvc.changeToDarkTheme).toHaveBeenCalled();
    });
});
