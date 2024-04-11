import React, { useState } from 'react';
import { Layaut } from '../Layaut';
import ModalNota from '../components/ModalNota';
import { ModalAsistencia } from '../components/ModalAsistencia';
import { ModalCalificaciones } from '../components/ModalCalificaciones';

const Evaluaciones = () => {

    const [nota, setNota] = useState();

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
                                    <span className=' w-[46%] rounded-[5px] shadow-md border-[1px] border-[#C4CEDC]'> Porcentaje General: {}% </span>
                                </div>
                                <div className="flex flex-col w-full gap-2">
                                    <p>impresión</p>
                                    <ModalNota isOpen={nota} close={setNota}  />
                                    <ModalAsistencia isOpen={nota} close={setNota}  />
                                    <ModalCalificaciones isOpen={nota} close={setNota}  />
                                </div>
                                
                            </div>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layaut>
    );
}

export default Evaluaciones;
