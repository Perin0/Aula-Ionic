import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmagPagePage } from './emag-page.page';

const routes: Routes = [
  {
    path: '',
    component: EmagPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmagPagePageRoutingModule {}
