import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './person/person.component';
import {SpiderComponent} from './spider/spider.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {SpiderDetailComponent } from "./spider-detail/spider-detail.component";

const routes: Routes = [
  { path: 'people', component: PersonComponent},
  { path: 'spiders', component: SpiderComponent },
  { path: '', redirectTo: '/spiders', pathMatch: 'full'},
  // Hey Angular gurus, why doesn't this PageNotFoundComponent work when I have 'spiderdetail/:id' configured?
  //{ path: '**', component: PageNotFoundComponent}, // this no longer works
  { path: 'spiderdetail/:id', component: SpiderDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }