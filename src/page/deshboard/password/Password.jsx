import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import axios from 'axios'
import ico from "../../../assets/LOGO-DEL-IUJO-removebg-preview.png";
import { Layaut } from '../Layaut'
import Cookies from 'universal-cookie'

const initialValues = {
    password: '',
    newPassword: '',
    repeatPassword: '',

}


export const Password = () => {

    const cookis = new Cookies()
    const user = cookis.get('users')
    const [state, setstate] = useState([]);
    const [errorInternal, setErrorInternal] = useState(null)
    const [alerValidate, setValerValidatel] = useState(null)

    const validate = (values) => {
        let errors = {}
        if (!values.password) errors.password = 'Requiere Contraseña'
        // if (values.password !== user.password) errors.password = 'La Contraseña No Coincide Con La Actual'
        if (!values.newPassword) errors.newPassword = 'Ingrese la Contraseña Actual'
        if (!values.repeatPassword) errors.repeatPassword = 'Repita la Contraseña'
        if (values.repeatPassword !== values.newPassword) errors.repeatPassword = 'Las contraseña no coinciden con la nueva'

        return errors
    }
    const formik = useFormik({
        initialValues,
        onSubmit: async (value, { resetForm }) => {
            try {
                const { newPassword } = value
                await axios.put(`http://localhost:3001/auth/${user.usuario}`, { password: newPassword })
                    .then(res => {
                        setValerValidatel(res.data)
                        setTimeout(() => {
                            setValerValidatel(null)
                        }, 3000);
                    })
                    .catch(res => console.log(res))
                return resetForm()
            } catch ({ response: { data: { res } } }) {
                setErrorInternal(res)
                setTimeout(() => {
                    setErrorInternal(null)
                }, 3000);
            }

        },
        validate

    })
    useEffect(async () => {
        const { data } = await axios.get(`http://localhost:3001/users/${user.usuario}`)
        setstate(...state, data[0])
    }, []);
    const{nombre}= state
    console.log(state)


    return (
        <Layaut>
            <div className='bg-[#d9dbe0]'>
                <div className="p-10 flex flex-col gap-6">
                    <div className="flex justify-center gap-10">
                        <div className="bg-white rounded-[5px] p-5 shadow-md w-[70%] justify-center align-center border-[1px] border-[#C4CEDC]">
                            <img src={ico} className='w-[150px] justify-center' />
                            <p className="text-[30px] font-semibold text-[#313436] text-center">Benvenido {nombre}</p>
                        
                        <form onSubmit={formik.handleSubmit} className="flex gap-4  my-5 flex-col">
                            {formik.touched.password && formik.errors.password ? <p className="bg-red-100 border border-red-400 text-red-700 px-1 rounded relative py-1"  >{formik.errors.password}</p> : null}
                            {formik.touched.newPassword && formik.errors.newPassword ? <p className="bg-red-100 border border-red-400 text-red-700 px-1 rounded relative py-1"  >{formik.errors.newPassword}</p> : null}
                            {formik.touched.repeatPassword && formik.errors.repeatPassword ? <p className="bg-red-100 border border-red-400 text-red-700 px-1 rounded relative py-1"  >{formik.errors.repeatPassword}</p> : null}
                            {errorInternal && (<p className="bg-red-600 pl-4 text-white rounded-[3px] py-1">{errorInternal}</p>)}
                            {alerValidate && (<p className="bg-[#22c55e] pl-4 text-white rounded-[3px] py-1">{alerValidate}</p>)}

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
                            <div className='flex gap-3 items-center'>

                                <div className='flex flex-col w-full gap-2'>
                                    <label htmlFor="middleName">Nueva Contraseña</label>
                                    <input
                                        id="newPassword"
                                        placeholder="Introduce tu Nueva Contraseña"
                                        type="password"
                                        required={true}
                                        className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
                                        {...formik.getFieldProps('newPassword')}
                                    />
                                </div>
                                <div className='flex flex-col w-full gap-2'>

                                    <label htmlFor="middleLastName">Repita La contraseña</label>
                                    <input
                                        className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
                                        id="repeatPassword"
                                        type="password"
                                        name="repeatPassword"
                                        required={true}
                                        inputMode="repeatPassword"
                                        placeholder="Introduce tu Segundo Apellido"
                                        {...formik.getFieldProps('repeatPassword')}
                                    />
                                </div>
                            </div>
                            <button className="border-[1px] py-3 rounded-[5px] bg-[#4a57ca] text-white font-semibold" type="submit">Registrarse</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layaut>
    )
}
