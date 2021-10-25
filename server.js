const express =  require('express')
const app = express()

app.set('view-engine','ejs')
app.use(express.urlencoded({ extended:false}))  //come back to study this
                                                // not really clear yet

const users = []

 //set routes
 app.get('/',(req,res) =>{
    res.render('index.ejs', {name: 'Kyle'})
})

//set login route
app.get('/login',(req,res) =>{
    res.render('login.ejs')
})

app.post('/login', (req,res) =>{
    
})


//set login register
app.get('/register',(req,res) =>{
    res.render('register.ejs')
})

app.post('/register', (req,res) =>{
    req.body.email
})


app.listen(3000)
