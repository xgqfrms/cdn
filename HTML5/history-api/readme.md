# History API All In One


https://cdn.xgqfrms.xyz/HTML5/history-api/pushstate-event.html


https://cdn.xgqfrms.xyz/HTML5/history-api/url-change-event.html

```js
    function rewriteHistory(type) {
        const origin = window.history[type];
        return function () {
            console.log(`arguments =`， arguments);
            console.log(`type =`，type, type.toLocaleLowerCase());
            const rs = origin.apply(this, arguments);
            // custom event
            const e = new Event(type.toLocaleLowerCase());
            e.arguments = arguments;
            // 手动触发事件 
            window.dispatchEvent(e);
            return rs;
        };
    }

```


https://cdn.xgqfrms.xyz/HTML5/history-api/rewirte-pushstate-event.html


## refs

https://www.cnblogs.com/xgqfrms/p/14434635.html

