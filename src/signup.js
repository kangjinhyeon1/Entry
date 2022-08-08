let name = document.getElementById("inputname").value;
let id = document.getElementById("inputid").value;
let password = document.getElementById("inputpassword").value;
let passwordCheck = document.getElementById("inputpasswordCheck").value;
const successbtn = document.querySelector(".success");
check = true;

successbtn.addEventListener("click", btn);

function btn() {
    if (name === "") {
        document.getElementById("nameError").innerHTML = "이름이 올바르지 않습니다.";
        check = false;
      } else {
        document.getElementById("nameError").innerHTML = "";
      }
      
      if (id === "") {
        document.getElementById("idError").innerHTML = "아이디가 올바르지 않습니다.";
        check = false;
      } else {
        document.getElementById("idError").innerHTML = "";
      }
      
      if (password === "") {
        document.getElementById("passwordError").innerHTML = "비밀번호가 올바르지 않습니다.";
        check = false;
      } else {
        document.getElementById("passwordError").innerHTML = "";
      }
      
      if (passwordCheck !== password) {
        document.getElementById("passwordCheckError").innerHTML = "비밀번호를 다시 확인해주세요.";
        document.getElementById("password").innerHTML = "";
        check = false;
      } else {
        document.getElementById("passwordCheckError").innerHTML = "";
      }
}

if (check) {
  document.querySelector(".success").setAttribute("style", "backgroud:#5F85BB;");
}
