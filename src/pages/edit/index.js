import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import { Modal } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'

import './index.css'
import NavBar from '../../componets/navBar'

import api from '../../services/api'

function getModalStyle() {
    const top = 50 
    const left = 50

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
      };
    }

export default function Edit(id){
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

    /////

    const [navers, setNavers] = useState([])
    const [job_role, setJob_role] = useState('')
    const [admission_date, setAdmission_date] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [project, setProject] = useState('')
    const [name, setName] = useState('')
    const [url, setURl] = useState('')
    
    const history = useHistory();

    

    async function handleEdit(){
    
        const id = localStorage.getItem('id')
        
        const data = {
            job_role,
            admission_date,
            birthdate,
            project,
            name,
            url

        };

        const frutas = "banana"

        try{
            await api.put(`navers/${id}`, data)
            handleOpen()
            setNavers(navers.filter(navers => navers.id !== id))
            console.log(id)
            console.log(frutas)
        }catch (err) {
            alert('Erro ao editar naver, tente novamente..')
            }
    }

   

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
                        Editar Naver
                    </div>
                </div>
                <form className="form">
                        <div>
                            <div className="enunciado">Nome</div>
                            <input
                                className="boxinput"
                                placeholder="Nome"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                            <div className="enunciado">Data de nascimento</div>
                            <input
                                className="placeHolder"
                                placeholder="Data de nascimento"
                                value={birthdate}
                                onChange={e => setBirthdate(e.target.value)}
                              
                            />
                            <div className="enunciado">Projetos que participou</div>
                            <input
                                className="placeHolder"
                                placeholder="Projetos que participou"
                                value={project}
                                onChange={e => setProject(e.target.value)}
                                
                            />
                        </div>
                        <div>
                            <div className="enunciado">Cargo</div>
                            <input
                                className="placeHolder"
                                placeholder="Cargo"
                                value={job_role}
                                onChange={e => setJob_role(e.target.value)}
                              
                            />
                            <div className="enunciado">Data de admissão</div>
                            <input
                                className="placeHolder"
                                placeholder="Data de admissão"
                                value={admission_date}
                                onChange={e => setAdmission_date(e.target.value)}
                               
                            />
                            <div className="enunciado">URL da foto do Naver</div>
                            <input
                                className="placeHolder"
                                placeholder="URL da imagem"
                                value={url}
                                onChange={e => setURl(e.target.value)}
                              
                            />
                            <div className="buttonPosition">
                                <Link>
                                    <button className="buttonStyle" onClick={() => handleEdit(navers.id)}>
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
                                    <h2 id="simple-modal-title">Naver atualizado</h2>
                                    <p id="simple-modal-description">
                                        Naver atualizado com sucesso!
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

