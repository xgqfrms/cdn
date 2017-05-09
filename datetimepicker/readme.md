# bootstrap-datetimepicker

https://github.com/smalot/bootstrap-datetimepicker


https://cdnjs.com/libraries/bootstrap-datetimepicker





```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.bootcss.com/smalot-bootstrap-datetimepicker/2.3.11/css/bootstrap-datetimepicker.min.css" rel="stylesheet">
</head>
<body>
    <div class="good-search search-detail">
        <div class="search-info search-time search-id fl-l" data-box="data-box">
            <label class="search-text" data-search="data-search">开始时间</label>
            <input class="search-input from-picker" data-timepicker="thisBegin"
                   data-format="yyyy-MM-dd" id="start_time" placeholder="开始时间" value="">
            <span>--</span>
            <label class="search-text" data-search="data-search">结束时间</label>
            <input class="search-input from-picker" data-timepicker="today"
                   data-format="yyyy-MM-dd" id="end_time" placeholder="结束时间">
        </div>
        <div class="search-info search-id fl-l">
            <button class="search-btn" id="good_search">搜索</button>
        </div>
    </div>
    <!-- js -->
    <script src="https://cdn.bootcss.com/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="https://cdn.bootcss.com/smalot-bootstrap-datetimepicker/2.3.11/js/bootstrap-datetimepicker.min.js"></script>
    <!-- <script src="https://static.dd528.com/mall/bootstrap/3.3.6/js/bootstrap-datetimepicker.zh-CN.js"></script> -->
    <script>
        $('#start_time').datetimepicker(
            {
                startDate: 'setStartDate',
                format: 'yyyy-mm-dd'
            }
        );
        $('#end_time').datetimepicker(
            {
                endDate: 'setEndDate',
                format: 'yyyy-mm-dd'
            }
        );
        $( document ).ready(function() {
            (function(){
                let xxx = new Date().toISOString().substr(0,10);
                let yyy = document.querySelector('#start_time');
                yyy.value = xxx;
            })();
        });
        /*
        https://api.jquery.com/attr/#attr-attributeName-value
        https://api.jquery.com/attr/
        https://learn.jquery.com/using-jquery-core/document-ready/
        */
    </script>
</body>
</html>




```


















