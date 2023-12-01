var prediction1 = "";
var prediction2 = "";
Webcam.set({
    width: 350,
    height: 300,
    imageFormat: 'png', pngQuality:100,
})

camera = document.getElementById("camera");

Webcam.attach('#camera')

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '">';
    })
    
}
console.log('ml5 version', ml5.version);
clasifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/mDIjShtbf/model.json',modelLoaded);

function modelLoaded(){
    console.log("Modelo carregado!");
}

function speak(){
    var synth = window.speechSynthesis;
    SpeakData1 = "A minha primeira previsão é ;" + prediction1;
    SpeakData2 = "A minha segunda previsão é ;" + prediction2;
    var utterThis = new SpeechSynthesisUtterance (SpeakData1 + SpeakData2);
    synth.speak(utterThis);
}

function result() {
    img = document.getElementById('captured_image');
    clasifier.classify(img, final_result);
}

function final_result(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("resultEmotionName").innerHTML = results[0].label;
        document.getElementById("resultEmotionName2").innerHTML = results[1].label;
        prediction1 = results[0].label;
        prediction2 = results[1].label;
        speak();
        if (results[0].label == "Like"){
            document.getElementById("updateEmoji").innerHTML = "👍";
        }
        if (results[0].label == "ok"){
            document.getElementById("updateEmoji").innerHTML = "👌";
        }
        if (results[0].label == "Vitoria"){
            document.getElementById("updateEmoji").innerHTML = "✌";
        }
        if (results[0].label == "Maos para o alto"){
            document.getElementById("updateEmoji").innerHTML = "🙌";
        }
        if (results[0].label == "Dislike"){
            document.getElementById("updateEmoji").innerHTML = "👎";
        }
        if (results[0].label == "Rock n roll"){
            document.getElementById("updateEmoji").innerHTML = "🤘";
        }
        if (results[1].label == "Like"){
            document.getElementById("updateEmoji2").innerHTML = "👍";
        }
        if (results[1].label == "ok"){
            document.getElementById("updateEmoji2").innerHTML = "👌";
        }
        if (results[1].label == "Vitoria"){
            document.getElementById("updateEmoji2").innerHTML = "✌";
        }
        if (results[1].label == "Maos para o alto"){
            document.getElementById("updateEmoji2").innerHTML = "🙌";
        }
        if (results[1].label == "Dislike"){
            document.getElementById("updateEmoji2").innerHTML = "👎";
        }
        if (results[1].label == "Rock n roll"){
            document.getElementById("updateEmoji2").innerHTML = "🤘";
        }
    }
}
