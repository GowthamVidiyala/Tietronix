import { Component, OnInit } from '@angular/core';
import { MyTestService } from '../my-test.service';

@Component({
  selector: 'app-mbse-model',
  templateUrl: './mbse-model.component.html',
  styleUrls: ['./mbse-model.component.css']
})
export class MbseModelComponent implements OnInit {

  org : string = "";
  username: string = "";
  constructor(private ts : MyTestService) { 
    this.org= ts.getInfo();
    this.username= ts.getUser();
  }
  ngOnInit(): void {
  }

}
