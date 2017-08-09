import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Details } from './../details/details';

@Component({
  selector: 'page-add-vistory',
  templateUrl: 'add-vistory.html',
})
export class AddVistory {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddVistory');
  }

  goDetails() {
    this.navCtrl.setRoot(Details);
  }

}
