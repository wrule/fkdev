import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

export
function server(port: number) {
  const app = express();
  const proxyMiddleware = createProxyMiddleware({
    target: `http://10.10.200.21:${port}/api`,
    changeOrigin: true,
    cookieDomainRewrite: '',
    headers: { Connection: 'keep-alive' },
  });
  app.use('/api', proxyMiddleware);
  const port2 = port + 1000;
  app.listen(port2);
  console.log(port, port2, '...');
}

export
function hello() {
  server(8081);
  server(8083);
  server(8088);
}
