import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { PumpetyperPage } from '../pages/pumpetyper/pumpetyper';
import { Pumpe24mPage } from '../pages/pumpetyper/pumpe24m';
import { Pumpe36mPage } from '../pages/pumpetyper/pumpe36m';
import { Pumpe42mPage } from '../pages/pumpetyper/pumpe42m';
import { Pumpe47mPage } from '../pages/pumpetyper/pumpe47m';
import { Pumpe58mPage } from '../pages/pumpetyper/pumpe58m';
import { StationaerPumpePage } from '../pages/pumpetyper/stationaer-pumpe';
import { BetonMariePage } from '../pages/pumpetyper/beton-marie';
import { SikkertArbejdsmiljoPage } from '../pages/sikkert-arbejdsmiljo/sikkert-arbejdsmiljo';
import { PrisoversigtPage } from '../pages/prisoversigt/prisoversigt';
import { FaqPage } from '../pages/faq/faq';
import { KontaktPage } from '../pages/kontakt/kontakt';
import { OmOsPage } from '../pages/om-os/om-os';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MyApp },
  { path: 'pumpetyper', component: PumpetyperPage },
  { path: 'sikkerhed', component: SikkertArbejdsmiljoPage },
  { path: 'kontakt', component: KontaktPage },
  { path: 'prisoversigt', component: PrisoversigtPage },
  { path: 'faq', component: FaqPage },
  { path: 'om', component: OmOsPage },
];

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    PumpetyperPage,
    Pumpe24mPage,
    Pumpe36mPage,
    Pumpe42mPage,
    Pumpe47mPage,
    Pumpe58mPage,
    StationaerPumpePage,
    BetonMariePage,
    SikkertArbejdsmiljoPage,
    PrisoversigtPage,
    FaqPage,
    KontaktPage,
    OmOsPage,
    ItemDetailsPage,
    ListPage,
    TabsPage
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      backButtonIcon: 'home',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition',
    },
  )],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    PumpetyperPage,
    Pumpe24mPage,
    Pumpe36mPage,
    Pumpe42mPage,
    Pumpe47mPage,
    Pumpe58mPage,
    StationaerPumpePage,
    BetonMariePage,
    SikkertArbejdsmiljoPage,
    PrisoversigtPage,
    FaqPage,
    KontaktPage,
    OmOsPage,
    ItemDetailsPage,
    ListPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
