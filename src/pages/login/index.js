import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { login } from '../../services/auth'

import './index.css';
import api from '../../services/api'

import logo from '../../assets/logo.png'


export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    async function handleLogin(e) {
        e.preventDefault()
        try {
        const response = await api.post('users/login', { email, password })
        login(response.data.token);

        history.push('/home')
        
    } catch (err) {
      alert('Falha no login, tente novamente.')
      
    }
  }

    return (

    <div className="container">
    <div className="loginContainer">
        <div className="logo">
            <img src={logo} />
        </div>
        <div>
            <form onSubmit={handleLogin}>
                <div className="email">
                    <div> E-mail</div>
                    <input
                        onChange={e => setEmail(e.target.value)}
                        className="placeHolder"
                        placeholder="E-mail"
                        type="email"
                        value={email}
                        
                    />
                </div>
                <div className="senha">
                    <div> Senha</div>
                    <input 
                        onChange={e => setPassword(e.target.value)}
                        className="placeHolder"
                        placeholder="Senha"
                        type="password"
                        value={password}
                    />
                </div>
                <div>
                    <button 
                    className="button"
                    type="submit"
                    
                    >

                            Entrar
                    </button>
                </div>
            </form>
        </div>
    </div>
   </div>
  );
}


