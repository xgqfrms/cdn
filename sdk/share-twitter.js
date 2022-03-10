const copyright = `
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
            ©xgqfrms 2012-2022
www.cnblogs.com 发布文章使用：只允许注册用户才可以访问！
     原创文章，版权所有©️xgqfrms, 禁止转载 🈲️，侵权必究⚠️！
`;

const shareToTwitter = (options = {
    uid: 'h1.postTitle',
    author: 'xgqfrms',
    tags: 'js,cnblogs',
    postId: 'cnblogs_post_body',
  }) => {
  const {uid, author, tags, postId} = options;
  // 一键分享
  const h1 = document.querySelector(`${uid}`);
  const text = window.encodeURIComponent(h1?.innerText ?? '暂无文章标题');
  const post = document.querySelector(`[id="${postId}"]`);
  const content = window.encodeURIComponent(post.innerText.slice(0, 200) ?? '暂无文章标内容');
  const link = window.encodeURIComponent(window.location.href);
  const domain = window.location.host;
  const site = window.location.origin;
  const flag = `https://s11.flagcounter.com/count2/QIXi/bg_000000/txt_00FF00/border_FF00FF/columns_3/maxflags_12/viewers_0/labels_1/pageviews_1/flags_0/percent_1/`;
  const img = post.querySelector('img')?.src ?? flag;
  // const imgSrc = window.encodeURIComponent(post.querySelector('img')?.src ?? flag);
  const meta = `
    <meta name="twitter:card" content="${img}">
    <meta name="twitter:image" content="${img}">
    <meta name="twitter:title" content="${text}">
    <meta name="twitter:description" content="${content}">
    <meta name="twitter:domain" content="${domain}">
    <meta name="twitter:site" content="@${site}">
    <meta name="twitter:creator" content="@${author}">
  `;
  const head = document.querySelector('head');
  head.insertAdjacentHTML('beforeend', meta);
  const url = `https://twitter.com/intent/tweet?url=${link}&text=${text}&via=${author}&hashtags=${tags}`;
  // const url = `https://twitter.com/intent/tweet?url=${link}&text=${text}&via=${author}&hashtags=${tags}&image-src=${img}`;
  try {
    // window.open(url, '_blank');
    window.open(url, '_blank', 'location=yes,height=600,width=800,scrollbars=yes,status=yes');
  } catch (err) {
    console.log('share error', err);
  }
}

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
  const content = post.innerText.slice(0, 200) ?? '暂无文章标内容';
  // const content = window.encodeURIComponent(post.innerText.slice(0, 200) ?? '暂无文章标内容');
  const domain = window.location.origin;
  const site = window.location.href;
  const flag = `https://s11.flagcounter.com/count2/QIXi/bg_000000/txt_00FF00/border_FF00FF/columns_3/maxflags_12/viewers_0/labels_1/pageviews_1/flags_0/percent_1/`;
  const img = post.querySelector('img')?.src ?? flag;
  // const imgSrc = window.encodeURIComponent(post.querySelector('img')?.src ?? flag);
  const meta = `
    <meta name="twitter:card" content="${img}">
    <meta name="twitter:image" content="${img}">
    <meta name="twitter:title" content="${text}">
    <meta name="twitter:description" content="${content}">
    <meta name="twitter:domain" content="${domain}">
    <meta name="twitter:site" content="@${site}">
    <meta name="twitter:creator" content="@${author}">
  `;
  const head = document.querySelector('head');
  head.insertAdjacentHTML('beforeend', meta);
}

const autoGeneratorShareButton = () => {
 // 自动生成 UI (web components ???)
 
};

// export shareToTwitter;
// export {shareToTwitter, };
// export default shareToTwitter;

// on button click call function `shareToTwitter()`

// twitter svg icon

// https://help.twitter.com/en/using-twitter/add-twitter-share-button

/*

<a 
href="https://twitter.com/share?ref_src=twsrc%5Etfw" 
class="twitter-share-button" 
data-show-count="false">Tweet</a>

<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

*/ 
