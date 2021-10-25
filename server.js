const express =  require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport') //study mre of this
const flash = require('express-flash')
const session = require('express-session')

const initializePassport = require('./passport-config')

initializePassport(passport,
     email => {
        return  users.find(user => user.email === email)
})

app.set('view-engine','ejs')
app.use(express.urlencoded({ extended:false}))  //come back to study this
                                                // not really clear yet
app.use(flash())
app.use(session({
    secret
}))

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

app.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10) // async        
        
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/login')
    } catch(err){
        console.log(err.message);
        res.redirect('/register')   
    }
    console.log(users)

})


app.listen(3000)
