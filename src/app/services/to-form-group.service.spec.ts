import { TestBed } from '@angular/core/testing';

import { ToFormGroupService } from './to-form-group.service';

describe('ToFormGroupService', () => {
  let service: ToFormGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToFormGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
