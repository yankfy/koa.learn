
function getSth() {
    return 'sth'
}

// 异步方法
async function testAsync() {
    return 'hello async'
}

const result = testAsync();
console.log(result); // Promise对象 {'hello async'}

// await
async function test() {
    // 利用await来接收
    const v1 = await getSth();
    const v2 = await testAsync();
    console.log(v1)
    console.log("-------------")
    console.log(v2)
}

test();

// 模拟异步请求
function takeLog() {
    return new Promise(resolve => {
        setTimeout(() => resolve("log long"), 5000)
    })
}

async function takeTest() {
    const v = await takeLog();
    console.log(v);
}

takeTest();