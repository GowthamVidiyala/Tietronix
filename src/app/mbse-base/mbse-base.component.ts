import { Component, OnInit } from '@angular/core';
import { MyTestService } from '../my-test.service';

@Component({
  selector: 'app-mbse-base',
  templateUrl: './mbse-base.component.html',
  styleUrls: ['./mbse-base.component.css']
})
export class MbseBaseComponent implements OnInit {

  org : string = "";
  username: string = "";
  constructor(private ts : MyTestService) { 
    this.org= ts.getInfo();
    this.username= ts.getUser();
  }
  ngOnInit(): void {
  }

}
