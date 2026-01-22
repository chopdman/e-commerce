import { useNavigate, useOutletContext } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { addToCart } from "../redux/slice/cartSlice";

const CustomizeDialog = () => {
  const product = useOutletContext<any>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        customization: formData.get("color") as string,
      }),
    );
    navigate("/shop/cart");
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Customize: {product.title}</h2>
        <form onSubmit={handleAdd} className="space-y-4">
          <label className="block">
            Color Preference:
            <select
              name="color"
              required
              className="w-full border p-2 rounded mt-1"
            >
              <option value="Standard">Standard</option>
              <option value="Red">Red</option>
              <option value="Black">Dark</option>
            </select>
          </label>
          <div className="flex justify-end space-x-2 pt-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-4 py-2 text-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Add to Cart
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomizeDialog;