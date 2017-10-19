import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScrollColours } from '../scroll-colours/scroll-colours';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class Inicio {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToPage(){
    this.navCtrl.push(ScrollColours);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

}
