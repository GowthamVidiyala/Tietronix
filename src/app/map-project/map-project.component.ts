import { Component, OnInit } from '@angular/core';
import { MyTestService } from '../my-test.service';

@Component({
  selector: 'app-map-project',
  templateUrl: './map-project.component.html',
  styleUrls: ['./map-project.component.css']
})
export class MapProjectComponent implements OnInit {

  org : string = "";
  username: string = "";
  constructor(private ts : MyTestService) { 
    this.org= ts.getInfo();
    this.username= ts.getUser();
  }

  ngOnInit(): void {
  }

}
