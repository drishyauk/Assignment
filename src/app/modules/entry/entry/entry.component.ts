import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  submitted: boolean = false;
  registrationForm= new FormGroup({
    email:new FormControl( '', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])
  });
  constructor(public fb: FormBuilder, private router: Router) { 
    }

    

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    this.router.navigate(['/dashboard/dashboard-page'], { queryParams: { mailID: this.registrationForm.value.email } });
    if(!this.registrationForm.valid) {
      alert('Please fill all the required fields to create a super hero!')
      return false;
    } else {
      console.log(this.registrationForm.value);
      return true;
    }
  }

}
