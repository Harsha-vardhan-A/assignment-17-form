import { Component } from '@angular/core';
import { EventEmitter, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  msg:string ='';
  activate:boolean=false
  text:string=''
  addcomment:string='anc';  //passing comment to html for error display
  @Output() data=new EventEmitter();
  //all options
  alltypes: string[] = ['Number','Text','Boolean','Hex code','Binary']
  //validation
  child = new FormGroup({
    inputtype: new FormControl('',[Validators.required]),
    selecttype: new FormControl(this.alltypes[0], [Validators.required]
  )});
  
  storetype:string='';
  //initialization
  ngOnInit(): void {
    this.child.controls['selecttype'].setValue(this.alltypes[0]);
    this.child.controls['inputtype'].setValidators([Validators.pattern("^[0-9]+")])
    this.addcomment="Number";
  }
  //getting the properties
  get selecttype()
  {
    return this.child.get('selecttype')
  }
  get inputtype()
  {
    return this.child.get('inputtype');
  }
  //changing the type of option
  changeType(e:any) {
    this.child.controls['selecttype'].setValue(e.target.value)
    // console.log(this.selecttype.value);
    this.changeInput();
  }
  //changing input field type and adding validators
  changeInput()
  {
    
    this.child.controls['inputtype'].setValue("");
    this.inputData();
    this.msg=<string>this.child.controls['selecttype'].value
    if(this.msg?.length > 2)
    {
      this.msg=this.msg.slice(3)
      // console.log(this.msg)
    }
    
    
    if(this.msg===this.alltypes[0])
    {
      
      this.child.controls['inputtype'].setValidators([Validators.pattern("^[-.]*[0-9]+")])
      this.addcomment="Number";
    }
    else if(this.msg===this.alltypes[1])
    {
      this.child.controls['inputtype'].setValidators([Validators.pattern("^[a-zA-Z0-9@!?',. ]+")])
      this.addcomment="text";
    }
    else if(this.msg===this.alltypes[2])
    {
      this.child.controls['inputtype'].setValidators([Validators.pattern("^(true|false|True|False|TRUE|FALSE)")])
      this.addcomment="boolean";
    }
    else if(this.msg===this.alltypes[3])
    {
      this.child.controls['inputtype'].setValidators([Validators.pattern("^[#][0-9a-f]*$")])
      this.addcomment="hex code";
    }
    else if(this.msg===this.alltypes[4])
    {
      this.child.controls['inputtype'].setValidators([Validators.pattern("^[01]*$")])
      this.addcomment="binary";
    }
  }
  //emiting the input data to parent
  inputData(){
    this.data.emit(this.child.controls['inputtype'].value);
    
  }
  
  activateInput(event:any)
  {
   this.activate = event.isTrusted;
  }
  addData()
  {
    // this.getdetails[0].additionaldataInfo=this.getdetails[0].additionaldataInfo+this.text;
    this.text='';
    this.activate=false
  }
  getInput(event:any)
  {
    // console.log(event.target.value)
    this.text=event.target.value;
    
  }
}
