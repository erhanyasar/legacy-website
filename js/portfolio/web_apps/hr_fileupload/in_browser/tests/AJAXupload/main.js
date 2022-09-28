window.onload = function () {
    var fileToUpload = document.getElementById('fileToUpload');

    fileToUpload.addEventListener('change', function (e) {
        var resume = fileToUpload.files[0];
        var textType = /text.*/;
        var imageType = /image.*/;

        if (resume.type.match(textType)) {
            var reader = new FileReader();
            reader.onload = function (e) {
                displayResume.innerText = reader.result;
            }
            reader.readAsText(resume);

        } else if (resume.type.match(imageType)) {
            var reader = new FileReader();
            reader.onload = function (e) {
                displayResume.innerHTML = "";
                var img = new Image();
                img.src = reader.result;
                var string = OCRAD(img);
                alert(string);
                /*Tesseract.recognize(img)
                    .progress(function (p) {
                        console.log('progress', p)
                    })
                    .then(function (result) {
                        console.log('result', result)
                    })*/
            }
            reader.readAsDataURL(resume);
        } else {
        
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    alert("File Uploaded");
                }
            };
            xhttp.open("POST", "/upload.php", true);
            xhttp.send();

        }
    });
}

$("#submitBTN").click(function () {
    if ((fileToUpload.files.length == 0) && (myCover.files.length == 0))
        alert("No file uploaded yet.");
});