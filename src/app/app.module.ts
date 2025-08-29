import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./modules/components/header/header.component";
import {FooterComponent} from "./modules/components/footer/footer.component";
import {HcmNgModule} from "hcm-angular";
import { AgreementViewComponent } from './modules/components/agreement-view/agreement-view.component';
import { ReportDownloadFormComponent } from './modules/components/report-download-form/report-download-form.component';
import { AgreementCreateFormComponent } from './modules/components/agreement-create-form/agreement-create-form.component';
import {RouterOutlet} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AgreementViewComponent,
    ReportDownloadFormComponent,
    AgreementCreateFormComponent
  ],
  imports: [
    BrowserModule,
    HcmNgModule,
    RouterOutlet
  ],
  providers: [
    {
      provide: 'theme',
      useValue: 'hcm-blue-theme',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
