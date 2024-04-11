import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MassPagePage } from './mass-page.page';

const routes: Routes = [
  {
    path: '',
    component: MassPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MassPagePageRoutingModule {}
