import React, { useState } from 'react';
import { Layaut } from '../Layaut';
import ModalNota from '../components/ModalNota';
import { ModalAsistencia } from '../components/ModalAsistencia';
import { ModalCalificaciones } from '../components/ModalCalificaciones';
import { useFormik } from 'formik';
import axios from 'axios';

const initialValues = { titulo: ' ', porcentaje: '', estatus: '', nota: '', fechadeinicio: '', fechafinal: '' }

const Evaluaciones = () => {

    const validate = (values) => {
        let errors = {}
        if (!values.titulo) errors.titulo = 'debes poner un titulo'
        if (!values.porcentaje) errors.porcentaje = 'debes poner un porcentaje'
        if (!values.porcentaje > 0.5) errors.porcentaje = 'No puede poner el porcentaje menos de  0,5'
        if (!values.estatus) errors.estatus = 'debes poner un estatus'
        if (!values.nota) errors.nota = 'debes poner una nota'
        if (!values.fechadeinicio) errors.fechadeinicio = 'debes poner fecha final'
        if (!values.fechafinal) errors.fechafinal = 'debes poner una fecha final'

        return errors
    }
    const [nota, setNota] = useState();
    const formik = useFormik({

        initialValues,
        onSubmit: async (value) => {
            await axios.post('http://localhost:3001/evaluaciones', value)
        },
        validate,



    })

    return (
        <Layaut>

            <div className='bg-[#d9dbe0]'>
                <div className="p-10 flex flex-col gap-6">
                    <div className="flex justify-between gap-10">
                        <div className="bg-white rounded-[5px] p-5 shadow-md w-full border-[1px] border-[#C4CEDC]">
                            <div className='flex gap-3 items-center'>
                                <div className="flex flex-col w-full gap-2">
                                    <select
                                        className='w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]'
                                    >
                                    </select>
                                </div>
                                <div className="flex flex-col w-full gap-2">
                                    <p className='text-[16px] font-semibold'>Nueva Evaluaciones</p>
                                    <span className=' w-[46%] rounded-[5px] shadow-md border-[1px] border-[#C4CEDC]'> Porcentaje General: { }% </span>
                                </div>
                                <div className="flex flex-col w-full gap-2">
                                    <p>impresión</p>
                                    <ModalNota isOpen={nota} close={setNota} />
                                    <ModalAsistencia isOpen={nota} close={setNota} />
                                    <ModalCalificaciones isOpen={nota} close={setNota} />
                                </div>

                            </div>
                            <div className='flex justify-center'>
                                <form className='w-[55%]'>
                                    {formik.touched.titulo && formik.errors.titulo ? <p className="bg-red-100 border border-red-400 text-red-700 px-1 rounded relative py-1"  >{formik.errors.titulo}</p> : null}
                                    {formik.touched.porcentaje && formik.errors.porcentaje ? <p className="bg-red-100 border border-red-400 text-red-700 px-1 rounded relative py-1"  >{formik.errors.porcentaje}</p> : null}
                                    {formik.touched.nota && formik.errors.nota ? <p className="bg-red-100 border border-red-400 text-red-700 px-1 rounded relative py-1"  >{formik.errors.nota}</p> : null}
                                    {formik.touched.fechadeinicio && formik.errors.fechadeinicio ? <p className="bg-red-100 border border-red-400 text-red-700 px-1 rounded relative py-1"  >{formik.errors.fechadeinicio}</p> : null}
                                    {formik.touched.fechafinal && formik.errors.fechafinal ? <p className="bg-red-100 border border-red-400 text-red-700 px-1 rounded relative py-1"  >{formik.errors.fechafinal}</p> : null}
                                    {formik.touched.estatus && formik.errors.estatus ? <p className="bg-red-100 border border-red-400 text-red-700 px-1 rounded relative py-1"  >{formik.errors.estatus}</p> : null}

                                    <div className='flex flex-col w-full gap-2'>
                                        <label htmlFor="">Titulo De la Evaluacion</label>
                                        <input type="text"
                                            {...formik.getFieldProps('titulo')}
                                            className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
                                        />
                                    </div>

                                    <div className='flex gap-3 items-center'>
                                        <div className='flex flex-col w-full gap-2'>
                                            <label htmlFor="">Porcentaje</label>
                                            <input type="number"
                                                {...formik.getFieldProps('pocertaje')}
                                                max='100'
                                                min='0.5'
                                                className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
                                            />

                                        </div>
                                        <div className='flex flex-col w-full gap-2'>
                                            <label htmlFor="">Nota</label>
                                            <input type="number"
                                                {...formik.getFieldProps('nota')}
                                                max='100'
                                                min='0.5'
                                                className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
                                            />
                                        </div>

                                    </div>

                                    <div className='flex gap-3 items-center'>
                                        <div className='flex flex-col w-full gap-2'>
                                            <label htmlFor="">Fcha De Inicio</label>
                                            <input type="date"
                                                {...formik.getFieldProps('fechadeinicio')}
                                                className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
                                            />

                                        </div>
                                        <div className='flex flex-col w-full gap-2'>
                                            <label htmlFor="">Fecha Final</label>
                                            <input type="date"
                                                {...formik.getFieldProps('fechafinal')}
                                                className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
                                            />
                                        </div>

                                    </div>
                                    <div> <label htmlFor="">Estatus</label>
                                        <select
                                            className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
                                            {...formik.getFieldProps('estatus')}
                                        >
                                            <option value=""></option>
                                            <option value="presente">Presente</option>
                                            <option value="finalizado">Finalizado</option>
                                        </select>
                                    </div>
                                    <button className="border-[1px] py-3 rounded-[5px] w-full bg-[#4a57ca] text-white font-semibold" type="submit">Registrarse</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layaut>
    );
}

export default Evaluaciones;
