import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
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
import { TextComponent17 } from '../pages/text-component17/text-component17';
import { TextComponent18 } from '../pages/text-component18/text-component18';
import { TextComponent19 } from '../pages/text-component19/text-component19';
import { Bienvenido } from '../pages/bienvenido/bienvenido';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  @ViewChild('NAV') nav: Nav;
  public rootPage: any;
  public pages: Array<{ titulo: string, component: any, icon: string }>;

  //rootPage:any = Inicio;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
  this.rootPage = Inicio;

    this.pages = [
      { titulo: 'Inicio',           component: Inicio,   icon: 'home'},
      { titulo: 'Signup',           component: Signup, icon: ''},
      { titulo: 'Acerca de',        component: ScrollColours, icon: 'info'},
      { titulo: 'Plazos',           component: Plazos,   icon: ''},
      { titulo: 'Operacion',        component: Operacion,   icon: ''},
      { titulo: 'Órgano concedente',component: OrganoConcedente,   icon: ''},
      { titulo: 'Consejos útiles',  component: ConsejosUtiles,  icon: 'info'},
      { titulo: 'Bienvenido',           component: Bienvenido,   icon: ''},
      { titulo: 'TextComponent12',           component: TextComponent12,   icon: ''},
      { titulo: 'TextComponent13',           component: TextComponent13,   icon: ''},
      { titulo: 'TextComponent14',           component: TextComponent14,   icon: ''},
      { titulo: 'TextComponent17',           component: TextComponent17,   icon: ''},
      { titulo: 'TextComponent18',           component: TextComponent18,   icon: ''},
      { titulo: 'TextComponent19',           component: TextComponent19,   icon: ''}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  goToPage(page){
  this.nav.setRoot(page);
  }

}
