/*

https://c7sky.com/lazy-loading-images-using-intersection-observer.html

https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createIntersectionObserver.html

*/

/*



https://juejin.cn/post/6844903502330724365

https://deanhume.com/lazy-loading-images-using-intersection-observer/

https://medium.com/fasal-engineering/image-lazy-loading-using-browsers-intersection-observer-api-a-step-by-step-guide-with-examples-b1a867614e8

https://blog.bitsrc.io/lazy-loading-images-using-the-intersection-observer-api-5a913ee226d

// https://zh.javascript.info/intersection-observer 

https://zh.javascript.info/mutation-observer

*/

class LazyLoadImage {
  // constructor(props);
  // super();
  constructor(){
    this.name = "";
    this.config = {
      //
    };
    this.images = "";
    this.imageCount = "";
    // this.observer = "";
    this.defaults = {
      imageLoadedClass: 'js-lazy-image--handled',
      imageSelector: '.js-lazy-image',
      // If the image gets within 50px in the Y axis, start the download.
      rootMargin: '-100px 0px',
      // rootMargin: '50px 0px',
      threshold: 0.01,
    };
  }
  // defaults = {
  //   imageLoadedClass: 'js-lazy-image--handled',
  //   imageSelector: '.js-lazy-image',
  //   // If the image gets within 50px in the Y axis, start the download.
  //   rootMargin: '50px 0px',
  //   threshold: 0.01
  // };
  static fetchImage(url) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = url;
      image.onload = resolve;
      image.onerror = reject;
    });
  }
  static applyImage(config, img, src) {
    // Prevent this from being lazy loaded a second time.
    img.classList.add(config.imageLoadedClass);
    img.src = src;
  }
  static preloadImage(config, image) {
    const url = image.dataset.src;
    if (!url) {
      return;
    }
    return LazyLoadImage.fetchImage(url).then(() => {
      LazyLoadImage.applyImage(config, image, url);
    });
  }
  loadImagesImmediately(images) {
    // foreach() is not supported in IE
    for (let i = 0; i < images.length; i++) {
      let image = images[i];
      LazyLoadImage.preloadImage(this.config, image);
    }
  }
  disconnect() {
    if (!observer) {
      return;
    }
    this.observer.disconnect();
  }
  onIntersection(entries, config) {
    console.log(`entries`, entries);
    console.log(`this`, this);
    // IntersectionObserver
    // console.log(`this.preloadImage 1 =`, this.preloadImage);
    // let that = this;
    // Disconnect if we've already loaded all of the images
    if (this.imageCount === 0) {
      this.disconnect();
      return;
    }
    // Loop through the entries
    for (let i = 0; i < entries.length; i++) {
      let entry = entries[i];
      // Are we in viewport?
      // console.log(`this.preloadImage 2 =`, this.preloadImage);
      if (entry.intersectionRatio > 0) {
        this.imageCount--;
        // Stop watching and load the image
        // console.log(`this.observer`, this.observer, that.observer);
        // this.observer && this.observer.unobserve(entry.target);
        // this.preloadImage(entry.target);
        console.log(`this.observer`, this.observer, this.observer);
        // console.log(`this.preloadImage 3 =`, this.preloadImage);
        // this.preloadImage(entry.target);
        LazyLoadImage.preloadImage(config, entry.target);
      }
    }
  }
  init(options = {}) {
    this.config = {
      ...this.defaults,
      ...options,
    };
    this.images = [...document.querySelectorAll(this.config.imageSelector)];
    this.imageCount = this.images.length;
    // If we don't have support for intersection observer, loads the images immediately
    if (!('IntersectionObserver' in window)) {
      this.loadImagesImmediately(this.images);
    } else {
      // It is supported, load the images
      this.observer = new IntersectionObserver(this.onIntersection, this.config);
      console.log(`init this.observer`, this.observer);
      // foreach() is not supported in IE
      for (let i = 0; i < this.images.length; i++) {
        let image = this.images[i];
        if (image.classList.contains(this.config.imageLoadedClass)) {
          continue;
        }
        this.observer.observe(image);
        console.log(`observer`, this.observer);
      }
    }
  }
};

let app = new LazyLoadImage();
app.init();

// export default LazyLoadImage;
