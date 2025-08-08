import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, fakeAsync, ComponentFixture } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimelineComponent } from './timeline.component';

describe('HomeComponent', () => {
    let fixture: ComponentFixture<TimelineComponent>;
    let component: TimelineComponent;

    beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
    imports: [
        BrowserAnimationsModule,
        TimelineComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
}).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TimelineComponent);
        component = fixture.debugElement.componentInstance;

        component.timelineData = [{name: 'testName', dates: '2000 - 2010', image: 'testImage',
            positions:[{title: 'testPosition', dates: '2000 - 2010', descriptors:[], showDescriptors: true}]}];
        component.descriptorLabel = 'Test';
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should call toggleVisibility()', () => {
        component.toggleVisibility(component.timelineData[0].positions[0]);
        expect(component.timelineData[0].positions[0].showDescriptors).toBeFalsy();
    });

    it('should call getDescriptorButtonText()', () => {
        expect(component.getDescriptorButtonText(component.timelineData[0].positions[0])).toEqual(`Hide ${component.descriptorLabel}`);
        component.timelineData[0].positions[0].showDescriptors = false;
        expect(component.getDescriptorButtonText(component.timelineData[0].positions[0])).toEqual(`View ${component.descriptorLabel}`);
    });
});
