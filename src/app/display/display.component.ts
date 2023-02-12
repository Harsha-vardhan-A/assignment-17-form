import { Component } from '@angular/core';
import { DatastoringserviceService } from '../datastoringservice.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  getdetails:any[]=[];
  message: any;
  activate:boolean=false
  text:string=''
  gdata:any = [];
  //subscribing the data
  constructor(public data:DatastoringserviceService){
    this.message=this.data.getUsers();
    console.log(data.storealldata);
    this.data.getUsers().subscribe(res => {
      this.gdata = res;
      console.log("response "+this.gdata);
    });
  }
}
