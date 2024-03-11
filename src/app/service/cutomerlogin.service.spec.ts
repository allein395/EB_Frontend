import { TestBed } from '@angular/core/testing';

import { CutomerloginService } from './cutomerlogin.service';

describe('CutomerloginService', () => {
  let service: CutomerloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CutomerloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
