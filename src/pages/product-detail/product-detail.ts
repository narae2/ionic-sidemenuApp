import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Product} from "../../interface/Product";
import {RestProvider} from "../../providers/rest/rest";
import {ProductListPage} from "../product-list/product-list";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private rest:RestProvider) {
    this.product = new Product(this.navParams.get('myProduct'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailPage');
  }

  saveProduct(product:Product){
   if(product.id) {

    }else { //등록
      this.rest.createProduct(product).subscribe(res=>{
        this.product = res;
        this.navCtrl.setRoot('ProductListPage');
      });
   }
  }



}
