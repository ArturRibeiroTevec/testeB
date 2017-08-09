import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';

import { Details } from './../details/details';

@Component({
  selector: 'page-add-details',
  templateUrl: 'add-details.html',
})
export class AddDetails {

  cameraOptions: CameraOptions;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {

    this.cameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDetails');
  }

  starClicked(value){
    console.log("Avaliaram em :", value);
  }

  save() {
    this.navCtrl.setRoot(Details);
  }

  takePicture() {

    this.camera.getPicture(this.cameraOptions).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.error(err);
    });

  }
}
