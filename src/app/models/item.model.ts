export interface ItemRegisterModel {
  name: string;
  description: string;
  type: string;
  price: string;
  tags: [];
}

export interface ItemModel {
  _id: string;
  name: string;
  description: string;
  type: string;
  price: string;
  tags: [];
  availability: boolean;
  imgUrl: string;
}

export interface OrderItemModel {
  _id: string;
  orderTime: Date;

}