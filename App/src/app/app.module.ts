import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentDetailsComponent } from './component/component-details/component-details.component';
import { ComponentListComponent } from './component/component-list/component-list.component';

import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ComponentDetailsComponent,
    ComponentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
