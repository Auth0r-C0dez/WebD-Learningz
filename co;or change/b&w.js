let modebtn = document.querySelector("#mode");

let currentMode = "light";

modebtn.addEventListener("click",() => {
    //console.log("khela hobe");
    if (currentMode === "light") {
        currentMode ="dark";
        document.querySelector("body").style.backgroundColor = "white";
    } 
    else {
        currentMode="light";
        document.querySelector("body").style.backgroundColor = "black";
    }
});
