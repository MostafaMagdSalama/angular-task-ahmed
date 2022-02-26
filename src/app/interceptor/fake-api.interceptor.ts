import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable()
export class FakeApiInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {

      if(req.method=="POST"  && req.url=="http://localhost:4200/login")
      {
        console.log(req.body)
        if(req.body.email=="mostafa.magdy621@gmail.com"&& req.body.password=='mostafa')
        {
          console.log('authenticated')
          return of(new HttpResponse({
            status:200 , 
            body:{
              success:true,
              data:{id:1, name:'mostafa', email:'mostafa@gmail.com',role:'softwareE'},
              token:
                                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYW1lIjoiQWhtZWQiLCJlbWFpbCI6ImFAYS5jb20ifQ.2RxoWmDADR8sLfW6CGRcthcuXDk5jQCqxx7kx8rLzjA'
              ,}
            
          }))
        }
        else {
          return of (new HttpResponse({
            status:401,
            body:{
              success:false,
              data:{error:'rmailor password is not correct '}
            }
          }))
        }
      } 
        return next.handle(req);
    }
    
}