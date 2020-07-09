import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import { Modal } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'

import './index.css'
import NavBar from '../../componets/navBar'

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

function getModalStyle() {
    const top = 50 
    const left = 50

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
      };
    }

export default function Register(){
    const useStyles = makeStyles((theme) => ({
        paper: {
          position: 'absolute',
          width: 400,
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
        },
      }));


    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };


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
                                <Link>
                                    <button className="buttonStyle" onClick={handleOpen}>
                                        Salvar
                                    </button>
                                </Link>
                    
                                <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="simple-modal-title"
                                aria-describedby="simple-modal-description"
                            >
                                {
                                    <div style={modalStyle} className={classes.paper}>
                                    <h2 id="simple-modal-title">Naver criado</h2>
                                    <p id="simple-modal-description">
                                        Naver criado com sucesso!
                                    </p>
                                    
                                  </div>
                                }
                            </Modal>
                            </div> 
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

