import {AfterViewInit, ChangeDetectorRef, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-agreement-create-form',
  templateUrl: './agreement-create-form.component.html',
  styleUrls: ['./agreement-create-form.component.css']
})
export class AgreementCreateFormComponent implements AfterViewInit{

  constructor(private cd: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  form: FormGroup = new FormGroup({
    customerId: new FormControl(null, [Validators.required]),
    startDate: new FormControl(null, [Validators.required]),
    expiryDate: new FormControl(null, [Validators.required]),
    amount: new FormControl(null, [Validators.required, Validators.min(1)]),
  });

  get customerIdControl(): FormControl {
    return this.form.get('customerId') as FormControl;
  }

  get amountControl(): FormControl {
    return this.form.get('amount') as FormControl;
  }

  selectedStartDate(event: any) {
    this.form.get('startDate')?.setValue(new Date(event));
  }

  selectedExpiryDate(event: any) {
    this.form.get('expiryDate')?.setValue(new Date(event));
  }


  onSubmit() {
    if(this.form.valid){
      alert('Agreement Created Successfully!');
      console.log(this.form.value);
    }
    else{
      alert('Please fill all required fields!');
    }
  }
}
