import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

export
function hello() {
  const app = express();
  const proxyMiddleware = createProxyMiddleware({
    target: 'http://10.10.200.21:8083',
    changeOrigin: true,
    cookieDomainRewrite: '',
    headers: { Connection: 'keep-alive' },
  });
  app.use('/api', proxyMiddleware);
  app.listen(9093);
  console.log(9093, '...');
}
