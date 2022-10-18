import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private baseurl:string="http://localhost:8080"

  constructor(private http:HttpClient,private snack:MatSnackBar) { }


  sendemail(data: any)
  {
    const header=new HttpHeaders({'Content-type':'application/json'})
    console.log("try to submit form");









this.http.post(`${this.baseurl}/send`,data,{headers:header}).subscribe(response=>
  {
    this.snack.open("Email Sent successfully","cancel");
  }
  ,
  err=>
  {
    console.log(err);

  }
  )
;
  }
}
