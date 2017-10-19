import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PumpetyperPage } from '../pumpetyper/pumpetyper';
import { SikkertArbejdsmiljoPage } from '../sikkert-arbejdsmiljo/sikkert-arbejdsmiljo';
import { PrisoversigtPage } from '../prisoversigt/prisoversigt';
import { FaqPage } from '../faq/faq';
import { KontaktPage } from '../kontakt/kontakt';
import { OmOsPage } from '../om-os/om-os';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  pushPagePumpetyper: any;
  pushPageSikkerhed: any;
  pushPagePrisoversigt: any;
  pushPageFaq: any;
  pushPageKontakt: any;
  pushPageOmOs: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.pushPagePumpetyper = PumpetyperPage;
  this.pushPageSikkerhed = SikkertArbejdsmiljoPage;
  this.pushPagePrisoversigt = PrisoversigtPage;
  this.pushPageFaq = FaqPage;
  this.pushPageKontakt = KontaktPage;
  this.pushPageOmOs = OmOsPage;
  }
}
