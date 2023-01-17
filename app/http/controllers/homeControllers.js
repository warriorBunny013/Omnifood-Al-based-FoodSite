//concept of factory functions--> function that return a object
//concept of closures
function homeController(){

    return{
        index(req,res){
            res.render('home')
        }
    }

}

module.exports=homeController