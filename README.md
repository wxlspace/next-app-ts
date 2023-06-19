## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

在 next.config.js 中配置接口转发规则  async rewrites() { return [{ source: '/api/:path*', destination: `http://tp6.test/:path*` }] } 注意请求的接口需要以 /api开头


http://www.javascriptcn.com/post/64784722968c7c53b0486dab Next.js + Redux 实现登录授权的本地存储和 cookie 管理

Next.js-集成状态管理器共享access token以及刷新access token解决方案 https://segmentfault.com/a/1190000040610201
