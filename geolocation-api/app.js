/**
 * Video Stream Layer
 * https://developer.mozilla.org/docs/Web/API/MediaDevices/getUserMedia
 */

function fetchVideoStream(videoEle) {
  let constraints = { video: { facingMode: 'environment' } };
  if (navigator.mediaDevices !== undefined) {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        videoEle.srcObject = stream;
        videoEle.play();
        console.log('videoEle =', videoEle);
        console.log('stream =', stream);
        console.log('\n videoEle', videoEle);
        console.log('✅✅ videoEle.videoHeight,  videoEle.height =', videoEle.videoHeight,  videoEle.height);
        // ???
        // videoStream = stream;
        // Initiate frame capture - Processing Layer.
      })
      .catch((error) => {
        console.debug(error);
        console.warn(`Failed to access the stream:${error.name}`);
      });
  } else {
    console.warn(`getUserMedia API not supported!!`);
  }
}

/**
 * Processing Layer - Frame Capture
 * https://developer.mozilla.org/docs/Web/API/Canvas_API/Manipulating_video_using_cacanvas
 */

async function captureFrames(videoEle, canvasEle, canvasCtx) {
  console.log('\n ❌ videoEle', videoEle);
  console.log('videoEle.readyState =', videoEle.readyState);
  console.log('videoEle.HAVE_ENOUGH_DATA =', videoEle.HAVE_ENOUGH_DATA);
  if (videoEle.readyState === videoEle.HAVE_ENOUGH_DATA) {
    // const canvasHeight = (canvasEle.height = videoEle.videoHeight);
    // const canvasWidth = (canvasEle.width = videoEle.videoWidth);
    // const canvasHeight = videoEle.videoHeight;
    // const canvasWidth = videoEle.videoWidth;
    console.log('\n videoEle', videoEle);
    console.log('✅ videoEle.videoHeight,  videoEle.height =', videoEle.videoHeight,  videoEle.height);
    console.log('canvasEle.height, canvasEle.width', canvasEle.height, canvasEle.width);
    const canvasHeight = videoEle.height;
    const canvasWidth = videoEle.width;
    canvasCtx.drawImage(videoEle, 0, 0, canvasWidth, canvasHeight);
    console.log('canvasCtx', canvasCtx, canvasWidth, canvasHeight);
    // Transfer the `canvasEle` to the decoder for barcode detection.
    const result = await decodeBarcode(canvasEle);
    console.log('result ', result);
  } else {
    console.log('Video feed not available yet');
  }
}

/**
 * Barcode Decoder with Shape Detection API
 * https://web.dev/shape-detection/
 */
async function decodeBarcode(canvas) {
  const formats = [
    'aztec',
    'code_128',
    'code_39',
    'code_93',
    'codabar',
    'data_matrix',
    'ean_13',
    'ean_8',
    'itf',
    'pdf417',
    'qr_code',
    'upc_a',
    'upc_e',
  ];
  const barcodeDetector = new window.BarcodeDetector({
    formats,
  });
  try {
    const barcodes = await barcodeDetector.detect(canvas);
    console.log(barcodes);
    return barcodes.length > 0 ? barcodes[0]['rawValue'] : undefined;
  } catch (e) {
    throw e;
  }
}



function testBarcodeDetector() {
  // Feature detection.
  if (!('BarcodeDetector' in window)) {
    return false;
  } else {
    // Check supported barcode formats.
    BarcodeDetector.getSupportedFormats()
    .then((formats) => {
      console.log('formats =', formats, typeof formats)
      for (const [i, format] of formats.entries()) {
        // console.log(`BarcodeDetector SupportedFormat ${i} = ${format}`);
      }
    });
    return true;
  }
}


const app = (videoId = 'video', canvasId = 'canvas') => {
  const flag = testBarcodeDetector();
  if(!flag) {
    return;
  }
  console.log('BarcodeDetector flag =', flag);
  const videoEle = document.getElementById(videoId);
  const canvasEle = document.getElementById(canvasId);
  const canvasCtx = canvasEle.getContext('2d');
  // width="400" height="300"
  // canvasCtx.width  = 400;
  // canvasCtx.height = 300;
  // canvasCtx.canvas.width  = window.innerWidth;
  // canvasCtx.canvas.height = window.innerHeight;
  // console.log('videoEle =', videoEle);
  // console.log('canvasEle, canvasCtx =', canvasEle, canvasCtx);
  fetchVideoStream(videoEle);
  setTimeout(() => {
    captureFrames(videoEle, canvasEle, canvasCtx);
    decodeBarcode(canvasEle);
    // decodeBarcode(canvasCtx);
  }, 3000);
}

export default app;
// app('video', 'canvas');

/*


Web API

https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas

https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage

https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext

https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia

https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition


*/
