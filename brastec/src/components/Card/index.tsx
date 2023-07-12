import { useState } from 'react';
import './Card.css';
import Product from '../../types/Product';
import React from 'react';

export const Card = () => {

    const [products, setProducts] = useState<Product[]>([
        
        {
            id: 1,
            nome: 'Iphone 14',
            preco: 'R$ 5.499',
            cor: 'preto',
            imagem: '/iphone142.png',
        },
        {
            id: 2,
            nome: 'Iphone 11',
            preco: 'R$ 5.499',
            cor: 'preto',
            imagem: '/iphone12.png',
        },
        {
            id: 3,
            nome: 'Iphone se',
            preco: 'R$ 4.299',
            cor: 'branco',
            imagem: '/iphonese.png'
        },
        {
            id: 3,
            nome: 'Iphone 13',
            preco: 'R$ 6.499',
            cor: 'branco',
            imagem: '/iphone13.png'
        }

    ]);

    return (

        <>
            {products.map((produto, index) => {
                return (
                    <React.Fragment key={index}>
                      <div className="linha">
                            <div className="cartao">
                                <div className="info">
                                    <h1 className='titulo-responsivo'>{produto.nome}</h1>
                                    <p className='texto-responsivo'>{produto.preco}</p>
                                </div>
                                <div className="imagem">
                                    <img src={produto.imagem} alt="" />
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                )
            })}
        </>

    );

}