import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScrollColours } from './scroll-colours';

@NgModule({
  declarations: [
    ScrollColours,
  ],
  imports: [
    IonicPageModule.forChild(ScrollColours),
  ],
})
export class ScrollColoursPageModule {}
