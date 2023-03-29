const http = require("http")
const app =http.createServer((req,res)=>{
    if(req.url==="/"){
    res.write( JSON.stringify({ message: 'node js is a runtime environment for executing js code outside of browser ' }))
    res.end();
}
    if(req.url==="/about"){
    res.write  ("its about page")
    res.end();
    }
})
app.listen(5000,()=>{
    console.log("server running")
})