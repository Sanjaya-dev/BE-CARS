const {Cars} = require('../models');
const cloudinary = require('../cloudinary')


function handleListCard(req,res){
    Cars.findAll()
    .then(cars => {
        res.status(200).json(cars)
    })
}

async function handleAddCar(req,res){
   // const fileBase64 = req.file.buffer.toString("base64");
    // const file = `data:${req.file.mimetype};base64,${fileBase64}`;
    // const result = cloudinary.uploader.upload(file);
    try {
        const fileBase64 = req.file.buffer.toString("base64");
        const file = `data:${req.file.mimetype};base64,${fileBase64}`;

        const result = await cloudinary.uploader.upload(file)
        Cars.create({
            car_name: req.body.car_name,
            rent_per_day: req.body.rent_per_day,
            car_category: req.body.car_category,
            car_photo: result.url
        })

        .then(Cars => {
            res.status(200).json(Cars)
        })
    } catch (error) {
        console.error('Terjadi kesalahan : ',error);
        res.status(500).json({error : 'Terjadi kesalahan'});
    }
}

async function handleUpdateCar(req,res){
    if(req.file){
   
        const fileBase64 = req.file.buffer.toString("base64");
        const file = `data:${req.file.mimetype};base64,${fileBase64}`;
        const result = await cloudinary.uploader.upload(file);
        Cars.update({
            car_name: req.body.car_name,
            rent_per_day: req.body.rent_per_day,
            car_category: req.body.car_category,
            car_photo: result.url
        },{where: {id: req.params.id}})

        .then(cars => {
            res.status(200).json("berhasil")
        })
        .catch(err => {
            res.status(422).json("Tidak dapat mengupload")
        })
    
    }else{
        Cars.update({
            car_name: req.body.car_name,
            rent_per_day: req.body.rent_per_day,
            car_category: req.body.car_category,
            car_photo: req.file ? result.url : req.body.car_photo
        },{where : {id: req.params.id}})
        
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(err => {
            res.status(422).json("Tidak dapat mengupload")
        })
    }
}

function handleDeletCar(req,res){
    Cars.destroy({
        where: {
            id: req.params.id
        }
    })

    res.status(204).end();
}

module.exports = {
    handleListCard,
    handleAddCar,
    handleUpdateCar,
    handleDeletCar
}