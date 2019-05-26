// 환경 설정 파일 load
// require('dotenv').config();

const Server = require('./server').default;

const server = new Server();

server.listen(3000);
