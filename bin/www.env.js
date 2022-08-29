"use strict"

const Port = process.env.PORT || 3000;
const app = require("../app");

app.listen(Port, () => {
    console.log("서버가동");
})