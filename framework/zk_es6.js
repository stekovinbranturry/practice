/* 
 * This framework is for self learning and practice purpose only
 */

/*main*/
class ZK {};

const $$ = new ZK();
/*data type*/
Object.assign(ZK.prototype, {

    isNumber(val) {
        return typeof val === 'number' && isFinite(val);
    },
    isBoolean(val) {
        return typeof val === "boolean";
    },
    isString(val) {
        return typeof val === "string";
    },
    isUndefined(val) {
        return typeof val === "undefined";
    },
    isObj(str) {
        if (str === null || typeof str === 'undefined') {
            return false;
        }
        return typeof str === 'object';
    },
    isNull(val) {
        return val === null;
    },
    isArray(arr) {
        if (arr === null || typeof arr === 'undefined') {
            return false;
        }
        return arr.constructor === Array;
    },

});
/*string*/
Object.assign(ZK.prototype, {
    //remove left space
    ltrim(str) {
        return str.replace(/(^\s*)/g, '');
    },
    //remove right space
    rtrim(str) {
        return str.replace(/(\s*$)/g, '');
    },
    //remove all space
    trim(str) {
        return str.replace(/(^\s*)|(\s*$)/g, '');
    },
    //simple bind data
    formateString(str, data) {
        return str.replace(/@\((\w+)\)/g, function(match, key) {
            return typeof data[key] === "undefined" ? '' : data[key]
        });
    },
});

/*general*/
Object.assign(ZK.prototype, {
    /*selector*/
    select(selector) {
        return $$.isString(selector) ? document.querySelector(selector) : selector;
    },
});

/*event*/
Object.assign(ZK.prototype, {
    //get event
    getEvent(event) {
        return event ? event : window.event;
    },
    //get target
    getTarget(event) {
        const e = $$.getEvent(event);
        return e.target || e.srcElement;
    },
    //prevent default event
    preventDefault(event) {
        const event = $$.getEvent(event);
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    //stop propagation
    stopPropagation(event) {
        const event = $$.getEvent(event);
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },
    // add event listener
    on(s, e, fn) {
        const selector = $$.isString(s) ? document.querySelector(s) : s;
        selector.addEventListener(e, fn);
    },
    // remove event listener
    off(s, e, fn) {
        const selector = $$.isString(s) ? document.querySelector(s) : s;
        selector.removeEventListener(e, fn);
    },
    // click event
    click(s, fn) {
        $$.on(s, 'click', fn);
    },
});

/*css*/

/*property*/

/*dom*/

/*cache cookie*/