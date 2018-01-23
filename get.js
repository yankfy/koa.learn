const Koa = require("koa")

const app = new Koa()

// ctx 是上下文对象
app.use(async(ctx) => {
    let url = ctx.url
    // 从request中接收get请求
    let request = ctx.request
    let req_query = request.query
    let req_querystring = request.querystring

    // 不用request也能接收get请求
    let ctx_query = ctx.query
    let ctx_querystring = ctx.querystring

    // 打印到页面
    ctx.body = {
        ctx,
        url,
        req_query,
        req_querystring,
        ctx_query,
        ctx_querystring
    }
})

app.listen(3000, () => {
    console.log("3000端口已打开")
})