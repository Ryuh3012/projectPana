import React from 'react'
import LayautLogin from './LayautLogin'
import { Link } from 'react-router-dom'
import ico from "../../../assets/LOGO-DEL-IUJO-removebg-preview.png";
import axios from 'axios';

export const Login = () => {

  const response = async () => {
    return await axios.get('http://localhost:3001/users')
  }
  console.log(response())

  return (

    <LayautLogin>
      <p className="text-[30px] font-semibold text-[#313436] text-center">Iniciar sesión</p>
      <div className='flex justify-center align-center'>
        <img src={ico} className='w-[150px] justify-center' />
      </div>

      <form className="flex gap-4 my-5 flex-col">
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="id">Cédula</label>
          <input
            className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
            id="id"
            type="number"
            name="id"
            inputMode="numeric"
            placeholder="Introduce tu cédula"
          />
        </div>
        <div>
          <label htmlFor="password">Clave</label>
          <input
            id="password"
            placeholder="Introduce tu clave"
            type="password"
            className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
          />
        </div>
        <button className="border-[1px] py-3 rounded-[5px] bg-[#4a57ca] text-white font-semibold" type="submit">Ingresar</button>
      </form>
      <p className="mt-5 text-center  opacity-60">¿No tienes una cuenta? <Link to={'/register'} >Registrate</Link></p>

    </LayautLogin>


  )
}
