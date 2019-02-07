/* 
 * This framework is for self learning and practice purpose only
 */

/*main*/
var ZK = function() {};

ZK.prototype = {
    extend: function(tar, source) {
        for (var i in source) {
            tar[i] = source[i];
        }
        return tar;
    },
};

var $$ = new ZK();
/*data type*/
$$.extend($$, {

    isNumber: function(val) {
        return typeof val === 'number' && isFinite(val);
    },
    isBoolean: function(val) {
        return typeof val === "boolean";
    },
    isString: function(val) {
        return typeof val === "string";
    },
    isUndefined: function(val) {
        return typeof val === "undefined";
    },
    isObj: function(str) {
        if (str === null || typeof str === 'undefined') {
            return false;
        }
        return typeof str === 'object';
    },
    isNull: function(val) {
        return val === null;
    },
    isArray: function(arr) {
        if (arr === null || typeof arr === 'undefined') {
            return false;
        }
        return arr.constructor === Array;
    },

});
/*string*/
$$.extend($$, {
    //remove left space
    ltrim: function(str) {
        return str.replace(/(^\s*)/g, '');
    },
    //remove right space
    rtrim: function(str) {
        return str.replace(/(\s*$)/g, '');
    },
    //remove all space
    trim: function(str) {
        return str.replace(/(^\s*)|(\s*$)/g, '');
    },
    //simple bind data
    formateString: function(str, data) {
        return str.replace(/@\((\w+)\)/g, function(match, key) {
            return typeof data[key] === "undefined" ? '' : data[key]
        });
    },
});

/*general*/
$$.extend($$, {
    /*selector*/
    select: function(selector) {
        var arr = $$.trim(selector).split(',');
        var len = arr.length;
        var result = [];
        if (len == 1) {
            return document.querySelector(selector);
        } else {
            for (var i = 0; i < len; i++) {
                var dom = document.querySelector(arr[i]);
                result.push(dom);
            }
        }
        return result;
    },
    /*select by class name*/
    $class: function(name) {
        var dom = document.getElementsByTagName('*');
        var arr = [];

        for (var i = 0, len = dom.length; i < len; i++) {
            if (dom[i].className == name) {
                arr.push(dom[i]);
            }
        }
        return arr;
    }
});

/*event*/
$$.extend($$, {
    //get event
    getEvent: function(event) {
        return event ? event : window.event;
    },
    //get target
    getTarget: function(event) {
        var e = $$.getEvent(event);
        return e.target || e.srcElement;
    },
    //prevent default event
    preventDefault: function(event) {
        var event = $$.getEvent(event);
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    //stop propagation
    stopPropagation: function(event) {
        var event = $$.getEvent(event);
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },
    // add event listener
    on: function(s, e, fn) {
        const selector = $$.isString(s) ? document.querySelector(s) : s;
        selector.addEventListener(e, fn);
    },
    // remove event listener
    off: function(s, e, fn) {
        const selector = $$.isString(s) ? document.querySelector(s) : s;
        selector.removeEventListener(e, fn);
    },
    // click event
    click: function(s, fn) {
        $$.on(s, 'click', fn);
    },
});

/*css*/

/*attibution*/
$$.extend($$, {
    /*attribution*/
    attr: function(dom, key, value) {
        if (value) {
            dom.setAttribute(key, value);
        } else {
            return dom.getAttribute(key);
        }
    },
    /*addClass*/
    addClass: function(dom, name) {
        dom.className = dom.className + ' ' + name;
    },
    /*removeClass*/
    removeClass: function(dom, name) {
        dom.className = dom.className.replace(name, '');
    },
    /*hasClass*/
    hasClass: function(dom, name) {
        var arr = dom.className.split(' ');
        var check = false;
        for (i of arr) {
            if ($$.trim(i) === name) {
                check = true;
                break;
            }
        }
        return check;
    },
    /*html*/
    html: function(dom, value) {
        if (value) {
            dom.innerHTML = value;
        } else {
            return dom.innerHTML;
        }
    }
});
/*dom*/

/*cache cookie*/