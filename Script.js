var timer = 60;
var hitrn = 0;

var score = 0;  
function newscore(){
    
       score += 10;
    document.querySelector("#scoreval").textContent = score;
}
function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}


function main(){
    var clutter = "";


    for(var i = 1; i<169; i++){
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
       
    }
    
    document.querySelector("#pbtm").innerHTML = clutter;
}



function runtime(){
    var timeint = setInterval ( function(){
   if(timer>0) {
    timer--;
    document.querySelector("#timeval").textContent = timer;
   }
   else {
     clearInterval(timeint);
     document.querySelector("#pbtm").innerHTML =  `<h1> Game over <br> Your Score is  ${score} </h1>`;
   }

} ,1000)
} 

document.querySelector("#pbtm").addEventListener("click" , function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        newscore();
        main();
        getNewHit();
    }
})


runtime();
getNewHit();
main();




