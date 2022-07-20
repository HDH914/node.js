const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

//view엔진 등록, ejs파일을 사용하게 되면 자동으로 html로 변환 view 폴더 생성이 공식임.
app.engine('html', require('ejs').renderFile);
//url 파싱 qs, query-string  ==> 중첩된 객체 표현 허용할지 여부를 체크.
app.use(bodyParser.urlencoded({ extended: false }));

//express()와 fs()를 전달
const module1 = require('./router/module1')(app, fs)



app.listen(port, () => {
    console.log(`${port} 번 포트로 실행중...`);
})