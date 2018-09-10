module.exports = function() {
    var express = require("express");
    
    var app = express();
    var PORT = process.env.PORT || 8080;
    
    app.use(express.static('./public'));
    
    app.listen(PORT, () => {
      console.log(`App is listening on PORT: ${PORT}`)
    })
}



