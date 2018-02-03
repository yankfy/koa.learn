const Koa = require("koa")

const Router = require("koa-router")

const app = new Koa()

// const router = new Router()
// 将所有路由前面添加一个统一的层级
// const router = new Router({
//     prefix:"/public"
// })

// router.get("/", (ctx, next) => {
//     ctx.body = "Hello Pony"
// }).get("/todo",(ctx,next)=>{
//     ctx.body = "Hello Todo"
// })

let home = new Router();
home.get('/pony', async (ctx) => {
    ctx.body = "Home Pony";
}).get('/todo', async (ctx) => {
    ctx.body = 'Home ToDo';
})

let page = new Router();
page.get('/pony', async (ctx) => {
    ctx.body = "Page Pony";
}).get('/todo', async (ctx) => {
    ctx.body = 'Page ToDo';
})

//装载所有子路由
let router = new Router()
router.use('/home', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())

app.use(router.routes).use(router.allowedMethods())

// 调用router 并遵循请求方式
// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods());

app.listen("3000", () => {
    console.log("3000 prot is open")
})