// Koa2 原生路由实现
const Koa = require("koa")

const app = new Koa()

// 将文件变成流工作
const fs = require('fs')

function render(page) {
    return new Promise((resolve, reject) => {
        let pageUrl = `./page/${page}`
        // 第二个参数表示以什么方式传递 这里是二进制
        fs.readFile(pageUrl, "binary", (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

// async 和 await同时出现 
async function route(url) {
    let page = '404.html'
    switch (url) {
        case '/':
            page = 'index.html'
            break;
        case '/index':
            page = 'index.html'
            break;
        case '/todo':
            page = "todo.html"
            break;
        case '/404':
            page = "404.html"
            break;
        case '/nofound':
            page = 'nofound.html'
            break;
        default:
            break;
    }
    let html = await render(page);
    return html;
}

app.use(async (ctx) => {
    let url = ctx.request.url
    let html = await route(url)
    ctx.body = html
})

app.listen(3000, () => {
    console.log("3000端口已打开")
})