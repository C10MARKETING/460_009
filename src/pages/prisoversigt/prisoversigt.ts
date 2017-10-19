import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the PrisoversigtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-prisoversigt',
  templateUrl: 'prisoversigt.html',
})
export class PrisoversigtPage {
  items = [
    '24m pumpe',
    '36m pumpe',
    '42m pumpe',
    '47m pumpe',
    '58m pumpe',
    'Stationær pumpe',
    'Tillæg til betonpumpning',
    'Sikkerhedsudstyr',
    'Transport og levering',
    'Vask',
    'Særlige ydelser',
    'Pumpning i slanger/rør'
  ];
   itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrisoversigtPage');
  }

}
