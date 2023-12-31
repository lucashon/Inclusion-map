const express = require('express');
const exphbs = require('express-handlebars')
const mysql = require('mysql2')

const port = 3000;
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars')

//HTML & CSS
app.use(express.static('public'))


// Rota principal
app.get('/', (req,res)=>{

    return res.render('home')

})

// rota de cadastro
app.post('/', (req,res)=>{
    const {nome, email,cpf, descricao} = req.body
    console.log(nome, email,cpf,descricao)
    // adicionando no banco de dados
    const sql = `INSERT INTO tb_cidadaos (nome, email, cpf, descricao) VALUES ('${nome}','${email}','${cpf}','${descricao}')`
    conn.query(sql,(err)=>{
        if(err){
            console.log(err)
        }
        console.log('')
        return res.redirect('/')
    })
   
})


// mostrar dados
app.get('/dados', (req,res)=>{
    const sql = `SELECT COUNT(*) AS quantidade FROM tb_cidadaos;`
    conn.query(sql,(err,data)=>{
        if(err){
            console.log(err)
        }
        const numero = data[0]
        console.log(numero)
        return res.render('dados', {numero})
    })

})


// Conexão simples

const conn = mysql.createConnection({
    host: 'localhost' ,
    port: 3306 ,
    user: 'root',
    password: '14/02Luc' ,
    database: 'projeto',
})

conn.connect((err)=>{
        if(err){
            console.log(err)
        }
        console.log('Mysql Conectado')
        app.listen(port,()=>{
            console.log(`Servidor rodando na porta ${port}`)
        })
})