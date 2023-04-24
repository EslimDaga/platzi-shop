import {
  Bars3Icon,
  ChartPieIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { getProducts } from "../../features/products/productsSlice";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect, useState } from "react";
import { CheckIcon, ChevronDownIcon, HeartIcon, ShoppingBagIcon, ShoppingCartIcon, TrashIcon } from "@heroicons/react/20/solid";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import 'react-lazy-load-image-component/src/effects/blur.css';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Home = () => {
  const [openBag, setOpenBag] = useState(false);
  const [bagTotal, setBagTotal] = useState(0);
  const [bagProducts, setBagProducts] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Inicio
            </a>
            <Popover className="relative">
              <Popover.Button className="flex items-center text-sm font-semibold leading-6 text-white outline-none gap-x-1">
                Categorías
                <ChevronDownIcon
                  className="flex-none w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute z-10 w-screen max-w-md mt-3 overflow-hidden shadow-lg -left-8 top-full rounded-3xl bg-platzi-secondary-background ring-1 ring-gray-900/5">
                  <div className="p-4">
                    <div className="relative flex items-center p-4 text-sm leading-6 group gap-x-6 rounded-xl hover:bg-platzi-primary-background">
                      <div className="flex items-center justify-center flex-none h-11 w-11 rounded-xl bg-platzi-primary-background group-hover:bg-platzi-secondary-background">
                        <ChartPieIcon
                          className="w-6 h-6 text-gray-600 group-hover:text-platzi-primary-green"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a href="#" className="block font-semibold text-white">
                          Analytics
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-100">
                          Get a better understanding of your traffic
                        </p>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Delivery
            </a>
          </Popover.Group>
          <div className="items-center hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="/iniciar-sesion"
              className="text-sm font-semibold leading-6 text-white"
            >
              Iniciar sesión <span aria-hidden="true">&rarr;</span>
            </Link>
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
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-platzi-terciary-background sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">platzi</span>
                <img
                  className="w-auto h-8"
                  src="/images/logo_platzi.png"
                  alt="logo_platzi"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flow-root mt-6">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-6 space-y-2">
                  <a
                    href="#"
                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-white rounded-lg hover:bg-platzi-secondary-background"
                  >
                    Inicio
                  </a>
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-platzi-secondary-background">
                          Productos
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          <Disclosure.Button
                            as="a"
                            href="#"
                            className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white rounded-lg hover:bg-platzi-secondary-background"
                          >
                            Analytics
                          </Disclosure.Button>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <a
                    href="#"
                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-white rounded-lg hover:bg-platzi-secondary-background"
                  >
                    Delivery
                  </a>
                </div>
                <div className="py-6">
                  <Link
                    to="/iniciar-sesion"
                    className="-mx-3 block bg-platzi-primary-purple rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-platzi-secondary-background"
                  >
                    Iniciar sesión
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
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
