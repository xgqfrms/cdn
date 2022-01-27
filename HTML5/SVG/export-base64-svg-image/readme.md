# 前端水印实现方式 All In One


作者：xgqfrms
链接：https://www.cnblogs.com/xgqfrms/p/15847231.html
来源：https://www.cnblogs.com
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
            ©xgqfrms 2012-2021
www.cnblogs.com 发布文章使用：只允许注册用户才可以访问！
     原创文章，版权所有©️xgqfrms, 禁止转载 🈲️，侵权必究⚠️！

## demo


https://cdn.xgqfrms.xyz/HTML5/SVG/export-base64-svg-image/index.html


## canavs

> 位图， 受分辨率影响

```js

export default class CanvasWatermark {
    constructor(watermark) {
        this.watermark = watermark;
        const { width, height } = watermark;
        this.canvas = document.createElement('canvas');
        this.canvas.setAttribute('width', width);
        this.canvas.setAttribute('height', height);
    }
    render() {
        // watermark ??? 怎么来的
        const {
            txt,
            x, y,
            width,
            height,
            font,
            color,
            fontSize,
            alpha,
            angle,
        } = this.watermark;
        const ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, width, height);
        ctx.textBaseline = 'top';
        ctx.textAlign = 'left';
        ctx.fillStyle = color;
        ctx.globalAlpha = alpha;
        ctx.font = `${fontSize}px ${font}`;
        ctx.translate(x, y);
        ctx.rotate(Math.PI / 180 * angle);
        ctx.translate(-x, -y - fontSize);
        // draw text
        ctx.fillText(txt, x, y + fontSize);
        return this.canvas.toDataURL();
    }
}

```

## svg

> 矢量图， 不受分辨率影响

```js


export default class SvgWatermark {
    constructor(options = {}) {
        this.watermark = options;
    }
    render() {
        const {
            text,
            x,
            y,
            width,
            height,
            font,
            color,
            fontSize,
            alpha,
            angle,
        } = this.watermark;
        const svgStr = `
            <svg xmlns="http://www.w3.org/2000/svg" width="${width}px" height="${height}px"> 
                <text
                    x="${x}px" y="${y}px"
                    dy="${fontSize}px"
                    text-anchor="start"
                    stroke="${color}"
                    stroke-opacity="${alpha}"
                    fill="none"
                    transform="rotate(${angle},${x} ${y})"
                    font-weight="100"
                    font-size="${fontSize}"
                    font-family="${font}">
                    ${text}
                </text>
            </svg>
        `;
        return `data:image/svg+xml;base64,${window.btoa(unescape(encodeURIComponent(svgStr)))}`;
    }
    getBase64SVGImage () {
        const userName = this.watermark?.text ?? "xgqfrms";
        const watermark = `
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svg" viewBox="0 0 100 100" width="100" height="100">
                <text x="25" y="50" fill="#00ff00">${userName}</text>
            </svg>
        `;
        const app = document.querySelector(`#app`);
        app.insertAdjacentHTML('beforeend', watermark);
        // serialize string
        const svgElement = document.querySelector(`#svg`);
        const svgURL = new XMLSerializer().serializeToString(svgElement);
        return `data:image/svg+xml;base64,${window.btoa(unescape(encodeURIComponent(svgURL)))}`;
    }
}


```
