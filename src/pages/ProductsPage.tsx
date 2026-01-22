import { useGetProducts } from "../queries/ProductQueries";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

const ProductsPage = () => {
  const { data: products, isLoading, error } = useGetProducts();
  if (isLoading) return <Loader/>;
  if (error) return <p className="text-red-500">Error loading products.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((p: any) => (
        <ProductCard p={p} key={p.id}/>
      ))}
    </div>
  );
};

export default ProductsPage;
