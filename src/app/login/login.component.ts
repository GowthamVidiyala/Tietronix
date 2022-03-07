import { Component, OnInit } from '@angular/core';
import { MyTestService } from '../my-test.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string = "Username";
  selected : string = 'option2';

  constructor(private userService:MyTestService) { 
  }

  orgranization = ["UHCL","NASA","Tietronix"];

  ngOnInit(): void {
  }  

 onLoginSubmit(){
  console.log("==?"+this.selected);
  this.userService.setInfo(this.selected,this.username);
 }
}
