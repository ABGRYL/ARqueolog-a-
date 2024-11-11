import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { DetallesZonaPage } from '../detalles-zona/detalles-zona.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  ZonasArqueologicas: any;

  constructor(private http: HttpClient, private modalController: ModalController) {
    this.obtenerZonas();
  }

  obtenerZonas(){
    this.http.get('https://zonasarqueologicas-26512-default-rtdb.firebaseio.com/.json').subscribe(
      (response) => {
        console.log(response);
        this.ZonasArqueologicas = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  async mostrarDetalleZona(zonaArqueologica: any) {
    const modal = await this.modalController.create({
      component: DetallesZonaPage,
      componentProps: {zonaArqueologica},
    });

    return await modal.present();
  }

}
