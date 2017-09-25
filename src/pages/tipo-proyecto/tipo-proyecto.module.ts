import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TipoProyecto } from './tipo-proyecto';

@NgModule({
  declarations: [
    TipoProyecto,
  ],
  imports: [
    IonicPageModule.forChild(TipoProyecto),
  ],
})
export class TipoProyectoPageModule {}
