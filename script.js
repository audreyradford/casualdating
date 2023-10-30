var seconds=0;
var arr = ['www.youtube.com/', 'rayapteam.com/', 'web.skype.com/'];


function displayseconds()
{
    seconds +=1;
    document.getElementById("secondsdisplay").innerText="this page will be redirect in "+seconds+" seconds . . .";
}
setInterval(displayseconds,1000);

function redirectpage()
{
    location.href = "https://" + arr[Math.floor (Math.random()*arr.length)];
}
setTimeout('redirectpage()',100);