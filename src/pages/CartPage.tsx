import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/slice/cartSlice";

const CartPage = () => {
  const items = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();
  const total = items.reduce(
    (acc: number, item: any) => acc + item.price * item.quantity,
    0,
  );

  if (items.length === 0)
    return <p className="text-center text-gray-500">Your cart is empty.</p>;
  return (
    <div className="space-y-4">
      {items.map((item: any, idx: number) => (
        <div
          key={idx}
          className="flex justify-between items-center bg-white p-4 shadow rounded"
        >
          <div>
            <h4 className="font-bold">{item.title}</h4>
            <p className="text-sm text-gray-500">Style: {item.customization}</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center border rounded">
              <button
                onClick={() =>
                  dispatch(
                    updateQuantity({
                      id: item.id,
                      customization: item.customization,
                      item: -1,
                    }),
                  )
                }
                className="px-3 py-1"
              >
                -
              </button>
              <span className="px-3">{item.quantity}</span>
              <button
                onClick={() =>
                  dispatch(
                    updateQuantity({
                      id: item.id,
                      customization: item.customization,
                      items: 1,
                    }),
                  )
                }
                className="px-3 py-1"
              >
                +
              </button>
            </div>
            <button
              onClick={() =>
                dispatch(
                  removeFromCart({
                    id: item.id,
                    customization: item.customization,
                  }),
                )
              }
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="text-right text-2xl font-bold pt-4 border-t">
        Total Rs: {total.toFixed(2)}
      </div>{" "}
    </div>
  );
};

export default CartPage;