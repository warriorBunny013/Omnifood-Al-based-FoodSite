const homeController=require('../app/http/controllers/homeControllers')
const authController=require('../app/http/controllers/authControllers')
const cartController=require('../app/http/controllers/customers/cartControllers')
const recipeController=require('../app/http/controllers/recipeControllers')
var session = require('express-session'); 
const guest =require('../app/http/middlewares/guest')

function initRoutes(app){

app.get('/',homeController().index)

app.get('/login',guest,authController().login)
app.post('/login',authController().postLogin)

app.get('/signup',guest,authController().signup)
app.post('/signup',authController().postsignup)
app.post('/logout',authController().logout)

app.get('/recipes',recipeController().index)


app.get('/cart',cartController().index)
app.post('/update-cart',cartController().update)


}

module.exports=initRoutes