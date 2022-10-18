import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";



@Injectable()
export class authInterceptor implements HttpInterceptor
{

  constructor(private lgservice:LoginService)
  {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let newreq=req;
    let token=this.lgservice.gettoken();

    console.log("Interceptor token" ,token);

    if(token!=null)
    {
      newreq=newreq.clone({setHeaders:{Authorization:`Bearer ${token}`}})
    }

    return next.handle(newreq);


  }
}
