import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddVistory } from './add-vistory';

@NgModule({
  declarations: [
    AddVistory,
  ],
  imports: [
    IonicPageModule.forChild(AddVistory),
  ],
  exports: [
    AddVistory
  ]
})
export class AddVistoryModule {}
