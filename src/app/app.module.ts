import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { WelcomePage } from '../pages/welcome/welcome';
import { InfoPage } from '../pages/info/info';
import { CandiPage } from '../pages/candi/candi';
import { Kuliner } from '../pages/kuliner/kuliner';
import { Wisata } from '../pages/wisata/wisata';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//info
import { TeamPage } from '../pages/info/team/team';
import { VersionPage } from '../pages/info/version/version';

//candi
import { PlaosanPage } from '../pages/kontencandi/plaosan/plaosan';
import { LumbungPage } from '../pages/kontencandi/lumbung/lumbung';
import { MerakPage } from '../pages/kontencandi/merak/merak';
import { ApitPage } from '../pages/kontencandi/apit/apit';
import { BubrahPage } from '../pages/kontencandi/bubrah/bubrah';
import { GanaPage } from '../pages/kontencandi/gana/gana';
import { PrambananPage } from '../pages/kontencandi/prambanan/prambanan';
import { SewuPage } from '../pages/kontencandi/sewu/sewu';
import { SojiwanPage } from '../pages/kontencandi/sojiwan/sojiwan';
import { UntoroyonoPage } from '../pages/kontencandi/untoroyono/untoroyono';

@NgModule({
  declarations: [
    MyApp,
    InfoPage,
    WelcomePage,
    CandiPage,
    Kuliner,
    Wisata,
    TabsPage,
    TeamPage,
    VersionPage,
    PlaosanPage,
    LumbungPage,
    MerakPage,
    ApitPage,
    BubrahPage,
    GanaPage,
    PrambananPage,
    SewuPage,
    SojiwanPage,
    UntoroyonoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InfoPage,
    WelcomePage,
    CandiPage,
    Kuliner,
    Wisata,
    TabsPage,
    TeamPage,
    VersionPage,
    PlaosanPage,
    LumbungPage,
    MerakPage,
    ApitPage,
    BubrahPage,
    GanaPage,
    PrambananPage,
    SewuPage,
    SojiwanPage,
    UntoroyonoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
