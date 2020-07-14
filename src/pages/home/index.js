import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import { Modal } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'


import { IoMdTrash } from "react-icons/io";

import { FaPen } from "react-icons/fa";

import api from '../../services/api'

import './index.css'
import dev1 from '../../assets/naver1.png'
import dev2 from '../../assets/naver2.png'
import dev3 from '../../assets/naver3.png'
import dev4 from '../../assets/naver4.png'

import NavBar from '../../componets/navBar'


function getModalStyle() {
    const top = 50 
    const left = 50

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
      };
    };



export default function Home(){


    //Estilo modal
    const useStyles = makeStyles((theme) => ({
        paper: {
            position: 'absolute',
            width: 1007,
            height: 503,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            flexDirection: "row" ,
            display: "flex" ,           
            
        },
      }));

    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
   

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
    //


    // Listagem API
    const [navers, setNavers] = useState([])
    const [index, setIndex] = useState(1)

    

    async function loadNavers(){
        const response = await api.get('navers',{
            params: { index }
        })
        setNavers(response.data)
        console.log(navers)
        setIndex(index+1)
    }

    useEffect(() => {
        loadNavers()
        console.log(navers)
    })

    return(
       <div className="containerHome"> 
            <NavBar/>
            
            <div className="bar">
                <div className="navers">
                    Navers
                </div>
                <div>
                    <Link to="/register">
                        <button className="buttonAdiconarNaver">
                            Adicionar Naver
                        </button>
                    </Link>
                </div>
            </div>
            <div className="devContainer">
                <div>
                    <button class="buttonImg">
                        <div className="imagemDev" onClick={handleOpen}>
                            <img src={dev1}/>
                        </div>
                    </button>
                    <div className="nomeDev">

                       { navers.name}

                    </div>
                    <div className="funcaoDev">
                        Front-end Developer
                    </div>
                    <div className="buttonDev">
                    
                        <Link to='/' >
                            <IoMdTrash size={19}/>
                        </Link>
                        <Link to='/edit'>
                            <FaPen/>
                        </Link>
                    
                    </div>
                </div>    
                <div>
                    <button class="buttonImg">
                        <div className="imagemDev" onClick={handleOpen}>
                            <img src={dev1}/>
                        </div>
                    </button>
                    <div className="nomeDev">
                        {navers.map((name) =>(
                        `meu nome é ${navers.id}`
                        ))}

                    </div>
                    <div className="funcaoDev">
                        Front-end Developer
                    </div>
                    <div className="buttonDev">
                    
                        <Link to='/' >
                            <IoMdTrash size={19}/>
                        </Link>
                        <Link to='/edit'>
                            <FaPen/>
                        </Link>
                    
                    </div>
                </div>    
                <div>
                    <button class="buttonImg">
                        <div className="imagemDev" onClick={handleOpen}>
                            <img src={dev1}/>
                        </div>
                    </button>
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
                        <Link to='/edit'>
                            <FaPen/>
                        </Link>
                    
                    </div>
                </div>    
                <div>
                    <button class="buttonImg">
                        <div className="imagemDev" onClick={handleOpen}>
                            <img src={dev1}/>
                        </div>
                    </button>
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
                        <Link to='/edit'>
                            <FaPen/>
                        </Link>
                    
                    </div>
                </div>    
            </div>
            
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {
                    <div style={modalStyle} className={classes.paper}>
                       <div>
                            <img src={dev1} className="devImg" />
                            
                       </div>
                       <div className="details">
                            <div>
                                <div className="nameDevDetails">
                                    Gabriel do Couto
                                </div>
                                <div className="patternDevDetails">
                                    Front-end Developer
                                </div>
                                <div className="spotlightDevDetails">
                                    Idade
                                </div>
                                <div className="patternDevDetails">
                                    Lore lpsum
                                </div>
                                <div className="spotlightDevDetails">
                                    Tempo de empresa
                                </div>
                                <div className="patternDevDetails">
                                    Lore lpsum
                                </div>
                                <div className="spotlightDevDetails">
                                    Projetos que participou
                                </div>
                                <div className="patternDevDetails">
                                    Lore lpsum
                                </div>
                            </div>
                            <div className="buttonDevDetails">
                                <Link to='/' >
                                    <IoMdTrash size={20}/>
                                </Link>
                                <Link to='/edit'>
                                    <FaPen/>
                                </Link>
                            </div>
                       </div>
                    </div>
                }
            </Modal>

    
        </div>
    )
}