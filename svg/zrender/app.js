// https://cdn.xgqfrms.xyz/svg/zrender/zrender.min.js

window.onload = () => {
  const zr = zrender.init(document.getElementById('app'));
  // console.log(`zr`, zr);

  const circle = new zrender.Circle({
      shape: {
          cx: 150,
          cy: 50,
          r: 40,
      },
      style: {
          fill: 'none',
          stroke: '#F00',
      },
  });
  zr.add(circle);
  
  console.log(circle.shape.r);
  // 40
  setTimeout(() => {
    circle.attr('shape', {
        r: 50,
        // 只更新 r; cx、cy 将保持不变;
    });
  }, 3000);
};
