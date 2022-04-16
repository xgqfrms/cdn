function start() {
    const start = new Date().getTime();
    let view = document.querySelector('#view');
    const img = document.querySelector('#img');
    view.innerHTML = '';
    let excludes = {};
    if (!document.querySelector('#userAgent').checked) {
        excludes.userAgent = true;
    }
    if (!document.querySelector('#audio').checked) {
        excludes.audio = true;
    }
    if (!document.querySelector('#enumerateDevices').checked) {
        excludes.enumerateDevices = true;
    }
    if (!document.querySelector('#fonts').checked) {
        excludes.fonts = true;
    }
    if (!document.querySelector('#fontsFlash').checked) {
        excludes.fontsFlash = true;
    }
    if (!document.querySelector('#webgl').checked) {
        excludes.webgl = true;
    }
    if (!document.querySelector('#canvas').checked) {
        excludes.canvas = true;
    }
    let options = {excludes: excludes}
    Fingerprint2.get(options, function (components) {
        // 参数
        const values = components.map(component => component.value);
        // 指纹
        // console.log(`fingerprint 指纹 =`, values.join(''));
        // hash 
        const murmur = Fingerprint2.x64hash128(values.join(''), 31);
        // 
        view.innerHTML += `<h2>👻 指纹 : <mark>${murmur}</mark></h2>`;
        view.innerHTML += '<p>消耗 : ' + (new Date().getTime() - start) + ' 毫秒</p>';
        view.innerHTML += '<p>使用的参数 : </p>';
        for (const obj of components) {
            view.innerHTML += `<p>✅ ${obj.key}: ${obj.value}</p>`;
            if(obj.key === 'canvas') {
              const values = obj.value;
              console.log('✅ values[1]', values[1]);
              const base64 = values[1].replace(`canvas fp:`, ``);
              console.log('✅ base64', base64);
              img.src = base64;
            }
        }
    });
}


// if (typeof globalThis.window.requestIdleCallback === 'function') {
//   requestIdleCallback(() => {
//     // new Fingerprint().get(function (result: any, components: any) {
//     new Fingerprint().get(function (result, components) {
//       console.log(result);
//       console.log(components);
//       // an array of components: {key: ..., value: ...}
//     });
//   }, {
//     timeout: 0,
//   });
// } else {
//   setTimeout(function () {
//     // new Fingerprint().get(function (result: any, components: any) {
//     new Fingerprint().get(function (result, components) {
//       console.log('result =', result);
//       console.log('components =', components);
//       // an array of components: {key: ..., value: ...}
//     });
//   }, 0);
// }




/*

fingerprintjs cdn

https://cdnjs.com/libraries/fingerprintjs

https://cdn.staticfile.org/fingerprintjs2/2.1.0/fingerprint2.js

https://cdn.xgqfrms.xyz/fingerprintjs/v2.1.0/fingerprint2.js
https://cdn.xgqfrms.xyz/fingerprintjs/v2.1.0/fingerprint2.min.js


https://dev.fingerprintjs.com/docs/browser-support

https://dash.readme.com/project/webgeeker/v1.0/overview

https://webgeeker.readme.io/docs


https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback

https://developer.mozilla.org/en-US/docs/Web/API/Background_Tasks_API#example

*/
