import React from 'react';
import './estiloCard.css';

export default function Cards(props){
    return(
        <div className='boxProdutos'>
            <h3 className='nomeProduto'>
                {props.produto}
            </h3>

            <div className='imgPai'>
                <img className='imgProduto' src={props.imagem} alt={props.produto}></img>
            </div>

            <div className='container'>
                <h7>A partir de:</h7>
                <td>
                    <h5>{props.preco}</h5>
                </td>
                <td>
                    <button type="button" class="btn btn-primary rounded-pill">Comprar</button>
                </td>
            </div>
        </div>
    );
}

 