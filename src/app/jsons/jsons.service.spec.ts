import { TestBed, inject } from '@angular/core/testing';

import { JsonsService } from './jsons.service';

describe('JsonsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonsService]
    });
  });

  it('should be created', inject([JsonsService], (service: JsonsService) => {
    expect(service).toBeTruthy();
  }));
});
