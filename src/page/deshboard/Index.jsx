import React from 'react';
import { Layaut } from './Layaut';
import Cookies from 'universal-cookie';

const Index = () => {
    const cookis = new Cookies
    return (
    <div>
        <Layaut/>
    </div>
    );
}

export default Index;
