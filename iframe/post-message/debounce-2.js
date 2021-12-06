

function test() {
  console.log('test');
}

function debounce (func, times = 1000) {
  let timer = null;
  return function () {
      if (timer){
          clearTimeout(timer);
      }
      timer = setTimeout(() => {
         func();
      }, times);
  };
};


// browser ✅ node ✅
debounce(test, 500)();
// browser ❌ node ❌
// debounce(test(), 500)();

/*

const newTest = debounce(test, 500);
newTest();

 */

/* Option + Shift + A === vscode 块级注释 */
