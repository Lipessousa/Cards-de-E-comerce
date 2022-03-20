import React from 'react';
import Header from '../header';
import Cards from '../card';

 

export default function Produtos(){
    return(
        <div>
            <Header/>

            <div className='listaProdutos'>
                <div class='container'>
                    <div class='row d-flex justify-content-center'>
                        <div class="col-sm-3-auto">
                        <Cards 
                        produto='iPhone 11 - 128Gb'
                        imagem = 'assets/iphone11.png'
                        preco= 'R$4.999,00'/>
                        </div>

                        <div class="col-sm-3-auto"> 
                        <Cards 
                        produto='iPhone 12 - 128Gb'
                        imagem = 'assets/iphone12.png'
                        preco= 'R$5.505,00'/>
                        </div>

                        <div class="col-sm-3-auto">
                        <Cards 
                        produto='iPhone 13 - 256Gb'
                        imagem = 'assets/iphone13.png'
                        preco= 'R$6.374,00'/>
                        </div>
                    </div>

                    <div class='row d-flex justify-content-center'>
                            <div class="col-sm-3-auto">
                            <Cards 
                            produto='iPad Pro - 256Gb'
                            imagem = 'assets/ipad2.jpg'
                            preco= 'R$10.301,00'/>
                            </div>

                            <div class="col-sm-3-auto">
                            <Cards 
                            produto='Macbook Pro - 1Tb'
                            imagem = 'assets/mac2.jpg'
                            preco= 'R$12.508,00'/>
                            </div>

                            <div class="col-sm-3-auto">
                            <Cards 
                            produto='Air pods'
                            imagem = 'assets/airpod2.jpg'
                            preco= 'R$2.296,00'/>
                            </div>
                    </div>
                </div>
            </div>            
        </div>
    );
}