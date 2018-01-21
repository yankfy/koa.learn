import { request } from "https";

const Koa = require("koa")

const app = new Koa()

app.use(async(ctx) => {
    let url = ctx.url
    let request = ctx.request
    
})