    var pdfUtil = require('pdf-to-text');
    var pdf_path = "sample.pdf";

    pdfUtil.pdfToText(upload.path, function(err, data) {
      if (err) throw(err);
      console.log(data);   
    });

