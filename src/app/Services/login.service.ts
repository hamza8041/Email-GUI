import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseurl:string="http://localhost:8080";


  constructor(private http:HttpClient) { }


  dologin(data:any)
  {
    const header=new HttpHeaders({'Content-type':'application/json'})
    //token generate

    this.http.post(`${this.baseurl}/token`,data,{headers:header}).subscribe((response:any)=>

      {
console.log(response.token);
this.loginuser(response.token);
window.location.href="/dashboard";

      }
      ,
      err=>
      {
        console.log(err);

      }
      )
  }

  //login

  loginuser(token: string)
  {
    localStorage.setItem("token",token);
    return true;

  }

  isloggedin()
  {
   let token= localStorage.getItem("token");
   if(token==undefined||token==''||token==null)
   {
    return false;
   }

   else
   {
    return true;
   }

  }

  logout()
  {
    localStorage.removeItem('token');
    return true;
  }


  //get token

  gettoken()
  {
    return localStorage.getItem('token');
  }
}
