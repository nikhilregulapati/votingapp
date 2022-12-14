import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators} from '@angular/forms';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   form: FormGroup;

  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
      email: ['nikhil@n.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required, Validators.minLength(6)]]   
    })
   }

  ngOnInit(): void {
  }
  
  login(){
    console.log(this.form.value);
  }
}
