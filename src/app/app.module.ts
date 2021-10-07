import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { SpiderComponent } from './spider/spider.component';
import { HttpClientModule } from '@angular/common/http';
import {PersonService} from './person/person.service';
import {SpiderService} from './spider/spider.service';
import { TabulatorService } from './shared/tabulator.service';
import { ApiService } from './shared/api.service';
import { IconService } from './shared/icon.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SpiderDetailComponent } from './spider-detail/spider-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    SpiderComponent,
    PageNotFoundComponent,
    SpiderDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // Allows dependency-injection of these objects.
  providers: [PersonService, SpiderService, TabulatorService, ApiService, IconService],
  bootstrap: [AppComponent]
})
export class AppModule { }
