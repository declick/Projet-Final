import pool from '../config/database.js'

const SubmitContactController = (req, res) => {
    
     const validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    
     let sql = "INSERT INTO contact (prenom, nom, email, text, registration_date) VALUES (?,?,?,?,?)"
     
      if(req.body.email.match(validRegex)){ 

          if (req.body.prenom.length <= 30 && req.body.nom.length <= 30 && req.body.email.length <= 50 && req.body.text.length >= 1  &&  req.body.text.length <= 500){
              
              pool.query(sql,[req.body.prenom, req.body.nom, req.body.email, req.body.text, new Date()], (err,result) => {
                   if (err) throw err
                     res.json({response:true})
              })
          }else{
              res.json({response:false, message:"c'est trop long là garçon !"})
          }
      }else{
            res.json({response:false, message:"c'est quoi cette adresse chelou ?"})
      }
}
                 
export default SubmitContactController          
        