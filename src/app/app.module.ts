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
    ButtonModule,
    CarouselModule,
    DropdownModule,
    
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
