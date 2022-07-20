const express = require('express');
//post 방식으로 데이터를 전달 받기 위해 사용 npm i body-parser
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


//127.0.0.1:3000
//localhost:3000

app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res) => {
    //const userid = req.query.userid //get
    const userid = req.body.userid; //body
    const userpw = req.body.userpw;
    console.log(`userid:${userid}, userpw:${userpw}`);

    //화면 출력
    res.writeHead(200, { 'content-type': 'text/html;charset=utf-8' });
    //res.write() 화면에 출력
    res.write('<h2>익스프레스 서버에서 응답한 메세지입니다.</h2>');
    res.write(`<p>아이디: ${userid}</p>`);
    res.write(`<p>비밀번호: ${userpw}</p>`);
    res.end();
});


app.listen(port, () => {
    console.log(`${port} 포트로 서버 실행중...`)
});