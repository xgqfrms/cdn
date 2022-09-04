# webassembly

https://gist.github.com/xgqfrms-GitHub/a1da080e5a664366f4e6176cc9e3a0c5

> `wast` ?


https://github.com/guybedford/wasm-intro/blob/master/1-loading-wasm-fn/test.wast

https://github.com/guybedford/wasm-intro

## demos

https://cdn.xgqfrms.xyz/webassembly-examples/js-api-examples/index.html

https://cdn.xgqfrms.xyz/webassembly/index.html




## solution


```js
// IIFE
(() => {
  // const WebA_URL = `https://cdn.xgqfrms.xyz/webassembly/xgqfrms.wasm`;
  // const WebA_URL = `./demo.wasm`;
  const WebA_URL = `./test.wasm`;
  const ThrowErrorInfo = () => {throw new Error(`fetch WASM failed!`)};
  fetch(`${WebA_URL}`)
  .then(res => res.ok ? res.arrayBuffer() : ThrowErrorInfo())
  .then(bytes => WebAssembly.compile(bytes))
  .then(module =>  WebAssembly.instantiate(module))
  // .then(instance => window.WebAssembly.Sqrt = instance.exports.sqrt);
  .then(instance => {
    if(!window.WA) {
      window.WA = {};
      window.WA.sqrt = instance.exports.sqrt;
      console.log(`window.WA.sqrt(4) =`, window.WA.sqrt(4), window.WA.sqrt(4) === 2 ? `✅` : `❌`);
    }
    // window.WebAssembly
    const result = instance.exports.sqrt(4);
    console.log(`sqrt(4)'s result =`, result, result === 2 ? `✅` : `❌`)
  });
})();


// const wasmInstance = new WebAssembly.Instance(wasmModule, {});
// const { addTwo } = wasmInstance.exports;
// for (let i = 0; i < 10; i++) {
//   console.log(addTwo(i, i));
// }


```

https://github.com/xgqfrms/cdn/issues/64#issuecomment-1236373934



## refs

https://www.cnblogs.com/xgqfrms/p/16656480.html

https://zhuanlan.zhihu.com/p/27309521
