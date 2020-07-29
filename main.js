var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var image_array=["b1.jpg","b2.jpg","mars.jpg"];
var random_number=Math.floor(Math.random()*3)
var roverWidth=100,roverHeight=90,rover_x=10,rover_y=10,background_image=image_array[random_number],rover_image="rover.png";


function add(){
    backgroundImg=new Image();
    backgroundImg.onload=uploadBackground;
    backgroundImg.src=background_image;

    roverImg=new Image();
    roverImg.onload=uploadRover;
    roverImg.src=rover_image;
}
function uploadBackground(){
    ctx.drawImage(backgroundImg,0,0,canvas.width,canvas.height);
    
}
function uploadRover(){
    ctx.drawImage(roverImg,rover_x,rover_y,roverWidth,roverHeight);
}

window.addEventListener("keydown",myKeydown);
function myKeydown(event){
    console.log(event.keyCode);
    var key=event.keyCode;
    if(key==37){
        console.log("left");
        left();
    }
    if(key==38){
        console.log("up");
        up();
    }
    if(key==39){
        console.log("right");
        right();
    }
    if(key==40){
        console.log("down");
        down();
    }
}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
       uploadBackground() ;
       uploadRover();
       
    }
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
       uploadBackground() ;
       uploadRover();
       
    }
}
function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
       uploadBackground() ;
       uploadRover();
       
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
       uploadBackground() ;
       uploadRover();
       
    }
}