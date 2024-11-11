import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private plataform: Platform,
    private router: Router) {
      this.initializeApp();
    }

  initializeApp(){
    this.plataform.ready().then(() => {
      this.router.navigateByUrl('splash');
    })
  }
}
