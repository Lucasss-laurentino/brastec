import { useEffect, useState } from 'react';
import './ModalProduto.css';
import Product from '../../types/Product';

interface Props {
    abrirModalProduto: boolean,
    produtoClicado: Product | undefined,
    setAbrirModalProduto: React.Dispatch<React.SetStateAction<boolean>>,
}

export const ModalProduto = ({abrirModalProduto, produtoClicado, setAbrirModalProduto}: Props) => {

    const [classeModalProduto, setClasseModalProduto] = useState('modalProdutoDesativada');

    useEffect(() => {

        if(abrirModalProduto) {
            
            setClasseModalProduto('modalProdutoAtivada')
            
        } else {

            setClasseModalProduto('modalProdutoDesativada')

        }

    }, [abrirModalProduto])

    return (
        <>

            <div className={classeModalProduto}>
                <div className="modalProduto">
                    <div className="modalTopo py-3">
                        <h1 className='titulo-responsivo m-0'>{produtoClicado?.nome}</h1>
                        <button className='btn-fechar-modal' onClick={() => {
                            setAbrirModalProduto(false)
                            
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>

                    </div>
                    <div className="modalMeio">
                        <img src={produtoClicado?.imagem} alt="" />
                    </div>
                    <div className="modalBaixo py-2">
                        <div className='precoModal d-flex justify-content-center'>
                            <p className='preco texto-responsivo py-2 text-white'>{produtoClicado?.preco}</p>
                        </div>
                        <div className='d-flex justify-content-center py-2'>
                            <button className='btn-adc-carrinho px-2 d-flex align-items-center'>
                                <p className='texto-responsivo m-0 px-3'>Adicionar ao carrinho</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                                </svg>    
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );

}