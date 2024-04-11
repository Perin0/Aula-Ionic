import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmagPagePageRoutingModule } from './emag-page-routing.module';

import { EmagPagePage } from './emag-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmagPagePageRoutingModule
  ],
  declarations: [EmagPagePage]
})
export class EmagPagePageModule {}
