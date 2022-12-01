/*

在文章内容流中注入版权信息，反爬虫

## <div id="anti-crawler" style="color:  red;"> (🐞 反爬虫测试！打击盗版⚠️）如果你看到这个信息, 说明这是一篇剽窃的文章，请访问 https://www.cnblogs.com/xgqfrms/ 查看原创文章！</div>

https://www.cnblogs.com/xgqfrms/p/12892311.html

*/

(() => {
  const antiCrawler = document.querySelector(`#anti-crawler`);
  if(antiCrawler) {
    // remove it / hide it
    antiCrawler.remove();
    console.log(`🐞 反爬虫 ✅`)
  } else {
    console.log(`🐞 反爬虫 ❌`)
  }
})();
  
