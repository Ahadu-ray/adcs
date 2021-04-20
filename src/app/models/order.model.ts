import { Customer } from './customer.model';
export interface OrderModel {
  _id: string;
  items: myItem[];
  hav: string;
  customer: Customer;
  status: string;
  price: string;
  quantity: Number
}
export interface myItem {
  _id: string;
  item: myItem2;
  quantity: Number
}
export interface myItem2 {
  _id: string;
  name: string;
  price: Number
}
