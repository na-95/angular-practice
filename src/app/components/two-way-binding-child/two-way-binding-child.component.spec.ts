import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBindingChildComponent } from './two-way-binding-child.component';

describe('TwoWayBindingChildComponent', () => {
  let component: TwoWayBindingChildComponent;
  let fixture: ComponentFixture<TwoWayBindingChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayBindingChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayBindingChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
