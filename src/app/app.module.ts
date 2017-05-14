import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import 'hammerjs';

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AngularFireModule } from 'angularfire2';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgPipesModule } from 'ngx-pipes';

import { AppComponent } from './app.component';
import { StubService } from './stub.service';
import { FiltersComponent, GetOptionsPipe } from './filters/filters.component';

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    GetOptionsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxDatatableModule,
    FlexLayoutModule
  ],
  providers: [StubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
