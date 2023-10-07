import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import Formulario from './lojavirtual/Formulario';
import Tabela from './lojavirtual/ListaProdutos';

export const TemaContexto = createContext();

function App() {

	// Use State
	const [btnCadastrar, setBtnCadastrar] = useState(true);
	const [produtos, setProdutos] = useState([]);

	// Use Effect
	useEffect(()=>{
		fetch("http://localhost:8080/produtos")
		.then(retorno => retorno.json())
		.then(retorno_convertido => setProdutos(retorno_convertido))
	}, []);

	// Retorno
	return (
	  <div className='App'>
		{/* <p>{JSON.stringify(produtos)}</p> */}
		<Formulario botao={btnCadastrar}/>
		<Tabela vetor={produtos}/>
	  </div>
	);
  }

export default App;
