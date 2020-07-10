import React from 'react';
import { Link } from 'react-router-dom'
import * as Yup from 'yup'

import './index.css';
import api from '../../services/api'

import logo from '../../assets/logo.png'


export default function login() {
   
    const schema = Yup.object().shape({
        email: Yup.string()
          .email('Insira um e-mail válido')
          .required('O e-mail é obrigatório'),
        password: Yup.string()
          .min(6, 'A senha deve ter no mínimo 6 caracteres')
          .required('A senha é obrigatória'),
      });

    return (

    <div className="container">
    <div className="loginContainer">
        <div className="logo">
            <img src={logo} />
        </div>
        <div>
            <form>
                <div className="email">
                    <div> E-mail</div>
                    <input
                        className="placeHolder"
                        placeholder="E-mail"
                        type="email"
                    />
                </div>
                <div className="senha">
                    <div> Senha</div>
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


