import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonRating } from './ion-rating';

@NgModule({
  declarations: [
    IonRating,
    
  ],
  imports: [
    IonicPageModule.forChild(IonRating),
  ],
  exports: [
    IonRating
  ]
})
export class IonRatingModule {}
