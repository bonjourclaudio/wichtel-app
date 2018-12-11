import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {WichtelnComponent} from './wichteln/wichteln.component';
import {AboutComponent} from './about/about.component';
import {CreatorComponent} from './creator/creator.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'create', component: CreatorComponent},
  { path: 'wichteln/:id', component: WichtelnComponent},
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
