import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formdetails } from './formdetails';

// import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DatastoringserviceService {
  storealldata:object[]=[];
  // obserObj = new Observable<any>
  emitter: EventEmitter<any> = new EventEmitter();
  url = 'http://localhost:3000/profile';
  data: any;
  unid:string='';
 constructor(private http: HttpClient) { }
 addData(data:object,uid:string)
 {
  this.unid=uid
  this.storealldata.push(data)
  return this.http.post(this.url,data).subscribe(data=>{
    // console.log(data);
  });
 }
 getUsers(): Observable<any>{
   return this.http.get<any>(this.url+"/"+this.unid);
 }
}
