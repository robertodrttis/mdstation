import React, { Component } from 'react';
import './App.css';

class IntegratedForm extends Component {
  componentDidMount() {
    if (window.RDStationForms) {
      // Essa linha cria o elemento do formulário e faz o append do conteúdo na div abaixo.
      // Substitua os parâmetros com os dados do seu formulário.
      // new window.RDStationForms('my-form-aeiou6de172d1e9c5b6', 'UA-36276574-1').createForm();
      new window.RDStationForms('bootcamp-2022-d680989a3ee4bb792345', 'UA-497546-21').createForm();
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Formulário integrado RDSM<br />Dentro de um React App</p>

          {/* Esta div é necessária para receber o conteúdo do formulário. Substitua os parâmetros com os dados do seu formulário. */}
          {/* <div role="main" id="my-form-aeiou6de172d1e9c5b6"></div> */}
          <div role="main" id="bootcamp-2022-d680989a3ee4bb792345"></div>
        </header>
      </div>
    );
  }
}

export default IntegratedForm;
