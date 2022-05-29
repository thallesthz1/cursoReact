import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './views/home'
import CadastroProduto from './views/produtos/cadastro'

const PathRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path ="/cadastro-produtos" element={<CadastroProduto/>}/>
                <Route path ="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default PathRoutes;