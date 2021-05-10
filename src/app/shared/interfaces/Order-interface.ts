import { ICart } from './Cart-interface';

interface IOrder {
  buyer: {
    name: string;
    address: string;
    phoneNumber: string;
  };
  total: number;
  Carts: ICart[];
  _id: string;
}

export { IOrder };
