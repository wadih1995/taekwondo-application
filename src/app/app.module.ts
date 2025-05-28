import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MemberListComponent } from './components/member-list/member-list.component';
import { MemberFormComponent } from './components/member-form/member-form.component';
import {
  DxButtonModule,
  DxFormModule,
  DxNumberBoxModule,
  DxTextBoxModule,
  DxValidationGroupModule,
  DxValidatorModule,
  DxDataGridModule,
  DxPopupModule,
} from 'devextreme-angular';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberListComponent,
    MemberFormComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    DxFormModule,
    DxTextBoxModule,
    DxValidatorModule,
    DxNumberBoxModule,
    DxButtonModule,
    DxDataGridModule,
    DxValidationGroupModule,
    DxPopupModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
