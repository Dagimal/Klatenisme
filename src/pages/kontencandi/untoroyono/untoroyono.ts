import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-untoroyono',
  templateUrl: 'untoroyono.html',
})
export class UntoroyonoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UntoroyonoPage');
  }

}
