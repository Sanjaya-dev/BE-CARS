const express = require('express');
const app = express();
const cors = require('cors');
const handler = require('./handler/index')
const uploadOnMemory = require('./uploadOnMemory')
const PORT = process.env.PORT || 8000


app.use(cors());
app.use(express.json());

// all list car
app.get('/cars',handler.handleListCard)
// add car new
app.post('/cars/addcar',uploadOnMemory.single('picture'), handler.handleAddCar)
// update data car
app.put('/cars/updatecar/:id',uploadOnMemory.single('picture'),handler.handleUpdateCar)
// delet car
app.delete('/cars/delet/:id',handler.handleDeletCar)

app.listen(PORT,() => {
    console.log(`http://localhost:${PORT}`)
})