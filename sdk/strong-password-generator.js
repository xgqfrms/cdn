// website auto strong password generator

// 强密码生成器

// 使用当前域名的 URL 链接自动生成用于注册账号的强密码 ✅


// args object
const autoStrongPasswordGenerator = ({begin = 0, len = 12, debug = false}) => {
  // 改写 console.log 方法
  const console_log = debug ? console.log.bind(console) : function () {};
  console_log(`???? Debug mode is ${debug ? 'ON' : 'OFF'}`, debug);
  const end = begin + (len > 12 ? len : 12);
  // const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
  const symbols = `!@#$%^&*_+?`.split(``);
  const index = Math.floor(Math.random(0, 1) * symbols.length);
  console_log(`index, symbol`, index, symbols[index]);
  // https://
  const url = globalThis.window.location.href.slice(8);
  const base64 = btoa(url);
  const password = base64.slice(begin, end);
  console_log(`base64`, base64);
  const insert = Math.floor(Math.random(0, 1) * password.length);
  const strs = password.split(``);
  // insert
  strs.splice(insert, 0, symbols[index])
  const pwd = strs.join(``);
  console_log(`pwd`, pwd);
  return pwd;
}
autoStrongPasswordGenerator({begin: 7, len: 26, debug: true});
autoStrongPasswordGenerator({begin: 7, debug: true});

// args list
// const autoStrongPasswordGenerator = (begin = 0, len = 12, debug = false) => {
//   // 改写 console.log 方法
//   const console_log = debug ? console.log.bind(console) : function () {};
//   console_log(`???? Debug mode is ${debug ? 'ON' : 'OFF'}`, debug);
//   const end = begin + (len > 12 ? len : 12);
//   // const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
//   const symbols = `!@#$%^&*_+?`.split(``);
//   const index = Math.floor(Math.random(0, 1) * symbols.length);
//   console_log(`index, symbol`, index, symbols[index]);
//   // https://
//   const url = globalThis.window.location.href.slice(8);
//   const base64 = btoa(url);
//   const password = base64.slice(begin, end);
//   console_log(`base64`, base64);
//   const insert = Math.floor(Math.random(0, 1) * password.length);
//   const strs = password.split(``);
//   // insert
//   strs.splice(insert, 0, symbols[index])
//   const pwd = strs.join(``);
//   console_log(`pwd`, pwd);
//   return pwd;
// }
// autoStrongPasswordGenerator(7, 26, true);



// const autoStrongPasswordGenerator = (begin = 0, len = 12, debug = false) => {
//   // 改写 console.log 方法
//   // const backup = console.log;
//   // const backup = console.log;
//   // ...existing code...
//   // const backup = console.log.bind(console);
//   // const backup = console.log.bind(console);
//   // const log = debug ? console.log.bind(console) : function () {};
//   const console_log = debug ? console.log.bind(console) : function () {};
// // ...existing code...
//   console_log(`???? Debug mode is ${debug ? 'ON' : 'OFF'}`, debug);
//   // if (!debug) {
//   //   console.log = function () {
//   //     // do nothing
//   //   };
//   // } else {
//   //   console.log(`Debug mode is ON`);
//   //   console.log = backup
//   // }
//   const end = begin + (len > 12 ? len : 12);
//   // const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
//   const symbols = `!@#$%^&*_+?`.split(``);
//   const index = Math.floor(Math.random(0, 1) * symbols.length);
//   // console.log(`index, symbol`, index, symbols[index]);
//   console_log(`index, symbol`, index, symbols[index]);
//   // const url = window.location.href;
//   // const url = globalThis.window.location.href;
//   const url = globalThis.window.location.href.slice(8);
//   // const password = btoa(url).slice(0, 12);
//   const base64 = btoa(url);
//   const password = base64.slice(begin, end);
//   // console.log(`base64`, base64);
//   console_log(`base64`, base64);
//   // 在密码中插入一个随机符号
//   // const insertPosition = Math.floor(Math.random() * (password.length + 1));
//   // const passwordWithSymbol = password.slice(0, insertPosition) + symbols[index] + password.slice(insertPosition);
//   // return passwordWithSymbol;
//   const insert = Math.floor(Math.random(0, 1) * password.length);
//   const strs = password.split(``);
//   // insert
//   strs.splice(insert, 0, symbols[index])
//   const pwd = strs.join(``);
//   // console.log(`pwd`, pwd);
//   console_log(`pwd`, pwd);
//   //
//   // console.log = backup;
//   return pwd;
//   // return `${strs.splice(insert, 0, symbols[index]).join(``)}`;
//   // return password;
// }


// const autoStrongPasswordGenerator = (begin = 0, len = 12, debug = false) => {
//   // 改写 console.log 方法
//   // const backup = console.log.bind(console);
//   const backup = console;
//   if (!debug) console.log = function () {};
//   try {
//     // ... 函数主体、所有 console.log 调用 ...
//     const end = begin + (len > 12 ? len : 12);
//     // const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
//     const symbols = `!@#$%^&*_+?`.split(``);
//     const index = Math.floor(Math.random(0, 1) * symbols.length);
//     console.log(`index, symbol`, index, symbols[index]);
//     // const url = window.location.href;
//     // const url = globalThis.window.location.href;
//     const url = globalThis.window.location.href.slice(8);
//     // const password = btoa(url).slice(0, 12);
//     const base64 = btoa(url);
//     const password = base64.slice(begin, end);
//     console.log(`base64`, base64);
//     // 在密码中插入一个随机符号
//     // const insertPosition = Math.floor(Math.random() * (password.length + 1));
//     // const passwordWithSymbol = password.slice(0, insertPosition) + symbols[index] + password.slice(insertPosition);
//     // return passwordWithSymbol;
//     const insert = Math.floor(Math.random(0, 1) * password.length);
//     const strs = password.split(``);
//     // insert
//     strs.splice(insert, 0, symbols[index])
//     const pwd = strs.join(``);
//     console.log(`pwd`, pwd);
//     return pwd;
//   } finally {
//     // 保证恢复原始 console.log（带绑定）
//     console.log = backup.log;
//   }
// }


autoStrongPasswordGenerator();
autoStrongPasswordGenerator(7, 26, true);

// autoStrongPasswordGenerator(3, 15);
autoStrongPasswordGenerator(3);
autoStrongPasswordGenerator(7,3);
// console.log(`autoStrongPasswordGenerator()`, autoStrongPasswordGenerator());



