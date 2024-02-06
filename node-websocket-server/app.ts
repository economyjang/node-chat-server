import express from 'express';
import {createServer} from 'http';
import {Server, Socket} from 'socket.io';

// import registerChatGateway from './src/chat/chat.gateway';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {});

// 사용자 검증 미들웨어
io.use((socket, next) => {
    next();
});

const onConnection = (socket: Socket) => {
    // registerChatGateway(io, socket);
}

io.on('connection', onConnection);

// 에러 처리
io.use((socket, next) => {
    const err = new Error("not authorized");
    next(err);
});

export default httpServer;
