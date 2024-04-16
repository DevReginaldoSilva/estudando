const express = require('express')
const uuid = require('uuid')


const port = 3000
const app = express()
app.use(express.json())



const users = []

app.get('/users/',(request,response)=>{ 
        return response.json(users)
     
})
app.post('/users/',(request,response)=>{ 
        const {name,age} = request.body
        

        const user = {id: uuid.v4(),name,age}
        
        users.push(user)


        return response.status(201).json(user)

})

        app.listen(port,()=>{
            console.log(`🎸server started on port ${port} 😎`)

            
        })

/*
-Query params =>// FILTROS
-Route params => /users/2   //BUSCAR, DELETAR OU ATUALIZAR
-REQUEST Body => {"name":"reginaldo","age":"38"}


-GET         => Buscar informaçoes  no back-end
-POST        => CRIAR informações no back-end
-PUT / PATCH => ALTERA /ATUALIZA informações no back-end
-DELETE      => DELETA informações no Back-end
*/
