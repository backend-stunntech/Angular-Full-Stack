import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 
 username:String;
 password:String;
  constructor() { }

  ngOnInit() {
  }
  Signin(username,password){

    this.username=username;
    this.password=password;
    if(username == "admin" && password == "123"){
      window.location.href = ('generate-report');
    }
    else
    {
      window.location.href = ('home');
    }
    
  
  }


}
