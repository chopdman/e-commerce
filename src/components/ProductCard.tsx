import { Link } from 'react-router-dom'

const ProductCard = ({p}:any) => {
  return (
     <div
          key={p.id}
          className="bg-blue-300 p-4 rounded-lg shadow hover:shadow-lg transition"
        >
          <img
            src={p.thumbnail}
            alt={p.title}
            className="h-40 mx-auto object-contain mb-4"
          />
          <h3 className="font-bold truncate">{p.title}</h3>
          <p className="text-blue-600 font-bold">Rs: {p.price}</p>
          <Link
            to={`/shop/product/${p.id}`}
            className="mt-4 block bg-gray-800 text-white text-center py-2 rounded"
          >
            View Details
          </Link>
        </div>
  )
}

export default ProductCard