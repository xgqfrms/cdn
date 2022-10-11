/*

(function anonymous() {
   debugger;
})();

(() => {
   debugger;
})();

*/

// 无限循环，锁死 debugger

// (function anonymous() {
//    debugger;
//    anonymous();
// })();

// 尾调用优化 / 尾递归优化

// "use strict";
// (function anonymous() {
//    "use strict";
//    debugger;
//     // 
//    return anonymous();
// })();

"use strict";
(() => {
  "use strict";
  const anonymous = () => {
    "use strict";
    debugger;
    // window.requestAnimationFrame(anonymous);
    return anonymous();
  };
  // inint
  anonymous();
})();



/*


const callback = () => {
  window.requestAnimationFrame(callback);
}
// inint
callback();


// https://www.cnblogs.com/xgqfrms/p/13065885.html
*/


