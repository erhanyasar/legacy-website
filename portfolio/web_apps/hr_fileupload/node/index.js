// Load the http module to create an http server.
var http = require('http'); 

// Create a function to handle every HTTP request
function handler(req, res){

  var form = '';

  if(req.method == "GET"){ 
    
    form = '<!doctype html> \
<html lang="en"> \
<head> \
    <meta charset="UTF-8">  \
    <meta http-equiv="X-UA-Compatible" content="text/html"> \
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"> \
    <title>Arete Human Resources</title> \
</head> \
<body> \
  <form name="myForm" action="" onsubmit="return ajax();"method="post">\
      <br> \
      <input type="file" id="myResume" accept=".txt,.doc,.docx,.pdf,.jpg"> \
  </form> \
  <hr> \
  <button type="submit" id="submitBTN" onclick="">Submit</button> \
  <div id="displayResume"></div> \
  <script src="http://code.jquery.com/jquery-latest.min.js"></script> \
  <script> \
    window.onload = function () { \
        var myResume = document.getElementById('myResume'); \
        var displayResume = document.getElementById('displayResume'); \
    } \
  </script> \
</body> \
</html>';

  //respond
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200);
  res.end(form);
  
  } else if(req.method == 'POST'){

    //read form data
    req.on('data', function(chunk) {

      //grab form data as string
      var formdata = chunk.toString();

      //grab A and B values
      var a = eval(formdata.split("&")[0]);
      var b = eval(formdata.split("&")[1])

      var result = calc(a,b);

      //fill in the result and form values
      form = result.toString();

      //respond
      res.setHeader('Content-Type', 'text/html');
      res.writeHead(200);
      res.end(form);

    });

  } else {
    res.writeHead(200);
    res.end();
  };

};

//js functions running only in Node.JS
function calc(a,b){
  return  Number(a)+Number(b);;
}

// Create a server that invokes the `handler` function upon receiving a request
http.createServer(handler).listen(8000, function(err){
  if(err){
    console.log('Error starting http server');
  } else {
    console.log("Server running at http://127.0.0.1:8000/ or http://localhost:8000/");
  };
});