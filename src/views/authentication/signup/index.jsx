import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { EnvelopeIcon, LockClosedIcon, UserIcon } from "@heroicons/react/24/solid";
import * as Yup from 'yup';

const SignUp = () => {

  const formikSignUp = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      avatar: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('El nombre es obligatorio'),
      email: Yup.string()
        .email('El correo no es válido')
        .required('El correo es obligatorio'),
      password: Yup.string()
        .required('La contraseña es obligatoria')
        .min(6, 'La contraseña debe tener al menos 6 caracteres'),
      passwordConfirmation: Yup.string()
        .required('La confirmación de la contraseña es obligatoria')
        .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden'),
    }),
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <div className="flex justify-between min-h-screen font-sans bg-platzi-primary-background">
      <div
        className="relative hidden w-1/2 bg-center bg-cover lg:block bg-platzi-primary-purple"
      >
        <div className="absolute flex flex-col items-center justify-center w-full bottom-20">
          <img src="/images/shopping_bags.svg" alt="shopping_bags" />
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
        <div className="flex flex-col p-4 text-white lg:px-14 xl:px-24">
          <img src="images/logo_platzi.png" className="self-center w-32 pb-10 lg:pb-4 md:self-end" alt="logo_platzi" />
          <div>
            <h1 className="pb-6 text-2xl font-bold leading-loose tracking-wide lg:text-3xl xl:text-3xl whitespace-nowrap">
              ¡Registrate ahora!
            </h1>
            <form onSubmit={formikSignUp.handleSubmit}>
              <div className="pt-4">
                <label htmlFor="name" className="font-light">Nombres</label>
                <div
                  className={
                    `flex items-center w-full mt-2 overflow-hidden transition-all border border-gray-400 rounded-xl focus-within:shadow-lg focus-within:border-platzi-primary-green hover:border-platzi-primary-green`
                    + (formikSignUp.touched.name && formikSignUp.errors.name ? ' border-red-500 hover:border-red-500 focus-within:border-red-500' : '')
                  }
                >
                  <div className="flex items-center justify-center pl-4">
                    <UserIcon className="w-6 h-6 pointer-events-none" />
                  </div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formikSignUp.handleChange}
                    onBlur={formikSignUp.handleBlur}
                    value={formikSignUp.values.name}
                    placeholder="Ingresa tu correo electronico"
                    className="w-full p-4 font-light border-0 focus:outline-none focus:ring-0 bg-platzi-primary-background"
                  />
                </div>
                {
                  formikSignUp.touched.name && formikSignUp.errors.name ? (
                    <div className="mt-2 text-sm text-red-500">{formikSignUp.errors.name}</div>
                  ) : null
                }
              </div>
              <div className="pt-4">
                <label htmlFor="email" className="font-light">Correo Electronico</label>
                <div
                  className={
                    `flex items-center w-full mt-2 overflow-hidden transition-all border border-gray-400 rounded-xl focus-within:shadow-lg focus-within:border-platzi-primary-green hover:border-platzi-primary-green`
                    + (formikSignUp.touched.email && formikSignUp.errors.email ? ' border-red-500 hover:border-red-500 focus-within:border-red-500' : '')
                  }
                >
                  <div className="flex items-center justify-center pl-4">
                    <EnvelopeIcon className="w-6 h-6 pointer-events-none" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    onChange={formikSignUp.handleChange}
                    onBlur={formikSignUp.handleBlur}
                    value={formikSignUp.values.email}
                    placeholder="Ingresa tu correo electronico"
                    className="w-full p-4 font-light border-0 focus:outline-none focus:ring-0 bg-platzi-primary-background"
                  />
                </div>
                {
                  formikSignUp.touched.email && formikSignUp.errors.email ? (
                    <div className="mt-2 text-sm text-red-500">{formikSignUp.errors.email}</div>
                  ) : null
                }
              </div>
              <div className="pt-4">
                <label htmlFor="password" className="font-light">Contraseña</label>
                <div
                  className={
                    `flex items-center w-full mt-2 overflow-hidden transition-all border border-gray-400 rounded-xl focus-within:shadow-lg focus-within:border-platzi-primary-green hover:border-platzi-primary-green`
                    + (formikSignUp.touched.password && formikSignUp.errors.password ? ' border-red-500 hover:border-red-500 focus-within:border-red-500' : '')
                  }
                >
                  <div className="flex items-center justify-center pl-4">
                    <LockClosedIcon className="w-6 h-6 pointer-events-none" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formikSignUp.handleChange}
                    onBlur={formikSignUp.handleBlur}
                    value={formikSignUp.values.password}
                    placeholder="Ingresa tu contraseña"
                    className="w-full p-4 font-light border-0 focus:outline-none focus:ring-0 bg-platzi-primary-background"
                  />
                </div>
                {
                  formikSignUp.touched.password && formikSignUp.errors.password ? (
                    <div className="mt-2 text-sm text-red-500">{formikSignUp.errors.password}</div>
                  ) : null
                }
              </div>
              <div className="pt-4">
                <label htmlFor="passwordConfirmation" className="font-light">Confirmar Contraseña</label>
                <div
                  className={
                    `flex items-center w-full mt-2 overflow-hidden transition-all border border-gray-400 rounded-xl focus-within:shadow-lg focus-within:border-platzi-primary-green hover:border-platzi-primary-green`
                    + (formikSignUp.touched.passwordConfirmation && formikSignUp.errors.passwordConfirmation ? ' border-red-500 hover:border-red-500 focus-within:border-red-500' : '')
                  }
                >
                  <div className="flex items-center justify-center pl-4">
                    <LockClosedIcon className="w-6 h-6 pointer-events-none" />
                  </div>
                  <input
                    id="passwordConfirmation"
                    name="passwordConfirmation"
                    type="password"
                    onChange={formikSignUp.handleChange}
                    onBlur={formikSignUp.handleBlur}
                    value={formikSignUp.values.passwordConfirmation}
                    placeholder="Ingresa tu contraseña"
                    className="w-full p-4 font-light border-0 focus:outline-none focus:ring-0 bg-platzi-primary-background"
                  />
                </div>
                {
                  formikSignUp.touched.passwordConfirmation && formikSignUp.errors.passwordConfirmation ? (
                    <div className="mt-2 text-sm text-red-500">{formikSignUp.errors.passwordConfirmation}</div>
                  ) : null
                }
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full px-8 py-4 text-white shadow-lg bg-platzi-primary-purple rounded-xl hover:bg-platzi-primary-purple focus:ring-4 focus:ring-platzi-primary-purple focus:outline-none"
                >
                  Registrarse
                </button>
              </div>
            </form>
            <div className="pt-4">
              <div className="font-light text-center text-white">
                ¿Ya tienes una cuenta? {" "}
                <Link to="/iniciar-sesion" className="font-normal text-platzi-primary-green hover:text-platzi-primary-green">
                  Inicia sesión
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;