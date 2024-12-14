let username = `xgqfrms-GitHub`;
    repo = `Node-CLI-Tools/commits`;

fetch(`https://api.github.com/users/${username}/${repo}`,{
    data: {
         client_id: process.env.NODE_ENV_ID,
         client_secret: process.env.NODE_ENV_SECRET,
    }
})
.then((response) => response.json())
.then((json)=> {
    console.log(`json =`, json);
    return repos = json;
})
.then((repos)=>{
    console.log(`repos = ${repos}`);
    console.log(`repos = ${repos.length}`);
    console.log(`repos$ 0  = ${repos[0]}`);
    console.log(`repos$ 1  = ${repos[1]}`);
    for (let i = 0; i < repos.length; i++) {
        console.log(`repos${i}  = ${repos[i]}`);
    }
});



// https://api.github.com/users/xgqfrms

// https://api.github.com/users/xgqfrms/react2 ???

/*

/**
 * [nct: fetch data]
 * @author: xgqfrms
 * @date: 2017-06-12
 */

const fetch = require('node-fetch');
const showdata = require('./showdata');

// NODE_ENV_ID = ``;
// NODE_ENV_SECRET = ``;

const nct = (username, repo) => {
    let url = `https://api.github.com/repos/${username}/${repo}/commits`;
    let options = {
        data: {
            client_id: process.env.NODE_ENV_ID,
            client_secret: process.env.NODE_ENV_SECRET,
        },
    };
    fetch(url, options)
    .then((res) => res.json())
    .then((repos)=>{
        showdata(repos);
    })
    .catch(err) => {
      console.log(`error info =`, err);
    };
};

module.exports = nct;


https://github.com/xgqfrms-GitHub/Node-CLI-Tools/blob/master/libs/index.js


*/









