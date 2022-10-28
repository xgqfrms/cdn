/**
 * xgqfrms 2022.10.01
 * @copyright xgqfrms 2012-2050
 * @version v0.0.1
 * @link https://cdn.xgqfrms.xyz/plugins/update-year.js
 */


const updateYear = (uid = `[data-uid="copyright-aside"]`) => {
  const copyYear = document.querySelector(uid);
  copyYear.innerText = new Date().getFullYear();
};

const updateAllYears = (uid = `[data-uid="copyright-aside"]`) => {
  const copyYears = [...document.querySelectorAll(uid)];
  for(const copyYear of copyYears) {
    copyYear.innerText = new Date().getFullYear();
  }
};

/*

// delay
setTimeout(() => {
  // updateYear();
  updateYears();
}, 3000);

*/


// const copyRightYear = () => {
//     let copyYear = Symbol();
//     copyYear = new Date().getFullYear();
//     const spanYear = document.getElementById('spanYear');
//     spanYear.style.background = "yellow";
//     spanYear.style.color = "#000";
//     spanYear.innerHTML = `Copyright &copy; ${copyYear} - 2050 xgqfrms`;
//     return spanYear;
// };

// export default updateAllYears;
// export {updateAllYears, updateYear};
