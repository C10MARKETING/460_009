import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SikkertArbejdsmiljøPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sikkert-arbejdsmiljo',
  templateUrl: 'sikkert-arbejdsmiljo.html',
})
export class SikkertArbejdsmiljoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SikkertArbejdsmiljoPage');
  }

}
