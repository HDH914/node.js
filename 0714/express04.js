const express = require('express');
const app = express();
const port = 3000;

//127.0.0.1:3000
//localhost:3000


app.use((req, res) => {
    console.log('첫번째 미들웨어 실행');
    //console.log() 매개변수로 전달된 값을 출력
    //console.dir() 매개변수로 전달된 객체의 속성을 전달

    console.dir(req.header);
    const userAgent = req.header('User-Agent');
    console.log(userAgent);
    //userAgent : 사용자 에이전트의 애플리케이션, 운영체제, 공급업체 및 /또는 버전을 식별할 수 있도록 하는 특성 문자열

    //GET => 웹서버 주소 뒤에 변수값을 전달 방식 
    //POST => body안에서 폼문을 사용 전달 방식
    //http://127.0.0.1:3000/?userid=apple

    const paramName = req.query.userid; //get방식의 변수값을 가져옴
    console.log(paramName);
    res.writeHead(200, { 'content-type': 'text/html;charset=utf-8' });
    res.write('<h2>익스프레스 서버에서 응답한 메세지입니다.</h2>');

    res.write(`<p>User-Agent : ${userAgent}</p>`);
    res.write(`<p>paramName : ${paramName}</p>`);
    //res.end();              
});


app.listen(port, () => {
    console.log(`${port} 포트로 서버 실행중...`)
});