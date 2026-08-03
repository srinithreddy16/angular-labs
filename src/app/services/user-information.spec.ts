import { TestBed } from '@angular/core/testing';

import { UserInformation } from './user-information';

describe('UserInformation', () => {
  let service: UserInformation;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserInformation);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
