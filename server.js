// Require express
const express = require('express');
const app = express();

//Require connected
const connectDB = require("./config/connect")

//Require the router
const authRouter = require('./routers/auth');
const product = require('./routers/product');
const category = require('./routers/category');
const panier = require('./routers/panier');

//connect DB
connectDB();

//init Middleware
app.use(express.json());


app.get('/', (req, res) => res.send('API Running'));

//Use routes
app.use('/api/auth', authRouter);
app.use('/api/product', product);
app.use('/api/category', category);
app.use('/api/panier', panier);


const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(` server started on port ${PORT}`));