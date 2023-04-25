import { TrashIcon } from "@heroicons/react/20/solid";
import propTypes from "prop-types";

const ProductInBag = ({ product, onChangeQuantity, deleteProductFromBag }) => {
  return (
    <li key={product.id} className="flex py-6">
      <div className="flex-shrink-0 w-24 h-24 overflow-hidden border rounded-md border-platzi-terciary-background">
        <img
          className="object-cover object-center w-full h-full"
          alt={product.images.length > 0
            ? product.images[0]
            : "https://xhibiter-nextjs.netlify.app/_next/image?url=%2Fimages%2Fproducts%2Fitem_19.jpg&w=1920&q=75"}
          src={product.images.length > 0
            ? product.images[0]
            : "https://xhibiter-nextjs.netlify.app/_next/image?url=%2Fimages%2Fproducts%2Fitem_19.jpg&w=1920&q=75"}
        />
      </div>
      <div className="flex flex-col flex-1 ml-4">
        <div>
          <div className="flex justify-between text-base font-medium text-white">
            <h3>
              <a href="#">{product.title.length > 13 ? `${product.title.substring(0, 13)}...` : product.title}</a>
            </h3>
            <p className="ml-4">S/ {product.quantity > 1 ? product.price * product.quantity : product.price}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            {product.category.name.charAt(0).toUpperCase() + product.category.name.slice(1)}
          </p>
        </div>
        <div className="flex items-end justify-between flex-1 text-sm">
          <div className="flex items-center justify-center gap-2">
            <label className="text-gray-300">Cantidad: </label>
            <input type="number" value={product.quantity} onChange={
              (e) => {
                onChangeQuantity(e.target.value, product)
              }
            } className="w-16 px-2 py-2 rounded-lg outline-none bg-platzi-terciary-background" />
          </div>
          <div className="flex">
            <button
              type="button"
              className="flex items-center justify-center px-4 py-3 font-medium text-white rounded-md bg-platzi-primary-purple hover:bg-platzi-secondary-purple"
              onClick={() => {
                deleteProductFromBag(product)
              }}
            >
              Eliminar
              <TrashIcon className="w-5 h-5 ml-2" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default ProductInBag;

ProductInBag.propTypes = {
  product: propTypes.object.isRequired,
  onChangeQuantity: propTypes.func.isRequired,
  deleteProductFromBag: propTypes.func.isRequired,
}