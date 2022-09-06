# WebAseembly imports & exports function



```wat
;; simple.wasm
(module
  (func $getYear (import "imports" "getYear") (param i32))
  (func (export "printYear")
    ;; 写死 const
    i32.const 2022
    call $getYear
  )
)

```

??? pass param

```wat
;; simple.wasm
(module
  (func $getYear (import "imports" "getYear") (param i32))
  (func (export "printYear")  (param i32)
    call $getYear(param)
  )
)

```





```js

// 2 和 1， 实例化
function instantiate(bytes, imports) {
  return WebAssembly.compile(bytes).then(module => new WebAssembly.Instance(module, imports));
}

// two-level namespaces relfect
// 定义 imports 映射对象
const importObject = {
  imports: {
    getYear: year => console.log(`🎉 🇨🇳 🗓 this year is ${year}`),
  }
};


fetch('https://cdn.xgqfrms.xyz/webassembly/simple.wasm')
// fetch('simple.wasm')
.then(response => response.arrayBuffer())
.then(bytes => instantiate(bytes, importObject))
.then(instance => {
  const {printYear} = instance.exports;
  printYear();
});

// console.log(`🎉 🇨🇳 🗓 this year is ${year}`)

```

https://cdn.xgqfrms.xyz/webassembly/simple.wat

https://cdn.xgqfrms.xyz/webassembly/simple.wasm

https://webassembly.github.io/wabt/demo/wat2wasm/


## refs

https://webassembly.org/getting-started/js-api/

https://developer.mozilla.org/zh-CN/docs/WebAssembly/Loading_and_running


