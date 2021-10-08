import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { SpiderComponent } from './spider/spider.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SpiderDetailComponent } from "./spider-detail/spider-detail.component";

const routes: Routes = [
  { path: 'people', component: PersonComponent},
  { path: 'spiders', component: SpiderComponent },
  { path: '', redirectTo: '/spiders', pathMatch: 'full'},
  { path: 'spiderdetail/:id', component: SpiderDetailComponent },
  { path: '**', component: PageNotFoundComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }