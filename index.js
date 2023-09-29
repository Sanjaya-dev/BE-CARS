const express = require('express');
const app = express();
const cors = require('cors');
const middleware = require('./middleware/index') //import middleware
const handler = require('./handler/index') //
const path = require("path");
const uploadOnMemory = require('./uploadOnMemory')
const PORT = process.env.PORT || 8000
const PUBLIC_DIRECTORY = path.join(__dirname, "public");


app.use(cors());
app.use(express.json());
app.set('view engine','ejs');
app.use(express.static(PUBLIC_DIRECTORY));

app.get('/dashboard_admin',(req,res) => {
    res.render('index',{
        name: req.query.name || 'Guest'
    })
})

app.get('/dashboard_admin/cars/add_car',(req,res) => {
    res.render('addcar',{
        name: req.query.name || 'Guest'
    })
})

app.get('/dashboard_admin/cars/update_car/:id',middleware.isAdmin,(req,res) => {
    res.render('editcar',{
        name: req.query.name || 'Guest'
    })
})



// dashboard admin all list car
app.get('/dashboard_admin/cars',middleware.isAdmin,handler.handleListCard)
// list car category small
app.get('/dashboard_admin/cars/:category',middleware.isAdmin,handler.handleListCarFindOne)
// dashboard admin add car new
app.post('/dashboard_admin/cars/add_car/upload',middleware.isAdmin,uploadOnMemory.single('picture'), handler.handleAddCar)
// dashboard admin update data car
app.post('/dashboard_admin/cars/update_car/:id/update',middleware.isAdmin,uploadOnMemory.single('picture'),handler.handleUpdateCar)
// dashboard admin delet car
app.delete('/dashboard_admin/cars/delet/:id',middleware.isAdmin,handler.handleDeletCar)

app.listen(PORT,() => {
    console.log(`http://localhost:${PORT}`)
})