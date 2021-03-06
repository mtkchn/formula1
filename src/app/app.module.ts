import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CircuitsComponent } from './circuits/circuits.component';
import {ButtonModule} from 'primeng/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomHttpInterceptorService } from './HttpInterceptor';
import { CarouselModule } from 'primeng/carousel';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import {DataViewModule} from 'primeng/dataview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
@NgModule({
  declarations: [
    AppComponent,
    CircuitsComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    CarouselModule,
    DropdownModule,
    TableModule,
    DataViewModule,
    CardModule
    
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
