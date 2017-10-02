import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Operacion } from './operacion';

@NgModule({
  declarations: [
    Operacion,
  ],
  imports: [
    IonicPageModule.forChild(Operacion),
  ],
})
export class OperacionPageModule {}
