import {useContext} from "react"
import React from "react"
import axios from 'axios'
import { BASE_URL,BASE_IMG,config } from '../config.js'
import {useNavigate} from "react-router-dom"
import { NavLink } from "react-router-dom"
import Carousel from "./Carousel"
import {ReducerContext} from "./reducer/reducer"

const Home = () => {

          const [state, dispatch] = React.useContext(ReducerContext)
    const navigate = useNavigate()
    
    const [user,setUser] = React.useState('')
    const [prestation, setPrestation] = React.useState([])
    const [produit, setProduit] = React.useState([])
    
    const handleClick = (e) => {
        e.preventDefault()
        navigate('/Prestation')
    }
    
     React.useEffect(()=> {
        
        axios.defaults.timeout = 5000
        axios.get(`${BASE_URL}/Home`)
        
        .then((res) => {
          setPrestation(res.data.SQL)
        })
        .catch((err) => {
        })
        
    },[])
    
//Les images du carousel
const images = [
  { imgUrl: 'https://scontent-cdt1-1.xx.fbcdn.net/v/t39.30808-6/277566178_401799555280230_6548239169610439650_n.jpg?stp=dst-jpg_p206x206&_nc_cat=109&ccb=1-7&_nc_sid=da31f3&_nc_ohc=DB8n0MLFa_gAX-xIbpc&_nc_ht=scontent-cdt1-1.xx&oh=00_AT_lk58-OdqFD1ibHSef3IsnxgvPLG4OgOW6FXF1dirZwQ&oe=635E0DFF' },
  { imgUrl: 'https://scontent-cdg2-1.xx.fbcdn.net/v/t39.30808-6/260988917_315677897225730_6265473568266291941_n.jpg?stp=dst-jpg_p206x206&_nc_cat=100&ccb=1-7&_nc_sid=da31f3&_nc_ohc=VM0LCy573_QAX_PPXwb&_nc_ht=scontent-cdg2-1.xx&oh=00_AT-ZuY0tHIzpLN03J_5Pg8DlRqbTYz_iHpCiyhyW_3Nj9w&oe=635DB39A' },
  { imgUrl: 'https://scontent-cdg2-1.xx.fbcdn.net/v/t39.30808-6/258509804_309725464487640_4303479389507915087_n.jpg?stp=dst-jpg_p206x206&_nc_cat=100&ccb=1-7&_nc_sid=da31f3&_nc_ohc=ODR8yf4WxewAX8Afx-U&_nc_ht=scontent-cdg2-1.xx&oh=00_AT_fVma7eriwtWtrT27ehef1EGKlfXJYWtZgHYBdzxbnMA&oe=635CC7AE' },
  { imgUrl: 'https://scontent-cdt1-1.xx.fbcdn.net/v/t39.30808-6/240668187_267974271996093_3434782219735740264_n.jpg?stp=dst-jpg_s206x206&_nc_cat=106&ccb=1-7&_nc_sid=da31f3&_nc_ohc=G06M7ww7auYAX9-rL3c&_nc_ht=scontent-cdt1-1.xx&oh=00_AT-_-7SQuRnNx5243rsYDxzn6ZeHltVt_OsyNDDtsCOiCA&oe=635DDCD2' },
  { imgUrl: 'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.6435-9/153962020_191716666081936_7634238289171550761_n.jpg?stp=dst-jpg_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=da31f3&_nc_ohc=ArrBWIqQ0pkAX_eM1m8&_nc_ht=scontent-cdg2-1.xx&oh=00_AT9ZCeqN6YV0tshMKp_Ux0cMk77rBFty42b6AMroloA0iw&oe=637E2690' },
  { imgUrl: 'https://scontent-cdt1-1.xx.fbcdn.net/v/t1.6435-9/132521905_144036797516590_6982566091699566526_n.jpg?stp=dst-jpg_p206x206&_nc_cat=110&ccb=1-7&_nc_sid=da31f3&_nc_ohc=b01Q77alurYAX9GYdc8&_nc_ht=scontent-cdt1-1.xx&oh=00_AT9YJU6OFa0wansjCQGUqzVNUFqCmjJCJr4P_NKdbh5iew&oe=637E2E07' },
  { imgUrl: 'https://scontent-cdt1-1.xx.fbcdn.net/v/t39.30808-6/240668187_267974271996093_3434782219735740264_n.jpg?stp=dst-jpg_s206x206&_nc_cat=106&ccb=1-7&_nc_sid=da31f3&_nc_ohc=G06M7ww7auYAX9-rL3c&_nc_ht=scontent-cdt1-1.xx&oh=00_AT-_-7SQuRnNx5243rsYDxzn6ZeHltVt_OsyNDDtsCOiCA&oe=635DDCD2' },
  { imgUrl: 'https://images.assetsdelivery.com/compings_v2/bignoze/bignoze1806/bignoze180600007.jpg' },
  { imgUrl: 'https://st3.depositphotos.com/thumbs/8132176/vector/35167/351677116/api_thumb_450.jpg?forcejpeg=true' }
]

    return(
           
        <React.Fragment>

            <div className="container">
                <div className="container_home">
                
                    <div className="header">
                        <div className="text_header">
                            <h1>MY LITTLE LASHES</h1>
                            <p>BROW AND LASH ARTIST</p>
                        </div>
                    </div>
                </div>
            </div>      

            <div className="container_intro">
                <div className="text_intro">
                  <h1 className="intro_title">My Little Lashes</h1>
                  <p>Lorem Ipsum is simply dummy text</p>
                  <p> of the printing and typesetting industry.</p>
               </div>   
                   
                <div className="carousel_intro">
                    <ul className="slideshow2">
                        <li><img src="../image/noir.png" alt="logo" /></li>
                        <li><img src="../image/blanc.jpg" alt="logo" /></li>
                        <li><img src="../image/noir.png" alt="logo" /></li>
                        <li><img src="../image/blanc.jpg" alt="logo" /></li>
                    </ul>
                </div> 
            </div> 
                
            <div className="background_slide">
                <div className="text_intro">
                    <h2>PRESTATIONS</h2>
                    <p>blabalabalabalbblabalblabalabalaba</p>
                    <p>blabalabalabalbblabalblabalabalaba</p>
                </div>   
                    
                <div className="container_home">

                    {prestation.map((e,i)=>{
                        if(e.categorie_id === 1){  
                            return(
                            
                                <div className="card" key={i}>
                                    <div className="card_image"><img src={`${BASE_IMG}/${e.image}`} alt={"image"} /></div>
                                    <div className="card_body">
                                    <div className="card_title">
                                        <h3>{e.catetile}</h3>
                                    </div>
                                        <button className="card_button" onClick ={handleClick}>En savoir plus</button>
                                    </div>
                                </div>
                            )
                        }
                        
                        if(e.categorie_id === 2){  
                            return(
                            
                                <div className="card" key={i}>
                                    <div className="card_image"><img src={`${BASE_IMG}/${e.image}`} alt={"image"} /></div>
                                    <div className="card_body">
                                    <div className="card_title">
                                        <h3>{e.catetile}</h3>
                                    </div>
                                        <button className="card_button" onClick ={handleClick}>En savoir plus</button>
                                    </div>
                                </div>
                            )
                        } 
    
                        if(e.categorie_id === 3){  
                            return(
                                <div className="card" key={i}>
                                    <div className="card_image"><img src={`${BASE_IMG}/${e.image}`} alt={"image"} /></div>
                                    <div className="card_body">
                                    <div className="card_title">
                                        <h3>{e.catetile}</h3>
                                    </div>
                                        <button className="card_button" onClick ={handleClick}>En savoir plus</button>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div> 
            </div>  
            
            <div className="background">
            <div className="text_intro">
                <h2>KIT D'ENTRETIEN</h2>
                <p>blabalabalabalbalblabal</p>
                <p>blabalabalabalbalblabal</p>
                <p>blabalabalabalbalblabal</p>
             </div> 
                     
            <div className="produit_intro">
                <img className="card_img_produit" src="../image/produit.jpg" alt="logo" />
                    <div className="produit_intro_prix">
                         <p>10 Euros</p>
                    </div>
                <img className="card_img_produit"src="../image/produit.jpg" alt="logo" />
                    <div className="produit_intro_prix">
                        <p>25 Euros</p>
                    </div>
            </div>
            </div>
                
            <div className="background_slide">
            
                <div className="text_intro">
                    <h2>NOS REALISATIONS</h2>
                    <p>blabalabalabalbalblabal</p>
                </div> 
                
                    <Carousel images={images} />

            </div>  
             
            <div> 
                <div className="text_intro">
                <p>dsf</p>
                 </div> 
            </div> 
                
                     
        </React.Fragment>
    ) 
}

export default Home