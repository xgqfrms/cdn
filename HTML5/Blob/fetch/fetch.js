async function generatorBlobVideo(url, type, dom, link) {
  const headers = {
    responseType: 'arraybuffer',
  };
  // const headers = new Headers({
  //   'Content-Type': 'text/plain',
  //   'X-Custom-Header': 'ProcessThisImmediately',
  // });
  // const headers = new Headers();
  // headers.append('Content-Type', 'text/plain');
  // headers.append('X-Custom-Header', 'ProcessThisImmediately');
  // headers.set('Content-Type', 'text/html');
  // headers.has('X-Custom-Header');
  // headers.get('X-Custom-Header');
  // headers.delete('X-Custom-Header');
  // promise.then(res => res.json()).catch(err => {}).finally(() => {});
  // promise.then(res => res.arrayBuffer()).catch(err => {}).finally(() => {});
  const promise = await fetch(url, {
    // method: 'GET', // *GET, POST, PUT, DELETE, etc.
    // mode: 'cors', // no-cors, *cors, same-origin
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'same-origin',
    // credentials: 'include',
    method: 'GET',
    mode: 'no-cors',
    responseType: 'arraybuffer',
    headers: {
      // 'Accept': 'video/mp4',
      // 'Accept': 'application/json',
      'Accept': type,
      'Content-Type': type,
      // 'Content-Type': 'application/json;charset=utf-8'
      // 'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
      // ...headers,
    },
  }).then(res => {
    console.log('fetch.response =', res);
    const buffer = res.arrayBuffer();
    const blob = new Blob(
      [buffer],
      {'type' : type},
    );
    // const file = new File(buffer, 'test');
    const urlBlob = URL.createObjectURL(blob);
    dom.src = urlBlob;
    link.href = urlBlob;
    link.innerText = urlBlob;
  }).catch(err => {}).finally(() => {});
}
(async function() {
  var type = 'image/png';
  var url = 'https://cdn.xgqfrms.xyz/logo/icon.png';
  var dom = document.querySelector('#img');
  var link = document.querySelector('#img-link');
  // console.log('img link =', link);
  await generatorBlobVideo(url, type, dom, link);
})();
(async function() {
  var type = 'video/mp4';
  var url = 'https://cdn.xgqfrms.xyz/HTML5/Blob/2022-04-07-sh.mp4';
  var dom = document.querySelector('#video');
  var link = document.querySelector('#video-link');
  // console.log('video link =', link);
  setTimeout(() => {
    // Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules
    // await generatorBlobVideo(url, type, dom, link);
    generatorBlobVideo(url, type, dom, link);
  }, 3000);
})();


/*

https://cdn.xgqfrms.xyz/HTML5/Blob/index.html

https://codepen.io/xgqfrms/pen/XWVYQPb

*/
