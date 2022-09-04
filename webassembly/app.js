// IIFE
(() => {
  // const WebA_URL = `https://cdn.xgqfrms.xyz/webassembly/xgqfrms.wasm`;
  // const WebA_URL = `./math-sqrt-demo.wasm`;
  const WebA_URL = `https://cdn.xgqfrms.xyz/webassembly/math-sqrt-demo.wasm`;
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
