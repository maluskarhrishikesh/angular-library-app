import { TestBed } from '@angular/core/testing';

import { LibraryServiceService } from './library-service.service';

describe('LibraryServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibraryServiceService = TestBed.get(LibraryServiceService);
    expect(service).toBeTruthy();
  });
});
