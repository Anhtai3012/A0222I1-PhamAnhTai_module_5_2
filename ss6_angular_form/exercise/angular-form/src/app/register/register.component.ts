import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import validate = WebAssembly.validate;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  registerForm: FormGroup

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstname: new FormControl('',[
        Validators.minLength(2),
        Validators.maxLength(10)
      ]),
      lastname: new FormControl('',[
        Validators.minLength(2),
        Validators.maxLength(10),
        Validators.required
      ]),
      age: new FormControl('',[
        Validators.min(18),
        Validators.max(100),
        Validators.required
      ]),
      email: new FormControl("",[
        Validators.email,
        Validators.minLength(8),
        Validators.required
      ]),
      address: new FormControl("",[
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.required
      ]),
      phone: new FormControl('',[
        Validators.minLength(10),
        Validators.maxLength(12),
        Validators.required
      ]),
      gender: new FormControl('',[]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
      ]),
      repeatpassword: new FormControl('')
    });
  }

  repeatPass:String = 'none';
  defaultGender = '';

  gender = [
    {id: '1', value: 'Male'},
    {id: '2', value: 'Female'},
    {id: '3', value: 'Other'}
  ]



 get Firstname(){
   return this.registerForm.get("firstname")
 }
  get LastName(){
    return this.registerForm.get("lastname")
  }
  get Age(){
    return this.registerForm.get("age")
  }
  get Email(){
    return this.registerForm.get("email")
  }
  get Address(){
    return this.registerForm.get("address")
  }
  get Phone(){
    return this.registerForm.get("phone")
  }
  get Gender(){
    return this.registerForm.get("gender")
  }
  get Password(){
    return this.registerForm.get("password");
  }

  get RepeatPassword(){
    return this.registerForm.get("repeatpassword")
  }

  registerSubmit() {
   if (this.registerForm.valid){
     if (this.Password.value === this.RepeatPassword.value){
       console.log('submit')
       console.log(this.registerForm)
     }else {
       this.repeatPass='inline'
     }
   }

  }
}
