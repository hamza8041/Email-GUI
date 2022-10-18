import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from 'src/app/Services/email.service';
import { ReactiveFormsModule,FormControl,Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emailform',
  templateUrl: './emailform.component.html',
  styleUrls: ['./emailform.component.css']
})
export class EmailformComponent implements OnInit {

emailform:any;

  data=
  {
    to:"",
    subj:"",
    message:""
  }

  constructor(private email:EmailService,private snack:MatSnackBar) { }

  ngOnInit(): void {


    this.emailform=new FormGroup(

{
  'to':new FormControl("",[Validators.required,Validators.email]),
  'subj':new FormControl("",[Validators.maxLength(50),Validators.required]),
  'message':new FormControl("",[Validators.maxLength(100),Validators.required])

}

    );



  }

  dosubmit()
  {
this.email.sendemail(this.data);


  }


}
