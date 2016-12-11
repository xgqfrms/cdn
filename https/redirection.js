window.onload = () => {
    /*
        <meta http-equiv="refresh" content="3; url=https://es6.xgqfrms.xyz">
        alert("After 3s, Auto goto URL\n => \n https://es6.xgqfrms.xyz/ ");
    */
    const arr = ["www", "es6", "ajax", "app", "blogs", "ng2-app", "cdn"];
    // ???
    let redirection = () => {
        let http = `http://${arr[0]}.xgqfrms.xyz/`,
            https = `https://${arr[0]}.xgqfrms.xyz/`,
            regex = /https:\/\/www\.xgqfrms\.xyz/,
            result = regex.exec(window.location);
        if (result) {
            // window.location = http + '/#body/' + result[1] + '#' + result[2];
            window.location = https;
        } else {
            window.location = http;
        }
    }
    redirection();
}
