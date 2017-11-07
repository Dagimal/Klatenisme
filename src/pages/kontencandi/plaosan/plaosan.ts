import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-plaosan',
  templateUrl: 'plaosan.html',
})
export class PlaosanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaosanPage');
  }

  back(){
    this.navCtrl.pop();
  }
}
