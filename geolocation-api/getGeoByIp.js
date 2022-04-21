
const getGeoByIp = (dom = '#app') => {
  const geoOptions = {
    timeout: 10 * 1000,
    enableHighAccuracy: true,
    maximumAge: 0,
  };
  window.navigator.geolocation.getCurrentPosition((position) => {
      const cords = position.coords;
      console.log(`position = `, position);
      console.log(`position.coords = `, position.coords);
      console.log(`Latitude :  ${cords.latitude}`);
      console.log(`Longitude :  ${cords.longitude}`);
      const json = {
        "纬度 Latitude":  cords.latitude ?? 31.2639786,
        "经度 Longitude":  cords.longitude ?? 121.3897594,
      };
      const app = document.querySelector(dom);
      if(app) {
        app.innerHTML = '';
        app.insertAdjacentHTML('beforeend', `<pre class="pre">${JSON.stringify(json, null, 4)}</pre>`)
      }
    }, (error) => {
      console.debug(`Error: ${error.code}:${error.message}`);
      /**
       * Invoke the IP based location services
       * to fetch the latitude and longitude of the user.
       */
      // 通过 ip 反向查询经纬度 ✅
    },
    geoOptions,
  );
}

// 纬度 Latitude :  31.2639786
// 经度 Longitude :  121.3897594

// getGeoByIp('#app');

export default getGeoByIp;
