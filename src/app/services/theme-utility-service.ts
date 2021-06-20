import { NgModule } from '@angular/core';

@NgModule({})
export class ThemeUtilityService {
    public selectedTheme = 'DARK';

    constructor() {
        this.setTheme();
    }

    public setTheme() {
        if (this.selectedTheme === 'DARK') {
            this.changeToDarkTheme();
        } else {
            this.changeToLightTheme();
        }
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

    public changeToLightTheme() {
        document.documentElement.style.setProperty(`--primary-section-background-color`,
            window.getComputedStyle(document.documentElement).getPropertyValue(`--lightTheme-primary-section-background-color`));
        document.documentElement.style.setProperty(`--secondary-section-background-color`,
            window.getComputedStyle(document.documentElement).getPropertyValue(`--lightTheme-secondary-section-background-color`));
        document.documentElement.style.setProperty(`--primary-text-color`,
            window.getComputedStyle(document.documentElement).getPropertyValue(`--lightTheme-primary-text-color`));
        document.documentElement.style.setProperty(`--component-text-color`,
            window.getComputedStyle(document.documentElement).getPropertyValue(`--lightTheme-component-text-color`));
        document.documentElement.style.setProperty(`--component-text-secondary-color`,
            window.getComputedStyle(document.documentElement).getPropertyValue(`--lightTheme-component-text-secondary-color`));
        document.documentElement.style.setProperty(`--header-box-shadow-color`,
            window.getComputedStyle(document.documentElement).getPropertyValue(`--lightTheme-header-box-shadow-color`));
    }

}
