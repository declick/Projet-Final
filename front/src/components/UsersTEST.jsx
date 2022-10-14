import React,{useContext} from "react"
import axios from 'axios'
import { BASE_URL,config } from '../config.js'
import {ReducerContext} from "./reducer/reducer"
import {CONNEXION, ADMIN, USER, USERS} from './config/constance.js'
import {Link, useNavigate} from 'react-router-dom'
import Popup from 'reactjs-popup';

// Quand on es sur admin /users
// je dois avoir le tableau de tous les utilisateurs afficher
// chaque utlisateur doit avoir bouton edit et supprimer

// le bouton supprime fait directement la requete et terminer
// le bouton edit ouvre une popup
// dans la popup j' ai un formulaire qui reprends les infos users en value par defaut
// si l'admin modifie une info et valide
// ça envoie la requete avec soit les valeur par defaut soit la nuvelle valeur si modifié

// comme ça pas de blanc en bdd
// et j' ajoute un boton add user au dessus du tableau qui ouvre popup pour créer user

// chaque fois que je fais une action ça recharge la page admin/users avec les données à jour du coup

// En gros c'est des pop UP la fonction reste sur la page
//  user friendly ??? limite les chargement de pages ???

const Users = () =>{

    const navigate = useNavigate()
    const [nom, setNom] = React.useState("")
    const [prenom, setPrenom] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [mdp, setMdp] = React.useState("")
    const [state, dispatch] = useContext(ReducerContext)

    const getUsers = () => {
        axios.defaults.timeout = 5000
        axios.get(`${BASE_URL}/GetUsersController`, config)
        .then((res) => {
            res.data.response && dispatch({type:CONNEXION})
            res.data.admin && dispatch({type:ADMIN})
            res.data.users && dispatch({type:USERS})
            if(res.data.response === true) {
                return res.data.users;
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const deleteUser = (id) => {
        let data = {id}
        axios.defaults.timeout = 5000
        axios.delete(`${BASE_URL}/DeleteUserController`, data, config)
            .then((res) => {
                res.data.response && dispatch({type:CONNEXION})
                res.data.admin && dispatch({type:ADMIN})
                res.data.users && dispatch({type:USERS})
                if(res.data.response === true) {
                    navigate("/Users")
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const editUser = (e) => {
        let data = {id}
        axios.defaults.timeout = 5000
        axios.delete(`${BASE_URL}/UpdateUserController`, data, config)
            .then((res) => {
                res.data.response && dispatch({type:CONNEXION})
                res.data.admin && dispatch({type:ADMIN})
                res.data.users && dispatch({type:USERS})
                if(res.data.response === true) {
                    navigate("/Users")
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const addUser = (e) => {
        e.preventDefault()
        let data = {id, nom, prenom , email, mdp}
        axios.defaults.timeout = 5000
        axios.delete(`${BASE_URL}/AddUserController`, data, config)
            .then((res) => {
                res.data.response && dispatch({type:CONNEXION})
                res.data.admin && dispatch({type:ADMIN})
                res.data.users && dispatch({type:USERS})
                if(res.data.response === true) {
                    navigate("/Users")
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    let users = getUsers()

    return(
            <div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                <Popup trigger={<button> Ajouter nouvel utilisateur </button>}
                       position="right center">
                    <div>Ajouter</div>
                    <form>
                        <label>
                            <div>
                                <input type="text" placeholder="PRENOM :" name="prenom" maxLength="255" value={prenom} onChange={(e) => setPrenom(e.target.value)} required />
                            </div>
                        </label>

                        <label>
                            <div>
                                <input type="text" placeholder="NOM :" name="nom" maxLength="255"  value={nom} onChange={(e) => setNom(e.target.value)} required />
                            </div>
                        </label>

                        <label>
                            <div>
                                <input type="email" placeholder="@EMAIL :" name="email" maxLength="255" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                        </label>

                        <label>
                            <div>
                                <input type="password" placeholder="MOT DE PASSE :" name="mdp" minLength="8" maxLength="255" value={mdp} onChange={(e) => setMdp(e.target.value)} required />
                            </div>
                        </label>

                        <label>
                            <input type="submit" onClick={addUser} value="Envoyer" />
                        </label>

                    </form>
                </Popup>
                    { users.map((user, index) => (
                        <tr key={ user.id }>
                            <td>
                                <Popup trigger={<button> Éditer utilisateur </button>}
                                       position="right center">
                                    <div>Éditer</div>
                                    <form>

                                        <label>
                                            <div> <input type="text" placeholder={user.nom} name="nom" value={nom} onChange={(e) => setNom(e.target.value)} required /> </div>
                                        </label>

                                        <label>
                                            <div> <input type="text" placeholder={user.prenom} name="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} required /> </div>
                                        </label>

                                        <label>
                                            <div> <input type="email" placeholder={user.email} name="email" value={email} onChange={(e) => setEmail(e.target.value)} required /> </div>
                                        </label>

                                        <label>
                                            <input type="submit" onClick={editUser} value="Modifier" />
                                        </label>

                                    </form>
                                </Popup>
                                <button onClick={ () => deleteUser(user.id) } className="button">Supprimer</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )    
}

export default Users


        <section>
            <NavLink to="/admin">Retour</NavLink>
            <form method='post' onSubmit={subForm} encType="multipart/form-data">
                <input type='text' name='title' maxLength="23" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="titre" />
                <input type="file" name="image" placeholder="image" required />
                <textarea name="description" value={descri} onChange={(e) => setDescri(e.target.value)} placeholder="description">{descri}</textarea>

                <select name='categories_id' value={categories_id} onChange={(e) => setCategories_id(e.target.value)} required>
                    <option value="" disabled>--Veuillez choisir une categorie--</option>
                    <option value='1'>entrée</option>
                    <option value='2'>plat</option>
                    <option value='3'>dessert</option>
                </select>
                <div className="">
                    {ingredients[0] && ingredients.map((item,index) =>
                        <React.Fragment key={index}>
                            <input type='text' placeholder='ingredient' value={item.ingredient} onChange={(e) => handleChange(e, item.id, 'ingredient')} />
                            <input type='text' placeholder='quantite' value={item.quantite} onChange={(e) => handleChange(e, item.id, 'quantite')} />
                            <input type='text' placeholder='unite' value={item.unite} onChange={(e) => handleChange(e, item.id, 'unite')} />
                        </React.Fragment>
                    )}
                </div>
                <button onClick={addInput}>Ajouter un ingrédient</button>
                <input type='submit' value='Ajouter' />
            </form>
        </section>
    )
}