const express=require('express');

const app=express();

const port=4500;

app.use(express.static('build'));


app.get('*',(req,res,next)=>{

    return res.sendFile(__dirname+'/build/index.html');

    
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})