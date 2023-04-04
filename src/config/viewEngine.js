import express from "express";

let configViewEngine = (app) => {
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs");// Cho phep go cau lenh JS trong HTML
    app.set("views", "./src/views")
}

module.exports = configViewEngine;
