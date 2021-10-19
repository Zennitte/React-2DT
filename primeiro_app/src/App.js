
import react from 'react';
import './App.css';

function DataFormatada(props) {
  return <h2 className = "texto">Horario atual : {props.date.toLocaleTimeString()}</h2>
}

//Componente de classe
class Clock extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      //Define a propiedade date pagdn a hora e data atual
      date: new Date()
    }
  }

  //Ciclo de vida  que ocorre quando o componente clock é inserido na arvore DOM, ou seja , ciclo de vida de nascimento
  componentDidMount() {
    this.TimerID = setInterval(() => {
      this.thick()
    }, 1000)
  };

  // Ciclo de vida que ocorre quando o componente Clock é removido da arvore DOM 
  componentWillUnmount() {
    clearInterval(this.TimerID)

  };

  thick() {
    this.setState({
      date: new Date()
    })
  };

  Pause(){
    this.componentWillUnmount()
    console.log('Relógio ' + this.TimerID + ' está pausado')
  }

  Resume(){
    this.TimerID = setInterval(() => {
      this.thick()
    }, 1000)
    console.log('Relógio retomado')
    console.log('Agora sou o relogio '+ this.TimerID)
  }
  
 

  //Renderiza o conteudo do retorno para a tela 
  render() {
    return (
      <div>
        <h1 className = "titulo">Relógio</h1>
        <DataFormatada date={this.state.date} />
        <button className="bnt_pause" onClick={() => this.Pause()}>Pause</button>
        <button className="bnt_resume" onClick={() => this.Resume()}>Resume</button>
        
      </div>
    )
  }
}

class ClockLoop extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      //Define a propiedade date pagdn a hora e data atual
      date: new Date()
    }
  }

  //Ciclo de vida  que ocorre quando o componente clock é inserido na arvore DOM, ou seja , ciclo de vida de nascimento
  componentDidMount() {
    this.TimerID = setInterval(() => {
      this.thick()
    }, 1000)
  };

  // Ciclo de vida que ocorre quando o componente Clock é removido da arvore DOM 
  componentWillUnmount() {
    clearInterval(this.TimerID)

  };

  thick() {
    this.setState({
      date: new Date()
    })
  };

  //Renderiza o conteudo do retorno para a tela 
  render() {
    return (
      <div>
        <h1 className = "titulo">Relógio</h1>
        <DataFormatada date={this.state.date} />
      </div>
    )
  }
}




// Componente princiapl
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
        <div className = "espacamento"/>
        <ClockLoop />
      </header>
    </div>
  );
}

export default App;
