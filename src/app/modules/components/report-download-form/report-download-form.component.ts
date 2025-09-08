import {AfterViewInit, ChangeDetectorRef, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-report-download-form',
  templateUrl: './report-download-form.component.html',
  styleUrls: ['./report-download-form.component.css']
})
export class ReportDownloadFormComponent implements AfterViewInit{

  constructor(private cd: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  form: FormGroup = new FormGroup({
    customer: new FormControl(null,[Validators.required]),
    fromDate: new FormControl(null,[Validators.required]),
    toDate: new FormControl(null,[Validators.required])
  });

  get customerControl(): FormControl {
    return this.form.get('customer') as FormControl;
  }

  getFromDate(event:any){
    this.form.get('fromDate')?.setValue(new Date(event));
  }

  getToDate(event:any){
    this.form.get('toDate')?.setValue(new Date(event));
  }

  onSubmit() {

    if(this.form.invalid){
      alert('Please fill all the required fields!');
      return;
    }
    alert('UREKA!!!!!!!! Report Downloaded Successfully!');
    console.log(this.form.value);
  }

}
