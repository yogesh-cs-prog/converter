function submit(){
    let getCel = Number(document.getElementById("getCel").value);
    let celFar = (getCel*(9/5))+32;
    let ans = document.getElementById("ans");
    ans.innerHTML = celFar + "°F";  
}
// answer 2
function submit2(){
    let getfah = Number(document.getElementById("getfah").value);
    let cel = (getfah-32)*0.5556;
    let ans2 = document.getElementById("ans2");
    ans2.innerHTML = cel.valueOf(2) + "°C";  
}
