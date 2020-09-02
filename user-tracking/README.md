# user tracking

> 用户追踪


## 埋点

## 性能监控

## 数据上报

## 异常处理

## 数据收集


## 1px gif

```js
function onePixelGif() {
  // Create canvas
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  // Set width and height
  const img = document.createElement('img');
  canvas.width = 1;
  canvas.height = 1;
  // Draw the image
  ctx.drawImage(img, 0, 0);
  return canvas.toDataURL('image/gif');
}

onePixelGif();

// "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII="

```


***

[old readme.md](./user-tracking/readme.md)

