import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom"

const NavBar = () => {
      const cartItems = useSelector((state: any) => state.cart.items);
  const totalQty = cartItems.reduce(
    (acc: number, item: any) => acc + item.quantity,
    0,
  );
  return (
    <div className="bg-yellow-300 shadow p-4 flex justify-between items-center sticky top-0 z-50 w-screen ">
        <div className="space-x-4">
          <NavLink
            to="/shop/products"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : "text-gray-900"
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : "text-gray-600"
            }
          >
            About
          </NavLink>
        </div>
        <NavLink
          to="/shop/cart"
          className={({ isActive }) =>
            `flex items-center space-x-2 ${isActive || totalQty > 0 ? "text-blue-600 font-bold" : "text-gray-600"}`
          }
        >
          <span className=""><TiShoppingCart color="black" size={25} /></span>
          {totalQty > 0 && (
            <span className="bg-red-600 text-white text-xs  px-2 py-1.5 rounded-full">
              {totalQty}
            </span>
          )}
        </NavLink>
      </div>
  )
}

export default NavBar