import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReportFormComponent } from './modules/report-form/report-form.component';
import { AgreementFormComponent } from './modules/agreement-form/agreement-form.component';
import { AgreementViewComponent } from './modules/agreement-view/agreement-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportFormComponent,
    AgreementFormComponent,
    AgreementViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
