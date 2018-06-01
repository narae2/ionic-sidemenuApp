import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {Product} from "../../interface/Product";

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  baseUrl:string = 'http://localhost:3000';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  //Product 전체 List
  public getProducts():Observable<Product[]>{
    return this.http.get(this.baseUrl+"/products").map((resp:Product[])=>{
      return resp.map(product =>{
        return new Product(product);
      })
    }).catch(err => {
      return Observable.empty<Product[]>();
    });
  }

  //protuct 등록
  public createProduct(product:Product): Observable<Product>{
    return this.http.post(this.baseUrl + "/products", product).map(response => {
        return new Product(response)
      }).catch((err)=>{
        return Observable.empty<Product>();
      })
  }

  //protuct 수정
  public updateProduct(product:Product): Observable<Product>{
    return this.http.put(this.baseUrl + "/products/"+product.id, product).map(response => {
      return new Product(response)
    }).catch((err)=>{
      return Observable.empty<Product>();
    })
  }
  //product 삭제
  public deleteProductById(productId:number):Observable<Product> {
    return this.http.delete(this.baseUrl+"/products/"+productId)
      .map(pro => new Product(pro)).catch(err => Observable.empty<Product>());
  }

}
