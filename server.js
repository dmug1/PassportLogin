const express =  require('express')
const app = express()

app.set('view-engine','ejs')


 //set routes
 app.get('/',(req,res) =>{
    res.render('index.ejs', {name: 'Kyle'})
})

//set login route
app.get('/login',(req,res) =>{
    res.render('login.ejs')
})

//set login register
app.get('/register',(req,res) =>{
    res.render('register.ejs')
})

app.post('/register', (req,res) =>{
    
})


app.listen(3000)
