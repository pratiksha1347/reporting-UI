import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./modules/components/header/header.component";
import {FooterComponent} from "./modules/components/footer/footer.component";
import {HcmNgModule} from "hcm-angular";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HcmNgModule
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
