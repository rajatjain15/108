function startClassification()
{
navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/28lmSqTRt/model.json',modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}
function gotResults(error,results)
{
if (error)
{
    console.log(error);
}
else{
    console.log(results);
    random_number_r= Math.floor(Math.random()*255)+1;
    random_number_g= Math.floor(Math.random()*255)+1;
    random_number_b= Math.floor(Math.random()*255)+1;

    document.getElementById("sound_herd").innerHTML='I can hear - '+ results[0].label;
    document.getElementById("confidence_level").innerHTML='Accuracy - '+ (results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("sound_herd").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("confidence_level").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img=document.getElementById("aaa");

if(results[0].label)
{
    img.src="dog bark.gif"
    dog=dog+1
}else if(results[1].label)
{
    img.src="catsound.gif"
    cat=cat+1
}else if(results[2].label)
{
    img.src="cow.gif"
    cow=cow+1
}else if(results[3].label)
{
    img.src="lion roar.gif"
    lion=lion+1
}else{
    img.src="ear.gif"
}
}
}
