import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';

const routes: Routes = [
  {path:'',component:TopheadingComponent},  //home
  {path:'tech',component:TechnewsComponent},  //tech news
  {path: 'business',component:BusinessnewsComponent}, //businessnews
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
