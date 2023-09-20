const cloudinary = require('cloudinary').v2;

// sesuaikan dengan cloudinary
cloudinary.config({
    cloud_name: 'dgylqxazw',
    api_key: '235735931565553',
    api_secret: '_cmmjOXgNmlnujUZZBcDKpYzKnc',
    secure: true
});

module.exports = cloudinary