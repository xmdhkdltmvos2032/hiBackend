"use strict"

const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
    }

    async login(){
        const body = this.body;
        const {id,pw}  = await UserStorage.getUserInfo(body.id);

        if(id){
            if(id === body.id && pw === body.pw){
                return {성공:true};
            }
            return {성공:false,msg:"비밀번호가 틀렸습니다."}
        }
        return {성공:false,msg:"존재하지 않은 아이디입니다."}
    }

    async register(){
        const body = this.body
        const {성공} = await UserStorage.save(body);
        if(성공){
            return {성공:true};
        }
        return {성공:false,msg:"다시 입력해주십시오"};
    }
}

module.exports = User;