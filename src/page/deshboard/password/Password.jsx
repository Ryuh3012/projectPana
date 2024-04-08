import React from 'react'
import { Button } from "@nextui-org/react";
import { Layaut } from '../Layaut';
export const Password = () => {
    return (
        <Layaut>
            <div className='bg-[#d9dbe0] h-full'>
                <div className="p-10 flex flex-col gap-6">
                    <div className="flex justify-between gap-10">
                        <div className="bg-white rounded-[5px] p-5 shadow-md w-full border-[1px] border-[#C4CEDC] ">
                            <p className="text-[30px] font-semibold mb-5 text-center">Bienvenido { }</p>
                            <div className='flex justify-center '>
                                <form action="" >
                                    <div>
                                        <label htmlFor="">Contraseña Actual</label>
                                        <input
                                            className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"

                                            placeholder="Introduzca la Contraseña Actual"
                                        />

                                    </div>
                                    <div className='flex gap-3 items-center my-2'>
                                        <div className="flex flex-col w-full gap-3">
                                            <label htmlFor="nombre">Nueva Contraseña</label>
                                            <input
                                                className="w-full min-w-11 border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"


                                                placeholder="Introduce La Nueva Contraseña"
                                            />
                                        </div>
                                        <div className='flex flex-col  w-full gap-2'>
                                            <label htmlFor="apellido">Repita La Contraseña</label>
                                            <input

                                                placeholder="Repita La Contraseña"
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
