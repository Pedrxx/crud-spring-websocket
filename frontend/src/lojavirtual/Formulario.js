import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import React, { useEffect, useState } from "react";
import { ProdutoServico } from './ProdutoServico';

function Formulario(){

    const produtoNovo = { descricao: '', valor: 0, valorPromocional: 0 };
    const [produto, setProduto] = useState(produtoNovo);
	const produtoService = new ProdutoServico();

    useEffect(() => {
        setProduto(produtoNovo);
	}, []);

    const alterarValor = (event) => {
		console.log(event.target.name)
		console.log(event.target.value)
		setProduto({ ...produto, [event.target.name]: event.target.value });
	}

    const salvar = () => {
        produtoService.inserir(produto).then(data => {
            console.log(data);
            setProduto(produtoNovo);
        });		
	}

    return(
        <div>
            <p>{JSON.stringify(produto)}</p>
            <InputText placeholder="Nome" name="descricao" value={produto.descricao} onChange={alterarValor} />
            <InputText placeholder="Valor" name="valor" value={produto.valor} onChange={alterarValor}/>
            <InputText  placeholder="Valor Promo" name="valorPromocional" value={produto.valorPromocional} onChange={alterarValor}/>
            
            <Button label="Inserir" severity="success" onClick={salvar} />
        </div>
        
    )
}

export default Formulario;