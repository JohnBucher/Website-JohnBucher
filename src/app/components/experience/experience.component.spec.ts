import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, fakeAsync, ComponentFixture } from '@angular/core/testing';
import { ExperienceComponent } from './experience.component';

describe('HomeComponent', () => {
    let fixture: ComponentFixture<ExperienceComponent>;
    let component: ExperienceComponent;

    beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
    imports: [ExperienceComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
}).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ExperienceComponent);
        component = fixture.debugElement.componentInstance;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });
});
