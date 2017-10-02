import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsejosUtiles } from './consejos-utiles';

@NgModule({
  declarations: [
    ConsejosUtiles,
  ],
  imports: [
    IonicPageModule.forChild(ConsejosUtiles),
  ],
})
export class ConsejosUtilesPageModule {}
