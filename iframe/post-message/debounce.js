
function test() {
  console.log('test');
}

function debounce (func, times = 1000) {
  let timer = null;
  return function () {
      if (timer){
          clearTimeout(timer);
      }
      // setTimeout 会自动执行 func
      timer = setTimeout(func, times);
  };
};

// browser ✅
debounce(test, 500)();
// browser ✅ node ❌
// debounce(test(), 500)();
