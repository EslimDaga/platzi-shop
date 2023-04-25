import { ShoppingBagIcon } from "@heroicons/react/20/solid"
import propTypes from "prop-types"

const Header = ({ openCloseBagHandler, bagTotal }) => {
  return (
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
        <div className="flex">
          <div
            className="flex flex-row p-2 px-4 truncate rounded cursor-pointer"
            onClick={openCloseBagHandler}
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
  )
}

export default Header;

Header.propTypes = {
  openCloseBagHandler: propTypes.func.isRequired,
  bagTotal: propTypes.number.isRequired,
}