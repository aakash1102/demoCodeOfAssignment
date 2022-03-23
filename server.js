//Install express server
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();

// Serve only the static files form the dist directory
// app.use(express.static('./dist/angular-assignment-aakash'));
app.use(express.static(__dirname + '/dist/angular-assignment-aakash'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/angular-assignment-aakash'}),
    // res.sendFile(path.join(__dirname+'/dict/angular-assignment-aakash/index.html'))
);

// Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 5000);

app.listen(PORT, (err) => {
    if (err) console.error('❌ Unable to connect the server: ', err);
    console.log(`🌍 Server listening on port ${PORT} `);
  });