import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BearingPlotComponent } from './bearing-plot.component';

describe('BearingPlotComponent', () => {
  let component: BearingPlotComponent;
  let fixture: ComponentFixture<BearingPlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BearingPlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BearingPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
