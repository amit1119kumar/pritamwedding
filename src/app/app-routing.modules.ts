// tslint:disable-next-line:semicolon
import { HomeHindiComponent } from './components/homeHindi';
import { HomeEnglishComponent } from './components';
import {Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';



const routes: Routes = [
  {
    path: '',
    component: HomeEnglishComponent
  },
  {
    path : 'home',
    component: HomeHindiComponent
  },
  {
    path: 'hindi',
    component: HomeHindiComponent
  },
  {
    path: 'eng',
    component: HomeEnglishComponent
  }
];

@NgModule({
 imports : [RouterModule.forRoot(routes, {useHash: false})],
 exports: [RouterModule]
})

export class AppRoutingModule { }
