import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TipoBeneficiario } from '../tipo-beneficiario/tipo-beneficiario';

/**
 * Generated class for the ScrollColoursPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scroll-colours',
  templateUrl: 'scroll-colours.html',
})
export class ScrollColours{

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToPage(){
    this.navCtrl.push(TipoBeneficiario);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScrollColoursPage');
  }

}
