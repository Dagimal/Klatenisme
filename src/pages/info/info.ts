import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VersionPage } from './version/version';
import { TeamPage } from './team/team';

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  // item
  item = [
    {'nama': 'Team', component:TeamPage},
    {'nama': 'App Version', component:VersionPage}
  ];

  openPage(component){
    this.navCtrl.push(component);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

}
