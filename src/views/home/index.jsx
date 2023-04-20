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
import { ChevronDownIcon, HeartIcon, ShoppingBagIcon, ShoppingCartIcon } from "@heroicons/react/20/solid";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import 'react-lazy-load-image-component/src/effects/blur.css';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bagAmount, setBagAmount] = useState(0);

  const dispatch = useDispatch();

  const { products } = useSelector((state) => ({
    ...state.products,
  }));

  useEffect(() => {
    dispatch(getProducts());
  }, []);

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
            <div className="flex flex-row p-2 px-4 truncate rounded cursor-pointer">
              <div></div>
              <div className="flex flex-row-reverse w-full ml-2">
                <div slot="icon" className="relative">
                  {bagAmount > 0 && (
                    <div className="absolute top-0 right-0 flex items-center justify-center w-5 px-2 pt-[2px] pb-[1px] -mt-1 -mr-2 text-xs font-bold text-white bg-red-700 rounded-full">{bagAmount}</div>
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
            <div className="flex flex-row p-2 px-4 truncate rounded cursor-pointer">
              <div></div>
              <div className="flex flex-row-reverse w-full ml-2">
                <div slot="icon" className="relative">
                  {bagAmount > 0 && (
                    <div className="absolute top-0 right-0 flex items-center justify-center w-5 px-2 pt-[2px] pb-[1px] -mt-1 -mr-2 text-xs font-bold text-white bg-red-700 rounded-full">{bagAmount}</div>
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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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
                <span className="font-semibold text-platzi-primary-green">S/ {product.price}</span>
                <button
                  onClick={
                    () => {
                      setBagAmount(bagAmount + 1);
                    }
                  } className="flex items-center justify-center gap-2 p-3 rounded-lg bg-platzi-secondary-background hover:bg-platzi-primary-purple">
                  Agregar al carrito <ShoppingCartIcon className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
