import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector:`app-servers`,
  //templateUrl: './servers.component.html',
  //eiher we can have template url or we can have template in which we will write the html file
  template:`
    <app-server></app-server>
    <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
