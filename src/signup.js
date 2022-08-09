const name = document.getElementById("inputname");
const id = document.getElementById("inputid");
const pw = document.getElementById("inputpw");
const pwCheck = document.getElementById("inputpwCheck");
const successbtn = document.querySelector(".success");
check = true;

successbtn.addEventListener("click", btn);
name.addEventListener("keyup", signcheck);
id.addEventListener("keyup", signcheck);
pw.addEventListener("keyup", signcheck);
pwCheck.addEventListener("keyup", signcheck);

function signcheck(){
  if(!(name.value && id.value && pw.value && pwCheck.value)){
    successbtn.style.backgroud = '#5F85BB';
  }
}

function btn() {
    if (name.value === "") {
        document.getElementById("nameError").innerHTML = "이름이 올바르지 않습니다.";
        check = false;
      } else {
        document.getElementById("nameError").innerHTML = "";
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
      }

}