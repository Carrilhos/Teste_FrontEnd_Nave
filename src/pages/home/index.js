import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom'
import { Modal } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'
import * as moment from 'moment'
import 'moment/locale/pt-br'

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
        paper2: {
            position: 'absolute',
            width: 592,
            height: 233,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            flexDirection: "column" ,
            display: "flex" ,  
            alignItems: "center",
            justifyContent: "space-evenly",
            paddingLeft: "20px"
        
                 
            
        },
      }));

    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [openNaverDelete, setOpenNaverDelete] = useState(false);
   
    const history = useHistory();

    const handleOpen = () => {
        setOpen(true)
      };
    
      const handleClose = () => {
        setOpen(false)
      };


      const handleOpenDelete = () => {
        setOpenDelete(true)
      };
    
      const handleCloseDelete = () => {
        setOpenDelete(false)
      };

    
      const handleOpenNaverDelete = () => {
        setOpenNaverDelete(true)
      
      };
    
      const handleCloseNaverDelete = () => {
        setOpenNaverDelete(false)
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
       
        setIndex(index+1)

     
    }

    useEffect(() => {
        loadNavers()
       
    })

 ///

    async function handleDeleteNaver(id) {
        try {
            await api.delete(`navers/${id}`)
            
            setNavers(navers.filter(navers => navers.id !== id))
            setOpenNaverDelete(true) 
            setOpenDelete(false)
            setOpen(false)
           
        } catch (err) {
        alert('Erro ao deletar naver, tente novamente.')
        }
    }

    function handleEdit(id){
        setNavers(navers.filter(navers => navers.id !== id))
        localStorage.setItem('id', navers.id)
        history.push('/edit')

    
      }
    


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
                        
            

            {navers.map(function(navers) {
    return (
        <div>
                    <button class="buttonImg">
                        <div onClick={handleOpen}>
                            <img src={navers.url} className="imagemDev"/>
                        </div>
                    </button>
                    <div className="nomeDev">
                        {navers.name}
                    </div>
                    <div className="funcaoDev">
                        {navers.job_role}
                    </div>
                    <div className="buttonDev">
                    
                        <button onClick={() => handleDeleteNaver(navers.id)} className="buttondelete">
                            <IoMdTrash size={19}/>
                       </button>
                       <button onClick={handleEdit} className="buttondelete">
                            <FaPen  size={15}/>
                       </button>
                    
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
                                    <img src={navers.url} className="devImg" />
                                    
                            </div>
                            <div className="details">
                                    <div>
                                        <div className="nameDevDetails">
                                            {navers.name}
                                        </div>
                                        <div className="patternDevDetails">
                                            {navers.job_role}
                                        </div>
                                        <div className="spotlightDevDetails">
                                            Idade
                                        </div>
                                        <div className="patternDevDetails">
                                        {moment(navers.birthdate).fromNow(true)} 
                                        </div>
                                        <div className="spotlightDevDetails">
                                            Tempo na empresa
                                        </div>
                                        <div className="patternDevDetails">
                                            {moment(navers.admission_date).fromNow(true)} 
                                        </div>
                                        <div className="spotlightDevDetails">
                                            Projetos que participou
                                        </div>
                                        <div className="patternDevDetails">
                                            {navers.project}
                                        </div>
                                    </div>
                                    <div className="buttonDevDetails">
                                        <button onClick={handleOpenDelete} className="buttondeletemodal">
                                            <IoMdTrash size={20}/>
                                        </button>
                                        <Link to='/edit'>
                                            <FaPen/>
                                        </Link>
                                    </div>
                            </div>
                            </div>
                        }
                    </Modal>
                    <Modal
                        open={openDelete}
                        onClose={handleCloseDelete}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                        <div style={modalStyle} className={classes.paper2}>
                            <div className="textDelete"> Excluir Naver</div>
                            <div className="descriptionDelete"> Tem certeza que deseja excluir esse Naver?</div>
                            <div>
                                <button className="buttonModalDelete" onClick={handleCloseDelete}>  Cancelar </button>
                                <button className="buttonModalDelete" onClick={() => handleDeleteNaver(navers.id)}> Excluir </button>
                            </div>
                            
                        </div>
                    
                    </Modal>
                    <Modal
                        open={openNaverDelete}
                        onClose={handleCloseNaverDelete}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                         <div style={modalStyle} className={classes.paper2}>
                            <div className="textDelete"> Naver excluído</div>
                            <div className="descriptionDelete"> Naver exclúido com sucesso!</div>
                        </div>
                            
                        
                    </Modal>

        </div> 

    )
    })}
                
    </div>

    </div>
    )
}