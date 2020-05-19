"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-05-19
 * @modified
 *
 * @description index.js
 * @augments
 * @example
 * @link
 *
 */

const log = console.log;

log(`index.js`);

document.addEventListener('DOMContentLoaded', () => {
  log(`DOMContentLoaded, DOM ready after defer!`);
  try {
    const preload = document.querySelector([`data-uid="preload"`]);
    const prefetch = document.querySelector([`data-uid="prefetch"`]);
    if(preload) {
      log(`preload OK`);
      preload.innerText = `预加载`;
    } else {
      //
    }
    if(prefetch) {
      log(`prefetch OK`);
      preload.innerText = `预获取`;
    } else {
      //
    }
  } catch (error) {
    log(`DOMContentLoaded error`, error)
  }
});

document.addEventListener('load', () => {
  log(`All Loaded`);
  try {
    const preload = document.querySelector([`data-uid="preload"`]);
    const prefetch = document.querySelector([`data-uid="prefetch"`]);
    if(preload) {
      log(`预加载 OK`);
      preload.innerText = `预加载 OK`;
    } else {
      //
    }
    if(prefetch) {
      log(`预获取 OK`);
      preload.innerText = `预获取 OK`;
    } else {
      //
    }
  } catch (error) {
    log(`load error`, error)
  }
});
