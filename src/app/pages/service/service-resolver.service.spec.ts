import { TestBed, inject } from '@angular/core/testing';

import { ServiceResolverComponent } from './service-resolver.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('ServiceResolverComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [ServiceResolverComponent]
    });
  });

  it('should be created', inject([ServiceResolverComponent], (service: ServiceResolverComponent) => {
    expect(service).toBeTruthy();
  }));
});
