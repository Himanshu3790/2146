var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("text_area").innerHTML = "";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("text_area").innerHTML = content;
    if (content == "selfie") {
        speak();
    }

}
function speak() {
    
    setTimeout(function(){
        var synth = window.speechSynthesis;
    speak_data = "taking your selfie in 5 seconds"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
        take_selfie();
    
    },5000);
    synth.speak(utterThis);
    Webcam.attach(camera);
}

var image_id="image1";

Webcam.set(
    {
        width: 360,
        height: 250,
        image_format: 'png',
        png_quality: 100
    }
);
camera = document.getElementById("camera");

function take_selfie() {
    Webcam.snap(function (data_uri) {
        if(image_id == "image1"){
            document.getElementById("result1").innerHTML= "<img id='image1' src='"+data_uri+"' >";
               
        }
        if(image_id == "image2"){
            document.getElementById("result2").innerHTML= "<img id='image2' src='"+data_uri+"' >";
            image_id="image3";    
        }
        if(image_id == "image2"){
            document.getElementById("result3").innerHTML= "<img id='image3' src='"+data_uri+"' >";   
        }
    });

}
