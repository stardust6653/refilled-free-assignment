export interface DataProps {
  id: number;
  imageUrl: string;
  name: string;
  originPrice: number;
  price: number;
  tag: { color: string; text: string };
  productOptions: string;
  desc: string;
}
