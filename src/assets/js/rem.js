(function (win) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var tid;

    function refreshRem() {
        // get screen width
        var width = docEl.getBoundingClientRect().width;
        var rem = width / 7.5;  // devide screen width into 7.5 piece, 1 piece = 1 rem 
        docEl.style.fontSize = rem + 'px';

    }

    win.addEventListener('resize', function () {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 10);
    }, false)
    win.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 10);
        }
    }, false);

    refreshRem();

})(window)