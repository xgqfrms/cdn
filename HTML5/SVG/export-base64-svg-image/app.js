
const userName = "xgqfrms";

const watermark = `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svg" viewBox="0 0 100 100" width="100" height="100">
        <text x="25" y="50" fill="#00ff00">${userName}</text>
    </svg>
`;
// const watermark = `
//     <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svg" viewBox="0 0 200 200" width="100" height="100">
//         <text x="0" y="0" fill="#00ff00">${userName}</text>
//     </svg>
// `;


const app = document.querySelector(`#app`);
app.insertAdjacentHTML('beforeend', watermark);

const svgElement = document.querySelector(`#svg`);

console.log(`svgElement =`, svgElement);

const svgURL = new XMLSerializer().serializeToString(svgElement);

console.log(`svgURL =`, svgURL);

// const imgSrc = `data:image/svg+xml; charset=utf8, ${encodeURIComponent(svgURL)}`;
// const imgSrc = `data:image/svg+xml; charset=utf8, ${window.btoa(svgURL)}`;
const imgSrc = `data:image/svg+xml;base64,${window.btoa(svgURL)}`;

console.log(`imgSrc =`, imgSrc);

// app.style.background = `left 5% / 15% 60% repeat url(${imgSrc})`;
app.style.background = `left 5% / 15% 60% repeat url(${imgSrc})`;
// app.style.background = `url(${imgSrc}) repeat`;
// app.style.backgroundImage = `url(${imgSrc})`;
// app.style.backgroundRepeat = `repeat`;
// app.style.backgroundPosition = `0 0`;

const img = document.querySelector(`#img`);
img.src = imgSrc;

const pre = document.querySelector(`#pre`);
pre.insertAdjacentText('beforeend', imgSrc);




// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// const dataURL = canvas.toDataURL();
// console.log(`dataURL =`, dataURL);


/*


前端水印实现方式 All In One
作者：xgqfrms
链接：https://www.cnblogs.com/xgqfrms/p/15847231.html
来源：https://www.cnblogs.com
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
            ©xgqfrms 2012-2021
www.cnblogs.com 发布文章使用：只允许注册用户才可以访问！
     原创文章，版权所有©️xgqfrms, 禁止转载 🈲️，侵权必究⚠️！
      


*/
