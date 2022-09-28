var newFile = document.getElementById('files');
newFile.onchange = function (evt) {
	parseAndRenderPDF(evt, this);
}

var parseAndRenderPDF = function (evt, that) {
	var canvas = document.getElementById('canvas');
	var tgt = evt.target || window.event.srcElement;
	var files = tgt.files;
	// FileReader support
	if (FileReader && files && files.length) {
		var fr = new FileReader();
		var extension = files[0].name.split('.').pop().toLowerCase();
		//if extension is not pdf ,then stop processing further and exit.
		if(extension !== 'pdf') {
			alert('please choose a PDF file');
			return;
		} else {
			//parse and process the PDF file.
			fr.onload = function(e) {
				console.debug("Loaded the PDF file");
				PDFJS.getDocument(e.target.result).then(function(pdf) {
						// Using promise to fetch the page
						pdf.getPage(1).then(function(page) {
							var scale = 1.5;
							var viewport = page.getViewport(scale);
							var context = canvas.getContext('2d');
							context.clearRect(0,0, canvas.width, canvas.height);
							canvas.height = viewport.height;
							canvas.width = viewport.width;
							var renderContext = {
									canvasContext: context,
									viewport: viewport
							};
							//Step 1: store a refer to the renderer
							var pageRendering = page.render(renderContext);
							//Step : hook into the pdf render complete event
							var completeCallback = pageRendering._internalRenderTask.callback;
							pageRendering._internalRenderTask.callback = function (error) {
								//Step 2: what you want to do before calling the complete method                  
								completeCallback.call(that, error);
							};
						});
					});	
			}
			fr.readAsDataURL(that.files[0]);
		}
	}
}