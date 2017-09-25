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

@NgModule({
  declarations: [
    MyApp,
    Inicio,
    Signup,
    ScrollColours,
    TipoBeneficiario,
    TipoProyecto
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
    TipoProyecto
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
