import React, { Component } from 'react';
import './App.css';

class MotitoringCodeForm extends Component {
  componentDidMount () {
    const script = document.createElement("script");
    script.src = "https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Integração de formulário RDSM<br />Via código de monitoramento</p>

          <form onSubmit={this.handleSubmit}>
            <p>
              <label>
                Nome:&nbsp;
                <input type="text" name="name" />
              </label>
            </p>

            <p>
              <label>
                Email:&nbsp;&nbsp;
                <input id="email" name="email" type="email" />
              </label>
            </p>

            <input type="submit" value="Enviar" />
          </form>
        </header>
      </div>
    );
  }
}

export default MotitoringCodeForm;
