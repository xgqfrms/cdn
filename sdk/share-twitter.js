const currentYear = (new Date()).getFullYear() ?? `2022`;

const copyright = `
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
            ©xgqfrms 2012-${currentYear}
https://www.cnblogs.com 发布文章使用：只允许注册用户才可以访问！
     原创文章，版权所有©️xgqfrms, 禁止转载 🈲️，侵权必究⚠️！
`;

const shareToTwitter = (options = {
    uid: 'h1.postTitle',
    author: 'xgqfrms',
    tags: 'js,cnblogs,webfullstack,leetcode,web',
  }) => {
  const {uid, author, tags} = options;
  // 一键分享
  const h1 = document.querySelector(`${uid}`);
  const text = window.encodeURIComponent(h1?.innerText ?? '暂无文章标题');
  const link = window.encodeURIComponent(window.location.href);
  const url = `https://twitter.com/intent/tweet?url=${link}&text=${text}&via=${author}&hashtags=${tags}`;
  try {
    // window.open(url, '_blank');
    window.open(url, '_blank', 'location=yes,height=600,width=800,scrollbars=yes,status=yes');
  } catch (err) {
    console.log('share error', err);
  }
};

// console.log('shareToTwitter', shareToTwitter);

const autoGeneratorShareButton = () => {
  // 自动生成 UI (web components ???)
  const shareBox = document.querySelector("#green_channel");
  if(shareBox) {
    console.log(`✅ shareBox`, shareBox);
    shareBox.insertAdjacentHTML('afterbegin', `<a href="javascript:void(0);" id="green_channel_digg" onclick="shareToTwitter()" title="分享到 Twitter">分享到 Twitter</a>`);
  } else {
    console.log(`❌ shareBox`, `https://cdn.xgqfrms.xyz/sdk/share-twitter.js`);
  }
};

// export shareToTwitter;
export {shareToTwitter, autoGeneratorShareButton, copyright};
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
