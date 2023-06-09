import { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Dialog, Transition } from "@headlessui/react";
import propTypes from "prop-types";
import ProductInBag from "./ProductInBag";

const BagSidebar = ({ openBag, openCloseBagHandler, bagProducts, onChangeQuantity, deleteProductFromBag }) => {
  return (
    <Transition.Root show={openBag} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={openCloseBagHandler}>
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
                            onClick={openCloseBagHandler}
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
                                <ProductInBag key={product.id} product={product} onChangeQuantity={onChangeQuantity} deleteProductFromBag={deleteProductFromBag} />
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
                            onClick={openCloseBagHandler}
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
  )
}

export default BagSidebar;

BagSidebar.propTypes = {
  openBag: propTypes.bool.isRequired,
  openCloseBagHandler: propTypes.func.isRequired,
  bagProducts: propTypes.array.isRequired,
  onChangeQuantity: propTypes.func.isRequired,
  deleteProductFromBag: propTypes.func.isRequired
};