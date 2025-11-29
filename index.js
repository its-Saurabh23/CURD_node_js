const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router  = require('./routes/routes')
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 3000; 
dotenv.config();

connectDB();
//MiddleWare
app.use(bodyParser.json());

app.get('/',(req,res)=>{
  res.send('Server is working......');
})
app.use('/api/users',router);

app.listen(PORT,()=>{
   console.log(`Server is running on port ${PORT}`);
}) 