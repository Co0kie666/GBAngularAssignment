import { TestBed } from '@angular/core/testing';

import { CatImagesService } from './cat-images.service';

describe('CatImagesService', () => {
  let service: CatImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
