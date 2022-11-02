import React from "react"
import {useContext} from "react"
import axios from 'axios'
import { BASE_URL,BASE_IMG,config } from '../config.js'
import {ReducerContext} from "./reducer/reducer"

const Prestation = () => {

    const [state, dispatch] = useContext(ReducerContext)
    const [prestation, setPrestation] = React.useState([])

    React.useEffect(()=> {
        
        axios.get(`${BASE_URL}/Prestation`)
        .then((res) => {
          setPrestation(res.data.SQL)
        })
        .catch((err) => {
        })
        
    },[])
    
        return(
           
            <React.Fragment>
              
                <div className="container">
                      <div className="background_slide">
                        <div className="text_intro">
                             <h2> Extension cil à cil </h2>
                            <p>Je souhaite un rendu naturel avec un effet "mascara"</p>
                        </div>   
                   
                        <div className="container_home">
    
                            {prestation.map((e,i)=>{
                                if(e.cate_title === "Extension cil à cil"){  
                                
                                    return ( 
                                    
                                    <div className="card" key={i}>
                                        <h3>{e.title}</h3>
                                            <div className="card_image"><img src={`${BASE_IMG}/${e.image}`} alt={"image"} /></div>
                                            <div className="card_body">
                                                    <a href="#popup1"><u>PLUS D'INFORMATION</u></a>
                                                <div id="popup1" className="overlay">
                                                	<div className="popup">
                                                		<h2>Extension cil à cil</h2>
                                                		<a className="close" href="#1">&times;</a>
                                                		<div className="content">
                                                			<p>{e.description}</p>
                                                		</div>
                                                	</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                        </div>
                        
                        <div className="text_intro">
                             <h2> Extension mixte </h2>
                            <p>Je souhaite un rendu un peu plus fourni en soulignant mon regard de façon naturel </p>
                        </div>   
                   
                        <div className="container_home">
    
                            {prestation.map((e,i)=>{
                                if(e.cate_title === "Extension mixte"){  
                                
                                    return ( 
                                    
                                    <div className="card" key={i}>
                                                <h3>{e.title}</h3>
                                            <div className="card_image"><img src={`${BASE_IMG}/${e.image}`} alt={"image"} /></div>
                                            <div className="card_body">
                                                    <a href="#popup2"><u>PLUS D'INFORMATION</u></a>
                                                <div id="popup2" className="overlay">
                                                	<div className="popup">
                                                		<h2>Extension mixte</h2>
                                                		<a className="close" href="#2">&times;</a>
                                                		<div className="content">
                                                			<p>{e.description}</p>
                                                		</div>
                                                	</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </div>  
                        
                        <div className="background_slide">
                        <div className="text_intro">
                             <h2> Extension volume</h2>
                            <p>Je souhaite un regard glamour et j' opte pour un effet plus sophistiqué </p>
                        </div>   
                   
                        <div className="container_home">
    
                            { prestation.map((e,i)=>{
                                if(e.cate_title === "Extension volume"){  
                                
                                    return ( 
                                    
                                    <div className="card" key={i}>
                                            <h3>{e.title}</h3>
                                            <div className="card_image"><img src={`${BASE_IMG}/${e.image}`} alt={"image"} /></div>
                                            <div className="card_body">
                                            
                                                    <a href="#popup3"><u>PLUS D'INFORMATION</u></a>
                                                    
                                                <div id="popup3" className="overlay">
                                                	<div className="popup">
                                                		<h2>Extension volume</h2>
                                                		<a className="close" href="#3">&times;</a>
                                                		<div className="content">
                                                			<p>{e.description}</p>
                                                		</div>
                                                	</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </div> 
                        </div> 
                   
                        <div className="text_intro">
                             <h2> Extension effet wet </h2>
                            <p>Je souhaite un regard effet "mouillé" avec un effet plus ou moins soutenu </p>
                        </div>  
                        
                        <div className="container_home">
                    
                            { prestation.map((e,i)=>{
                                if(e.cate_title === "Extension effet wet"){  
                                
                                    return ( 
                                     
                                    <div className="card" key={i}>
                                    <h3>{e.title}</h3>
                                            <div className="card_image"><img src={`${BASE_IMG}/${e.image}`} alt={"image"} /></div>
                                            <div className="card_body">
                                                    <a href="#popup4"><u>PLUS D'INFORMATION</u></a>
                                                <div id="popup4" className="overlay">
                                                	<div className="popup">
                                                		<h2>Extension effet wet</h2>
                                                		<a className="close" href="#4">&times;</a>
                                                		<div className="content">
                                                			<p>{e.description}</p>
                                                		</div>
                                                	</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                    </div>
                        
                         <div className="background_slide">
                        <div className="text_intro">
                             <h2> Rehaussement de cil</h2>
                            <p>Je souhaite ouvrir mon regard ans contrainte, effet naturel garantie </p>
                        </div>   
                   
                        <div className="container_home">
    
                            { prestation.map((e,i)=>{
                                if(e.cate_title === "Rehaussement de cil"){  
                                
                                    return ( 
                                    
                                    <div className="card" key={i}>
                                     <h3>{e.title}</h3>
                                            <div className="card_image"><img src={`${BASE_IMG}/${e.image}`} alt={"image"} /></div>
                                            <div className="card_body">
                                                    <a href="#popup5"><u>PLUS D'INFORMATION</u></a>
                                                <div id="popup5" className="overlay">
                                                	<div className="popup">
                                                		<h2>Rehaussement de cil</h2>
                                                		<a className="close" href="#5">&times;</a>
                                                		<div className="content">
                                                			<p>{e.description}</p>
                                                		</div>
                                                	</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                        </div>
                        
                        <div className="text_intro">
                             <h2> Brow lift </h2>
                            <p>Je souhaite avoir des sourcils disciplinés, j' opte pour un effet structuré </p>
                        </div>  
                        
                        <div className="container_home">
                    
                            { prestation.map((e,i)=>{
                                if(e.cate_title === "Brow lift"){  
                                
                                    return ( 
                                     
                                    <div className="card" key={i}>
                                    <h3>{e.title}</h3>
                                            <div className="card_image"><img src={`${BASE_IMG}/${e.image}`} alt={"image"} /></div>
                                            <div className="card_body">
                                                    <a href="#popup6"><u>PLUS D'INFORMATION</u></a>
                                                <div id="popup6" className="overlay">
                                                	<div className="popup">
                                                		<h2>Brow lift</h2>
                                                		<a className="close" href="#6">&times;</a>
                                                		<div className="content">
                                                			<p>{e.description}</p>
                                                		</div>
                                                	</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                    </div>
                </div>
            </React.Fragment>
        ) 
}

export default Prestation