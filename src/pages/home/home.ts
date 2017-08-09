import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AddVistory } from './../add-vistory/add-vistory';
import { Details } from './../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  addVistory() {
    this.navCtrl.setRoot(AddVistory);
  }

  goToDetails() {
    this.navCtrl.setRoot(Details);
  }

}
