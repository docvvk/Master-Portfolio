// // module.exports = function() {
//     var express = require("express");
    
//     var app = express();
//     var PORT = process.env.PORT || 8080;
    
//     app.use(express.static('./public'));

//     app.get('/', function (req, res) {
//       res.send('hello world')
//     })
    
//     app.listen(PORT, () => {
//       console.log(`App is listening on PORT: ${PORT}`)
//     })
// }

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('./public'));

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

app.listen(PORT, () => {
  console.log(`App is listening on PORT: ${PORT}`)
})

