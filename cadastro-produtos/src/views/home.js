import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Cadastro from '../views/produtos/cadastro'

class Home extends Component {
    render() {
        return (
            <>
                <div className="jumbotron">
                    <h1 className="display-3">Bem vindo!</h1>
                    <p className="lead">Este é seu sistema, utilize a barra de navegação para acessar as páginas.</p>
                    <hr className="my-4"></hr>
                    <p className="lead">
                        <Link to="/cadastro-produtos" element={<Cadastro/>} className="btn btn-primary btn-lg" role="button">Cadastrar</Link>
                    </p>
                </div>
            </>
        )
    }
}

export default Home;