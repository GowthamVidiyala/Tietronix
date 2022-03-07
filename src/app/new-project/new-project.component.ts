import { Component, OnInit } from '@angular/core';
import { MyTestService } from '../my-test.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  org : string = "";
  username: string = "";
  constructor(private ts : MyTestService) { 
    this.org= ts.getInfo();
    this.username= ts.getUser();
  }
  ngOnInit(): void {
  }

}
