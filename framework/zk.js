/*main*/
class ZK {};

const $$ = new ZK();
/*general*/
Object.assign(ZK.prototype, {
    /*selector*/
    select(selector) {
        return typeof selector == 'string' ? document.querySelector(selector) : selector;
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
/*data type*/
Object.assign(ZK.prototype, {

    isNumber(val) {
        return typeof val === 'number' && isFinite(val)
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
/*public*/

/*event*/
Object.assign(ZK.prototype, {
    on(s, e, fn) {
        const selector = $$.isString(s) ? document.querySelector(s) : s;
        selector.addEventListener(e, fn);
    },

    off(s, e, fn) {
        const selector = $$.isString(s) ? document.querySelector(s) : s;
        selector.removeEventListener(e, fn);
    },
});

/*css*/

/*property*/

/*dom*/

/*cache cookie*/