import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/solid"

const SignIn = () => {
  return (
    <div className="flex justify-between min-h-screen font-sans bg-platzi-primary-background">
      <div
        className="relative hidden w-1/2 bg-center bg-cover lg:block bg-platzi-primary-purple"
      >
        <div className="absolute flex flex-col items-center justify-center w-full bottom-20">
          <img src="/images/shopping_bags.svg" alt="" />
          <div className="max-w-md text-center">
            <span className="text-3xl font-bold leading-loose text-white">
              Una mejor forma de comprar
            </span>
            <p className="font-light leading-7 text-gray-200">
              Platzi Shop es una plataforma donde puedes comprar y vender tus productos online.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 max-w-2xl mx-auto">
        <div className="flex flex-col justify-center h-screen p-6 text-white lg:px-14 xl:px-24">
          <img src="images/logo_platzi.png" className="self-center w-32 pb-10 lg:pb-10 md:self-end" />
          <div >
            <h1 className="text-2xl font-bold leading-loose tracking-wide lg:text-3xl xl:text-3xl whitespace-nowrap">
              Bienvenido de nuevo!
            </h1>
            <span className="text-sm font-light text-gray-200 lg:text-base xl:text-base">
              ¡Accede ahora! Gestiona tus compras de manera sencilla.
            </span>
            <div
              className="flex flex-wrap items-center justify-between pt-6 gap-y-4 gap-x-6 whitespace-nowrap"
            >
              <button
                className="flex items-center justify-center flex-1 px-3 py-4 bg-white border border-gray-400 rounded-xl whitespace-nowrap hover:bg-gray-50 focus:outline-none focus:ring-gray-100 focus:ring-4"
              >
                <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                  <path d="M22.305 10.041H21.5V10h-9v4h5.651A5.998 5.998 0 0 1 6.5 12a6 6 0 0 1 6-6c1.53 0 2.921.577 3.98 1.52L19.31 4.69A9.954 9.954 0 0 0 12.5 2c-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-.67-.069-1.325-.195-1.959Z" fill="#FFC107"></path>
                  <path d="m3.653 7.346 3.286 2.409A5.997 5.997 0 0 1 12.5 6c1.53 0 2.921.577 3.98 1.52L19.31 4.69A9.954 9.954 0 0 0 12.5 2a9.994 9.994 0 0 0-8.847 5.346Z" fill="#FF3D00"></path>
                  <path d="M12.5 22c2.583 0 4.93-.988 6.704-2.596l-3.095-2.619A5.955 5.955 0 0 1 12.5 18a5.997 5.997 0 0 1-5.641-3.973L3.598 16.54C5.253 19.777 8.614 22 12.5 22Z" fill="#4CAF50"></path>
                  <path d="M22.305 10.041H21.5V10h-9v4h5.651a6.02 6.02 0 0 1-2.043 2.785h.002l3.095 2.619C18.985 19.602 22.5 17 22.5 12c0-.67-.069-1.325-.195-1.959Z" fill="#1976D2"></path>
                </svg>
                <span className="pl-3 font-medium text-gray-900">Acceder con Google</span>
              </button>
            </div>
            <div className="flex items-center justify-between pt-6">
              <hr className="w-full border-gray-200" />
              <span className="px-4 font-light tracking-wider text-white">o</span>
              <hr className="w-full border-gray-200" />
            </div>
            <form action="">
              <div className="pt-6">
                <label htmlFor="email" className="font-light">Correo Electronico</label>
                <div
                  className="flex items-center w-full mt-2 overflow-hidden transition-all border border-gray-400 rounded-xl focus-within:shadow-lg focus-within:border-platzi-primary-green hover:border-platzi-primary-green"
                >
                  <div className="flex items-center justify-center pl-4">
                    <EnvelopeIcon className="w-6 h-6 pointer-events-none" />
                  </div>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Ingresa tu correo electronico"
                    className="w-full p-4 font-light border-0 focus:outline-none focus:ring-0 bg-platzi-primary-background"
                  />
                </div>
              </div>
              <div className="pt-6">
                <label htmlFor="password" className="font-light">Contraseña</label>
                <div
                  className="flex items-center w-full mt-2 overflow-hidden transition-all border border-gray-400 rounded-xl focus-within:shadow-lg focus-within:border-platzi-primary-green hover:border-platzi-primary-green"
                >
                  <div className="flex items-center justify-center pl-4">
                    <LockClosedIcon className="w-6 h-6 pointer-events-none" />
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Ingresa tu contraseña"
                    className="w-full p-4 font-light border-0 focus:outline-none focus:ring-0 bg-platzi-primary-background"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    className="w-5 h-5 bg-white border border-gray-400 rounded text-platzi-primary-green focus:outline-none focus:ring-platzi-primary-green accent-platzi-primary-green"
                  />
                  <label htmlFor="remember" className="pl-4 font-light text-white">
                    Recordarme
                  </label>
                </div>
              </div>
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full px-8 py-4 text-white shadow-lg bg-platzi-primary-purple rounded-xl hover:bg-platzi-primary-purple focus:ring-4 focus:ring-platzi-primary-purple focus:outline-none"
                >
                  Iniciar Sesión
                </button>
              </div>
            </form>
            <div className="pt-4">
              <div className="font-light text-center text-white">
                ¿Aún no tienes una cuenta? {" "}
                <a href="#" className="font-normal text-platzi-primary-green hover:text-platzi-primary-green">
                  Crea una cuenta
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-between pt-4 text-center gap-y-2">
                <span className="flex-1 text-gray-500">© 2021 Platzi Shop. Todos los derechos reservados.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn;