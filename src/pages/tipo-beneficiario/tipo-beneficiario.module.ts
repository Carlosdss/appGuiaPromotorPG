import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TipoBeneficiario } from './tipo-beneficiario';

@NgModule({
  declarations: [
    TipoBeneficiario,
  ],
  imports: [
    IonicPageModule.forChild(TipoBeneficiario),
  ],
})
export class TipoBeneficiarioPageModule {}
