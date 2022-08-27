"use strict"

const Port = 3000;
const app = require("../app");

app.listen(Port, () => {
    console.log("서버가동");
})