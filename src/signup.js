const naming = document.getElementById("inputnaming");
const id = document.getElementById("inputid");
const pw = document.getElementById("inputpw");
const pwCheck = document.getElementById("inputpwCheck");
const successbtn = document.querySelector(".success");
const eyee = document.getElementById("eye");
const eyecheck = document.querySelector(".checkeye");
const eyeOff = document.querySelector(".eyeOff");
const checkeyeOff = document.querySelector(".checkeyeOff");
check = true;

successbtn.addEventListener("click", btn);
naming.addEventListener("keyup", signcheck);
id.addEventListener("keyup", signcheck);
pw.addEventListener("keyup", signcheck);
pwCheck.addEventListener("keyup", signcheck);
eyee.addEventListener("click", pws);


function signcheck(){
  if(naming.value && id.value && pw.value && pwCheck.value){
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
  console.log(1);
}



function btn() {
    if (naming.value === "") {
        document.getElementById("namingError").innerHTML = "이름이 올바르지 않습니다.";
        check = false;
      } else {
        document.getElementById("namingError").innerHTML = "";
        check = true;
      }
      
      if (id.value === "") {
        document.getElementById("idError").innerHTML = "아이디가 올바르지 않습니다.";
        check = false;
      } else {
        document.getElementById("idError").innerHTML = "";
        check = true;
      }
      
      if (pw.value === "") {
        document.getElementById("pwError").innerHTML = "비밀번호가 올바르지 않습니다.";
        check = false;
      } else {
        if (pwCheck.value !== pw.value) {
            document.getElementById("pwCheckError").innerHTML = "비밀번호를 다시 확인해주세요.";
            document.getElementById("pwError").innerHTML = "";
            check = false;
          } else {
            document.getElementById("pwError").innerHTML = "";
            document.getElementById("pwCheckError").innerHTML = "";
            check = true;
          }
      }
      if(check){
        alert("가입이 성공되셨습니다.");
        location.href="login.html";
      }
}