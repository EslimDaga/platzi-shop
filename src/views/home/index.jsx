import { XMarkIcon } from "@heroicons/react/24/outline";
import { getProducts } from "../../features/products/productsSlice";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect, useState } from "react";
import { CheckIcon, HeartIcon, ShoppingBagIcon, TrashIcon } from "@heroicons/react/20/solid";
import 'react-lazy-load-image-component/src/effects/blur.css';


const Home = () => {
  const [openBag, setOpenBag] = useState(false);
  const [bagTotal, setBagTotal] = useState(0);
  const [bagProducts, setBagProducts] = useState([]);

  const dispatch = useDispatch();

  const { products } = useSelector((state) => ({
    ...state.products,
  }));

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setBagTotal(bagProducts.length);
    }, 500);
  }, [bagProducts]);

  return (
    <>
      <header>
        <nav
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full p-5 px-8 mx-auto bg-platzi-primary-background"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Plazi Shop</span>
              <img
                className="w-auto h-8"
                src="/images/logo_platzi.png"
                alt="logo_platzi"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <div
              className="flex flex-row p-2 px-4 truncate rounded cursor-pointer"
              onClick={() => {
                setOpenBag(!openBag);
              }}
            >
              <div></div>
              <div className="flex flex-row-reverse w-full ml-2">
                <div slot="icon" className="relative">
                  {bagTotal > 0 && (
                    <div className="absolute top-0 right-0 flex items-center justify-center w-5 px-2 pt-[2px] pb-[1px] -mt-1 -mr-2 text-xs font-bold text-white bg-red-700 rounded-full">{bagTotal}</div>
                  )}
                  <ShoppingBagIcon className="w-6 h-6 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          <div className="items-center hidden lg:flex lg:flex-1 lg:justify-end">
            <div
              className="flex flex-row p-2 px-4 truncate rounded cursor-pointer"
              onClick={() => { setOpenBag(!openBag); }}
            >
              <div></div>
              <div className="flex flex-row-reverse w-full ml-2">
                <div slot="icon" className="relative">
                  {bagTotal > 0 && (
                    <div className="absolute top-0 right-0 flex items-center justify-center w-5 px-2 pt-[2px] pb-[1px] -mt-1 -mr-2 text-xs font-bold text-white bg-red-700 rounded-full">{bagTotal}</div>
                  )}
                  <ShoppingBagIcon className="w-6 h-6 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <section className="px-8 py-5 mt-20">
        <Transition.Root show={openBag} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={setOpenBag}>
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 transition-opacity bg-opacity-75 bg-platzi-terciary-background" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <Dialog.Panel className="w-screen max-w-md pointer-events-auto">
                      <div className="flex flex-col h-full shadow-xl bg-platzi-primary-background">
                        <div className="flex-1 px-4 py-6 overflow-y-auto sm:px-6">
                          <div className="flex items-start justify-between">
                            <Dialog.Title className="text-lg font-medium text-white">Carrito</Dialog.Title>
                            <div className="flex items-center ml-3 h-7">
                              <button
                                type="button"
                                className="p-2 -m-2 text-gray-200 outline-none hover:text-gray-300"
                                onClick={() => setOpenBag(false)}
                              >
                                <span className="sr-only">Close panel</span>
                                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                          <div className="mt-8">
                            <div className="flow-root">
                              <ul role="list" className="-my-6 divide-y divide-platzi-terciary-background">
                                {bagProducts.length > 0 ? (
                                  bagProducts.map((product) => (
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
                                                const newBagProducts = bagProducts.map((bagProduct) => {
                                                  if (bagProduct.id === product.id) {
                                                    return {
                                                      ...bagProduct,
                                                      quantity: Number(e.target.value),
                                                    };
                                                  }
                                                  return bagProduct;
                                                });
                                                setBagProducts(newBagProducts);
                                              }
                                            } className="w-16 px-2 py-2 rounded-lg outline-none bg-platzi-terciary-background" />
                                          </div>
                                          <div className="flex">
                                            <button
                                              type="button"
                                              className="flex items-center justify-center px-4 py-3 font-medium text-white rounded-md bg-platzi-primary-purple hover:bg-platzi-secondary-purple"
                                              onClick={() => {
                                                const newBagProducts = bagProducts.filter((bagProduct) => bagProduct.id !== product.id);
                                                setBagProducts(newBagProducts);
                                              }}
                                            >
                                              Eliminar
                                              <TrashIcon className="w-5 h-5 ml-2" aria-hidden="true" />
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  ))
                                ) : (
                                  <li className="flex py-6">
                                    <div className="flex items-center justify-center flex-1">
                                      <p className="text-sm font-medium text-white">No hay productos en el carrito</p>
                                    </div>
                                  </li>
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="px-4 py-6 border-t border-platzi-terciary-background sm:px-6">
                          <div className="flex justify-between text-base font-medium text-white">
                            <p>Subtotal</p>
                            <p>{
                              bagProducts.length > 0
                                ? "S/ " + bagProducts.reduce((acc, product) => acc + (product.price * product.quantity), 0)
                                : "S/ " + 0
                            }</p>
                          </div>
                          <p className="mt-0.5 text-sm text-gray-500">Envío e impuestos calculados al finalizar la compra.</p>
                          <div className="mt-6">
                            <a
                              href="#"
                              className="flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
                            >
                              Proceder al pago
                            </a>
                          </div>
                          <div className="flex justify-center mt-6 text-sm text-center text-gray-500">
                            <p>
                              o {""}
                              <button
                                type="button"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                onClick={() => setOpenBag(false)}
                              >
                                Seguir comprando
                                <span aria-hidden="true"> &rarr;</span>
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              className="p-6 bg-platzi-primary-background rounded-xl"
              key={product.id}
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
                  disabled={
                    bagProducts.find((bagProduct) => bagProduct.id === product.id) ? true : false
                  }
                  onClick={
                    () => {
                      if (bagProducts.find((bagProduct) => bagProduct.id === product.id)) {
                        const newBagProducts = bagProducts.map((bagProduct) => {
                          if (bagProduct.id === product.id) {
                            return {
                              ...bagProduct,
                              quantity: bagProduct.quantity + 1,
                            };
                          }
                          return bagProduct;
                        });
                        setBagProducts(newBagProducts);
                      } else {
                        setBagProducts([...bagProducts, { ...product, quantity: 1 }]);
                      }
                    }
                  }
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
          ))}
        </div>
      </section >
    </>
  );
};

export default Home;
