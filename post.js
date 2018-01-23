const Koa = require("koa")

const app = new Koa()

app.use(async(ctx) => {
    if (ctx.url === '/' && ctx.method === "GET") {
        let html = `
            <h1>Koa2 request POST</h1>
            <form method="POST" action="/">
                <p>昵称：</p>
                <input name="userName"/>
                <br/>
                <p>年龄：</p>
                <input name="userAge"/>
                <br/>
                <p>网站：</p>
                <input name="userWeb"/>
                <br/>
                <button type="submit">提交</button>
            </form>
        `
        ctx.body = html
    } else if (ctx.url === '/' && ctx.method === "POST") {
        ctx.body = '接收到POST参数'
    } else {
        ctx.body = '<h1>404</h1>'
    }
    // ctx.body = {
    //     ctx
    // }
})

app.listen(3001, () => {
    console.log("3001端口已开")
})