import { TestBed } from '@angular/core/testing';

import { GlobalCacheInterceptor } from './global-cache.interceptor';

describe('GlobalCacheInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      GlobalCacheInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: GlobalCacheInterceptor = TestBed.inject(GlobalCacheInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
