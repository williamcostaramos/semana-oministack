const express= require('express');

const app= express();
app.get('/', (req, res)=>{
return res.json({message: "Server ok"});

});
app.set("json spaces",4);
app.get('/tasks',(req, res)=>{
    res.json({
        tasks: [
            {"title": "fazer Compras", "status": "feito"},
            {"title": "Começa a Estudar", "status": "feito"}
        ]
    })
});
app.listen(3000);