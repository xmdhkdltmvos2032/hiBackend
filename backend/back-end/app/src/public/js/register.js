"use strict"
const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const confirm_pw = document.querySelector("#confirm-pw");
const username = document.querySelector("#name")
const registerForm = document.querySelector("#register-Form");

registerForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(!id.value) return alert("아이디를 입력해주십시오.");
    if(pw.value !== confirm_pw.value){
        pw.value = "";
        confirm_pw.value = "";
        return alert("비밀번호를 확인해주십시오.");
    }

    const req={
        id:id.value,
        pw:pw.value,
        username:username.value,
    }

    fetch("/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(req),
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.성공){
            window.location.href = "/login";
        }else{
            alert(data.msg);
        }
    })
    .catch((err)=>{
        console.error(new Error("회원가입에러 발생",err));
    });
    
    id.focus();

    id.value = "";
    pw.value = "";
})