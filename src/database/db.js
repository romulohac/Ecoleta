//importar a depedencia do sqlite3

const sqlite3 = require('sqlite3').verbose()

// criar o objeto que irá fazer operaçoes de banco de dados.

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db



//ultilixar o objeto de banco de dados para nossas operaçoes.


//db.serialize(()=>{


//criar uma tabela com comandos SQl
/*db.run(`
CREATE TABLE IF NOT EXISTS places (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    image TEXT,
    name TEXT,
    address TEXT,
    address2 TEXT,
    state TEXT,
    city TEXT,
    items TEXT


);`)


//inserir dados
const query = `
    INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items    
    )   VALUES (?,?,?,?,?,?,?);

`
const values = [

    "https://images.unsplash.com/photo-1539068579625-97ba5ece81fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "Colectoria",
    "Guilherme Gramballa, Jardin America",
    "numero 260",
    "Santa Catarina",
    "Rio do Sul",
    "Resíduos Eletronicos, Lâmpadas"
]


function afterInsertData(err){
    if(err){
        return console.log(err)
    }
console.log ("Cadastrado com sucesso")
console.log(this) // o this referencia dentro da função a resposta que o run  traz para você.


}

db.run(query, values, afterInsertData)
    


})


 db.all(`SELECT name FROM places`, function(err, rows){ //consultar os dados da tabela

    if(err){
        return console.log(err)
    }

    console.log ("aqui estão seus registros: ")
    console.log (rows)

}) */




//deletar um dado da tabela
/*db.run (`DELETE FROM places WHERE id = ?`, [1], function(err){    

    if(err){
        return console.log(err)
    }

    console.log("Registro deletado com sucesso!")
})*/

//})