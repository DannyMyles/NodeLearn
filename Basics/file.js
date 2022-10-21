//Importing the fs(filesSystem) module

const fs = require('fs');

// Reading files

// fs.readFile('./docs/blogs.txt',(error,data)=>{
//       if(error){
//             console.log(error)
//       }
//       //To read the files data convert it to sting using the toString method
//       console.log(data.toString())
// })



//Writing files

// fs.writeFile('./docs/blog1.txt', 'Hello, let us now write some files',()=>{
//       console.log('File was written successfully')
// })

// // If the file is not pre-existing, the WriteFile Function will then write for us
// fs.writeFile('./docs/blog2.txt', 'Hello, let us now write some files',()=>{
//       console.log('File was written successfully')
// })



//Directories (Creating a Folder)

//The assests folder will be created only if it does not already exist. That is the use of the fs.Exists() function
// if(!fs.existsSync('./assets')){
//  fs.mkdir('./assets',(error)=>{
//       if (error){
//             console.log(error)
//       }
//       console.log('Directory was created successfully')
// });
// // You can also delete the directory if it already exists. That is the use of the fs.Delete() function
// }else{
//       fs.rmdir('./assets',(error)=>{
//             if (error){
//                   console.log(error)
//             }
//             console.log('Directory was removed successfully')
//       });
// }



//Deleting files
// We are going to look for deleteme.txt file in the Doc folder and delete it
if(fs.existsSync('./docs/deleteme.txt')){
      fs.unlink('./docs/deleteme.txt',(error) =>{
            if(error){
                  console.log(error);
            }
            console.log(' File deleted successfully')
      }
)} else {
      console.log(' There was no such file in the Doc folder');
}