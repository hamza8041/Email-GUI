import { LoginService } from './../../Services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials={
    userName:"",
    password:""
  }


  token:any;
  constructor(private lgservice:LoginService) { }

  ngOnInit(): void {
  }

  onsubmit()
  {

    if(this.credentials.userName!="" && this.credentials.password!="")

    {

      this.lgservice.dologin(this.credentials);




    }

    else
    {
      console.log("Fields are empty");
    }
  }
}
