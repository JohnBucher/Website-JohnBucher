import { NgModule } from '@angular/core';

@NgModule({})
export class ThemeUtilityService {
    public selectedTheme = 'dark';

    constructor() {
    }

    public changeToDarkTheme() {
        document.documentElement.style.setProperty(`--primary-section-background-color`,
            window.getComputedStyle(document.documentElement).getPropertyValue(`--darkTheme-primary-section-background-color`));
        document.documentElement.style.setProperty(`--secondary-section-background-color`,
            window.getComputedStyle(document.documentElement).getPropertyValue(`--darkTheme-secondary-section-background-color`));
        document.documentElement.style.setProperty(`--primary-text-color`,
            window.getComputedStyle(document.documentElement).getPropertyValue(`--darkTheme-primary-text-color`));
        document.documentElement.style.setProperty(`--component-text-color`,
            window.getComputedStyle(document.documentElement).getPropertyValue(`--darkTheme-component-text-color`));
        document.documentElement.style.setProperty(`--component-text-secondary-color`,
            window.getComputedStyle(document.documentElement).getPropertyValue(`--darkTheme-component-text-secondary-color`));
        document.documentElement.style.setProperty(`--header-box-shadow-color`,
            window.getComputedStyle(document.documentElement).getPropertyValue(`--darkTheme-header-box-shadow-color`));
    }

    public changeToWhiteTheme() {
        document.documentElement.style.setProperty(`--primary-section-background-color`,
            window.getComputedStyle(document.documentElement).getPropertyValue(`--whiteTheme-primary-section-background-color`));
        document.documentElement.style.setProperty(`--secondary-section-background-color`,
            window.getComputedStyle(document.documentElement).getPropertyValue(`--whiteTheme-secondary-section-background-color`));
        document.documentElement.style.setProperty(`--primary-text-color`,
            window.getComputedStyle(document.documentElement).getPropertyValue(`--whiteTheme-primary-text-color`));
        document.documentElement.style.setProperty(`--component-text-color`,
            window.getComputedStyle(document.documentElement).getPropertyValue(`--whiteTheme-component-text-color`));
        document.documentElement.style.setProperty(`--component-text-secondary-color`,
            window.getComputedStyle(document.documentElement).getPropertyValue(`--whiteTheme-component-text-secondary-color`));
        document.documentElement.style.setProperty(`--header-box-shadow-color`,
            window.getComputedStyle(document.documentElement).getPropertyValue(`--whiteTheme-header-box-shadow-color`));
    }

}
