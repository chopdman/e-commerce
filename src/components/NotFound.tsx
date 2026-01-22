import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center py-20">
      404 - Page Not Found <br />
      <Link to="/shop/products" className="text-blue-500 underline">
        Back to Shop
      </Link>
    </div>
  );
};

export default NotFound;
