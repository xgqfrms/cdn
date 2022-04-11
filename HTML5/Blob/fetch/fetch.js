
async function recover (link, blob) {
  // 还原 blob
  const text = await (new Response(blob)).text();
  console.log('text =', text);
  link.innerText = text;
  // auto click
  link.click();
  URL.revokeObjectURL(link.href);
  //
  try {
    const json = await (new Response(blob)).json();
    console.log('json =', json);
  } catch(err) {
    console.log('err =', err);
  }
}

async function generatorBlobVideo(url, type, dom, link, pre) {
  const headers = {
    responseType: 'arraybuffer',
  };
  // if(!type.includes('json')) {
  //   headers.responseType = 'arraybuffer';
  // }
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
    // mode: 'no-cors',
    // ❌  A no-cors request makes the response type opaque. Opaque means your frontend JavaScript code can’t see the response body or headers.
    // responseType: 'arraybuffer',
    // responseType: 'blob',
    ...headers,
    headers: {
      // 'Accept': type,
      'Content-Type': type,
      // 'Content-Type': 'application/octet-stream',
      // 'Accept': 'video/mp4',
      // 'Accept': 'application/json',
      // 'Content-Type': 'application/json;charset=utf-8'
      // 'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
      // ...headers,
    },
  }).then(res => {
    console.log('res =', res);
    if(type.includes('json')) {
      // const json = res.json();
      console.log('res.json =', json);
      // pre.innerText = JSON.stringify(json, null, 4);
      pre.innerText = JSON.stringify({key: 'value'}, null, 4);
      // return json;
    } else {
      // const buffer = res.arrayBuffer();
      // console.log('buffer =', buffer);
      // return buffer;
    }
    return res.arrayBuffer();
  }).then(data => {
    console.log('data =', data);
    const blob = new Blob(
      [data],
      {'type' : type},
    );
    const urlBlob = URL.createObjectURL(blob);
    if(!type.includes('json')) {
      dom.src = urlBlob;
    } else {
      dom.dataset.src = urlBlob;
    }
    // dom.src = urlBlob;
    link.href = urlBlob;
    console.log(`type.includes('json') =`, type.includes('json'))
    if(type.includes('json')) {
      console.log('recover ...');
      recover(link, blob);
    } else {
      console.log('urlBlob =', urlBlob);
      link.innerText = urlBlob;
    }
  }).catch(err => {}).finally(() => {});
  // .then(res => {
  //   // console.log('fetch.response =', res);
  //   const json = res.json();
  //   console.log('json =', json);
  //   const buffer = res.arrayBuffer();
  //   console.log('buffer =', buffer);
  //   // const buffer = res.blob();
  //   const blob = new Blob(
  //     [buffer],
  //     {'type' : type},
  //   );
  //   // const file = new File(buffer, 'test');
  //   const urlBlob = URL.createObjectURL(blob);
  //   dom.src = urlBlob;
  //   link.href = urlBlob;
  //   link.innerText = urlBlob;
  // }).catch(err => {}).finally(() => {});
  // url !== file
  // const blob = new Blob(
  //   [url],
  //   {'type' : type},
  // );
  // // const file = new File(buffer, 'test');
  // const urlBlob = URL.createObjectURL(blob);
  // dom.src = urlBlob;
  // link.href = urlBlob;
  // link.innerText = urlBlob;
}
(async function() {
  var type = 'application/json';
  var url = 'https://cdn.xgqfrms.xyz/json/honor.json';
  var dom = document.querySelector('#json');
  var link = document.querySelector('#json-link');
  var pre = document.querySelector('#json-pre');
  // console.log('img link =', link);
  await generatorBlobVideo(url, type, dom, link, pre);
})();
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
