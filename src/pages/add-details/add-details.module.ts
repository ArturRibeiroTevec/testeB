import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDetails } from './add-details';

import { Camera } from "@ionic-native/camera";

import { IonRatingModule } from '../ion-rating/ion-rating.module';

@NgModule({
  declarations: [
    AddDetails,
  ],
  imports: [
    IonicPageModule.forChild(AddDetails),
    IonRatingModule
  ],
  providers: [
    Camera
  ],
  exports: [
    AddDetails
  ]
})
export class AddDetailsModule {}
