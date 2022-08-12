const id = document.querySelector(".inputid");
const pw = document.querySelector(".inputpw");
const successbtn = document.querySelector(".success");
const eye = document.querySelector(".eye");
const eyeOff = document.querySelector(".eyeOff");
const box = document.querySelector(".checkbox");
const check = document.querySelector(".check");
const save = document.querySelector(".save");
let sa = true;

id.addEventListener("keyup", logincheck);
pw.addEventListener("keyup", logincheck);
successbtn.addEventListener("click", btn);
eye.addEventListener("click", pws);
eyeOff.addEventListener("click", pwsOff);
box.addEventListener("click", idsave);
check.addEventListener("click", idsaveOff);
save.addEventListener("click", label);

function logincheck(){
    if(id.value && pw.value){
        successbtn.disabled = false;
        successbtn.style.cursor = "pointer";
        successbtn.style.background = "#5F85BB";
      }else{
        successbtn.disabled = true;
        successbtn.style.background = "lightgray";
        successbtn.style.cursor = "default";
      }
}

function pws(){
    eye.style.display = "none";
    eyeOff.style.display = "block";
    pw.setAttribute("type", "text");
}
function pwsOff(){
    eye.style.display = "block";
    eyeOff.style.display = "none";
    pw.setAttribute("type", "password");
}

function label(){
    if(sa === true){
        check.style.display = "block";
        sa = false;
    }else{
        check.style.display = "none";
        sa = true;
    }
}

function idsave(){
    check.style.display = "block";
}
function idsaveOff(){
    check.style.display = "none";
}

function btn(){
    location.href="main.html";
}