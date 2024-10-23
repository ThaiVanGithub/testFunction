const express = require('express');
const app = express();

const db = require('./db.js'),
toursRoutes = require('./controller/tours.js');

//middleware

app.use('/api/tours', toursRoutes);


//handle erro: kiểm lỗi
app.use((err, req, res, next)=>{
    console.error(err);
    res.status(err.status || 500).send({message: 'Somethings went wrong'});

})


db.query("SELECT 1")
.then(() => {
    console.log("db connection succeeded");
    app.listen(3000, () => console.log("server started at http://localhost:3000/api/tours/")) ;
})
.catch(err => console.log('db connection failed. \n'+err));


