import Koa from 'koa';

export default class Server {
    app; // koa instance

    constructor() {
        this.app = new Koa();
        this.middleware();
    }

    // middleware init
    middleware() {
        const { app } = this;
    }

    // server start
    listen(port) {
        const { app } = this;
        app.listen(port);
        console.log(`Listening to port : ${port}`);
    }
}
