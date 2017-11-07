import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CandiPage } from '../candi/candi';

@Component({
  selector: 'page-wisata',
  templateUrl: 'wisata.html'
})
export class Wisata {

  constructor(public navCtrl: NavController) {

  }
  candi(){
    this.navCtrl.push(CandiPage);
  }

}
