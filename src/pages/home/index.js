import React from 'react';
import Button from '@material-ui/core/Button'
import { Link, useHistory  } from 'react-router-dom'

import { IoMdTrash } from "react-icons/io";

import { FaPen } from "react-icons/fa";

import './index.css';
import dev1 from '../../assets/naver1.png'
import dev2 from '../../assets/naver2.png'
import dev3 from '../../assets/naver3.png'
import dev4 from '../../assets/naver4.png'


import NavBar from '../../componets/navBar'

export default function home(){
    return(
       <div className="containerHome"> 
            <div>
                <NavBar/>
            </div>
            <div className="bar">
                <div className="navers">
                    Navers
                </div>
                <div>
                    <button className="buttonAdiconarNaver">
                        Adiconar Naver
                    </button>
                </div>
            </div>
            <div className="devContainer">
                <div>
                    <div className="imagemDev">
                        <img src={dev1}/>
                    </div>
                    <div className="nomeDev">
                        Gabriel do Couto
                    </div>
                    <div className="funcaoDev">
                        Front-end Developer
                    </div>
                    <div className="buttonDev">
                    
                        <Link to='/' >
                            <IoMdTrash size={19}/>
                        </Link>
                        <Link to='/'>
                            <FaPen/>
                        </Link>
                    
                    </div>
                </div>
                <div>
                    <div className="imagemDev">
                        <img src={dev1}/>
                    </div>
                    <div className="nomeDev">
                        Gabriel do Couto
                    </div>
                    <div className="funcaoDev">
                        Front-end Developer
                    </div>
                    <div className="buttonDev">
                    
                        <Link to='/' >
                            <IoMdTrash size={19}/>
                        </Link>
                        <Link to='/'>
                            <FaPen/>
                        </Link>
                    
                    </div>
                </div>
                <div>
                    <div className="imagemDev">
                        <img src={dev1}/>
                    </div>
                    <div className="nomeDev">
                        Gabriel do Couto
                    </div>
                    <div className="funcaoDev">
                        Front-end Developer
                    </div>
                    <div className="buttonDev">
                    
                        <Link to='/' >
                            <IoMdTrash size={19}/>
                        </Link>
                        <Link to='/'>
                            <FaPen/>
                        </Link>
                    
                    </div>
                </div>
                <div>
                    <div className="imagemDev">
                        <img src={dev1}/>
                    </div>
                    <div className="nomeDev">
                        Gabriel do Couto
                    </div>
                    <div className="funcaoDev">
                        Front-end Developer
                    </div>
                    <div className="buttonDev">
                    
                        <Link to='/' >
                            <IoMdTrash size={19}/>
                        </Link>
                        <Link to='/'>
                            <FaPen/>
                        </Link>
                    
                    </div>
                </div>
            </div>
            
        

    
        </div>
    )
}