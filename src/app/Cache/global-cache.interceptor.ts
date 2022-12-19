import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

@Injectable()
export class GlobalCacheInterceptor implements HttpInterceptor {

  cacheMap = new Map<string, HttpResponse<any>>();

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(!this.isRequestCachable(request)){
       return next.handle(request);
    }
    else{
      const url = request.url.toLowerCase()
      if(this.cacheMap.has(url)){
        return of(this.cacheMap.get(url) as HttpResponse<any>)
      }

      else{
        return next.handle(request).pipe(
          tap(event=>{
            if(event instanceof HttpResponse){
              this.cacheMap.set(url,event)
            }
          })
        )
      }
    }

   
  }

  isRequestCachable(req: HttpRequest<any>): boolean{
    if(req.method === 'GET'){
      const uris =  ['/getAllCustomers', '/getAllBalance']
      for (let i = 0; i < uris.length; i++) {
        if(req.url.toLowerCase().includes(uris[i].toLowerCase()))
          return true;
        
      }

    }

    return false
  }


}
