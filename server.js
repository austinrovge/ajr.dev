const path = require('path');
const express = require('express');
const app = express();
const PORT = 8080;

app.get('*', function(req, res) {
   res.sendFile(path.join(__dirname + '/src/index.html'));
});

app.listen(PORT, function() {
   console.log(`Server listening on port: ${PORT}`);
});
