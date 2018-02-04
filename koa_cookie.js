const Koa = require("koa")

const app = new Koa()

app.use(async(ctx)=>{
    if(ctx.url === '/index'){
        ctx.cookies.set("Name","Pony",{
            domain:"127.0.0.1",
            path:"/index",
            maxAge:1000*60*60,
            expires:new Date('2018-12-31'),
            httpOnly:false,
            overwrite:false
        })
        ctx.body = "Get Cookie Name "+ctx.cookies.get("Name")
    }else{
        ctx.body = "Not Cookie in this page"
    }
})

app.listen("3000",()=>{
    console.log("server is start in port 3000")
})