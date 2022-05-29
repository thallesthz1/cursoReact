import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (

            <>
                <div className="jumbotron">
                    <h1 className="display-3">Bem vindo!</h1>
                    <p className="lead">Este é seu sistema, utilize a barra de navegação para acessar as páginas.</p>
                    <hr className="my-4"></hr>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="#" role="button">Cadastrar</a>
                    </p>
                </div>
            </>

        )
    }
}

export default Home;