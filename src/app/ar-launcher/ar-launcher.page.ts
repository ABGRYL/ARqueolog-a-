import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ar-launcher',
  templateUrl: './ar-launcher.page.html',
  styleUrls: ['./ar-launcher.page.scss'],
})
export class ArLauncherPage implements OnInit {

  @Input() zonaArqueologica: any;
  idZona: any;
  urlFrame: any;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.zonaArqueologica.id);
    this.idZona = this.zonaArqueologica.id;
    this.revisarID(this.idZona);
    console.log('URl', this.urlFrame);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  revisarID(zona: any){

    const iframe = document.getElementById('rutaFrame') as HTMLIFrameElement;

    const frameZonas = [
      "./assets/frames/balamku-aframe.html",
      "./assets/frames/calakmul-aframe.html",
      "../assets/frames/ek-balam-aframe.html",
      "./assets/frames/mayapan-aframe.html",
      "./assets/frames/kabah-aframe.html",
      "./assets/frames/coba-aframe.html",
      "./assets/frames/chichen-aframe.html",
      "./assets/frames/tulum-aframe.html",
      "./assets/frames/kohunlich-aframe.html",
      "./assets/frames/xtampak-aframe.html",
      "./assets/frames/edzna-aframe.html",
      "./assets/frames/oxtankah-aframe.html",
    ];

    console.log(zona);

    iframe.src = frameZonas[zona-1];

    return this.urlFrame = frameZonas[zona - 1];

  }

}
