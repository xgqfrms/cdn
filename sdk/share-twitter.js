const copyright = `
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
            ©xgqfrms 2012-2022
www.cnblogs.com 发布文章使用：只允许注册用户才可以访问！
     原创文章，版权所有©️xgqfrms, 禁止转载 🈲️，侵权必究⚠️！
`;
const shareToTwitter = (options = {
    uid: 'h1.postTitle',
    user: 'xgqffrms',
    tags: 'js,cnblogs',
    imgId: 'cnblogs_post_body',
  }) => {
  const {uid, user, tags, imgId} = options;
  // 一键分享
  const h1 = document.querySelector(`${uid}`);
  const text = window.encodeURIComponent(h1?.innerText ?? '暂无文章标题');
  const link = window.encodeURIComponent(window.location.href);
  for (let img of document.querySelector(`[id="${imgId}"]`).querySelectorAll('img')) {
    console.log('img', img.src);
  }
  const url = `https://twitter.com/intent/tweet?url=${link}&text=${text}&via=${user}&hashtags=${tags}`;
  try {
    // window.open(url, '_blank');
    window.open(url, '_blank', 'location=yes,height=600,width=800,scrollbars=yes,status=yes');
  } catch (err) {
    console.log('share error', err);
  }
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
