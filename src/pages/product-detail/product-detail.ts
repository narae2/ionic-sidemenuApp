import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Product} from "../../interface/Product";

/**
 * Generated class for the ProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {
  product:Product;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.product = new Product(this.navParams.get('myProduct'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailPage');
  }


}
