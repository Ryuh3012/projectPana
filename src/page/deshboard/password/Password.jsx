import React from 'react'
import { Button } from "@nextui-org/react";
import { Layaut } from '../Layaut';
import { useFormik } from 'formik';
import axios from 'axios';
import Cookies from 'universal-cookie';

export const Password = () => {
    const initialValues = { password: '', newPassword: '', repeatPassword:''}

    const cookis = new Cookies()
    const user = cookis.get('users').filter(e => e)

    const validate = (value) => {
        let errors
        if (!value.password === user[0].password) errors.password = 'No es tu contraseña'
        if (!value.repeatPassword === !value.newPassword) errors.repeatPassword = 'No coinsiden '
    }


    const formik = useFormik({
        initialValues,
        onSubmit: async (value) => {
            // const url = 'http://localhost:3001/clients'
            const { password, newPassword } = value
            if (password == user[0].password) {

                console.log(newPassword)
            }
            // const newData = await axios.put(url,{
            //     password: newPassword
            // })
        },
        validate


    })

    return (
        <Layaut>
            <div className='bg-[#d9dbe0] h-full'>
                <div className="p-10 flex flex-col gap-6">
                    <div className="flex justify-between gap-10">
                        <div className="bg-white rounded-[5px] p-5 shadow-md w-full border-[1px] border-[#C4CEDC] ">
                            <p className="text-[30px] font-semibold mb-5 text-center">Bienvenido { }</p>
                            <div className='flex justify-center '>
                                <form onSubmit={formik.handleSubmit}  >
                                {formik.touched.password && formik.errors.password ? <p className="bg-red-100 border border-red-400 text-red-700 px-1 rounded relative py-1"  >{formik.errors.password}</p> : null}
                                {formik.touched.repeatPassword && formik.errors.repeatPassword ? <p className="bg-red-100 border border-red-400 text-red-700 px-1 rounded relative py-1"  >{formik.errors.repeatPassword}</p> : null}

                                    
                                    <div>
                                        <label htmlFor="">Contraseña Actual</label>
                                        <input
                                            className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
                                            {...formik.getFieldProps('password')}
                                            placeholder="Introduzca la Contraseña Actual"
                                        />

                                    </div>
                                    <div className='flex gap-3 items-center my-2'>
                                        <div className="flex flex-col w-full gap-3">
                                            <label htmlFor="nombre">Nueva Contraseña</label>
                                            <input
                                                className="w-full min-w-11 border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
                                                {...formik.getFieldProps('newPassword')}

                                                placeholder="Introduce La Nueva Contraseña"
                                            />
                                        </div>
                                        <div className='flex flex-col  w-full gap-2'>
                                            <label htmlFor="apellido">Repita La Contraseña</label>
                                            <input
                                                placeholder="Repita La Contraseña"
                                                {...formik.getFieldProps('repeatPassword')}
                                                className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
                                            />
                                        </div>
                                    </div>
                                    <div className='flex gap-3 items-center'>
                                        <div className="flex flex-col w-full gap-2">
                                            <label htmlFor="status">Pregunta de Seguridad</label>
                                            <select
                                                className='w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]'

                                                defaultValue={''}
                                            >
                                            </select>
                                        </div>
                                        <div className='flex flex-col w-full gap-2'>
                                            <label htmlFor="apellido">Respuesta </label>
                                            <input
                                                placeholder="**************************"
                                                className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
                                            />
                                        </div>
                                    </div>
                                    <dir className='flex justify-center align-center '>
                                        <Button className='w-[50%] h-[50px] text-[17px] font-semibold' type='submit' color="primary" >cambiar contraseña</Button>

                                    </dir>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Layaut>
    )
}
