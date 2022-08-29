"use strict"

const db = require("../config/db");

class UserStorage {

    static getUserInfo(id) {

        return  new Promise((resolve,reject)=>{
            const query = "select * from users where id = ?;";
            db.query(query,[id],(err,data)=>{
                if (err) reject(err);
                resolve({id:data[0].id,pw:data[0].pw});
            })
        })
    }

    static save(userinfo) {

        return new Promise((resolve,reject)=>{
            const itzy = "insert into users(id,name,pw) values(?,?,?);";
            db.query(itzy,[userinfo.id,userinfo.username,userinfo.pw],(err,data)=>{
                if(err) reject(err);
                if(data){
                    resolve({성공:true});
                }else{
                    resolve({성공:false});
                }
            })
        })
    }
}

module.exports = UserStorage;