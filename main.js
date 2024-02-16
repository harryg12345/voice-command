draw_circle = false;
draw_rect = false;

function setup() {
    canvas = createCanvas(900, 600)
}
rec = new window.webkitSpeechRecognition();
function start() {
    document.getElementById("status").innerHTML = "system listening please speak";
    rec.start();
}
rec.onresult = function (r) {
    console.log(r);
    content = r.results[0][0].transcript;
    document.getElementById("status").innerHTML = "speech reconised as " + content;
    if (content == "circle") {
        draw_circle = true;
    }
    if (content == "rectangle") {
        draw_rect = true;
    }


}
function draw() {
    x = floor(random() * 800);
    y = floor(random() * 500);
    if (draw_circle == true) {
        r = floor(random() * 100);
        circle(x, y, r);
        draw_circle = false;
        document.getElementById("status").innerHTML = "circle drawn!"
    }
    else if(draw_rect ==true){
        w = floor(random()*100)
        h = floor(random()*100)
        rect(x,y,w,h)
        draw_rect =false;
        document.getElementById("status".innerHTML = "rectangle drawn!")
    }
}