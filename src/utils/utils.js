var Tools = {
    data: {
        message: 'Hello Vue!'
    },
    html2images(source, callback) {
        html2canvas(source, {
            // allowTaint:true,
            onrendered: function (canvas) {
                if (typeof callback === "function") {
                    callback(canvas);
                }
            },
            useCORS: true // 允许图片跨域截图
        });

    },
    getUrlKey(name) { // 获取url中的key 
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null;
    },
    isArray(obj) {
        return Object.prototype.toString.call(obj) == '[object Array]';
    },
    cloneObj(obj) { // 深拷贝
        var str, newobj = obj.constructor === Array ? [] : {};
        if (typeof obj !== 'object') {
            return;
        } else if (window.JSON) {
            str = JSON.stringify(obj), //系列化对象
                newobj = JSON.parse(str); //还原
        } else {
            for (var i in obj) {
                newobj[i] = typeof obj[i] === 'object' ?
                    this.cloneObj(obj[i]) : obj[i];
            }
        }
        return newobj;
    },
    // 深度合并对象 类似$.extend() 方法
    extend: (function () {
        var copyIsArray,
            toString = Object.prototype.toString,
            hasOwn = Object.prototype.hasOwnProperty,
            class2type = { '[object Boolean]': 'boolean', '[object Number]': 'number', '[object String]': 'string', '[object Function]': 'function', '[object Array]': 'array', '[object Date]': 'date', '[object RegExp]': 'regExp', '[object Object]': 'object' },
            type = function (obj) { return obj == null ? String(obj) : class2type[toString.call(obj)] || "object"; },
            isWindow = function (obj) { return obj && typeof obj === "object" && "setInterval" in obj; },
            isArray = Array.isArray || function (obj) { return type(obj) === "array"; },
            isPlainObject = function (obj) {
                if (!obj || type(obj) !== "object" || obj.nodeType || isWindow(obj)) { return false; }
                if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) { return false; }
                var key;
                for (key in obj) { }
                return key === undefined || hasOwn.call(obj, key);
            },
            extend = function (deep, target, options) {
                for (name in options) {
                    let src = target[name],
                        copy = options[name],
                        clone = null;
                    if (target === copy) { continue; }
                    if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && isArray(src) ? src : [];
                        } else { clone = src && isPlainObject(src) ? src : {}; }
                        target[name] = extend(deep, clone, copy);
                    } else if (copy !== undefined) { target[name] = copy; }
                }
                return target;
            };
        return extend;
    })(),
    compileStr(code) { //对字符串进行加密
        var c = String.fromCharCode(code.charCodeAt(0) + code.length);
        for (var i = 1; i < code.length; i++) {
            c += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1));
        }
        return escape(c);
    },
    uncompileStr(code) {
        code = unescape(code);
        var c = String.fromCharCode(code.charCodeAt(0) - code.length);
        for (var i = 1; i < code.length; i++) {
            c += String.fromCharCode(code.charCodeAt(i) - c.charCodeAt(i - 1));
        }
        return c;
    },
    //验证sql注入
    AntiSqlValid(sql) {
        var result = true;
        var re = /update|delete|create|truncate|exec|insert|drop|-/i;
        if (re.test(sql)) {
            //alert("请您不要在参数中输入特殊字符和SQL关键字！"); //注意中文乱码
            result = false;
        }
        return result;
    },
    //获取兄弟元素
    siblings(elm) {
        var a = [];
        var p = elm.parentNode.children;
        for (var i = 0, pl = p.length; i < pl; i++) {
            if (p[i] !== elm) a.push(p[i]);
        }
        return a;
    },
    //获取当前时间
    getNowFormatDate() {
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
            " " + date.getHours() + seperator2 + date.getMinutes() +
            seperator2 + date.getSeconds();
        return currentdate;
    },
    GMTToStr(time) {
        let date = new Date(time)
        let Str = date.getFullYear() + '-' +
            (date.getMonth() + 1) + '-' +
            date.getDate() + ' ' +
            date.getHours() + ':' +
            date.getMinutes() + ':' +
            date.getSeconds();
        return Str
    },
    //生成随机数
    MathRand(number) {
        var Num = "";
        if (number != null || number != "") {
            for (var i = 0; i < number; i++) {
                Num += Math.floor(Math.random() * 10);
            }

        } else {
            Num += "0";
        }
        return Num;
    },
    setCookie(name, value) {
        var Days = 7;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        document.cookie = window.location.origin + '-' + name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
    },
    GetCookie(name) {
        var cookieValue = "";
        var search = window.location.origin + '-' + escape(name) + "=";
        if (document.cookie.length > 0) {
            var offset = document.cookie.toString().indexOf(search);
            if (offset != -1) {
                offset += search.length;
                var end = document.cookie.indexOf(";", offset);
                if (end == -1)
                    end = document.cookie.length;
                cookieValue = decodeURIComponent((document.cookie.substring(offset, end)))
            }
        }
        return cookieValue;
    },
    CleanCookie(value) {
        var exp = new Date();
        exp.setTime(exp.getTime() + (-1 * 24 * 60 * 60 * 1000));
        var cval = this.GetCookie(value);
        //		var cval2 = this.GetCookie('username');
        //		var cval3 = this.GetCookie('Authorization');
        //		var cval4 = this.GetCookie('sid');
        document.cookie = window.location.origin + '-' + value + "=" + cval + "; expires=" + exp.toGMTString() + ";path=/";
        //		document.cookie = 'username' + "=" + cval2 + "; expires=" + exp.toGMTString();
        //		document.cookie = 'Authorization' + "=" + cval3 + "; expires=" + exp.toGMTString();
        //		document.cookie = 'sid' + "=" + cval4 + "; expires=" + exp.toGMTString();
    },
    ValidateByType(value, type) {
        var result = null;
        switch (type) {
            case "Int":
                var reg = new RegExp("^[0-9]*$");
                result = {
                    result: reg.test(value)
                }
                if (reg.test(value)) {
                    result.msg = "验证成功！"
                } else {
                    result.msg = "请输入整数！"
                }
                break;
            case "Double":
                var reg = /^(\-|\+)?\d+(\.\d+)?$/;
                result = {
                    result: reg.test(value)
                }
                if (value !== undefined && value !== null && value !== NaN) {
                    if (reg.test(value)) {
                        result.msg = "验证成功！"
                    } else {
                        result.msg = "请输入浮点型！"
                    }
                } else {
                    value = "";
                    result.result = true;
                    result.msg = "验证成功！";
                }

                break;
            case "String":
                result = {
                    result: true,
                    msg: "验证成功！"
                }
                break;
            case "Date":
                var reg = /^(\d{4})\-(\d{1,2})\-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
                result = {
                    result: reg.test(value)
                }
                if (reg.test(value)) {
                    result.msg = "验证成功！"
                } else {
                    result.msg = "请输入正确的日期！"
                }
                break;
            case "Boolean":
                if (value == "" || value == "true" || value == true || value == "false" || value == false) {
                    result = {
                        result: true,
                        msg: "验证成功！"
                    }
                } else {
                    result = {
                        result: false,
                        msg: "布尔类型有误"
                    }
                }
                break;
            default:
                result = null;
                break
        }
        return result;

    },
    stringIsNull(value) {
        if (value == null || value.replace(/ /g, "") == "") {
            return true;
        } else {
            return false;
        }
    },
    isEmptyObject(obj) {
        let flag = true
        for (var key in obj) {
            flag = false;
        };
        return flag
    },
    objIsEqual(value1, value2) {
        if (Object.keys(value1).length != Object.keys(value2).length) {
            return false;
        }
        let flag = true;
        for (const key1 of Object.keys(value1)) {
            if (!value2.hasOwnProperty(key1)) {
                flag = false;
                break;
            }
            if (value1[key1] != value2[key1]) {
                flag = false;
                break;
            }
        }
        return flag;
    },
    toBase64(data) {
        return this.encode64(this.strUnicode2Ansi(data))
    },    
    base64ToString(data) {
        return this.strAnsi2Unicode(this.decode64(data));
    },
    UnicodeToAnsi(chrCode) {
        let chrHex = chrCode.toString(16);
        chrHex = "000" + chrHex.toUpperCase();
        chrHex = chrHex.substr(chrHex.length - 4);
        let i = this.UnicodeChr().indexOf(chrHex);
        if (i != -1) {
            chrHex = this.AnsicodeChr().substr(i, 4);
        }
        return parseInt(chrHex, 16)
    },
    AnsiToUnicode(chrCode) {
        let chrHex = chrCode.toString(16);
        chrHex = "000" + chrHex.toUpperCase();
        chrHex = chrHex.substr(chrHex.length - 4);
        let i = this.AnsicodeChr().indexOf(chrHex);
        if (i != -1) {
            chrHex = this.UnicodeChr().substr(i, 4);
        }
        return parseInt(chrHex, 16)
    },
    strUnicode2Ansi(asContents) {
        let len1 = asContents.length;
        let temp = "";
        for (let i = 0; i < len1; i++) {
            let varasc = asContents.charCodeAt(i);
            if (varasc < 0)
                varasc += 65536;
            if (varasc > 127)
                varasc =this.UnicodeToAnsi(varasc);
            if (varasc > 255) {
                let varlow = varasc & 65280;
                varlow = varlow >> 8;
                let varhigh = varasc & 255;
                temp += String.fromCharCode(varlow) + String.fromCharCode(varhigh);
            }
            else {
                temp += String.fromCharCode(varasc);
            }
        }
        return temp;
    },
    strAnsi2Unicode(asContents) {
        let len1 = asContents.length;
        let temp = "";
        let chrcode;
        for (let i = 0; i < len1; i++) {
            let varasc = asContents.charCodeAt(i);
            if (varasc > 127) {
                chrcode = this.AnsiToUnicode((varasc << 8) + asContents.charCodeAt(++i));
            }
            else {
                chrcode = varasc;
            }
            temp += String.fromCharCode(chrcode);
        }
        return temp;
    }, 
    encode64(input) {
        let keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        let output = "";
        let chr1, chr2, chr3 = "";
        let enc1, enc2, enc3, enc4 = "";
        let i = 0;
    
        do {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
    
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
    
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
    
            output = output +
               keyStr.charAt(enc1) +
               keyStr.charAt(enc2) +
               keyStr.charAt(enc3) +
               keyStr.charAt(enc4);
            chr1 = chr2 = chr3 = "";
            enc1 = enc2 = enc3 = enc4 = "";
        } while (i < input.length);
    
        return output;
    },    
    decode64(input) {
        let keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        let output = "";
        let chr1, chr2, chr3 = "";
        let enc1, enc2, enc3, enc4 = "";
        let i = 0;
    
        if (input.length % 4 != 0) {
            return "";
        }
        let base64test = /[^A-Za-z0-9\+\/\=]/g;
        if (base64test.exec(input)) {
            return "";
        }
    
        do {
            enc1 = keyStr.indexOf(input.charAt(i++));
            enc2 = keyStr.indexOf(input.charAt(i++));
            enc3 = keyStr.indexOf(input.charAt(i++));
            enc4 = keyStr.indexOf(input.charAt(i++));
    
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
    
            output = output + String.fromCharCode(chr1);
    
            if (enc3 != 64) {
                output += String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output += String.fromCharCode(chr3);
            }
    
            chr1 = chr2 = chr3 = "";
            enc1 = enc2 = enc3 = enc4 = "";
    
        } while (i < input.length);
    
        return output;
    }


}

export default Tools;