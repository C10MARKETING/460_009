import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { PumpetyperPage } from '../pages/pumpetyper/pumpetyper';
import { SikkertArbejdsmiljoPage } from '../pages/sikkert-arbejdsmiljo/sikkert-arbejdsmiljo';
import { PrisoversigtPage } from '../pages/prisoversigt/prisoversigt';
import { FaqPage } from '../pages/faq/faq';
import { KontaktPage } from '../pages/kontakt/kontakt';
import { ListPage } from '../pages/list/list';
import { OmOsPage } from '../pages/om-os/om-os';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  rootPage:any = TabsPage;
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Forsiden', component: MyApp },
      { title: 'Pumpetyper', component: ListPage },
      { title: 'Sikkert arbejdsmiljø', component: SikkertArbejdsmiljoPage },
      { title: 'Prisoversigt', component: PrisoversigtPage },
      { title: 'FAQ', component: FaqPage },   
      { title: 'Kontakt', component: KontaktPage },
      { title: 'Om os', component: OmOsPage },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
   
}
