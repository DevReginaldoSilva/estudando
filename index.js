const express = require('express')

const port = 3000
const app = express()
app.use(express.json())

app.get('/users/',(request,response)=>{
        const {name,age,Rob} =request.body

        
return response.json({name,age,Rob} )
     
})
        app.listen(port,()=>{
            console.log(`🎸server started on port ${port} 😎`)

            
        })

