import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AddDetails } from './../add-details/add-details';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class Details {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Details');
  }

  addDetail() {
    this.navCtrl.setRoot(AddDetails)
  }

}
