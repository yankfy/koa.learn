const Koa = require("koa")

const Router = require("koa-router")

const app = new Koa()

// const router = new Router()
// 将所有路由前面添加一个统一的层级
const router = new Router({
    prefix:"/public"
})

router.get("/", (ctx, next) => {
    ctx.body = "Hello Pony"
}).get("/todo",(ctx,next)=>{
    ctx.body = "Hello Todo"
})

// 调用router 并遵循请求方式
app.use(router.routes()).use(router.allowedMethods())

app.listen("3000", () => {
    console.log("3000 prot is open")
})