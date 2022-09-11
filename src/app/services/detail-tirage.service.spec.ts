import { TestBed } from '@angular/core/testing';

import { DetailTirageService } from './detail-tirage.service';

describe('DetailTirageService', () => {
  let service: DetailTirageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailTirageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
