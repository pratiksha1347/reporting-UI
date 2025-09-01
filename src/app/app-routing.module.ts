import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AgreementViewTabComponent} from "./modules/components/agreement-view-tab/agreement-view-tab.component";
import {AgreementCreateFormComponent} from "./modules/components/agreement-create-form/agreement-create-form.component";
import {ReportDownloadFormComponent} from "./modules/components/report-download-form/report-download-form.component";

const routes: Routes = [
  {path:'',component: AgreementViewTabComponent, pathMatch: 'full'},
  {path:'create-agreement-form', component: AgreementCreateFormComponent,pathMatch: 'full'},
  {path:'create-report-form',component:ReportDownloadFormComponent,pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
