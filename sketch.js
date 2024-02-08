let classifier;
let img;

function setup() {
    noCanvas();
    classifier = ml5.imageClassifier('MobileNet', modelLoaded);
}

function modelLoaded() {
    console.log('Model Loaded!');
}

function classifyImage() {
    img = document.getElementById('upImage');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        document.getElementById('result').innerText = `Label: ${results[0].label}`;
        document.getElementById('confidence').innerText = `Confidence: ${nf(results[0].confidence, 0, 2)}`;
    }
}

function previewImage() {
    var preview = document.getElementById('upImage');
    var fileInput = document.getElementById('imageInputs');
    var file = fileInput.files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "#";
    }
}
