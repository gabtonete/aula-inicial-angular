import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { Erro404Component } from './erro404/erro404.component';

const routes: Routes = [
  {
    path: '',
    component: TestComponent
  },
  {
    path: 'test2/:nome',
    component: Test2Component
  },
  {
    path: '**',
    component: Erro404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
