const generuj = document.getElementById("generuj");
const podaneH = document.getElementById("podaneH");
const komorka = document.querySelectorAll("table td");

function klikniecie(){
    komorka[0].style.backgroundColor = `hsl(${podaneH.value} 100%, 50%)`;
    komorka[1].style.backgroundColor = `hsl(${podaneH.value} 80%, 50%)`;
    komorka[2].style.backgroundColor = `hsl(${podaneH.value} 60%, 50%)`;
    komorka[3].style.backgroundColor = `hsl(${podaneH.value} 40%, 50%)`;
    komorka[4].style.backgroundColor = `hsl(${podaneH.value} 20%, 50%)`;
    
}
generuj.addEventListener("click", klikniecie);