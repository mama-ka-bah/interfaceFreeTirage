import { TestBed } from '@angular/core/testing';

import { DetailListeService } from './detail-liste.service';

describe('DetailListeService', () => {
  let service: DetailListeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailListeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
