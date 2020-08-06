//Dados

const proffys = [
    { name: "Diego fernandes",
    avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "787878",
    bio:"eu sou eu sabe, ta ligado como é ne, quando v é vc nao adinata é isso dai mesmo desse jeito que vai ser e é nium, sem ideia",
    subject:"Química",
    cost:"20",
    weekday:[0],
    time_from:[720],
    time_to:[1220]
},

    { name: "Diego fernandes",
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "787878",
        bio:"eu sou eu sabe, ta ligado como é ne, quando v é vc nao adinata é isso dai mesmo desse jeito que vai ser e é nium, sem ideia",
        subject:"Química",
        cost:"20",
        weekday:[0],
        time_from:[720],
        time_to:[1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

// Funcionalidade

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]    
}

function pageLanding(req, res) { //função ai de baixo so que bem menor, req: trazer mais dados daqui, res: oq ele vai mostrar pra mim na tele
    return res.render("index.html") // isso é pra pegar o arquivo, dirname = sua pasta(\nlw2\src    )
}

function pageStudy(req, res) {
                                       
    const filters = req.query //req.query: tudo que tem depois da url, aqueles caracteres malucos
   return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query
    
    // se tiver dados adiciona
    const isNotEmpty = Object.keys(data).length != 0 //verificando se o data ta vazio
    if (isNotEmpty) {
        console.log("entrei aqui")
        
        data.subject = getSubject(data.subject)

        //Adicionar os dados a lista de professores
        proffys.push(data)

        return res.redirect("/study") //depois ele redireciona pra essa pagina ai
    }

    // se nao, nao

    return res.render("give-classes.html", { subjects, weekdays }) 
}

// Servido
const express = require('express')
const server = express()

//Nunjucks
const nunjuncks = require('nunjucks') // pegar os arquivos la pro html
nunjuncks.configure('src/views', { //renderizando pelo nunjucks
    express: server,
    noCache: true,
})

// Inicio da config do server
server
//ele ta pegando a pasta public com o static, o static é pra vc pegar so arquivos estaticos = os que tao dentro da public
.use(express.static("public"))// .use: configuração do servidor,
//rotas
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
// iniciando servido
.listen(5500) //tipo um url

//function thisIsAFunction(){
//    return{ //Retornando algo que tu coloque ai dentro,
//        name:"Fausto"
//        age: 19
//    }   
//}

//thisIsAFunction()