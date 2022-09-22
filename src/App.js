import './App.css';
import {Component} from 'react';
import { Cabecalho } from './components/Cabecalho';
import { Rodapeodas } from './components/Rodapeodas';
import { Busca } from './components/Busca';
import { Lista } from './components/Lista';

class App extends Component{
  state={
    busca: '',
    odas:[]
  }
  componentDidMount(){
    this.carregaODAs();
  }
  componentDidUpdate(){
    console.log(this.state)
  }
  carregaODAs(){
    const {busca}=this.state;
    fetch('https://www.bocaweb.com.br/apibocaweb?nome='+busca)
    .then(response => response.json())
    .then(odas => this.setState({odas}))
    console.log({busca})
  }
  buscaODA=(evento) => {
    this.setState({busca: evento.target.value});
    this.carregaODAs()
  }

  render(){
    const {odas}=this.state;
    return(
      <section className ="container">  
            <div className="cabecalho">
              <Cabecalho/>
            </div>
            
              <Busca
                busca={this.state.busca}
                buscaODA={this.buscaODA}
              />
           
              <Lista 
                Lista = {odas}
              />
         
            
              <Rodapeodas/>
            
      </section>
    )
  }
}

export default App;
