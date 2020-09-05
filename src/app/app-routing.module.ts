import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './shared/about/about.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
