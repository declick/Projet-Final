import express from "express"
import bodyParser from 'body-parser'
import cors from "cors"

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true }))


app.post("/api/Inscription",(req,res) => {
    console.log(req.body)
    if(true){
        res.json({response:true})
    } else {
        res.json({response:false})
    }
})

app.post("/api/Connexion",(req,res) => {
    console.log(req.body)
    if(true){
        res.json({response:true})
    } else {
        res.json({response:false})
    }
})

const PORT = process.env.PORT || 9300;

app.listen(PORT, console.log(`Server started on port ${PORT}`))
