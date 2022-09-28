var PdfReader = require("pdfreader").PdfReader;

new PdfReader().parseFileItems("sample.pdf", function(err, item){
  if (item && item.text)
    console.log(item.text);
});
/*
var PDF = require('pdfinfo');

var pdf = PDF('samples/sample.pdf');

pdf.info(function(err, meta){
  if (err) throw err;
  console.log('pdf info', meta)
})
*/