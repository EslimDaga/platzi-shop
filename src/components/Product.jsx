import { LazyLoadImage } from "react-lazy-load-image-component";
import { CheckIcon, HeartIcon, ShoppingBagIcon } from "@heroicons/react/20/solid";
import propTypes from "prop-types";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Product = ({ product, bagProducts, addProductToBag }) => {
  return (
    <div
      className="p-6 bg-platzi-primary-background rounded-xl"
    >
      <div className="w-full h-64">
        <LazyLoadImage
          className="object-cover w-full h-full rounded-xl"
          effect="blur"
          alt={product.images.length > 0
            ? product.images[0]
            : "https://xhibiter-nextjs.netlify.app/_next/image?url=%2Fimages%2Fproducts%2Fitem_19.jpg&w=1920&q=75"}
          src={product.images.length > 0
            ? product.images[0]
            : "https://xhibiter-nextjs.netlify.app/_next/image?url=%2Fimages%2Fproducts%2Fitem_19.jpg&w=1920&q=75"}
        />
      </div>
      <div className="flex flex-col gap-4 pt-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-gray-300">{product.category.name}</p>
            <h3 className="font-bold text-white">{product.title.length > 13 ? `${product.title.substring(0, 13)}...` : product.title}</h3>
          </div>
          <HeartIcon className="w-6 h-6 text-gray-400" />
        </div>
        <span className="text-lg font-bold text-platzi-primary-green">S/ {product.price}</span>
        <button
          disabled={bagProducts.find((bagProduct) => bagProduct.id === product.id) ? true : false}
          onClick={bagProducts.find((bagProduct) => bagProduct.id === product.id) ? null : () => addProductToBag(product)}
          className={
            "flex items-center justify-center gap-2 p-3 font-medium rounded-lg bg-platzi-secondary-background hover:bg-platzi-primary-purple" + (
              bagProducts.find((bagProduct) => bagProduct.id === product.id) ? " cursor-not-allowed hover:bg-platzi-secondary-background" : ""
            )
          }
        >
          {
            bagProducts.map((bagProduct) => bagProduct.id).includes(product.id) ? (
              <CheckIcon className="w-5 h-5" />
            ) : (
              <>
                <ShoppingBagIcon className="w-5 h-5" /> Agregar
              </>
            )
          }
        </button>
      </div>
    </div>
  )
}

export default Product;

Product.propTypes = {
  product: propTypes.object.isRequired,
  bagProducts: propTypes.array.isRequired,
  addProductToBag: propTypes.func.isRequired
}