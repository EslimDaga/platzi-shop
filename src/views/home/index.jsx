import {
  Bars3Icon,
  ChartPieIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { getProducts } from '../../features/products/productsSlice'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useDispatch, useSelector } from 'react-redux'
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const dispatch = useDispatch();

  const { products } = useSelector(state => ({
    ...state.products,
  }))

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <>
      <header className="bg-platzi-primary-background">
        <nav className="mx-auto flex items-center justify-between p-6 px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Plazi Shop</span>
              <img className="h-8 w-auto" src="/images/logo_platzi.png" alt="logo_platzi" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Inicio
            </a>
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white outline-none">
                Categorías
                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
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
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-platzi-secondary-background shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    <div
                      className="group relative flex items-center gap-x-6 rounded-xl p-4 text-sm leading-6 hover:bg-platzi-primary-background"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-platzi-primary-background group-hover:bg-platzi-secondary-background">
                        <ChartPieIcon className="h-6 w-6 text-gray-600 group-hover:text-platzi-primary-green" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href="#" className="block font-semibold text-white">
                          Analytics
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-100">Get a better understanding of your traffic</p>
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
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link to="/iniciar-sesion" className="text-sm font-semibold leading-6 text-white">
              Iniciar sesión <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-platzi-terciary-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">platzi</span>
                <img
                  className="h-8 w-auto"
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
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-platzi-secondary-background"
                  >
                    Inicio
                  </a>
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-platzi-secondary-background">
                          Productos
                          <ChevronDownIcon
                            className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          <Disclosure.Button
                            as="a"
                            href="#"
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-platzi-secondary-background"
                          >
                            Analytics
                          </Disclosure.Button>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-platzi-secondary-background"
                  >
                    Delivery
                  </a>
                </div>
                <div className="py-6">
                  <Link
                    to="/iniciar-sesion"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-platzi-secondary-background"
                  >
                    Iniciar sesión
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <section className="p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-platzi-primary-background rounded-xl p-6">
              <div className="w-full h-60">
                <img src={product.images.length > 0 ? product.images[0] : "https://xhibiter-nextjs.netlify.app/_next/image?url=%2Fimages%2Fproducts%2Fitem_19.jpg&w=1920&q=75"} className="object-cover w-full h-full rounded-xl" />
              </div>
              <div className="pt-6">
                <h3>{product.title}</h3>
                <p>{product.description.length > 15 ? `${product.description.substring(0, 15)}...` : product.description}</p>
                <span>{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home