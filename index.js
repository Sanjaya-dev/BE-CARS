const express = require('express');
const app = express();
const cors = require('cors');
const middleware = require('./middleware/index') //import middleware
const handler = require('./handler/index') //
const uploadOnMemory = require('./uploadOnMemory')
const PORT = process.env.PORT || 8000


app.use(cors());
app.use(express.json());

// dashboard admin all list car
app.get('/dashboard_admin/cars',middleware.isAdmin,handler.handleListCard)
// dashboard admin add car new
app.post('/dashboard_admin/cars/add_car',middleware.isAdmin,uploadOnMemory.single('picture'), handler.handleAddCar)
// dashboard admin update data car
app.put('/dashboard_admin/cars/update_car/:id',middleware.isAdmin,uploadOnMemory.single('picture'),handler.handleUpdateCar)
// dashboard admin delet car
app.delete('/dashboard_admin/cars/delet/:id',middleware.isAdmin,handler.handleDeletCar)

app.listen(PORT,() => {
    console.log(`http://localhost:${PORT}`)
})