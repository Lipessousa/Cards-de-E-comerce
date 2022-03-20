import React from "react";
import './estiloHeader.css';
import Img from './logo.png'

export default function Header() {
    return (
        <header class="header site-header sticky-top py-1">
          <nav class="container d-flex flex-column flex-md-row justify-content-between">
            <a class="py-2" href="#" aria-label="produtos">
              <img src={Img} className="logo d-block mx-auto"></img>
            </a>
            <a class="link py-2 d-none d-md-inline-block" href="#">Loja</a>
            <a class="link py-2 d-none d-md-inline-block" href="#">Mac</a>
            <a class="link py-2 d-none d-md-inline-block" href="#">iPad</a>
            <a class="link py-2 d-none d-md-inline-block" href="#">iPhone</a>
            <a class="link py-2 d-none d-md-inline-block" href="#">AirPods</a>
            <a class="link py-2 d-none d-md-inline-block" href="#">Ajuda</a>
            <a class="link py-2 d-none d-md-inline-block" href="#">Carrinho</a>
          </nav>
        </header>
);
}