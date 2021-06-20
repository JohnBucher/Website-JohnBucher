import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, fakeAsync, ComponentFixture } from '@angular/core/testing';
import { SkillGroupComponent } from './skill-group.component';

describe('HomeComponent', () => {
    let fixture: ComponentFixture<SkillGroupComponent>;
    let component: SkillGroupComponent;

    beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
            declarations: [
                SkillGroupComponent
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SkillGroupComponent);
        component = fixture.debugElement.componentInstance;

        component.skillGroupData = {icon: 'test', name: 'test', skills: ['test1', 'test2', 'test3']};
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should return correct skillsString', () => {
        expect(component.skillsString).toEqual('test1, test2, test3');
    });
});
