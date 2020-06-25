import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector:`app-servers`,
  templateUrl: './servers.component.html',
  //eiher we can have template url or we can have template in which we will write the html file
  // template:`
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  addServer:boolean=true;
  didServerCreated:string="Server is not created";
  serverName='TESTsERVER';
  ifServerCreated:boolean=false;
  servers=['TestServer1','TestServer2']


  constructor() {
    setTimeout(()=>{
      this.addServer=false;
    },2000)
  }


  serverCreated(){
    this.ifServerCreated=true;
    this.servers.push(this.serverName);
    this.didServerCreated="server got created and the server name is "+ this.serverName;
  }





  ngOnInit(): void {
  }

  onserverCreated(event: Event){
    this.serverName=(<HTMLInputElement>event.target).value

  }
}
