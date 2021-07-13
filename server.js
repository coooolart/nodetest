const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to the Hone Page")
});

var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
    console.log('Server running at http://127.0.0.1:' + port + '/');
});
}

