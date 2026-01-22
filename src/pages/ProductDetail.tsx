import {  Link, Outlet, useParams } from "react-router-dom";
import { useGetProduct } from "../queries/ProductQueries";
import Loader from "../components/Loader";

const ProductDetails = () => {
  const { productId } = useParams();
  const { data, isLoading, error } = useGetProduct(productId);

  if (isLoading) return <Loader/>;
  if (error) return <p>Product not found.</p>;
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <img
        src={data.thumbnail}
        className="w-64 h-64 object-contain"
        alt={data.title}
      />
      <div className="flex-1">
        <h1 className="text-3xl font-bold">{data.title}</h1>
        <p className="text-gray-600 mt-4">{data.description}</p>
        <p className="text-2xl font-bold text-blue-600 mt-4">
          Rs: {data.price}
        </p>
        <Link
          to="customize"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded"
        >
          Customize & Buy
        </Link>
        <Outlet context={data} /> 
      </div>
    </div>
  );
};

export default ProductDetails;