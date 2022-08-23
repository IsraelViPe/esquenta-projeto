import React, { Component } from 'react'

export default class Form extends Component {
 
  render() {
    const {image, nome, sobrenome, sobre, carreiras, concordo, onChange} = this.props
    return (
      <form className='form-container'>
        <img src="" alt="imagem" />
        <input 
        onChange={onChange}
        value={image}
        name='image'
        type="text" />
        <label htmlFor="nome">
            Nome
            <input
            onChange={onChange}
            value={nome}
            name='nome' 
            type="text" />
        </label>
        <label>
            Sobrenome
            <input 
            onChange={onChange}
            value={sobrenome}
            name='sobrenome'
            type="text" />
        </label>
        <label>
            Sobre mim:
            <textarea 
            onChange={onChange}
            value={sobre}
            name="sobre" 
            id="" 
            cols="30" 
            rows="10"></textarea>
        </label>
        <label>
            <select 
            onChange={onChange}
            value={carreiras}
            name="carreiras"
             id="carreiras">
                Eu quero ser:
            <option value="FrontEnd">FrontEnd</option>
            <option value="BackEnd">BackEnd</option>  
            <option value="FullStack">FullStack</option>      
            </select>
        </label>
        <label >
            Eu concordo com os termos do esquenta
            <input 
            onChange={onChange}
            value={concordo}
            type="checkbox" 
            name="concordo" 
            id="check" />
        </label>
        <button type='submit'>Salvar</button>
      </form>
    )
  }
}
