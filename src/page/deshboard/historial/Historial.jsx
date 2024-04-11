import React, { useEffect, useState } from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Pagination, Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure } from "@nextui-org/react";
import { Layaut } from '../Layaut';
import Cookies from 'universal-cookie';
import axios from 'axios';


const columns = [
    {
        key: "codmateria",
        label: "codigo",
    },

    {
        key: "materia",
        label: "Materia",
    },
    {
        key: "uc",
        label: "uc",
    },
    {
        key: "nota",
        label: "Nota",
    },
    {
        key: "notaRef",
        label: "Nota Ref",
    },
    {
        key: 'evaluado',
        label: 'Evaluado %'
    },
    {
        key: 'seccion',
        label: 'Sección'
    }
];
const columns2 = [
    {
        key: "codmateria",
        label: "codigo",
    },

    {
        key: "materia",
        label: "Materia",
    },
    {
        key: "uc",
        label: "uc",
    },
    {
        key: "nota",
        label: "Nota",
    },
    {
        key: "fecha",
        label: "fecha",
    },
    {
        key: 'cursada',
        label: 'Cursada'
    }

];
const users = []
export const Historial = () => {
    const [state, setSate] = useState([])
    const [materias, setMaterias] = useState([])
    const cookis = new Cookies()
    const user = cookis.get('users')
    useEffect(async () => {
        const { data } = await axios.get(`http://localhost:3001/users/${user.usuario}`)
        const materia = await axios.get(`http://localhost:3001/matters`)
        setSate(...state, data[0])
        setMaterias(...materias, materia.data.res)
    }, []);
    console.log(user)
    console.log(materias)
    const { iduser, cedula, nombre, segundonombre, apellido, segundoapellido, direccion, telefono, email, lugardenacimiento, añodegraduacion, planteldeprocedencia } = state

    return (
        <Layaut>
            <div className='bg-[#d9dbe0]'>
                <div className="p-10 flex flex-col gap-6">
                    <div className="flex justify-between gap-10">

                        <div className="bg-white rounded-[5px] p-5 shadow-md w-full border-[1px] border-[#C4CEDC]">
                            <p className="text-[30px] font-semibold mb-5">Datos Personales</p>
                            <div>
                                <div className='flex justify-center text-center'>

                                    <ul>
                                        <li >
                                            <p>
                                                expediente : {iduser}
                                                <span className='mx-5'>cedula: {cedula} </span>
                                                <span className='mx-5'>Sexo: </span>
                                                <span className='mx-5'>Estado Civil: { }</span>
                                            </p>
                                        </li>
                                        <li >
                                            <p>
                                                Nombre : {nombre}
                                                <span className='mx-2'>Segundo Nombre: {segundonombre}</span>
                                                <span className='mx-2'>Apellido: {apellido}</span>
                                                <span className='mx-2'>Segundo Apellido: {segundoapellido}</span>
                                            </p>
                                        </li>
                                        <li >
                                            <p>
                                                Dirección : {direccion}
                                                <span className='px-1'>telefono: {telefono}</span>
                                                <span className='px-1'>Correo: {email} </span>
                                            </p>
                                        </li>
                                        <li >
                                            <p>
                                                Lugar de Nacimiento : {lugardenacimiento}
                                            </p>
                                        </li>
                                        <li >
                                            <p>
                                                Año De Graduacion : {añodegraduacion}
                                                <span className='px-1'> Plantel De Procedencia  {planteldeprocedencia}</span>
                                            </p>
                                        </li>
                                    </ul>

                                </div>
                            </div>

                        </div>
                        <div className="bg-white rounded-[5px] p-5 shadow-md w-full border-[1px] border-[#C4CEDC]">
                            <p className="text-[30px] font-semibold mb-5">Datos Academicos</p>
                            <div>
                                <p className='text-[19px] font-semibold mb-5'>Carrera: { }</p>
                            </div>
                            <div>
                                <p className='text-[19px] font-semibold mb-5'>Datos de la Carrera: { }</p>
                                <ul>
                                    <li>Sem no terminado: { }</li>
                                    <li>Creditos Inscritos: { }
                                        <span className='px-5'>
                                            { } Aprobados
                                        </span>
                                    </li>
                                    <li> Ind. Academico: { }
                                        <span className='px-5'> { } Ind. Efeciente</span>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className="bg-white rounded-[5px] p-5 w-full shadow-md border-[1px] border-[#C4CEDC]">
                        <p className="text-[30px] font-semibold mb-5">Historial academico</p>
                        <div className='flex gap-8'>


                            <div className='w-[50%] flex border border-sky-500'>

                                <Table
                                    shadow="none"
                                    aria-label="Example table with client side pagination"
                                    classNames={{
                                        wrapper: "min-h-[222px]",
                                    }}
                                >

                                    <TableHeader columns={columns}>
                                        {(column) => <TableColumn className="text-left bg-[#1F2559] text-white  px-3" key={column.key}>{column.label}</TableColumn>}
                                    </TableHeader>
                                    <TableBody items={materias}>
                                        {materias.map(user => (
                                            <TableRow key={materias}>
                                                {(columnKey) => {
                                                    return <TableCell>{getKeyValue(user, columnKey)}</TableCell>
                                                }}
                                            </TableRow>
                                        ))
                                        }
                                    </TableBody>
                                </Table>
                                <div>
                                    <ul>
                                        <li><span className='font-semibold'>Período</span></li>
                                        <li>becado: <span className='font-semibold'>{ }</span></li>
                                        <li> <span className='font-semibold'>Creditos</span></li>
                                        <li>Inscrito: <span className='font-semibold'>{ }</span></li>
                                        <li>Horario</li>
                                        <li>Corte de Nota</li>
                                        <li>Resumen</li>
                                    </ul>
                                </div>
                            </div>

                            <div className='flex w-[50%] border border-sky-500 '>
                                <Table
                                    shadow="none"
                                    aria-label="Example table with client side pagination"
                                    classNames={{
                                        wrapper: "min-h-[222px]",
                                    }}
                                >

                                    <TableHeader columns={columns2}>
                                        {(column) => <TableColumn className="text-left bg-[#1F2559] text-white  px-3" key={column.key}>{column.label}</TableColumn>}
                                    </TableHeader>
                                    <TableBody items={materias}>
                                        {materias.map(user => (
                                            <TableRow key={user.cedula}>
                                                {(columnKey) => {
                                                    return <TableCell>{getKeyValue(user, columnKey)}</TableCell>
                                                }}
                                            </TableRow>
                                        ))
                                        }
                                    </TableBody>
                                </Table>
                                <div>
                                    <ul>
                                        <li><span className='font-semibold'>Semestre</span></li>
                                        <li>IA: <span className='font-semibold'>{ }</span></li>
                                        <li>Efic: <span className='font-semibold'>{ }</span></li>
                                        <li> <span className='font-semibold'>Creditos</span> </li>
                                        <li>inscrito: <span className='font-semibold'>{ }</span></li>
                                        <li>Aprob: <span className='font-semibold'>{ }</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>



                    </div>

                </div>


            </div >
        </Layaut>
    )
}
