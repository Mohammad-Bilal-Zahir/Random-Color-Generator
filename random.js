const getColor =()=>{
    const randomColor = Math.floor(Math.random() *16777215);
    const randomCode = "#" + randomColor.toString(16);
    //console.log(randomColor, randomCode); 
    document.body.style.backgroundColor = randomCode;
    document.getElementById("colorCode").innerText = randomCode;
    navigator.clipboard.writeText(randomCode);
}

document.getElementById("btn").addEventListener("click",getColor)


getColor();