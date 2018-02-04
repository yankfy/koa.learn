// 中间件 koa-views 安装npm install --save koa-views
// ejs模版引擎
const Koa = require("koa")

const views = require("koa-views")

const path = require("path")

const app = new Koa()

// 注意这个地方的用法 views()
app.use(views(path.join(__dirname,'./view/'),{
    extension:'ejs'
}))

app.use(async(ctx)=>{
    let title = "Page Pony"
    await ctx.render('index',{title})
})

app.listen("3000",()=>{
    console.log("3000 port is open")
})