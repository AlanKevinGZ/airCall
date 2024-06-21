import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isTokenPanelGuard } from './is-token-panel.guard';

describe('isTokenPanelGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isTokenPanelGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
