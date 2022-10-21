//Global variables

// console.log(global)

setTimeout(()=>{
      console.log('In the timeout state')
      clearInterval(interval)
},3000)



const interval = setInterval(()=>{
      console.log('Setting interval to one 1 sec')},3000)
