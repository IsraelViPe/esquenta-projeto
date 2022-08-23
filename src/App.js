import React, { Component } from 'react'
import Form from './components/Form'
import './App.css';
import Preview from './components/Preview';

export default class App extends Component {
  state={
    image:'',
    nome: '',
    sobrenome: '',
    sobre: '',
    carreiras:'',
    concordo: false,
}
handleChange = ({target}) => {
  const value = target.type === 'checkbox'? target.checked: target.value
    this.setState({
        [target.name]:value 
    })
}
  render() {
    const {image, nome, sobrenome, sobre, carreiras, concordo} = this.state;
    return (
      <div className='form-container' >
        <h1>Cadastro de Estudantes</h1>
        <Form 
        link={image}
        image={image}
        nome={nome}
        sobrenome={sobrenome}
        sobre={sobre}
        carreiras={carreiras}
        concordo={concordo}
        onChange={this.handleChange}/>
        <Preview image={image} 
        nome={nome}
        sobrenome={sobrenome}
        sobre={sobre}
        carreiras={carreiras}/> 
      </div>
    )
  }
}

