import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentDetailsComponent } from './component/component-details/component-details.component';
import { ComponentListComponent } from './component/component-list/component-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/components', pathMatch: 'full' },
  { path: 'components', component: ComponentListComponent },
  { path: 'component-details/:id', component: ComponentDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
