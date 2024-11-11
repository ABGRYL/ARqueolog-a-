import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ArLauncherPage } from '../ar-launcher/ar-launcher.page';

@Component({
  selector: 'app-detalles-zona',
  templateUrl: './detalles-zona.page.html',
  styleUrls: ['./detalles-zona.page.scss'],
})
export class DetallesZonaPage {

  @Input() zonaArqueologica: any; // Recibe los datos de la zona arqueológica

  constructor(private modalController: ModalController) {
  }
  
  cerrarModal() {
    this.modalController.dismiss();
  }

  async abrirAR(zonaArqueologica: any) {
    const modal: HTMLIonModalElement = await this.modalController.create({
      component: ArLauncherPage,
      componentProps: {zonaArqueologica},
    });
  
    return await modal.present();
  }


}
