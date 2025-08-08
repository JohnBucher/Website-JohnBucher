import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, fakeAsync, ComponentFixture } from '@angular/core/testing';
import { EducationComponent } from './education.component';

describe('HomeComponent', () => {
    let fixture: ComponentFixture<EducationComponent>;
    let component: EducationComponent;

    beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
    imports: [EducationComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
}).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EducationComponent);
        component = fixture.debugElement.componentInstance;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });
});
