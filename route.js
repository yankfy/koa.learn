// Koa2 原生路由实现
const Koa = require("koa")

const app = new Koa()

app.use(async(ctx) => {
    let url = ctx.request.url
    let html = await route(url)
    ctx.body = html
})

app.listen(3000, () => {
    console.log("3000端口已打开")
})

async let route = (url) => {
    let page = 
}