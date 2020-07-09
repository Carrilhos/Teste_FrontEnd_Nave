import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";

import './index.css'
import NavBar from '../../componets/navBar'

export default function register(){
    return(
    <div>
        <NavBar/>
        <div className="centralizar">
            <div className="safearea">
                <div className="addNaver">
                    <Link to="/home">
                        <IoIosArrowBack size={35} className="icon"/>
                    </Link>
                    <div>
                        Adicionar Naver
                    </div>
                </div>
                <form className="form">
                        <div>
                            <div className="enunciado">Nome</div>
                            <input
                                className="boxinput"
                                placeholder="Nome"
                                type="email"
                            />
                            <div className="enunciado">Idade</div>
                            <input
                                className="placeHolder"
                                placeholder="Idade"
                                type="email"
                            />
                            <div className="enunciado">Projetos que participou</div>
                            <input
                                className="placeHolder"
                                placeholder="Projetos que participou"
                                type="email"
                            />
                        </div>
                        <div>
                            <div className="enunciado">Cargo</div>
                            <input
                                className="placeHolder"
                                placeholder="Cargo"
                                type="email"
                            />
                            <div className="enunciado">Tempo de empresa</div>
                            <input
                                className="placeHolder"
                                placeholder="Tempo de empresa"
                                type="email"
                            />
                            <div className="enunciado">URL da foto do Naver</div>
                            <input
                                className="placeHolder"
                                placeholder="Projetos que participou"
                                type="email"
                            />
                            <div className="buttonPosition">
                                <Link to="/home">
                                    <button className="buttonStyle">
                                        Salvar
                                    </button>
                                </Link>
                            </div> 
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

