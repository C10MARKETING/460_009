import { Component } from '@angular/core';

import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { PumpetyperPage } from '../pumpetyper/pumpetyper';
import { SikkertArbejdsmiljoPage } from '../sikkert-arbejdsmiljo/sikkert-arbejdsmiljo';
import { KontaktPage } from '../kontakt/kontakt';
import { OmOsPage } from '../om-os/om-os';
import { PrisoversigtPage } from '../prisoversigt/prisoversigt';
import { FaqPage } from '../faq/faq';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HelloIonicPage;
  tab2Root = FaqPage;
  tab3Root = PrisoversigtPage;
  tab4Root = KontaktPage;
  tab5Root = OmOsPage;
  tab6Root = PumpetyperPage;
  tab7Root = SikkertArbejdsmiljoPage;
  constructor() {

  }
}
