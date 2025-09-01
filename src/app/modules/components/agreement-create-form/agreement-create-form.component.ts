import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-agreement-create-form',
  templateUrl: './agreement-create-form.component.html',
  styleUrls: ['./agreement-create-form.component.css']
})
export class AgreementCreateFormComponent {

  constructor(private router: Router) { }
  onHomeClick(){
    this.router.navigate(['']);
  }
}
