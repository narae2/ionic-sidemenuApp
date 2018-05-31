import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Account} from "../../interface/Account";

/**
 * Generated class for the NavPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nav',
  templateUrl: 'nav.html',
})
export class NavPage {
  private account = {} as Account;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavPage');
    this.account = this.navParams.get('account');
  }

}
