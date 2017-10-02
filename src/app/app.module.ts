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
import { ConsejosUtiles } from '../pages/consejos-utiles/consejos-utiles';

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
    OrganoConcedente
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
    OrganoConcedente
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
