import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./modules/components/header/header.component";
import {FooterComponent} from "./modules/components/footer/footer.component";
import {HcmNgModule} from "hcm-angular";
import { ReportDownloadFormComponent } from './modules/components/report-download-form/report-download-form.component';
import { AgreementCreateFormComponent } from './modules/components/agreement-create-form/agreement-create-form.component';
import {RouterOutlet} from "@angular/router";
import { AgreementViewTabComponent } from './modules/components/agreement-view-tab/agreement-view-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ReportDownloadFormComponent,
    AgreementCreateFormComponent,
    AgreementViewTabComponent
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
