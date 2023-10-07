import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import React, { useEffect, useState } from 'react';
import Formulario from './Formulario';


function ListaProdutos(){

    const [produtos, setProdutos] = useState([]);

	// Use Effect
	useEffect(()=>{
		fetch("http://localhost:8080/produtos")
		.then(retorno => retorno.json())
		.then(retorno_convertido => setProdutos(retorno_convertido))
	}, []);

    return (
        <div>
        {/* <p>{JSON.stringify(produtos)}</p> */}
        <Formulario />
        <DataTable value={produtos.content} tableStyle={{ minWidth: '50rem' }}>
            <Column field="id" header="id"></Column>
            <Column field="descricao" header="Descrição"></Column>
            <Column field="valor" header="Valor"></Column>
            <Column field="valorPromocional" header="valor Promocional"></Column>
        </DataTable>
        </div>
    )

}

export default ListaProdutos;