import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesZonaPageRoutingModule } from './detalles-zona-routing.module';

import { DetallesZonaPage } from './detalles-zona.page';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesZonaPageRoutingModule
  ],
  declarations: [DetallesZonaPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DetallesZonaPageModule {}
