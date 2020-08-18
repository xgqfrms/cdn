
const SEO_FALG = () => {
  setTimeout(() => {
    console.log(`✅ flagcounter.com`);
    const img = document.querySelector(`[data-flagcounter="img" ]`);
    const a = document.querySelector(`[data-flagcounter="a" ]`);
    if(a) {
      a.href = `https://s11.flagcounter.com/count2/QIXi`;
    } 
    if(img) {
      img.src = `https://s11.flagcounter.com/count2/QIXi/bg_000000/txt_00FF00/border_FF00FF/columns_3/maxflags_12/viewers_0/labels_1/pageviews_1/flags_0/percent_1/`;
    }
    console.log(` 🎉 flagcounter.com`);
  },  0);
}
