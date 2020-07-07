import React from 'react';
import Button from '@material-ui/core/Button'

import './index.css';

import logo from '../../assets/logo.png'


export default function login() {
  return (
   <div className="container">
    <div className="loginContainer">
        <div className="logo">
            <img src={logo} />
        </div>
        <div>
            <form>
                <label className="email">
                    <div className="enunciado">E-mail</div>
                    <input
                        className="placeHolder"
                        placeholder="E-mail"
                        type="email"
                    />
                </label>
                <label className="senha">
                    <div className="enunciado"> Senha</div>
                    <input 
                        className="placeHolder"
                        placeholder="Senha"
                        type="password"
                    />
                </label>
                <label>
                    <button className="button">
                        Entrar
                    </button>
                </label>
            </form>
        </div>
    </div>
   </div>
  );
}


