const Koa = require("koa")
const app = new Koa()
// Koa2 的async函数 发起一个异步请求
app.use(async(ctx) => {
    ctx.body = "Hello PPBoy"
})

app.listen(3000)
console.log("listen in 3000")