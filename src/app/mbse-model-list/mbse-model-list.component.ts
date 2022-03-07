import { Component, OnInit } from '@angular/core';
import { MyTestService } from '../my-test.service';

@Component({
  selector: 'app-mbse-model-list',
  templateUrl: './mbse-model-list.component.html',
  styleUrls: ['./mbse-model-list.component.css']
})
export class MbseModelListComponent implements OnInit {

  org : string = "";
  username: string = "";
  constructor(private ts : MyTestService) { 
    this.org= ts.getInfo();
    this.username= ts.getUser();
  }
  ngOnInit(): void {
  }

}
