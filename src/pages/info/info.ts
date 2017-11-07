import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { TeamPage } from './team/team';

@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  // item
  item = [
    {'nama': 'Team', component:TeamPage},
  ];

  openPage(component){
    this.navCtrl.push(component);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

  showAlert(){
    let alert = this.alertCtrl.create({
      title: 'version 1.0.0',
      subTitle: 'Aplikasi masih dalam proses pengembangan, mungkin belum stabil',
      buttons: ['OK']
    });
    alert.present();
  }

}
