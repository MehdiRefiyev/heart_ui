let feel = document.getElementById('feelid');
feel.addEventListener('click' , heartstart , true);
let left = document.getElementById('heart_leftid');
let right  = document.getElementById('heart_rightid');
let main  = document.getElementById('heart_mainid');
let body = document.getElementById('body');
function heartstart(){
    feel.style.color = "white";
    feel.style.backgroundColor = "transparent";
    feel.style.borderColor = "red"
    feel.innerText = "You";
    feel.style.fontSize="2.5em";
    left.style.backgroundColor = "red";
    right.style.backgroundColor = "red";
    main.style.backgroundColor = "red";
    let colours = ['#E48CA3','#E48CCF','#CD8CE4','#E4C08C','#8CE4CD','#BDE48C','#A3E48C'];
    let i = 0;
    setInterval(() => {
        if (i <= 6){
            body.style.backgroundColor = colours[i];
            i++;  
        }
        else{i = 0;}
    }, 700);
}
alert("( Hello This project work correct only in 1366 px to 768 px ) that mean this project whitout reponsive desing . ");