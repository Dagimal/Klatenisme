import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';
//candi
import { PlaosanPage } from '../kontencandi/plaosan/plaosan';
import { LumbungPage } from '../kontencandi/lumbung/lumbung';
import { MerakPage } from '../kontencandi/merak/merak';
import { BubrahPage } from '../kontencandi/bubrah/bubrah';
import { GanaPage } from '../kontencandi/gana/gana';
import { ApitPage } from '../kontencandi/apit/apit';
import { PrambananPage } from '../kontencandi/prambanan/prambanan';
import { SewuPage } from '../kontencandi/sewu/sewu';
import { SojiwanPage } from '../kontencandi/sojiwan/sojiwan';
import { UntoroyonoPage } from '../kontencandi/untoroyono/untoroyono';
import { TestPage } from '../kontencandi/test/test';

@IonicPage()
@Component({
  selector: 'page-candi',
  templateUrl: 'candi.html',
})
export class CandiPage {
  //Candi
  candi = [
    {'nama': 'Candi Plaosan',
     'gambar': 'assets/img/candiplaosan.jpg',
     component: PlaosanPage
    },
    {
     'nama': 'Candi Lumbung',
     'gambar': 'assets/img/candilumbung.jpg',
     component: LumbungPage
    },
     {
       'nama': 'Candi Merak',
       'gambar': 'assets/img/candimerak.jpg',
       component: MerakPage
     },
     {
       'nama': 'Candi Bubrah',
       'gambar': 'assets/img/candibubrah.jpg',
       component: BubrahPage
     },
     {
       'nama': 'Candi Gana',
       'gambar': 'assets/img/candigana.jpg',
       component: GanaPage
     },
     {
       'nama': 'Candi Apit',
       'gambar': 'assets/img/candiapit.jpg',
       component: ApitPage
     },
     {
       'nama': 'Candi Prambanan',
       'gambar': 'assets/img/candiprambanan.jpg',
       component: PrambananPage
     },
     {
       'nama': 'Candi Sewu',
       'gambar': 'assets/img/candisewu.jpg',
       component: SewuPage
     },
     {
       'nama': 'Candi Sojiwan',
       'gambar': 'assets/img/candisojiwan.jpg',
       component: SojiwanPage
     },
     {
       'nama': 'Candi Untoroyono',
       'gambar': 'assets/img/candiuntoroyono.jpg',
       component: UntoroyonoPage
     },
     {
       'nama': 'Candi test',
       'gambar': 'assets/img/candiuntoroyono.jpg',
       Component: TestPage
     }
  ];

  openPage(component){
    this.navCtrl.push(component);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CandiPage');
  }

  info(){
    this.navCtrl.push(InfoPage);
  }
  plaosan(){
    this.navCtrl.push(PlaosanPage);
  }

}
