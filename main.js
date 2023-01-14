var dog1 = 0;
var cat1 = 0;

function startClassification()
{
navigator.mediaDevices.getUserMedia({ audio: true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Ac4YJ1JfT/model.json',modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}
function gotResults(error,results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);
        document.getElementById("result_label").innerHTML = 'I can hear - '+results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
        img = document.getElementById('animal_image');

        if(results[0].label == "dog")
        {
            img.src = 'dog.png';
            dog1 = dog1 + 1

        }
        else if(results[0].label == "cat")
        {
            img.src = 'cat.png';
            cat1 =cat1 + 1
        }

        else
        {
            img.src = 'ear.gif';
        }
    }
}

