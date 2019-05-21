import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarlyPgmComponent } from './early-pgm.component';

describe('EarlyPgmComponent', () => {
  let component: EarlyPgmComponent;
  let fixture: ComponentFixture<EarlyPgmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarlyPgmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarlyPgmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
