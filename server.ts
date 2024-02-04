import httpServer from './app';

const port = 5100;
httpServer.listen(port, () => {
    console.log(`[Server] : Server is running at http://localhost:${port}`);
});
