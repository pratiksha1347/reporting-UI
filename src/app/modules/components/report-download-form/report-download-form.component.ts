import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-report-download-form',
  templateUrl: './report-download-form.component.html',
  styleUrls: ['./report-download-form.component.css']
})
export class ReportDownloadFormComponent {
constructor(private router: Router) { }
  onHomeClick(){
    this.router.navigate(['']);
  }

}

