// 简单的使用中间件如何来接收请求
const Koa = require("koa")

const bodyparser = require("koa-bodyparser")

const app = new Koa()

app.use(bodyparser())

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
        // ctx.body = '接收到POST参数'
        // 直接接收ctx.request
        ctx.body = ctx.request
        // ctx.body = ctx.request.body
    } else {
        ctx.body = '<h1>404</h1>'
    }
})

// 使用中间件省去两个函数步骤 

// let parsePostData = (ctx) => {
//     return new Promise((reserve, reject) => {
//         try {
//             let postData = ''
//             ctx.req.addListener("data", (data) => {
//                 postData += data
//             })
//             ctx.req.on('end', () => {
//                 let parseData = parseQueryStr(postData)
//                 reserve(parseData)
//             })
//         } catch (error) {
//             reject(error)
//         }
//     })
// }

// let parseQueryStr = (queryStr) => {
//     let queryData = {}
//     let queryList = queryStr.split("&")
//     // queryList.entries() 返回一个带索引的数组
//     for (let [index, queryStr] of queryList.entries()) {
//         let itemList = queryStr.split("=")
//         console.log(itemList)
//         queryData[itemList[0]] = decodeURIComponent(itemList[1])
//         console.log(queryData)
//     }
//     return queryData
// }

app.listen(3001, () => {
    console.log("3001端口已开")
})