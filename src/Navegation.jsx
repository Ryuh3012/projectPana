import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Historial } from './page/deshboard/historial/Historial';
import Calendario from './page/deshboard/calendario/Calendario';
import { Password } from './page/deshboard/password/Password';

import { Login } from './page/deshboard/auth/Login';
import { Register } from './page/deshboard/auth/Register';
import Index from './page/deshboard/Index';
// import axios from 'axios';

export const Navegation = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/historial" element={<Historial />} />
                <Route path="/index" element={<Index />} />
                <Route path="/calendario" element={<Calendario />} />
                <Route path="/password" element={<Password />} />
                <Route path="*" element={<Navigate to={'/'} replace={true} />} />
            </Routes>

        </BrowserRouter>
    );
}
