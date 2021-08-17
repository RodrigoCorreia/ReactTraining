import react, { Component } from "react";
import CardNota from "./CardNotas";

export class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria) => {
          return (
            <li>
            <div>{categoria}</div>
            <CardNota/>
          </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
