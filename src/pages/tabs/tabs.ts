import { Component } from '@angular/core';
import { CandiPage } from '../candi/candi';
import { Kuliner } from '../kuliner/kuliner';
import { Wisata } from '../wisata/wisata';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CandiPage;
  tab2Root = Kuliner;
  tab3Root = Wisata;

  constructor() {

  }
}
