import logo from './logo.svg';
import './App.css';
import React from 'react';

// Componente de estado modificado //
class App extends React.Component{

  state = {
    nome : ''
  }

  modificarNome  = (event) => {
    this.setState({
      nome: event.target.value
    })
  }

  render(){
    return(
      <>
      <input type="text" value={this.state.nome} onChange={this.modificarNome}/>
      <h1>
        hello {this.state.nome}
      </h1>
      </>
    )
  }
}


export default App;
