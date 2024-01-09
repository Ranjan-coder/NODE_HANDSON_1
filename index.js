const http = require('http')
const data = require('./data')

const app = http.createServer((req,res)=>{

    if(req.url === '/'){
        res.write('Hello World')
        res.end()
    }
    else if(req.url === '/html'){
        res.write('<h1>Hello world</h1>')
        res.end()
    }
    else if(req.url === '/json'){
        const stringData = JSON.stringify(data)
        res.write(stringData)
        res.end()
    }
})
app.listen(5000,()=>{
    console.log('server running')
})