import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, fakeAsync, ComponentFixture } from '@angular/core/testing';
import { ContactComponent } from './contact.component';

describe('HomeComponent', () => {
    let fixture: ComponentFixture<ContactComponent>;
    let component: ContactComponent;

    beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
            declarations: [
                ContactComponent
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ContactComponent);
        component = fixture.debugElement.componentInstance;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });
});
