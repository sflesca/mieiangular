/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClientiServiceRestService } from './ClientiServiceRest.service';

describe('Service: ClientiServiceRest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientiServiceRestService]
    });
  });

  it('should ...', inject([ClientiServiceRestService], (service: ClientiServiceRestService) => {
    expect(service).toBeTruthy();
  }));
});
