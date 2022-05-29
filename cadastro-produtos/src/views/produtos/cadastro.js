import React, { Component } from 'react';

import ProdutoService from '../../app/ProdutoService'

const estadoInicial = {
    nome: '',
    sku: '',
    descricao: '',
    preco: 0,
    fornecedor: '',
    sucesso: false,
    errors:[]
    }

class CadastroProduto extends Component {

    state = estadoInicial;

    constructor() {
        super()
        this.service = new ProdutoService();
    }

    onChange = (event) => {
        const valor = event.target.value
        const nomeDoCampo = event.target.name
        this.setState({ [nomeDoCampo]: valor })
    }

    onSubmit = (event) => {
        const produto = {
            nome: this.state.nome,
            sku: this.state.sku,
            descricao: this.state.descricao,
            preco: this.state.preco,
            fornecedor: this.state.fornecedor,
        }

        try {
            this.service.salvar(produto)
            this.setState({ sucesso: true })
        }catch (erro) {
            const errors = erro.errors
            this.setState({errors : errors})
        }
    }

    limparCampos = () => {
        this.setState(estadoInicial)
    }

    render() {
        return (
            <>
                <div className="card">
                    <div className="card-header">
                        Cadastro de Produtos
                    </div>
                    <div className="card-body">

                        {this.state.sucesso &&

                            <div class="alert alert-dismissible alert-success">
                                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                                <strong>Bem feito!</strong> Cadastro realizado com sucesso! <a href="#" class="alert-link" />.
                            </div>

                        }

                        {this.state.errors.lenght > 0 &&

                        this.state.errors.map (msg => {
                            return(
                                <div class="alert alert-dismissible alert-danger">
                                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                                    <strong>Erro!</strong> {msg}
                                </div>)
                        })
                        }

                        <div className="row">
                            <div className="col-md-6">

                                <div className="form-group">
                                    <label>Nome: *</label>
                                    <input type="text"
                                        name="nome"
                                        onChange={this.onChange}
                                        value={this.state.nome}
                                        className="form-control" />
                                </div>

                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>SKU: *</label>
                                    <input type="text"
                                        name="sku"
                                        onChange={this.onChange}
                                        value={this.state.sku}
                                        className="form-control" />
                                </div>

                            </div>
                        </div>

                        <div className="row">

                            <div className="col-md-12">
                                <label>Descrição:</label>
                                <textarea name="descricao"
                                    onChange={this.onChange}
                                    value={this.state.descricao}
                                    className="form-control" />
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-md-6">

                                <div className="form-group">
                                    <label>Preço:</label>
                                    <input type="text"
                                        name="preco"
                                        onChange={this.onChange}
                                        value={this.state.preco}
                                        className="form-control" />
                                </div>

                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Fornecedor:</label>
                                    <input type="text"
                                        name="fornecedor"
                                        onChange={this.onChange}
                                        value={this.state.fornecedor}
                                        className="form-control" />
                                </div>

                            </div>
                        </div>
                        <div>
                            <br></br>
                        </div>

                        <div className="row">

                            <div className="col-md-1">
                                <button onClick={this.onSubmit} className="btn btn-success">Salvar</button>
                            </div>

                            <div className="col-md-1">
                                <button onClick={this.limparCampos} className="btn btn-primary">Limpar</button>
                            </div>
                        </div>



                    </div>

                </div>
            </>
        )
    }
}

export default CadastroProduto;