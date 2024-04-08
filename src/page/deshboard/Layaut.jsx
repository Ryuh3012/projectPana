import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import ico from "../../assets/LOGO-DEL-IUJO-removebg-preview.png";


export const Layaut = ({children}) => {

    return (
        <div className="bg-[#d9dbe0] ">
            <Navbar className='bg-[#055387] text-white'>
                <NavbarBrand>
                    <img src={ico} className='h-[50px] bg-white rounded-[12%] mx-2' />
                    <p className="font-bold text-inherit font-sans">Sigea</p>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <Dropdown>
                        <NavbarItem>
                            <DropdownTrigger>
                                Alumno
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
                                    Mi Historial
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
                                    Gestion
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
                        Cambiar Contraseña
                    </NavLink>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">

                        <NavLink className='font-bold text-inherit font-mono' to='/'> Salir </NavLink>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            {children}
        </div>
    
);
}
