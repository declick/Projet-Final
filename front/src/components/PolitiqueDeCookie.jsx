import React from "react"

const PolitiqueDeCookie =()=>{
    
    return(
    <React.Fragment>
    
      <div className="text_intro">
             <h2> Politique de cookies </h2>
        </div>   

        <div className="content">
            <div>
              <input type="checkbox" id="question1" name="q"  className="questions" />
              <div className="plus">+</div>
              <label htmlFor="question1" className="question">
                CHAMP D'APPLICATION
              </label>
              <div className="answers">
            This is the answer of the question.. keep it short.</div>
            </div>
            
            <div>
              <input type="checkbox" id="question2" name="q" className="questions" />
              <div className="plus">+</div>
              <label htmlFor="question2" className="question">
                QU'EST-CE QU'UN COOKIE ?
              </label>
              <div className="answers">
                short!
              </div>
            </div>
              
            <div>
              <input type="checkbox" id="question3" name="q" className="questions" />
              <div className="plus">+</div>
              <label htmlFor="question3" className="question">
                POURQUOI UTILISONS-NOUS DES COOKIES ?  
              </label>
              <div className="answers">
                This is the answer!
              </div>
            </div>
            
            <div>
              <input type="checkbox" id="question4" name="q" className="questions" />
              <div className="plus">+</div>
              <label htmlFor="question4" className="question">
                POURQUOI UTILISONS-NOUS DES COOKIES ?  
              </label>
              <div className="answers">
                This is the answer!
              </div>
            </div>
            
            <div>
              <input type="checkbox" id="question5" name="q" className="questions" />
              <div className="plus">+</div>
              <label htmlFor="question5" className="question">
                POURQUOI UTILISONS-NOUS DES COOKIES ?  
              </label>
              <div className="answers">
                This is the answer!
              </div>
            </div>
            
            <div>
              <input type="checkbox" id="question6" name="q" className="questions" />
              <div className="plus">+</div>
              <label htmlFor="question6" className="question">
                POURQUOI UTILISONS-NOUS DES COOKIES ?  
              </label>
              <div className="answers">
                This is the answer!
              </div>
            </div>
            
          </div>
    </React.Fragment>
    )
}
export default PolitiqueDeCookie