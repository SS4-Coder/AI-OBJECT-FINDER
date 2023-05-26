objects = [];
status="";
    function setup(){
        canvas=createCanvas(380,380);
        canvas.center();
        video=createCapture(VIDEO);
        video.size(380,380);
        video.hide();
        }
    function start(){
        objectDectector=ml5.objectDetector('cocossd' , modelLoaded);
        document.getElementById("status").innerHTML="Status: Detecting Objects";
        object_name=document.getElementById("input").value;
    }
function modelLoaded(){
console.log("model loaded!");
status=true;
}
function gotResult(error,results){
if(error){
    console.log(error);
}
console.log(results);
objects = results;
}
function draw(){
    image(video,0,0,380,380);
    if(status !="")
    {
        objectDetector.detect(video,gotResult);
        for(i=0; i < objects.length; i++){
            document.getElementById("status").innerHTML="Status:Object detected";

            fill("#FF0000");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label + " " + percent + "%", objects[i].x+15, objects[i].y+15);
        }
    }
}
