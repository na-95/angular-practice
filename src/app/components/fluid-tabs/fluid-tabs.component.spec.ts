import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluidTabsComponent } from './fluid-tabs.component';

describe('FluidTabsComponent', () => {
  let component: FluidTabsComponent;
  let fixture: ComponentFixture<FluidTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluidTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FluidTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
