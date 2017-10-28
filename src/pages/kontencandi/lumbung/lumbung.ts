import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-lumbung',
  templateUrl: 'lumbung.html',
})
export class LumbungPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LumbungPage');
  }

  back(){
    this.navCtrl.pop();
  }
}
