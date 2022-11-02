import React from "react"

const PolitiqueDeCookie =()=>{
    
    return(
    <React.Fragment>
    
      <div className="text_intro">
             <h2> Politique des données personnels </h2>
        </div>   

        <div className="content">
            <div>
              <input type="checkbox" id="question1" name="q"  className="questions" />
              <div className="plus">+</div>
              <label htmlFor="question1" className="question">
                Identité et coordonnées de l’organisme
              </label>
              <div className="answers">
            (responsable du traitement de données)
            </div>
            </div>
            
            <div>
              <input type="checkbox" id="question2" name="q" className="questions" />
              <div className="plus">+</div>
              <label htmlFor="question2" className="question">
                Finalités
              </label>
              <div className="answers">
                (à quoi vont servir les données collectées) 
              </div>
            </div>
              
            <div>
              <input type="checkbox" id="question3" name="q" className="questions" />
              <div className="plus">+</div>
              <label htmlFor="question3" className="question">
                Base légale  
              </label>
              <div className="answers">
                du traitement de données (c’est-à-dire ce qui donne le droit à un organisme de traiter les données) : il peut s’agir du consentement des personnes concernées, du respect d’une obligation prévue par un texte, de l’exécution d’un contrat, etc.) 
              </div>
            </div>
            
            <div>
              <input type="checkbox" id="question4" name="q" className="questions" />
              <div className="plus">+</div>
              <label htmlFor="question4" className="question">
                Caractère obligatoire ou facultatif du recueil des données   
              </label>
              <div className="answers">
                (ce qui suppose une réflexion en amont sur l’utilité de collecter ces données au vu de l’objectif poursuivi – principe de « minimisation » des données) et conséquences pour la personne en cas de non-fourniture des données ;
              </div>
            </div>
            
            <div>
              <input type="checkbox" id="question5" name="q" className="questions" />
              <div className="plus">+</div>
              <label htmlFor="question5" className="question">
                Destinataires ou catégories de destinataires des données 
              </label>
              <div className="answers">
                (qui a besoin d’y accéder ou de les recevoir au vu des finalités définies, y compris les sous-traitants) ;
              </div>
            </div>
            
            <div>
              <input type="checkbox" id="question6" name="q" className="questions" />
              <div className="plus">+</div>
              <label htmlFor="question6" className="question">
                Durée de conservation des données
              </label>
              <div className="answers">
              (ou critères permettant de la déterminer) 
              </div>
            </div>
            
            <div>
              <input type="checkbox" id="question7" name="q" className="questions" />
              <div className="plus">+</div>
              <label htmlFor="question7" className="question">
                Droits des personnes concernées
              </label>
              <div className="answers">
              (les droits d’accès, de rectification, d’effacement et à la limitation sont applicables pour tous les traitements)
              </div>
            </div>
            
            <div>
              <input type="checkbox" id="question8" name="q" className="questions" />
              <div className="plus">+</div>
              <label htmlFor="question8" className="question">
               Coordonnées du délégué à la protection des données
              </label>
              <div className="answers">
             de l’organisme, s’il a été désigné, ou d’un point de contact sur les questions de protection des données personnelles ;
              </div>
            </div>

          </div>
    </React.Fragment>
    )
}
export default PolitiqueDeCookie