import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   }
   registerForm =  new FormGroup({
   Username:new FormControl(""),
   email:new FormControl(""),
   contact:new FormControl(""),
   gender:new FormControl(""),
 });
   registerSubmited(){
     console.log(this.registerForm);
   }
}
