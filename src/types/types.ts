export interface DataProps {
  id: number;
  imageUrl: string;
  name: string;
  originPrice: number;
  price: number;
  tag: { color: string; text: string };
  productOption?: string;
  desc: string;
}

export interface CardItemProps extends DataProps {
  productOptions: { id: number; name: string; price: number; stock: number }[];
}
