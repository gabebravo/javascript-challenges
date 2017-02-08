
// import dependencies
  const express = require('express');
  let app = express();

 // start server
  app.listen(3000, function() {
       console.log('Listening on localhost');
  });

  app.use(express.static('public'));
