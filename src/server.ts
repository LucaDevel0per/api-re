import express from 'express';

const app = express();


app.get('/', (req, res) => {
    res.json({message: 'Estou de volta!'})
})

app.listen(3000, () => {
    console.log("Rodando na porta 3000!")
})