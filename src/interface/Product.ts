export class Product {
  id:number;
  name:string;
  cost:number;
  quantity:number;
  
  //생성자
  constructor(values: Object= {}){
    Object.assign(this, values);
  }

}
