const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', ctx =>{
    ctx.status = 200;
    ctx.body = '<h1>INDEX Sayfasina Hosgeldiniz...</h1>'; 
})

router.get('/hakkimda', ctx =>{
    ctx.status = 200;
    ctx.body = '<h1>HAKKIMDA Sayfasina Hosgeldiniz...</h1>'; 
})

router.get('/iletisim', ctx =>{
    ctx.status = 200;
    ctx.body = '<h1>ILETISIM Sayfasina Hosgeldiniz... <br> https://github.com/BerkayTuluk</h1>';
})

app.use(router.routes());

const port = 3000;
app.listen(port, ()=>{
    console.log(`Sunucu ${port} numaralı portta çalisti...`);
});