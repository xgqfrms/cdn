// window.devtoolsFormatters;

window.devtoolsFormatters = [
  {
    header: function(obj) {
      if (!obj.clog) {
        return null;
      }
      delete obj.clog;
      const style = `
        color: #0f0;
        background: #000;
        border: 1px solid pink;
        border-radius: 5px;
        padding: 5px;
        font-size: 16px;
      `;
      const content = `👻 console custom formatters ✅\n\n${JSON.stringify(obj, null, 4)}`;
      const result = ['div', {style}, content];
      try {
        return result;
      } catch (err) {
        // for circular structures, use the default formatter
        return null;
      }
    },
    hasBody: function() {
        return false;
    },
  },
];

// custom log
console.clog = function (obj) {
  if(typeof obj === 'string') {
      obj = {
          key: obj,
      };
  }
  return console.log({...obj, clog: true});
}


/*

console.clog({message: 'hello!'});

console.clog(`xgqfrms`);

*/


