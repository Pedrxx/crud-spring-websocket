import React, { createContext, useState } from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import Home from './pages/home/Home';
import Rodape from './components/rodape/Rodape';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProdutoLista from './pages/produto/lista/ProdutoLista';
import ProdutoFormulario from './pages/produto/formulario/ProdutoFormulario';
import ListaProdutos from './lojavirtual/ListaProdutos';

export const TemaContexto = createContext();

function App() {
	const [dark, setDark] = useState(true);

	return (
		<div className="App">

			<TemaContexto.Provider value={{dark, setDark}}>
				<BrowserRouter>
					<Menu />
					<Routes>
						<Route exact path='/' Component={() => <Home />} />
						<Route path='/produtos' Component={ProdutoLista}/>
						<Route path='/produto-formulario' Component={ProdutoFormulario}/>
						<Route path='/meus-produtos' Component={ListaProdutos}/>
					</Routes>
					<Rodape />
				</BrowserRouter>
			</TemaContexto.Provider>
		</div>
	);
}

export default App;