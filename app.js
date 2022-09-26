import express from "express"
import cors from "cors"
const app = express();
app.use(cors())

app.get("/courses", (req, res) => {
    console.log("Connected to React");
    let liste = ['pain', 'boursin'];
    res.json(liste);

});

const PORT = process.env.PORT || 9300;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
