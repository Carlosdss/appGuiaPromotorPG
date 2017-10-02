import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrganoConcedente } from './organo-concedente';

@NgModule({
  declarations: [
    OrganoConcedente,
  ],
  imports: [
    IonicPageModule.forChild(OrganoConcedente),
  ],
})
export class OrganoConcedentePageModule {}
