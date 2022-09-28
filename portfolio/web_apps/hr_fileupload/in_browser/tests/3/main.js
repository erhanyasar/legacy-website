/**
     * Extract text from PDFs with PDF.js
     * Uses the demo pdf.js from https://mozilla.github.io/pdf.js/getting_started/
     */
    var myResume = document.getElementById('myResume');
        var file = myResume.files[0];
var data = 'http://www.erhanyasar.com.tr/files/CV_ErhanYasar.pdf';

    this.pdfToText = function(data) {

        PDFJS.workerSrc = 'js/pdf.worker.js';
        PDFJS.cMapUrl = 'js/cmaps/';
        PDFJS.cMapPacked = true;

        return PDFJS.getDocument(data).then(function(pdf) {
            var pages = [];
            for (var i = 0; i < pdf.numPages; i++) {
                pages.push(i);
            }
            return Promise.all(pages.map(function(pageNumber) {
                return pdf.getPage(pageNumber + 1).then(function(page) {
                    return page.getTextContent().then(function(textContent) {
                        return textContent.items.map(function(item) {
                            return item.str;
                        }).join(' ');
                    });
                });
            })).then(function(pages) {
                return pages.join("\r\n");
            });
        });
    }

    self.pdfToText(myResume.files[0].path).then(function(result) {
      console.log("PDF done!", result);
 });