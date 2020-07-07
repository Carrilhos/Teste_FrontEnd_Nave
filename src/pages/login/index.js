import React from 'react';
import Button from '@material-ui/core/Button'
import { Link, useHistory  } from 'react-router-dom'

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
                <div className="email">
                    <div className="enunciado">E-mail</div>
                    <input
                        className="placeHolder"
                        placeholder="E-mail"
                        type="email"
                    />
                </div>
                <div className="senha">
                    <div className="enunciado"> Senha</div>
                    <input 
                        className="placeHolder"
                        placeholder="Senha"
                        type="password"
                    />
                </div>
                <div>
                    <Link to="/home">
                        <button className="button">
                            Entrar
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    </div>
   </div>
  );
}


