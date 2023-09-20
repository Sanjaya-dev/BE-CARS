function isAdmin(req,res,next){
    if(req.query.iam === "admin"){
        // akan di lanjutkan ke parameter yang lain
        next()
        return
    }

    res.status(401).send("anda bukan admin")
}

module.exports = {
    isAdmin
}