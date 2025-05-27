import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MemberListComponent } from './components/member-list/member-list.component';
import { MemberFormComponent } from './components/member-form/member-form.component';
import { DxButtonModule, DxFormModule } from 'devextreme-angular';

@NgModule({
  declarations: [AppComponent, MemberListComponent, MemberFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DxFormModule,
    DxButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
