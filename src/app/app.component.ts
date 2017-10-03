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
import { Operacion } from '../pages/operacion/operacion';
import { OrganoConcedente } from '../pages/organo-concedente/organo-concedente';
import { ConsejosUtiles } from '../pages/consejos-utiles/consejos-utiles';
import { TextComponent12 } from '../pages/text-component12/text-component12';
import { TextComponent13 } from '../pages/text-component13/text-component13';
import { TextComponent14 } from '../pages/text-component14/text-component14';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TextComponent14;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
