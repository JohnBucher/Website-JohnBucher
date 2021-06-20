import { ThemeUtilityService } from './theme-utility-service';

function setPropertyVariables() {
    // LIGHT THEME
    document.documentElement.style.setProperty(`--lightTheme-primary-section-background-color`, 'white');
    document.documentElement.style.setProperty(`--lightTheme-secondary-section-background-color`, '#f1f1f1');
    document.documentElement.style.setProperty(`--lightTheme-primary-text-color`, 'black');
    document.documentElement.style.setProperty(`--lightTheme-component-text-color`, 'black');
    document.documentElement.style.setProperty(`--lightTheme-component-text-secondary-color`, 'black');
    document.documentElement.style.setProperty(`--lightTheme-header-box-shadow-color`, '#303030');

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

    it('switching themes should update CSS variables', () => {
        service.changeToLightTheme();

        expect(window.getComputedStyle(document.documentElement).getPropertyValue(`--primary-section-background-color`))
            .toEqual(window.getComputedStyle(document.documentElement).getPropertyValue(`--lightTheme-primary-section-background-color`));
        expect(window.getComputedStyle(document.documentElement).getPropertyValue(`--secondary-section-background-color`))
            .toEqual(window.getComputedStyle(document.documentElement).getPropertyValue(`--lightTheme-secondary-section-background-color`));
        expect(window.getComputedStyle(document.documentElement).getPropertyValue(`--primary-text-color`))
            .toEqual(window.getComputedStyle(document.documentElement).getPropertyValue(`--lightTheme-primary-text-color`));
        expect(window.getComputedStyle(document.documentElement).getPropertyValue(`--component-text-color`))
            .toEqual(window.getComputedStyle(document.documentElement).getPropertyValue(`--lightTheme-component-text-color`));
        expect(window.getComputedStyle(document.documentElement).getPropertyValue(`--component-text-secondary-color`))
            .toEqual(window.getComputedStyle(document.documentElement).getPropertyValue(`--lightTheme-component-text-secondary-color`));
        expect(window.getComputedStyle(document.documentElement).getPropertyValue(`--header-box-shadow-color`))
            .toEqual(window.getComputedStyle(document.documentElement).getPropertyValue(`--lightTheme-header-box-shadow-color`));

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

    it('light theme should be set in constructor if selectedTheme is changed from default', () => {
        service.selectedTheme = 'LIGHT';
        service.setTheme();

        expect(window.getComputedStyle(document.documentElement).getPropertyValue(`--primary-section-background-color`))
            .toEqual(window.getComputedStyle(document.documentElement).getPropertyValue(`--lightTheme-primary-section-background-color`));
        expect(window.getComputedStyle(document.documentElement).getPropertyValue(`--secondary-section-background-color`))
            .toEqual(window.getComputedStyle(document.documentElement).getPropertyValue(`--lightTheme-secondary-section-background-color`));
        expect(window.getComputedStyle(document.documentElement).getPropertyValue(`--primary-text-color`))
            .toEqual(window.getComputedStyle(document.documentElement).getPropertyValue(`--lightTheme-primary-text-color`));
        expect(window.getComputedStyle(document.documentElement).getPropertyValue(`--component-text-color`))
            .toEqual(window.getComputedStyle(document.documentElement).getPropertyValue(`--lightTheme-component-text-color`));
        expect(window.getComputedStyle(document.documentElement).getPropertyValue(`--component-text-secondary-color`))
            .toEqual(window.getComputedStyle(document.documentElement).getPropertyValue(`--lightTheme-component-text-secondary-color`));
        expect(window.getComputedStyle(document.documentElement).getPropertyValue(`--header-box-shadow-color`))
            .toEqual(window.getComputedStyle(document.documentElement).getPropertyValue(`--lightTheme-header-box-shadow-color`));
    });
});

