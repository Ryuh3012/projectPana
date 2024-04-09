import React from 'react'
import LayautLogin from './LayautLogin'
import { Link, useNavigate } from 'react-router-dom'
import { Textarea } from '@nextui-org/react'
import { useFormik } from 'formik'
import axios from 'axios'
import ico from "../../../assets/LOGO-DEL-IUJO-removebg-preview.png";

const initialValues = {
  id: '',
  name: '',
  middleName: '',
  lastName: '',
  middleLastName: '',
  phone: '',
  email: '',
  UserType: '',
  password: '',
  gender: '',
  yearGraduation: '',
  PlaceofBirth: '',
  address: '',
  FromOrigin: '',
}


export const Register = () => {

  const navegation= useNavigate()

  const validate = (values)=>{
    let errors = {}
    if (!values.id.toString().replace(/[^0-9]*$/, '')) errors.id = 'no se permite letras'
        if (!values.id) errors.id = 'La Cedula Muy Corta'
        if (!values.name) errors.name = 'Requiere Nombre'
        if (!values.middleName) errors.middleName = 'Requiere Segundo Nombre'
        if (!values.lastName) errors.lastName = 'Requiere Apellido'
        if (!values.middleLastName) errors.middleLastName = 'Requiere Segundo Apellido'
        if (!values.phone) errors.phone = 'Requiere telefono'
        if (!values.phone.toString().replace(/[^0-9]*$/, '')) errors.phone = 'no se permite letras'
        if (!values.email) errors.email = 'Requiere Correo'
        if (!values.UserType) errors.UserType = 'Requiere El Tipo De Usuario'
        if (!values.gender) errors.gender = 'Debe Eligir Un sexo'
        if (!values.yearGraduation) errors.yearGraduation = 'Debes Poner Una Fecha Graduacion'
        if (!values.password) errors.password = 'Requiere Contraseña'
        if (!values.PlaceofBirth) errors.PlaceofBirth = 'Requiere Lugar de nacimiento'
        if (!values.address) errors.address = 'Requiere La Direccion'
        if (!values.FromOrigin) errors.FromOrigin = 'requiere plantel De Procedencia'
        
        return errors
  }

  const formik = useFormik({
    initialValues,
    onSubmit: async (value, { resetForm }) => {
      const { id, name, middleName, lastName, middleLastName, address, phone, email, PlaceofBirth, yearGraduation, FromOrigin, password, gender, UserType } = value
      await axios.post('http://localhost:3001/users', {
        data: {
          cedula: id,
          nombre: name,
          segundoNombre: middleName,
          apellido: lastName,
          segundoApellido: middleLastName,
          direccion: address,
          telefono: phone,
          email,
          lugarDeNacimiento: PlaceofBirth,
          añoDeGraduacion: yearGraduation,
          plantelDeProcedencia: FromOrigin,
          tipoDeusuario:UserType,
          password,
          gender,

        }
      })
        .catch(err => console.log(err))
      return navegation('/')
    },
    validate

  })




  return (
    <LayautLogin>
     <div className='flex justify-center align-center'>
      <img src={ico} className='w-[150px] justify-center'/>
      <p className="text-[30px] font-semibold text-[#313436] text-center">Registrate</p>
      </div>
      <form onSubmit={formik.handleSubmit} className="flex gap-4 my-5 flex-col">
      {formik.touched.id && formik.errors.id ? <p className="bg-red-100 border border-red-400 text-red-700 px-1 rounded relative py-1"  >{formik.errors.id}</p> : null}
      {formik.touched.name && formik.errors.name ? <p className="bg-red-100 border border-red-400 text-red-700 px-1 rounded relative py-1"  >{formik.errors.name}</p> : null}
      {formik.touched.middleName && formik.errors.middleName ? <p className="bg-red-100 border border-red-400 text-red-700 px-1 rounded relative py-1"  >{formik.errors.middleName}</p> : null}
      {formik.touched.lastName && formik.errors.lastName ? <p className="bg-red-100 border border-red-400 text-red-700 px-1 rounded relative py-1"  >{formik.errors.lastName}</p> : null}
      {formik.touched.middleLastName && formik.errors.middleLastName ? <p className="bg-red-100 border border-red-400 text-red-700 px-1 rounded relative py-1"  >{formik.errors.middleLastName}</p> : null}
      {formik.touched.phone && formik.errors.phone ? <p className="bg-red-100 border border-red-400 text-red-700 px-1 rounded relative py-1"  >{formik.errors.phone}</p> : null}
      {formik.touched.email && formik.errors.email ? <p className="bg-red-100 border border-red-400 text-red-700 px-1 rounded relative py-1"  >{formik.errors.email}</p> : null}
      {formik.touched.UserType && formik.errors.UserType ? <p className="bg-red-100 border border-red-400 text-red-700 px-1 rounded relative py-1"  >{formik.errors.UserType}</p> : null}
      {formik.touched.gender && formik.errors.gender ? <p className="bg-red-100 border border-red-400 text-red-700 px-1 rounded relative py-1"  >{formik.errors.gender}</p> : null}
      {formik.touched.yearGraduation && formik.errors.yearGraduation ? <p className="bg-red-100 border border-red-400 text-red-700 px-1 rounded relative py-1"  >{formik.errors.yearGraduation}</p> : null}
      {formik.touched.password && formik.errors.password ? <p className="bg-red-100 border border-red-400 text-red-700 px-1 rounded relative py-1"  >{formik.errors.password}</p> : null}
      {formik.touched.PlaceofBirth && formik.errors.PlaceofBirth ? <p className="bg-red-100 border border-red-400 text-red-700 px-1 rounded relative py-1"  >{formik.errors.PlaceofBirth}</p> : null}
      {formik.touched.address && formik.errors.address ? <p className="bg-red-100 border border-red-400 text-red-700 px-1 rounded relative py-1"  >{formik.errors.address}</p> : null}
      {formik.touched.FromOrigin && formik.errors.FromOrigin ? <p className="bg-red-100 border border-red-400 text-red-700 px-1 rounded relative py-1"  >{formik.errors.FromOrigin}</p> : null}
     
        <div className='flex gap-3 items-center'>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="name">Nombre</label>
            <input
              className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
              id="name"
              type="text"
              name="name"
              required={true}
              inputMode="text"
              {...formik.getFieldProps('name')}
              placeholder="Introduce tu nombre"
            />
          </div>
          <div className='flex flex-col w-full gap-2'>
            <label htmlFor="middleName">Segundo Nombre</label>
            <input
              id="middleName"
              placeholder="Introduce tu Segundo nombre"
              type="middleName"
              required={true}
              className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
              {...formik.getFieldProps('middleName')}
            />
          </div>
          <div className='flex flex-col w-full gap-2'>

            <label htmlFor="lastName">Apellido</label>
            <input
              className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
              id="lastName"
              type="lastName"
              required={true}
              name="lastName"
              inputMode="apellido"
              placeholder="Introduce tu apellido"
              {...formik.getFieldProps('lastName')}
            />
          </div>
          <div className='flex flex-col w-full gap-2'>

            <label htmlFor="middleLastName">Segundo Apellido</label>
            <input
              className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
              id="middleLastName"
              type="middleLastName"
              name="middleLastName"
              required={true}
              inputMode="middleLastName"
              placeholder="Introduce tu Segundo Apellido"
              {...formik.getFieldProps('middleLastName')}
            />
          </div>
        </div>

        <div className="flex w-full gap-3">

          <div className='flex flex-col w-full gap-2'>

            <label htmlFor="phone">Telefono</label>
            <input
              className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
              id="phone"
              type="phone"
              name="phone"
              required={true}
              inputMode="phone"
              placeholder="Introduce tu telefono"
              {...formik.getFieldProps('phone')}
            />
          </div>
          <div className='flex flex-col w-full gap-2'>
            <label htmlFor="email">Correo</label>
            <input
              className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
              id="email"
              type="email"
              name="email"
              required={true}
              inputMode="email"
              placeholder="Introduce tu Correo"
              {...formik.getFieldProps('email')}
            />
          </div>

          <div className="flex flex-col w-full gap-2">
            <label htmlFor="id">Cédula</label>
            <input
              className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
              id="id"
              {...formik.getFieldProps('id')}
              placeholder="Introduce tu id"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="yearGraduation">Año De Graduacion</label>
            <input
              className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
              id="yearGraduation"
              type="date"
              name="yearGraduation"
              required={true}
              inputMode="text"
              {...formik.getFieldProps('yearGraduation')}
            />
          </div>
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="password">Contraseña</label>
          <input
            className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
            id="password"
            type="password"
            name="password"
            required={true}
            {...formik.getFieldProps('password')}
            inputMode="text"
            placeholder="Introduce tu contraseña"
          />
        </div>


        <div className="flex w-full gap-3">
          <div className='w-[50%]'>
            <label htmlFor="gender">Genero</label>
            <select
              className='w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]'
              name="gender"
              id="gender"
              {...formik.getFieldProps('gender')}
            >
              <option value={''}></option>
              <option value={'masculino'}>Masculino</option>
              <option value={'femenino'}>Femenino</option>
            </select>
          </div>
          <div className='w-[50%]'>
            <label htmlFor="UserType">Tipo De Usuario</label>
            <select
              className='w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]'
              name="UserType"
              id="UserType"
              {...formik.getFieldProps('UserType')}
            >
              <option value={''}></option>
              <option value={'profesor'}>Profesor</option>
              <option value={'alumno'}>Alumno</option>
            </select>
          </div>
        </div>



        <div className="flex w-full gap-3">
          <div className='w-[50%]'>
            <label htmlFor="PlaceofBirth">Lugar De Nacimiento</label>
            <Textarea
              isRequired
              className='"w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]'
              id='PlaceofBirth'
              name='PlaceofBirth'
              labelPlacement="outside"
              placeholder="Ingresa tu lugar De Nacimiento"
              {...formik.getFieldProps('PlaceofBirth')}
            />
          </div>
          <div className='w-[50%]'>
            <label htmlFor="address">Direccion</label>
            <Textarea
              isRequired
              id='address'
              name='address'
              className='"w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]'
              labelPlacement="outside"
              placeholder="Ingresa tu direccion"
              {...formik.getFieldProps('address')}
            />
          </div>
          <div className='w-[50%]'>
            <label htmlFor="FromOrigin">Plantel De Procedencia</label>
            <Textarea
              isRequired
              className='"w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]'
              id='FromOrigin'
              name='FromOrigin'
              labelPlacement="outside"
              placeholder="Ingresa Plantel De Procedencia"
              {...formik.getFieldProps('FromOrigin')}
            />
          </div>
        </div>

        <button className="border-[1px] py-3 rounded-[5px] bg-[#4a57ca] text-white font-semibold" type="submit">Registrarse</button>
      </form>
      <p className="mt-5 text-center  opacity-60">Ya tienes una cuenta? <Link to={'/'} >Inicia sesión</Link></p>
    </LayautLogin>
  )
}
