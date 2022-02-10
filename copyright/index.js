// ES6 IIFE
(() => {
  const copyright = `
  <section>
      <h2 id="refs">refs</h2>
      <hr>
      <div>
        <a href="https://info.flagcounter.com/QIXi" rel="noopener">
          <img src="https://s11.flagcounter.com/count2/QIXi/bg_000000/txt_00FF00/border_FF00FF/columns_3/maxflags_12/viewers_0/labels_1/pageviews_1/flags_0/percent_1/" alt="Flag Counter" border="0">
        </a>
      </div>
      <hr>
      <blockquote style="display: flex; flex-flow: column; align-items: center; justify-content: center; text-align: center; border: none">
        <h3><strong><span style="font-size: 16pt; color: rgba(0, 255, 0, 1)">©xgqfrms 2012-<span data-uid="copyright-aside">2022</span></span></strong>
        <p><span style="font-size: 18pt; color: rgba(0, 255, 0, 1)"><strong>www.cnblogs.com/xgqfrms 发布文章使用：只允许注册用户才可以访问！</strong></span></p>
        <p><span style="font-size: 18pt; color: rgba(0, 255, 0, 1)"><strong>原创文章，版权所有©️xgqfrms, 禁止转载 🈲️，侵权必究⚠️！</strong></span></p>
      </h3></blockquote>
    </section>
  `;
  const postBox = document.querySelector(`#cnblogs_post_body`);
  if(postBox) {
    postBox.insertAdjacentHTML('beforeend', copyright);
    console.log(`✅ 渲染 copyright 失败`);
  } else {
    console.log(`❌ 渲染 copyright 失败`);
  }
})();
