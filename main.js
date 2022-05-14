document.body.onload=shape_of_clock();
function clock(){
    var date=new Date();
    seconds=date.getSeconds();
    minutes=date.getMinutes();
    hours=date.getHours();
    console.log(minutes);
    document.querySelector("#seconds").style.transform=`rotate(${(seconds*6)+180}deg)`;
    document.querySelector("#minutes").style.transform=`rotate(${(minutes*6 )+180}deg)`;
    document.querySelector("#hours").style.transform=`rotate(${((hours+(minutes/60))*30)+180}deg)`;
    setTimeout(
        ()=>{
            clock();
        },1000
    );
}
function shape_of_clock(){
    stroke=document.querySelector("#stroke");
    for(var i=1;i<=12;i++){
        div=document.createElement("div");
        div.classList.add("number");
        span=document.createElement("span");
        span.innerText=i;
        span.classList.add("span"); 
        div.append(span);
        div.style.transform=`rotate(${i*30}deg)`;
        span.style.transform=`rotate(${-i*30}deg)`;
        stroke.append(div);
    }
    clock();
}