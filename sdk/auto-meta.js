const autoGeneratorMeta = (options = {
    uid: 'h1.postTitle',
    author: 'xgqfrms',
    postId: 'cnblogs_post_body',
  }) => {
  const {uid, author, postId} = options;
  // 一键分享
  const h1 = document.querySelector(`${uid}`);
  const text = window.encodeURIComponent(h1?.innerText ?? '暂无文章标题');
  const post = document.querySelector(`[id="${postId}"]`);
  const content = post?.innerText.slice(0, 200) ?? '暂无文章标内容';
  // const content = window.encodeURIComponent(post.innerText.slice(0, 200) ?? '暂无文章标内容');
  const domain = window.location.origin;
  const site = window.location.href;
  const flag = `https://s11.flagcounter.com/count2/QIXi/bg_000000/txt_00FF00/border_FF00FF/columns_3/maxflags_12/viewers_0/labels_1/pageviews_1/flags_0/percent_1/`;
  const img = post?.querySelector('img')?.src ?? flag;
  // const imgSrc = window.encodeURIComponent(post.querySelector('img')?.src ?? flag);
  // https://www.cnblogs.com/xgqfrms/p/15990413.html
  /*
    <meta name="twitter:card" content="summary">
    <meta name="twitter:card" content="app">
    <meta name="twitter:card" content="player">
    <meta name="twitter:card" content="summary_large_image">
  */
  const meta = `
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:image" content="${img}">
    <meta name="twitter:title" content="${text}">
    <meta name="twitter:description" content="${content}">
    <meta name="twitter:domain" content="${domain}">
    <meta name="twitter:site" content="@${site}">
    <meta name="twitter:creator" content="@${author}">
  `;
  const head = document.querySelector('head');
  if(head) {
    console.log('meta ✅');
    head.insertAdjacentHTML('beforeend', meta);
  } else {
    console.log('meta ❌');
  }
}



window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    autoGeneratorMeta();
});
