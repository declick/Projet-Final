# Projet-Final


// Site vitrine pour l'entreprise: "MY LITTLE LASHES" (entreprise expert dans la beauté du regard)

// langagues:   Html, Css, React, Sql, Node (Axios)


// PSEUDOCODE:

///////////////////////////////////// FRONTEND /////////////////////////////////////

// Configuration du fichier index.js

// Mise en place des routes

// Creation du fichier Reducer pour stoker les données  SQL (action.payload --> valeur)

// Creation du fichier context

// Creation du fichier config pour la base_url (API)

// Mise en place du fichier Token utilisé pour le processus de persistance et d'autorisation envoyé dans les demandes d'API afin d'identifier qui est l'expéditeur de la demande et de confirmer qu'il dispose d'une autorisation appropriée.JWT sera stocké dans localStorage. (state = localstorage dans le useEffect)

// Mise en place des securiter:
    -connexion: Verification des informations (input) + token
    -logout: delete token du localStorage
    -contact: Verification des informations (input)
    -Mise en place du Middleware et du fichier path.js pour proteger les routes Admin et user
  
// Creation de la navigations admin vers les differents composants de modifiable en base de données  

// Creation de CRUD pour crée,recupérer,modifier,supprimer des composants en base de données 


///////////////////////////////////// BACKEND //////////////////////////////////////

// Creation du server back (Node.js)

// Creation d'une base de données

// Configuration du fichier app.js

// Creation du fichier router.js

// Mise en place du fichier Token utilisé pour le processus de persistance et d'autorisation envoyé dans les demandes d'API afin d'identifier qui est l'expéditeur de la demande et de confirmer qu'il dispose d'une autorisation appropriée.JWT sera stocké dans localStorage. (state = localstorage dans le useEffect)

// Creation du fichier isLogged.js pour verifier le token

// Gestion des routes avec les methodes GET/POST/DELETE (requete SQL --> pool.query)

// Mise en place des securiter:
    -connexion: Verification des informations (input) + token + Encryptage des mdp avec Bcrypte
    -logout: delete token du localStorage
    -contact: Verification des informations (input)
    -Mise en place du Middleware et du fichier path.js pour proteger les routes Admin et user


///////////////////////////////////// NAVBARRE //////////////////////////////////////


// La navbarre:         

                        // Visiteurs
                
                        -Acceuil
                        -Prestations
                        -Produits
                        -A Propos
                        -Connexion
                        
                        -colortheme 
                
                        // Utilisateurs
                
                        -Acceuil
                        -Prestations
                        -Produits
                        -Réalisations
                        -A Propos
                        -Contact
                        -Reserver --> Liens vers planity
                        -Profil
                        -Logout
                
                        -colortheme 
                        
                        // Administrateur
                
                        -Acceuil
                        -Prestations
                        -Produits
                        -Réalisations
                        -A Propos
                        -Contact
                        -Reserver --> Liens vers planity
                        -Profil
                        -Logout
                        -dashbord (admin)
                        
                        -colortheme 
                        
                        
// La navbarre Admin:   

                        // Messages

                        -lire, supprimer les messages
                        
                        // Utilisateurs
                        
                        -lire, supprimer un utilisateurs

                        // Prestations

                        -créer, lire, mettre à jour, supprimer les prestations
                        
                        // Produits
                
                        -créer, lire, mettre à jour, supprimer les produits 
                        
                         // Images
                
                        -lire, créer, supprimer les images
                        
                        
///////////////////////////////////// PAGES FRONTEND //////////////////////////////////////   


//NAVBARRE:             

                        // Logo + toggle dark theme + Les differents liens du site
                
                
//ACCUEIL:              

                        // Header:      Image header + Titre + Texte défilent (rouge) pour reduc.

                        // Body:        module1: "intro" Titre + Texte Intro + Caroussel fixe
                        
                                        module2: "prestations" Titre + Texte Intro + Systeme de CARD avec les differentes prestations / Photos, texte, button de redirection "Presentations"
                                        (Affichage CRUD pour les titre/photos/texte)
                        
                                        module3: "kit entretiens" Titre + Texte Intro + Systeme de CARD avec les differents produits / button de redirection "Produit"
                                        
                                        module4: "phylosophie" 4 <div> notre phylosophie
                                        
                                        module5: "look book" Caroussel (si possible avec React)
                                        
                                        module6: card reservation + button (Redirection register si pas connecter) + horaires
                        
                        // Footer:      logo facebook/instagramme + mentions obligatoire + copyright


//PRESTATIONS:           

                        // Body:        Tableau des prestations avec menu

                                        module:  Titre + Texte Intro + Systeme de CARD avec les differentes prestations / Photos, texte, button de redirection "Planity"
                                        (Affichage CRUD pour les titre/photos/texte/description #popup)
                
                        // Footer:      logo facebook/instagramme + mentions obligatoire + copyright
                        

//PRODUITS:              

                        // Body:        module: Titre + Texte Intro

                                        module: Systeme de CARD avec les differentes prestations / Photos, texte, description
                                        (Affichage CRUD pour les titre/photos/texte/description #popup)

                        // Footer:      logo facebook/instagramme + mentions obligatoire + copyright
                        

//REALISATIONS:         

                        // Body:        Photos (CRUD pour les photos) + Systeme de mise en page des images
                
                        // Footer:      logo facebook/instagramme + mentions obligatoire + copyright
                        
                
//A PROPOS:             

                        // Body:        "INTRO" Titre
                    
                        module1: Titre + explications "my little lashes"
                                        
                        module2: Photo + explications "Team"

                        // Footer:      logo facebook/instagramme + mentions obligatoire + copyright
                        
                        
//CONTACT:              

                        // Body:        module1: Formulaire (prenom,nom,email,txt,captcha si possible)

                        module12: contact info + iframe google map
                                        
                        // Footer:      logo facebook/instagramme + mentions obligatoire + copyright                


//RESERVER:             

                        // --> Liens vers planity


//PROFIL:               

                        // Body:        Titre + nom de la presonne connecté + texte

                         module: Formulaire (prenom,nom,email,button supp. profil)
                                        
                        // Footer:      logo facebook/instagramme + mentions obligatoire + copyright
                        

//404:                  

                        // Body:        Titre +  texte + button redirection "Accueil"

                        
//ADMIN:               

                        // Body:        navbarre admin pour la gestion des CRUD + nmb de msg

                        // Footer:      logo facebook/instagramme + mentions obligatoire + copyright


///////////////////////////////////// PAGES BACKEND //////////////////////////////////////


//AdminMessage:         

                        // msg + button supp.


//AdminUsers:           

                        // users + button supp.


//AdminPrestation:      

                        // Titre + button Add. prestations/ retour

                        tableau responsive (categorie,titre,description + button modif./supp.)

//AddPrestation:        

                        // button retour

                        tableau responsive (input titre,image,prestation,categorie) + button envoi

//EditPrestation:       

                        // button retour

                        tableau responsive (input titre,image,prestation,categorie) + button envoi


//AdminProduit:         

                        // Titre + button Add. produits/ retour

                        tableau responsive (categorie,image,description,prix + button modif./supp.)
                        
//AddProduit:           

                        // button retour

                         tableau responsive (input titre,image,prestation,prix) + button envoi

//EditProduit:          

                        // button retour

                        tableau responsive (input titre,image,prestation,prix) + button envoi


//AdminImage:           

                        // Titre + button Add. image/ retour

                        tableau responsive (image + button supp.)

//AddImage:             

                        // button retour

                        tableau responsive (image) + button envoi
	

///////////////////////////////////// TIPS //////////////////////////////////////  


                ● faire un button up en bas de page
                ● 5 tables / Photos / Articles / Roles / Commentaire / Categories
                ● Style en display: flex
                ● faire du responsive et media query
                ● Accessibilité ok
                ● aucun <br>
                ● Utilisation (em, rem)
                ● Mobile first
                ● Local storage
                ● JSON
                ● manipulation du DOM sans jquery
                ● API HTML5 (FileAPI, WebGL, AudioAPI, etc…)
                ● Fonctionnalités originales (ex : animation poussée)

