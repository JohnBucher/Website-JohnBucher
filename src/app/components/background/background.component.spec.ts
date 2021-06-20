import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, fakeAsync, ComponentFixture } from '@angular/core/testing';
import { BackgroundComponent } from './background.component';

describe('HomeComponent', () => {
    let fixture: ComponentFixture<BackgroundComponent>;
    let component: BackgroundComponent;

    beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
            declarations: [
                BackgroundComponent
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BackgroundComponent);
        component = fixture.debugElement.componentInstance;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });
});
