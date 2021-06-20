import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, fakeAsync, ComponentFixture } from '@angular/core/testing';
import { ResearchComponent } from './research.component';

describe('HomeComponent', () => {
    let fixture: ComponentFixture<ResearchComponent>;
    let component: ResearchComponent;

    beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
            declarations: [
                ResearchComponent
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ResearchComponent);
        component = fixture.debugElement.componentInstance;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });
});
