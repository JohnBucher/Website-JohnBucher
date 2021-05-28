import { ThemeUtilityService } from './theme-utility-service';

function setPropertyVariables() {
    // WHITE THEME
    document.documentElement.style.setProperty(`--whiteTheme-primary-section-background-color`, 'white');
    document.documentElement.style.setProperty(`--whiteTheme-secondary-section-background-color`, '#f1f1f1');
    document.documentElement.style.setProperty(`--whiteTheme-primary-text-color`, 'black');
    document.documentElement.style.setProperty(`--whiteTheme-component-text-color`, 'black');
    document.documentElement.style.setProperty(`--whiteTheme-component-text-secondary-color`, 'black');
    document.documentElement.style.setProperty(`--whiteTheme-header-box-shadow-color`, '#303030');

    // DARK THEME
    document.documentElement.style.setProperty(`--darkTheme-primary-section-background-color`, '#202020');
    document.documentElement.style.setProperty(`--darkTheme-secondary-section-background-color`, '#262626');
    document.documentElement.style.setProperty(`--darkTheme-primary-text-color`, 'white');
    document.documentElement.style.setProperty(`--darkTheme-component-text-color`, 'lightseagreen');
    document.documentElement.style.setProperty(`--darkTheme-component-text-secondary-color`, 'rgb(64, 218, 210)');
    document.documentElement.style.setProperty(`--darkTheme-header-box-shadow-color`, '#0f0f0f');

    // DEFAULT THEME
    document.documentElement.style.setProperty(`--header-background-color`, '#050E1F');
    document.documentElement.style.setProperty(`--header-text-color`, 'white');
    document.documentElement.style.setProperty(`--header-text-secondary-color`, 'black');
    document.documentElement.style.setProperty(`--logo-color`, '#0F2B5D');
    document.documentElement.style.setProperty(`--sidebar-background-color`, '#262626');
    document.documentElement.style.setProperty(`--sidebar-border-color`, '#202020');
    document.documentElement.style.setProperty(`--sidebar-text-color`, 'white');
    document.documentElement.style.setProperty(`--sidebar-secondary-text-color`, 'black');
}

describe('ThemeUtilityService', () => {
    let service: ThemeUtilityService;
    beforeEach(() => {
        setPropertyVariables();
        service = new ThemeUtilityService();
    });

    it('dark theme should be enabled by default', () => {
        expect(service.selectedTheme).toEqual('DARK');

        expect(window.getComputedStyle(document.documentElement).getPropertyValue(`--primary-section-background-color`))
            .toEqual(window.getComputedStyle(document.documentElement).getPropertyValue(`--darkTheme-primary-section-background-color`));
        expect(window.getComputedStyle(document.documentElement).getPropertyValue(`--secondary-section-background-color`))
            .toEqual(window.getComputedStyle(document.documentElement).getPropertyValue(`--darkTheme-secondary-section-background-color`));
        expect(window.getComputedStyle(document.documentElement).getPropertyValue(`--primary-text-color`))
            .toEqual(window.getComputedStyle(document.documentElement).getPropertyValue(`--darkTheme-primary-text-color`));
        expect(window.getComputedStyle(document.documentElement).getPropertyValue(`--component-text-color`))
            .toEqual(window.getComputedStyle(document.documentElement).getPropertyValue(`--darkTheme-component-text-color`));
        expect(window.getComputedStyle(document.documentElement).getPropertyValue(`--component-text-secondary-color`))
            .toEqual(window.getComputedStyle(document.documentElement).getPropertyValue(`--darkTheme-component-text-secondary-color`));
        expect(window.getComputedStyle(document.documentElement).getPropertyValue(`--header-box-shadow-color`))
            .toEqual(window.getComputedStyle(document.documentElement).getPropertyValue(`--darkTheme-header-box-shadow-color`));
    });

    it('switching themes should update CSS variables', () => {
        service.changeToWhiteTheme();

        expect(window.getComputedStyle(document.documentElement).getPropertyValue(`--primary-section-background-color`))
            .toEqual(window.getComputedStyle(document.documentElement).getPropertyValue(`--whiteTheme-primary-section-background-color`));
        expect(window.getComputedStyle(document.documentElement).getPropertyValue(`--secondary-section-background-color`))
            .toEqual(window.getComputedStyle(document.documentElement).getPropertyValue(`--whiteTheme-secondary-section-background-color`));
        expect(window.getComputedStyle(document.documentElement).getPropertyValue(`--primary-text-color`))
            .toEqual(window.getComputedStyle(document.documentElement).getPropertyValue(`--whiteTheme-primary-text-color`));
        expect(window.getComputedStyle(document.documentElement).getPropertyValue(`--component-text-color`))
            .toEqual(window.getComputedStyle(document.documentElement).getPropertyValue(`--whiteTheme-component-text-color`));
        expect(window.getComputedStyle(document.documentElement).getPropertyValue(`--component-text-secondary-color`))
            .toEqual(window.getComputedStyle(document.documentElement).getPropertyValue(`--whiteTheme-component-text-secondary-color`));
        expect(window.getComputedStyle(document.documentElement).getPropertyValue(`--header-box-shadow-color`))
            .toEqual(window.getComputedStyle(document.documentElement).getPropertyValue(`--whiteTheme-header-box-shadow-color`));

        service.changeToDarkTheme();

        expect(window.getComputedStyle(document.documentElement).getPropertyValue(`--primary-section-background-color`))
            .toEqual(window.getComputedStyle(document.documentElement).getPropertyValue(`--darkTheme-primary-section-background-color`));
        expect(window.getComputedStyle(document.documentElement).getPropertyValue(`--secondary-section-background-color`))
            .toEqual(window.getComputedStyle(document.documentElement).getPropertyValue(`--darkTheme-secondary-section-background-color`));
        expect(window.getComputedStyle(document.documentElement).getPropertyValue(`--primary-text-color`))
            .toEqual(window.getComputedStyle(document.documentElement).getPropertyValue(`--darkTheme-primary-text-color`));
        expect(window.getComputedStyle(document.documentElement).getPropertyValue(`--component-text-color`))
            .toEqual(window.getComputedStyle(document.documentElement).getPropertyValue(`--darkTheme-component-text-color`));
        expect(window.getComputedStyle(document.documentElement).getPropertyValue(`--component-text-secondary-color`))
            .toEqual(window.getComputedStyle(document.documentElement).getPropertyValue(`--darkTheme-component-text-secondary-color`));
        expect(window.getComputedStyle(document.documentElement).getPropertyValue(`--header-box-shadow-color`))
            .toEqual(window.getComputedStyle(document.documentElement).getPropertyValue(`--darkTheme-header-box-shadow-color`));
    });
});

