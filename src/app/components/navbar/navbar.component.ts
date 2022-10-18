import { LoginService } from './../../Services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn=false;

  constructor(private lgservice:LoginService) { }

  ngOnInit(): void {

    this.loggedIn=this.lgservice.isloggedin();
  }


  logout()
  {
    this.lgservice.logout();
    location.reload();
  }
}
