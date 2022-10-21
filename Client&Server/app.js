const { response } = require('express');
const express = require('express');
const morgan = require('morgan'); 
//Importing the Book
const Book = require('./models/book.model');


//Creating Expressapp
const app = express();

// connect to MySQL DAtabase
const mysql = require('mysql');
        const db_con = mysql.createConnection({
            host:"localhost",
            user:"root",
            password:"mypassword12",
            database:"test"
        });
        //Connect
        db_con.connect((err) =>{
            if(!err){
                console.log("connected");
            }else
            console.log(err.message)
        });

// Register View Engine
app.set('view engine', 'ejs');

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended : true}))
//Adding static css route
app.use(express.static(__dirname + '/public'));

// Listen for requests
const port =process.env.port || 3000;
app.listen(port,()=>console.log(`Listening on port ' ${port}` ));



      app.get('/', (req, res)=>{
                  res.redirect('/books');
            });

            app.get('/about', (req, res)=>{
                  res.render('about');
            });

      app.get('/books', (req, res)=>{
            Book.findAll()
            .then((result)=>{
                  res.render('index',{books : result})
            })
            .catch((err)=>{
                              console.log(err)
                        })
      })
         
      
      app.get('/create', (req, res)=>{
            res.render('create');
      });
      
      //Posting a book to the database
      app.post('/books', (req, res)=>{
            const book = new Book (req.body)
            book.save()
            .then((result)=>{
                  res.redirect('/books');
            })
            .catch((err)=>{
                  console.log(err)
             })    
      });

      // Redirecting to a specific route parameter
      app.get('/books/:id', (req, res)=>{
            const id = req.params.id;
            Book.findOne({_id : id})
           .then((result)=>{
                  res.render('details',{book :result, title :'Book details'});
            })
            .catch((err)=>{
                  console.log(err)
            })
      });
//404's
app.use((req,res)=>{
      res.status(404).render('404');
})





