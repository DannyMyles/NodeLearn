const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
      'test',
      'root',
      'mypassword12',
       {
         host: 'localhost',
         dialect: 'mysql'
       }
     );
     sequelize.authenticate().then(() => {
      console.log('Connection has been established successfully.');
   }).catch((error) => {
      console.error('Unable to connect to the database: ', error);
   });

//Create a new database called books
const Book = sequelize.define("books", {
   title: { 
     type: DataTypes.STRING,
     allowNull: false
   },
   author: {
     type: DataTypes.STRING,
     allowNull: false
   },
   release_date: {
     type: DataTypes.DATEONLY,
   }
});

//Use sync to add the book model to the database
sequelize.sync().then(() => {
   console.log('Book table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

module.exports = Book;