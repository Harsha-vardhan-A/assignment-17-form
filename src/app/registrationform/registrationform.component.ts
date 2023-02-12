// import { Component } from '@angular/core';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatastoringserviceService } from '../datastoringservice.service'
@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent {
  childdata: string = ""  //storing child data
  title = 'forms';
  allComp :number[]=[1]
  allData :string[]=[]
  allAdditionaldata: string[]=[];
  increament:number=1;
  constructor(private emitdata: DatastoringserviceService, private route: ActivatedRoute, private router: Router) {

  }
  // ngOnInit(): void {
  // adding validations
  registration = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(250),
      Validators.pattern("^[a-zA-Z]+")
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.maxLength(256),
      Validators.minLength(3),
      Validators.pattern("[a-zA-Z ]+")
    ]),
    age: new FormControl('', [
      Validators.required,
      Validators.max(999),
      Validators.min(1),
      // Validators.pattern("^[0-9]+")
    ]),
    dateofbirth:new FormControl('',[
      Validators.required
    ]),
    username: new FormControl('', [
      Validators.required,
      Validators.maxLength(256),
      Validators.minLength(3),
      Validators.pattern("^[a-zA-Z]+[a-zA-Z0-9.-_@$]+")
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.maxLength(256),
      Validators.minLength(10),
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
    ]),
    phonenumber: new FormControl('', [
      Validators.required,
      Validators.max(9999999999),
      Validators.min(1000000000),
      Validators.pattern("^[0-9]+")
    ]),
    additionaldata: new FormControl('', [
      // Validators.required,

      Validators.pattern("^[a-zA-Z][a-zA-Z0-9@#$%^&*(){} ]+$")
    ])
  });
  // }


  // getting all form details

  get firstname() {
    // console.log(this.registrationform.get('firstname'))
    return this.registration.get('firstname');
  }
  get lastname() {
    return this.registration.get('lastname');
  }
  get age() {
    return this.registration.get('age');
  }
  get dateofbirth(){
    return this.registration.get('dateofbirth');
  }
  get username() {
    return this.registration.get('username');
  }
  get email() {
    return this.registration.get('email');
  }
  get phonenumber() {
    return this.registration.get('phonenumber');
  }
  get additionaldata() {
    return this.registration.get('additionaldata');
  }
  additionalData(event:any,index:number)
  {
    this.allAdditionaldata[index]=<string>this.registration.controls['additionaldata'].value;
    
  }
  //getting data from child
  onData(event: string, index:number) {
    this.childdata = event;
    console.log(this.allData);
    this.allData[index]=event;
  }
  // adding to the data
  onSubmit() {
    let uniId=this.getUniqueId()
    let returnObj :object = { id:uniId,
      firstname: this.registration.controls['firstname'].value, lastname: this.registration.controls['lastname'].value,
      age: this.registration.controls['age'].value,dateofbirth:this.registration.controls['dateofbirth'].value, username: this.registration.controls['username'].value, email: this.registration.controls['email'].value,
      phonenumber: this.registration.controls['phonenumber'].value, additionaldata: this.allAdditionaldata, additionaldataInfo: this.allData
    }

    if (this.registration.valid) {
      this.emitdata.addData(returnObj , uniId)
      this.router.navigate(['display'], { relativeTo: this.route });
    }
  }
  // activate:boolean=false
  // text:string=''
  activateInput(event:any)
  {
   this.increament++;
   this.allComp.push(this.increament);
   console.log(this.allComp)
  //  this.registration.controls['additionaldata'].setValue('')
  }
  //creating unique id
  getUniqueId(): string {
    const stringArr = [];
    for(let i = 0; i< 10; i++){
      // tslint:disable-next-line:no-bitwise
      const getUnique = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      stringArr.push(getUnique);
    }
    return stringArr.join('-');
  }
}
