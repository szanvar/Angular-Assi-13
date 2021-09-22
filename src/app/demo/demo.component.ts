import { Component, OnInit } from '@angular/core';
import { ValidationService } from '../validation.service';
import {FormBuilder,FormGroup,Validators, FormControl} from '@angular/forms'

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  userForm: any;

  constructor(private formBuilder: FormBuilder) 
  {

    this.userForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lname : ['', Validators.required],
      email: ['', [Validators.required, ValidationService.emailValidator]],
      phone : ['', [Validators.required, ValidationService.phoneValidator]],
      addr : ['',[Validators.required, Validators.minLength(8), Validators.maxLength(40)]]
      
    });

    // console.log(this.userForm);
  }

  saveUser() 
  {
    if (this.userForm.dirty && this.userForm.valid) 
    {
      alert(`Name: ${this.userForm.value.fname} 
            Email: ${this.userForm.value.email} 
            Phone : ${this.userForm.value.phone}`);
    }
  }

  ngOnInit(): void {
  }

}
