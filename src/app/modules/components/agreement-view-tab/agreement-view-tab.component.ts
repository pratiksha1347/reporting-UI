import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-agreement-view-tab',
  templateUrl: './agreement-view-tab.component.html',
  styleUrls: ['./agreement-view-tab.component.css']
})
export class AgreementViewTabComponent {
  agreementLabel: string = 'Create Agreement';
  reportLabel: string = 'Create Report';

  constructor(private router: Router) {
  }

  onAgreementClick() {
    this.router.navigate(['/create-agreement-form']).then(succes => {
      if (succes) {
        console.log('Navigation to create an agreement was successful!');
      } else {
        console.log('Navigation to create an agreement failed!');
      }
    });
  }

  onReportClick() {
    this.router.navigate(['/create-report-form']).then(succes => {
      if (succes) {
        console.log('Navigation to create a report was successful!');
      } else {
        console.log('Navigation to create a report failed!');
      }
    });
  }
}
