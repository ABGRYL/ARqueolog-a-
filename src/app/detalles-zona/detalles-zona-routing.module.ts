import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesZonaPage } from './detalles-zona.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesZonaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesZonaPageRoutingModule {}
