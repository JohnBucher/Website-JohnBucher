import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, fakeAsync, ComponentFixture } from '@angular/core/testing';
import { SkillsComponent } from './skills.component';

describe('HomeComponent', () => {
    let fixture: ComponentFixture<SkillsComponent>;
    let component: SkillsComponent;

    beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
    imports: [SkillsComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
}).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SkillsComponent);
        component = fixture.debugElement.componentInstance;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });
});
