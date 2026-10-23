import PriceTag from "./PriceTag";

type Props = {
  title: string;
  price: number;
  inStock: boolean;
};

export default function ProductCard({
  title,
  price,
  inStock,
}: Props) {
  return (
    <div>
      <h3>{title}</h3>
      <PriceTag amount={price} />
      <p>{inStock ? "In stock" : "Out of stock"}</p>
    </div>
  );
}