interface ICart {
  _id: string;
  quantity: number;
  amount: number;
  Product: {
    description: string;
    imageURL: string;
    _id: string;
    name: string;
    price: number;
  };
}

export { ICart };
