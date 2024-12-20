import consign from "consign/lib/consign";
import express from "express";

const app = express();


consign()
    .include("db.js")
    .then("models")
    .then("libs/middlewares.js")
    .then("routes")
    .then("libs/boot.js")
    .into(app);