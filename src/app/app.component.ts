import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Inicio } from '../pages/inicio/inicio';
import { Signup } from '../pages/signup/signup';
import { ScrollColours } from '../pages/scroll-colours/scroll-colours';
import { TipoBeneficiario } from '../pages/tipo-beneficiario/tipo-beneficiario';
import { TipoProyecto } from '../pages/tipo-proyecto/tipo-proyecto';
import { Completed65 } from '../pages/completed65/completed65';
import { Plazos } from '../pages/plazos/plazos';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Plazos;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
