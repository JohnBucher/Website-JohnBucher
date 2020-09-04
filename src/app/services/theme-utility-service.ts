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
        document.documentElement.style.setProperty(`--secondary-text-color`,
            window.getComputedStyle(document.documentElement).getPropertyValue(`--darkTheme-secondary-text-color`));
        document.documentElement.style.setProperty(`--sidebar-text-color`,
            window.getComputedStyle(document.documentElement).getPropertyValue(`--darkTheme-sidebar-text-color`));
        document.documentElement.style.setProperty(`--sidebar-background-color`,
            window.getComputedStyle(document.documentElement).getPropertyValue(`--darkTheme-sidebar-background-color`));
        document.documentElement.style.setProperty(`--sidebar-border-color`,
            window.getComputedStyle(document.documentElement).getPropertyValue(`--darkTheme-sidebar-border-color`));
        document.documentElement.style.setProperty(`--timeline-border`,
            window.getComputedStyle(document.documentElement).getPropertyValue(`--darkTheme-timeline-border`));
        document.documentElement.style.setProperty(`--timeline-item-marker-background-color`,
            window.getComputedStyle(document.documentElement).getPropertyValue(`--darkTheme-timeline-item-marker-background-color`));
        document.documentElement.style.setProperty(`--timeline-item-marker-box-shadow-color`,
            window.getComputedStyle(document.documentElement).getPropertyValue(`--darkTheme-timeline-item-marker-box-shadow-color`));
        document.documentElement.style.setProperty(`--timeline-text-color`,
            window.getComputedStyle(document.documentElement).getPropertyValue(`--darkTheme-timeline-text-color`));
        document.documentElement.style.setProperty(`--timeline-text-secondary-color`,
            window.getComputedStyle(document.documentElement).getPropertyValue(`--darkTheme-timeline-text-secondary-color`));
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
        document.documentElement.style.setProperty(`--secondary-text-color`,
            window.getComputedStyle(document.documentElement).getPropertyValue(`--whiteTheme-secondary-text-color`));
        document.documentElement.style.setProperty(`--sidebar-text-color`,
            window.getComputedStyle(document.documentElement).getPropertyValue(`--whiteTheme-sidebar-text-color`));
        document.documentElement.style.setProperty(`--sidebar-background-color`,
            window.getComputedStyle(document.documentElement).getPropertyValue(`--whiteTheme-sidebar-background-color`));
        document.documentElement.style.setProperty(`--sidebar-border-color`,
            window.getComputedStyle(document.documentElement).getPropertyValue(`--whiteTheme-sidebar-border-color`));
        document.documentElement.style.setProperty(`--timeline-border`,
            window.getComputedStyle(document.documentElement).getPropertyValue(`--whiteTheme-timeline-border`));
        document.documentElement.style.setProperty(`--timeline-item-marker-background-color`,
            window.getComputedStyle(document.documentElement).getPropertyValue(`--whiteTheme-timeline-item-marker-background-color`));
        document.documentElement.style.setProperty(`--timeline-item-marker-box-shadow-color`,
            window.getComputedStyle(document.documentElement).getPropertyValue(`--whiteTheme-timeline-item-marker-box-shadow-color`));
        document.documentElement.style.setProperty(`--timeline-text-color`,
            window.getComputedStyle(document.documentElement).getPropertyValue(`--whiteTheme-timeline-text-color`));
        document.documentElement.style.setProperty(`--timeline-text-secondary-color`,
            window.getComputedStyle(document.documentElement).getPropertyValue(`--whiteTheme-timeline-text-secondary-color`));
        document.documentElement.style.setProperty(`--header-box-shadow-color`,
            window.getComputedStyle(document.documentElement).getPropertyValue(`--whiteTheme-header-box-shadow-color`));
    }

}
