window.onload = function () {
    var myResume = document.getElementById('myResume');
    var displayResume = document.getElementById('displayResume');

    myResume.addEventListener('change', function (e) {
        var resume = myResume.files[0];
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
                Tesseract.recognize(img)
                    .progress(function (p) {
                        console.log('progress', p)
                    })
                    .then(function (result) {
                        console.log('result', result)
                    })
            }
            reader.readAsDataURL(resume);
        } else if ((myResume.files[0].type === 'application/pdf') || (myResume.files[0].type === 'application/msword')){

        } else
            displayResume.innerText = "Media type couldn't recognized.";
    });
}

$("#submitBTN").click(function () {
    if ((myResume.files.length == 0) && (myCover.files.length == 0))
        alert("No file uploaded yet.");
});