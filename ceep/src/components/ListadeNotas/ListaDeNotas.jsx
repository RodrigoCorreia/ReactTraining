import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";

class ListaDeNotas extends Component {
constructor(props){
  super(props);
}

  render() {
    return (
      <ul>
        {this.props.notas.map((nota, index) => {
          return (
            <li key={index}>
              <CardNota titulo={nota.titulo} texto={nota.texto}/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
