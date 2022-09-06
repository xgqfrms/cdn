# webassembly


![image](https://user-images.githubusercontent.com/7291672/188373744-fd81ca4a-e39c-4de1-8a26-c71b4db210ba.png)



## demos


https://cdn.xgqfrms.xyz/webassembly/index.html

https://cdn.xgqfrms.xyz/webassembly-examples/js-api-examples/index.html


## js usage


```js

const test = async (moduleBytes) => {
  try {
    // This will throw a ReferenceError on platforms where BigInt is not supported.
    // Please do not change the test value to BigInt literal (i.e. 0n), cause in that case a SyntaxError will be thrown before an execution.
    console.log('🚀 moduleBytes =', moduleBytes);
    const instance = await WebAssembly.instantiate(moduleBytes);
    console.log('✅ instance =', instance);
    // {module: Module, instance: Instance}
    const {b}= instance.instance.exports;
    return b(BigInt(0)) === BigInt(0);
  } catch (e) {
    return false;
  }
};


// IIFE
(() => {
  // const WebA_URL = `https://cdn.xgqfrms.xyz/webassembly/math-sqrt-demo.wasm`;
  const WebA_URL = `./math-sqrt-demo.wasm`;
  const ThrowErrorInfo = () => {throw new Error(`fetch WASM failed!`)};
  fetch(`${WebA_URL}`)
  .then(res => res.ok ? res.arrayBuffer() : ThrowErrorInfo())
  // .then(bytes => WebAssembly.compile(bytes))
  .then(bytes => {
    test(bytes);
    console.log(`🚀 bytes =`, bytes);
    // ArrayBuffer(65)
    const module = WebAssembly.compile(bytes);
    // async / await: WebAssembly.compile
    console.log(`👻 module =`, module);
    // Promise {<pending>}
    // ⚠️ ⏰ 编译
    return WebAssembly.compile(bytes);
  })
  // .then(module => WebAssembly.instantiate(module))
  .then(module => {
    console.log(`👻👻 module =`, module);
    // Module {}
    // async / await: WebAssembly.instantiate
    const instance = WebAssembly.instantiate(module);
    console.log(`✅✅ instance =`, instance);
    // Promise {<fulfilled>: Instance}
    return WebAssembly.instantiate(module);
  })
  // .then(instance => window.WebAssembly.Sqrt = instance.exports.sqrt);
  .then(instance => {
    console.log(`✅✅✅ instance =`, instance);
    console.log(`instance.exports =`, instance, instance.exports);
    // console.log(`instance.instance.exports =`, instance.instance.exports);
    // app.js:12 Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'exports') ❌
    if(!window.WA) {
      window.WA = {};
      window.WA.sqrt = instance.exports.sqrt;
      console.log(`window.WA.sqrt(4) =`, window.WA.sqrt(4), window.WA.sqrt(4) === 2 ? `✅` : `❌`);
    }
    // window.WebAssembly
    const result = instance.exports.sqrt(4);
    console.log(`sqrt(4)'s result =`, result, result === 2 ? `✅` : `❌`)
    setTimeout(() => {
      const app = document.querySelector(`#app`);
      app.innerHTML = ``;
      app.insertAdjacentHTML(`beforeend`, `sqrt(4)'s result = ${result} ${result === 2 ? '✅' : '❌'}`);
    }, 1000);
  });
})();




// WebAssembly.Instance

// const wasmInstance = new WebAssembly.Instance(wasmModule, {});
// const { addTwo } = wasmInstance.exports;
// for (let i = 0; i < 10; i++) {
//   console.log(addTwo(i, i));
// }


```

https://github.com/xgqfrms/cdn/issues/64#issuecomment-1236373934


## `get_local` ❌ WebAssembly draft vs `local.get` ✅ WebAssembly Specification

```wat
;; author xgqfrms, 2022.09.01
;; 编译器

;; C/C++ => WASM (.c/.cpp => .wasm)
;; https://mbebenita.github.io/WasmExplorer/

;; WAT/WAST => WASM (.wat/.wast => .wasm)
;; https://webassembly.github.io/wabt/demo/wat2wasm/

;; Rust => WASM (.rs => .wasm)
;; https://github.com/yewstack/yew
;; https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm


;; WebAssembly text format
;; To enable WebAssembly to be read and edited by humans, there is a textual representation of the wasm binary format.
;; 为了使 WebAssembly 能够被人类阅读和编辑，有一个 wasm 二进制格式的文本表示。

;; js's Math.sqrt(4) === 2
;; wat define method `sqrt`
(module
    (export "sqrt" (func $sqrt))
    (func $sqrt
        (param $num f32)
        (result f32)
        ;; get_local ❌ WebAssembly draft
        ;; (f32.sqrt (get_local $num))
        ;; local.get ✅ WebAssembly Specification
        (f32.sqrt (local.get $num))
    )
)


```

## error ❌

> webassembly `get_local` 

```wat
(module
  (export "sqrt" (func $sqrt))
  (func $sqrt
    (param $num f32)
    (result f32)
    (f32.sqrt (get_local $num))
  )
)

```

<img width="1241" alt="image" src="https://user-images.githubusercontent.com/7291672/188376047-95bef38e-cba3-4077-817f-710adc6aef3f.png">

## solution ✅

> webassembly `local.get`

```wat
(module
  (export "sqrt" (func $sqrt))
  (func $sqrt
    (param $num f32)
    (result f32)
    (f32.sqrt (local.get $num))
  )
)

```

<img width="1272" alt="image" src="https://user-images.githubusercontent.com/7291672/188377596-65cd219e-0adc-4a21-a368-2a4adba89965.png">


https://webassembly.github.io/wabt/demo/wat2wasm/


## refs

https://www.cnblogs.com/xgqfrms/p/16656480.html

https://zhuanlan.zhihu.com/p/27309521

https://gist.github.com/xgqfrms-GitHub/a1da080e5a664366f4e6176cc9e3a0c5
