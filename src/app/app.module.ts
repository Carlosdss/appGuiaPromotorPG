import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { Inicio } from '../pages/inicio/inicio';
import { Signup } from '../pages/signup/signup';
import { ScrollColours } from '../pages/scroll-colours/scroll-colours';
import { TipoBeneficiario } from '../pages/tipo-beneficiario/tipo-beneficiario';
import { TipoProyecto } from '../pages/tipo-proyecto/tipo-proyecto';
import { Completed65 } from '../pages/completed65/completed65';
import { Plazos } from '../pages/plazos/plazos';
import { Operacion } from '../pages/operacion/operacion';
import { OrganoConcedente } from '../pages/organo-concedente/organo-concedente';
import { Bienvenido } from '../pages/bienvenido/bienvenido';
import { ConsejosUtiles } from '../pages/consejos-utiles/consejos-utiles';
import { TextComponent12 } from '../pages/text-component12/text-component12';
import { TextComponent13 } from '../pages/text-component13/text-component13';
import { TextComponent14 } from '../pages/text-component14/text-component14';
import { TextComponent17 } from '../pages/text-component17/text-component17';
import { TextComponent18 } from '../pages/text-component18/text-component18';
import { TextComponent19 } from '../pages/text-component19/text-component19';

@NgModule({
  declarations: [
    MyApp,
    Inicio,
    Signup,
    ScrollColours,
    TipoBeneficiario,
    TipoProyecto,
    Completed65,
    Plazos,
    Operacion,
    OrganoConcedente,
    ConsejosUtiles,
    Bienvenido,
    TextComponent12, TextComponent13, TextComponent14, TextComponent17, TextComponent18, TextComponent19
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Inicio,
    Signup,
    ScrollColours,
    TipoBeneficiario,
    TipoProyecto,
    Completed65,
    Plazos,
    Operacion,
    OrganoConcedente,
    ConsejosUtiles,
    Bienvenido,
    TextComponent12, TextComponent13, TextComponent14,  TextComponent17, TextComponent18, TextComponent19
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
