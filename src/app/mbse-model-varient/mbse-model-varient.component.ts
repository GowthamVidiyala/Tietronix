import { Component, OnInit } from '@angular/core';
import { MyTestService } from '../my-test.service';

@Component({
  selector: 'app-mbse-model-varient',
  templateUrl: './mbse-model-varient.component.html',
  styleUrls: ['./mbse-model-varient.component.css']
})
export class MbseModelVarientComponent implements OnInit {

  org : string = "";
  username: string = "";
  constructor(private ts : MyTestService) { 
    this.org= ts.getInfo();
    this.username= ts.getUser();
  }
  ngOnInit(): void {
  }

}
