import Greeting from "./components/Greeting";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Product Showcase</h1>

      <Greeting name="Daffini" />

      <ProductCard
        title="Keyboard"
        price={49}
        inStock={true}
      />

      <ProductCard
        title="Wireless Mouse"
        price={29}
        inStock={false}
      />
    </main>
  );
}