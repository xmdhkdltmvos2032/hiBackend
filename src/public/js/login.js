"use strict"
const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const logForm = document.querySelector("#loginForm");

logForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    const req={
        id:id.value,
        pw:pw.value,
    }

    fetch("/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(req),
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.성공){
            window.location.href = "/";
        }else{
            alert(data.msg);
        }
    })
    .catch((err)=>{
        console.error(new Error("로그인에러 발생",err));
    });
    
    id.focus();

    id.value = "";
    pw.value = "";
})