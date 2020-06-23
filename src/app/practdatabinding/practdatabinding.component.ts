import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practdatabinding',
  templateUrl: './practdatabinding.component.html',
  styleUrls: ['./practdatabinding.component.css']
})
export class PractdatabindingComponent implements OnInit {
  userName=""
  isEmpty:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

  resetUserName() {
    this.isEmpty=true;
    this.userName='';
  }

}
