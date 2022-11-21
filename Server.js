mport express from 'express'
const app = express()
import { urlencoded } from 'body-parser'

app.use(urlencoded({ extended: true}))

app.post('/form', (req, resp) => {
    console.log(req.body)
    resp.send('Parabens')

})

app.listen(5500)


<h1>Formulário</h1>

<form action="http://127.0.0.1/:5500/form" method="POST">
    <input type="text" name="nome"> 
    <button>Incluir</button>
</form>
