const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"))

//rotas
app.get("/", function(req, res){
    res.render("pages/index", { qualitys: posts,});
})

app.get("/post", function(req, res){
    res.render("pages/post");
})

//objetos dos posts
const posts = [{
    id: 1,
    titulo: "asdasfasf",
    img: "http://localhost:8080/img1.png",
    texto: " asdasifhauhfgus ",
    data: "20/08",
    categoria: "Estilo de Vida"
},
{
    id: 2,
    titulo: "sad",
    img: "http://localhost:8080/img2.png",
    texto: " asdasifhauhfgdsaffsafasus ",
    data: " safsaassssssssssssssssssssssssssssssssssssssfsg sa",
    categoria: "Tecnologia"
},
{
    id: 3,
    titulo: "sad",
    img: "http://localhost:8080/img2.png",
    texto: " asdasifhauhfgdsaffsafasus ",
    data: " safsaassssssssssssssssssssssssssssssssssssssfsg sa",
    categoria: "Tecnologia"
}]

app.listen(8080);
console.log('rodando')