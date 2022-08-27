"use strict"

const fs = require("fs").promises;

class UserStorage {
    // static getUsers(...fields){
    //     const users = this.#users;
    //     const newUsers = fields.reduce((newUsers,field)=>{
    //         if(users.hasOwnProperty(field)){
    //             newUsers[field] = users[field];
    //         }
    //         return newUsers;
    //     },{});
    //     return newUsers;
    // }

    static getUserInfo(id) {
        // const users = this.#users;
        return fs.readFile("./src/databases/user.json")
            .then((data) => {

                const users = JSON.parse(data)
                const idx = users.id.indexOf(id); // id,pw로들만(객체의 키값들) 배열이 만들어짐
                const userInfo = Object.keys(users).reduce((newUser, info) => {
                    newUser[info] = users[info][idx];
                    return newUser;
                }, {})
                return userInfo;

            })
            .catch(console.error);





    }

    static save(userinfo) {
        console.log(userinfo);
    }
}

module.exports = UserStorage;