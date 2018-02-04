// 安装koa-static npm install --save koa-static
const Koa = require("koa")

const path = require("path")

const static = require("koa-static")

const app = new Koa()

const staticPath = './static'

app.use(static(path.join(__dirname,staticPath)))

app.use(async(ctx)=>{
    ctx.body = "<h1>PP</h1><p>YY</p>"
})

app.listen("3000",()=>{
    console.log("3000 port is open")
})