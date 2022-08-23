import React, { Component } from 'react'

export default class Preview extends Component {
  render() {
    const {image, nome, sobrenome, sobre, carreiras} = this.props
    return (
      <div>Preview
        
            <p>
                <img src={image} alt="imagem" />
            </p>
            <p>
               { `${nome} ${sobrenome}`}
            </p>
            <p> {sobre} </p>
            <p> Eu quero ser : {carreiras} </p>
      </div>
    )
  }
}
