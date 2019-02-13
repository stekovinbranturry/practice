(function (w) {
    var zk = {};

    zk.dom = {
        html: function (dom, value) {
            if (value) {
                dom.innerHTML = value;
            } else {
                return dom.innerHTML;
            }
        }
    };

    zk.string = {};

    zk.event = {};
    
    w.$$ = zk;
})(window)