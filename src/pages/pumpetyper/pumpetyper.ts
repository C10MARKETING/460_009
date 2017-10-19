import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OmOsPage } from '../om-os/om-os';
import { Pumpe24mPage } from '../pumpetyper/pumpe24m';
import { Pumpe36mPage } from '../pumpetyper/pumpe36m';
import { Pumpe42mPage } from '../pumpetyper/pumpe42m';
import { Pumpe47mPage } from '../pumpetyper/pumpe47m';
import { Pumpe58mPage } from '../pumpetyper/pumpe58m';
import { StationaerPumpePage } from '../pumpetyper/stationaer-pumpe';
import { BetonMariePage } from '../pumpetyper/beton-marie';

/**
 * Generated class for the PumpetyperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pumpetyper',
  templateUrl: 'pumpetyper.html',
})
export class PumpetyperPage {
  pushPage24m: any;
  pushPage36m: any;
  pushPage42m: any;
  pushPage47m: any;
  pushPage58m: any;
  pushPageStationaer: any;
  pushPageBetonMarie: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.pushPage24m = Pumpe24mPage;
  this.pushPage36m = Pumpe36mPage;
  this.pushPage42m = Pumpe42mPage;
  this.pushPage47m = Pumpe47mPage;
  this.pushPage58m = Pumpe58mPage;
  this.pushPageStationaer = StationaerPumpePage;
  this.pushPageBetonMarie = BetonMariePage;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PumpetyperPage');
  }

}
