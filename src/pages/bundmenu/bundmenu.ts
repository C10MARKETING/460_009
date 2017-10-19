import { Component } from '@angular/core';

import { PrisoversigtPage } from '../prisoversigt/prisoversigt';
import { KontaktPage } from '../kontakt/kontakt';
import { OmOsPage } from '../om-os/om-os';
import { SikkertArbejdsmiljoPage } from '../sikkert-arbejdsmiljo/sikkert-arbejdsmiljo';
import { PumpetyperPage } from '../pumpetyper/pumpetyper';
import { FaqPage } from '../faq/faq';

/**
 * Generated class for the BundmenuPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  templateUrl: 'bundmenu.html'
})
export class BundmenuPage {

  tab1Root = 'KontaktPage'
  tab2Root = 'OmOsPage'
  tab3Root = 'PumpetyperPage'
  tab4Root = 'SikkertArbejdsmiljøPage'
  tab5Root = 'PrisoversigtPage'
  tab6Root = 'FaqPage'


  constructor() {}

}
