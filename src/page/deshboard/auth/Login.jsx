import React, { useState } from 'react'
import LayautLogin from './LayautLogin'
import { Link, useNavigate } from 'react-router-dom'
import ico from "../../../assets/LOGO-DEL-IUJO-removebg-preview.png";
import axios from 'axios';
import { useFormik } from 'formik';

const initialValues = { usuario: '', password: '' }
export const Login = () => {

  const navegation = useNavigate()
  const [errorInternal, setErrorInternal] = useState(null)

  const validate = (value)=>{
    let errors={}
    if (!value.usuario.toString().replace(/[^0-9]*$/, '')) errors.usuario = 'no se permite letras'
    if (!value.usuario) errors.usuario = 'La Cedula Muy Corta'

  }

  const formik = useFormik({
    initialValues,
    onSubmit: async ({ usuario, password }, { resetForm }) => {
      try {
        console.log(usuario)
        const url = `http://localhost:3001/clients`
        const { data } = await axios.get(url)
        console.log(data)
        if (data) {
          const verifyDuplicate = data.res.filter((e) => e.usuario == usuario)
          if (verifyDuplicate.length > 0 && verifyDuplicate[0]?.password == password) {
            return navegation('/index')
          }
          else {
            setErrorInternal('Usuario invalido')
            console.log(data.res)
            setTimeout(() => {
              setErrorInternal(null)
            }, 3000);

          }
        }
      } catch (error) {
        console.log(error)
      }

    },
    validate
  })

  return (

    <LayautLogin>
      <p className="text-[30px] font-semibold text-[#313436] text-center">Iniciar sesión</p>
      <div className='flex justify-center align-center'>
        <img src={ico} className='w-[150px] justify-center' />
      </div>

      <form className="flex gap-4 my-5 flex-col">
      {formik.touched.usuario && formik.errors.usuario ? <p className="bg-red-100 border border-red-400 text-red-700 px-1 rounded relative py-1"  >{formik.errors.usuario}</p> : null}
        {errorInternal && (<p className="bg-red-600 pl-4 text-white rounded-[3px] py-1">{errorInternal}</p>)}
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="usuario">Cédula</label>
          <input
            className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
            id="usuario"
            type="number"
            name="usuario"
            inputMode="numeric"
            {...formik.getFieldProps('usuario')}
            placeholder="Introduce tu cédula"
          />
        </div>
        <div>
          <label htmlFor="password">Clave</label>
          <input
            id="password"
            placeholder="Introduce tu clave"
            type="password"
            {...formik.getFieldProps('password')}
            className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
          />
        </div>
        <button className="border-[1px] py-3 rounded-[5px] bg-[#4a57ca] text-white font-semibold" type="submit">Ingresar</button>
      </form>
      <p className="mt-5 text-center  opacity-60">¿No tienes una cuenta? <Link to={'/register'} >Registrate</Link></p>

    </LayautLogin>


  )
}
