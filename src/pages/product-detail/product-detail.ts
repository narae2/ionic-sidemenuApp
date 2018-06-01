import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private rest:RestProvider,
              private toastCtrl:ToastController) {
    this.product = new Product(this.navParams.get('myProduct'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailPage');
  }

  saveProduct(product:Product){
   if(product.id) {
      this.rest.updateProduct(product).subscribe(product => {
        this.product = product;
        this.showSuccessMessage("Product:"+this.product.id +"-"+this.product.name+"수정됨");
        this.navCtrl.setRoot('ProductListPage');
      })
    }else { //등록
      this.rest.createProduct(product).subscribe(res=>{
        this.product = res;
        this.showSuccessMessage("Product:"+this.product.id+"-"+this.product.name+"등록됨")
        this.navCtrl.setRoot('ProductListPage');
      });
   }
  }
  showSuccessMessage(message:string){
    this.toastCtrl.create({
      message: message,
      showCloseButton: true,
      duration:3000, position:'middle'
    }).present();
  }//showSuccessMessage

}
