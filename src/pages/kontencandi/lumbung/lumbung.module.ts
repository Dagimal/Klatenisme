import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LumbungPage } from './lumbung';

@NgModule({
  declarations: [
    LumbungPage,
  ],
  imports: [
    IonicPageModule.forChild(LumbungPage),
  ],
})
export class LumbungPageModule {}
