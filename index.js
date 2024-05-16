const express = require('express');
const getRandomCat = require('random-cat-img');


const app = express();
const port = 3008;

const getImage= ()=>{
   return 'https://picsum.photos/200/300'
}

app.get('/api/image/random', async (req,res)=>{
    const images = await getImage();
    res.json({image : images});
})

app.listen(port, ()=>{
    console.log("your server is running on port " + port);
});