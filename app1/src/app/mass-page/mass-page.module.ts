import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MassPagePageRoutingModule } from './mass-page-routing.module';

import { MassPagePage } from './mass-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MassPagePageRoutingModule
  ],
  declarations: [MassPagePage]
})
export class MassPagePageModule {}
