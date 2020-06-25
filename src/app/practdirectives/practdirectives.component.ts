import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practdirectives',
  templateUrl: './practdirectives.component.html',
  styleUrls: ['./practdirectives.component.css']
})
export class PractdirectivesComponent implements OnInit {
  showSectrate:boolean = false;
  log=[];

  constructor() { }

  ngOnInit(): void {
  }

  toggelDisplay() {
    this.showSectrate = !this.showSectrate;
    this.log.push(new Date());;
  }
}
