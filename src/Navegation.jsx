import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
import { BrowserRouter, Routes, Route, Navigate, NavLink } from "react-router-dom";
import { Historial } from './page/deshboard/Historial';
import Calendario from './page/deshboard/Calendario';
import { Password } from './page/deshboard/Password';
import ico from "./assets/LOGO-DEL-IUJO-removebg-preview.png";
// import axios from 'axios';

export const Navegation = () => {

    return (
        <BrowserRouter>
            <Navbar className='bg-[#055387] text-white'>
                <NavbarBrand>
                    <img src={ico} className='h-[50px] bg-white rounded-[12%] mx-2' />
                    <p className="font-bold text-inherit font-sans">Sigea</p>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <Dropdown>
                        <NavbarItem>
                            <DropdownTrigger>
                                alumno
                            </DropdownTrigger>
                        </NavbarItem>
                        <DropdownMenu
                            aria-label="ACME features"
                            className={({ isActive }) => isActive ? 'font-bold' : 'text-black font-light'}
                        >
                            <DropdownItem>
                                <NavLink
                                    className={({ isActive }) => isActive ? 'font-bold' : 'text-black font-light'}
                                    to='/historial'
                                >
                                    Mi historial
                                </NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown>
                        <NavbarItem>
                            <DropdownTrigger>
                                <NavLink
                                    className={({ isActive }) => isActive ? 'font-bold' : 'text-white font-light'}
                                >
                                    getion
                                </NavLink>
                            </DropdownTrigger>
                        </NavbarItem>
                        <DropdownMenu
                            aria-label="ACME features"
                            className={({ isActive }) => isActive ? 'font-bold' : 'text-white font-light'}
                        >
                            <DropdownItem>
                                <NavLink
                                    className={({ isActive }) => isActive ? 'font-bold' : 'text-black font-light'}
                                    to='/calendario'
                                >
                                    Calendarización
                                </NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <NavLink className={({ isActive }) => isActive ? 'font-bold' : 'text-white font-light'}
                        to='/password'>
                        Cambiar contraseña
                    </NavLink>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">

                        <NavLink className='font-bold text-inherit font-mono' > Salir </NavLink>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            <Routes>
                <Route path="/historial" element={<Historial />} />
                <Route path="/calendario" element={<Calendario />} />
                <Route path="/password" element={<Password />} />
                <Route path="*" element={<Navigate to={'/'} replace={true} />} />
            </Routes>

        </BrowserRouter>
    );
}
