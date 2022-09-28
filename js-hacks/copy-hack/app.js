"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2022-09-28
 * @modified
 *
 * @description
 * @difficulty Easy
 * @time_complexity O(n)
 * @space_complexity O(n)
 * @augments
 * @example
 * @link https://cdn.xgqfrms.xyz/js-hacks/copy-hack/index.html
 * @solutions
 *
 * @best_solutions
 *
 */

(() => {
  const log = console.log;

  const code = document.querySelector(`#code`);
  const input = document.querySelector(`#input`);

  code.addEventListener(`click`, (e) => {
    code.classList.toggle(`selection`);
    // alert(`copied ✅`);
    // e.clipboardData.setData('text/plain', `npm i set-process-env`);
    // log(`e.clipboardData =`, e.clipboardData);
    // undefined
    // 手动模拟 copy
    log(`input`, input, input.value);
    // input.select();
    // log(`input.select()`, input.select());
    // undefined
    // console.log(`window.getSelection().toString()`, window.getSelection().toString())
    // 手动触发 copy event
    // @deprecated
    document.execCommand("copy");
    // https://www.npmjs.com/package/set-process-env
    e.preventDefault();
  });

  code.addEventListener(`copy`, (e) => {
    // code.classList.add(`selection`);
    // alert(`copied ✅`);
    log(`e.clipboardData =`, e.clipboardData);
    // DataTransfer {dropEffect: 'none', effectAllowed: 'uninitialized', items: DataTransferItemList, types: Array(0), files: FileList}dropEffect: "none"effectAllowed: "uninitialized"files: FileList {length: 0}items: DataTransferItemList {length: 0}types: [][[Prototype]]: DataTransfer
    e.clipboardData.setData('text/plain', `npm i app-node-env`);
    // https://www.npmjs.com/package/app-node-env
    e.preventDefault();
  });
})()
