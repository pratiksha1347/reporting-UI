import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-agreement-create-form',
  templateUrl: './agreement-create-form.component.html',
  styleUrls: ['./agreement-create-form.component.css']
})
export class AgreementCreateFormComponent {

  constructor(private router: Router) { }

  myForm: NgForm | undefined;

  customerId: string = '';
  startDate: Date = new Date();
  expiryDate: Date = new Date();
  amount: number | null = null;
  autoReview: boolean = false;

  onSubmit(form: NgForm) {
    alert('Agreement Created Successfully!');
  }

  // Back button

  onHomeClick(){
    this.router.navigate(['']);
  }
}
