# github pages to github repo 自动解析


https://cdn.xgqfrms.xyz/github/github-page-to-github-repo.js


```js
// const url = globalThis.window.location.href;
// const url = window.location.href;

const autoConvertPageToRepo = (uri = ``) => {
  if(!globalThis.window) {
    throw new Error(`❌ 当前的 js 运行环境不支持 Web API!`)
  }
  let url = ``;
  try {
    if(!uri) {
      // in io page ✅
      const host = window.location.host.split(`.`)[0];  
      const protocol = window.location.protocol;
      const pathname = window.location.pathname;
      url = `${protocol}//github.com/${host}${pathname}`;
    } else {
      // URL parser，ulr string => URL 🚀
      const location = new URL(uri);
      const host = location.host.split(`.`)[0];  
      const protocol = location.protocol;
      const pathname = location.pathname;
      url = `${protocol}//github.com/${host}${pathname}`;
    }
    console.log(`✅ repo url =`, url)
  } catch (error) {
    console.error(`❌ generate repo url error`, error)
  }
  return url;
}


// test cases
autoConvertPageToRepo();
// autoConvertPageToRepo(`https://txstc55.github.io/ugly-avatar/`);
// ✅ repo url = https://github.com/txstc55/ugly-avatar/

```


> demo

https://txstc55`.github.io`/ugly-avatar/ 

=>

https://`github.com`/txstc55/ugly-avatar/


## refs

https://www.cnblogs.com/xgqfrms/p/18515232


