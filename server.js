const express=require('express');
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv')
dotenv.config();
const Url =require('./models/url'); 
app.use(express.urlencoded({ extended: false }))

mongoose 
 .connect(process.env.MONGO_URL, {
        useNewUrlParser: true
          })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));

// converts post requests into json
app.use(express.json());

app.get('/',(req,res)=>{
  console.log('get route')
  res.send('hello')
})
app.post('/', async (req, res) => {
    await Url.create({full:req.body.full})
    const shortone = await Url.findOne({ full: req.body.full })
    res.send(`${shortone.short}`)
  })
  
  app.get('/:shortUrl', async (req, res) => {
    const UrlData = await Url.findOne({ short: req.params.shortUrl })
    if (UrlData == null) return res.sendStatus(404)
  
    res.redirect(UrlData.full)
  })


app.listen(5000,()=>{
    console.log('server running')
});