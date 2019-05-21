import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectionAnalysisComponent } from './detection-analysis.component';

describe('DetectionAnalysisComponent', () => {
  let component: DetectionAnalysisComponent;
  let fixture: ComponentFixture<DetectionAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectionAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectionAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
