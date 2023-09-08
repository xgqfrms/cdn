
const getMockData = async (options = {
  data: '',
  error: 'unknown server error',
  delay: null
}) => {
  const {data, error, delay} = options;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(!!data) {
        resolve({
          type: 'Success ✅',
          data,
        });
      } else {
        reject({
          type: 'Error ❌',
          message: error,
        });
      }
    }, delay || 1000);
  });
}

/*

// test cases
(async () => {
  try {
    const success = await getMockData({data: [1,2,3]});
    console.log(success.data);
  } catch (err) {
    console.log(err.message);
  }
  try {
    const error = await getMockData({error: '404 not found error', delay: 3000});
    console.log(error);
  } catch (err) {
    console.log(err.message);
  }
})();

*/


;(async () => {
  console.log(`promise delay 3 seconds`)
  // delay
  await new Promise((resolve, reject) => {setTimeout(() => resolve(`OK ✅`), 3000)});
  // await new Promise((resolve, reject) => {setTimeout(() => reject(`Error ❌`), 3000)});
  console.log(`promise delay 3 seconds ✅`)
  const antiCrawler = document.querySelector(`#anti-crawler`);
  if(antiCrawler?.firstElementChild) {
    // auto add original url
    antiCrawler.firstElementChild.href = window.location.href;
    antiCrawler.firstElementChild.innerText = window.location.href;
  }
})();
