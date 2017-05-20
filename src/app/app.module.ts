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
import {MomentModule} from 'angular2-moment';

import { AppComponent } from './app.component';
import { StubService } from './stub.service';
import { FiltersComponent } from './filters/filters.component';
import { FilteredListPipe } from './filtered-list.pipe';
import { FilterControlsService } from './filter-controls.service';
import { FilterChipsPipe } from './filter-chips.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    FilteredListPipe,
    FilterChipsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxDatatableModule,
    FlexLayoutModule,
    NgPipesModule,
    MomentModule
  ],
  providers: [StubService, FilterControlsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
