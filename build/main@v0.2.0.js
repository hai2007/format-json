/******/
/******/  // EtcPack Bootstrap/******/  
/******/  // （ https://etcpack.github.io/api/ ）/******/  
/******/  /******/  
/******/  // 记录bundle的函数源码/******/  
/******/  window.__etcpack__bundleSrc__ = {};/******/  
/******/  /******/  
/******/  // 记录bundle的运行结果/******/  
/******/  window.__etcpack__bundleObj__ = {};/******/  
/******/  /******/  
/******/  // 获取bundle结果/******/  
/******/  window.__etcpack__getBundle = function (bundleName) {/******/  
/******/  /******/  
/******/      // 一个bundle只有第一次导入的时候需要执行/******/  
/******/      if (!(bundleName in window.__etcpack__bundleObj__)) {/******/  
/******/          window.__etcpack__bundleObj__[bundleName] = window.__etcpack__bundleSrc__[bundleName]();/******/  
/******/      }/******/  
/******/  /******/  
/******/      // 返回需要的bundle的结果/******/  
/******/      return window.__etcpack__bundleObj__[bundleName];/******/  
/******/  }/******/  
/******/  /******/  
/******/  window.__etcpack__bundleFile__ = {};/******/  
/******/  /******/  
/******/  // 获取懒加载bundle结果/******/  
/******/  window.__etcpack__getLazyBundle = function (fileName, bundleName) {/******/  
/******/      return new Promise(function (resolve) {/******/  
/******/  /******/  
/******/          // 如果加载过了/******/  
/******/          if (window.__etcpack__bundleFile__[fileName]) {/******/  
/******/              resolve(window.__etcpack__getBundle(bundleName));/******/  
/******/              return;/******/  
/******/          }/******/  
/******/  /******/  
/******/          // 获取head标签/******/  
/******/          var head = document.getElementsByTagName('head')[0];/******/  
/******/  /******/  
/******/          // 创建script/******/  
/******/          var script = document.createElement('script');/******/  
/******/  /******/  
/******/          // 设置属性/******/  
/******/          script.src = fileName;/******/  
/******/  /******/  
/******/          // 追加到页面/******/  
/******/          head.appendChild(script);/******/  
/******/  /******/  
/******/          window.__etcpack__bundleFile__[fileName] = true;/******/  
/******/  /******/  
/******/          script.addEventListener('load', function () {/******/  
/******/              resolve(window.__etcpack__getBundle(bundleName));/******/  
/******/          }, false);/******/  
/******/  /******/  
/******/  /******/  
/******/      });/******/  
/******/  }/******/  
/******/  
/************************************************************************/
/******/

/*************************** [bundle] ****************************/
// Original file:./src/main.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['0']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('1');
var platform=__etcpack__scope_args__.platform;

__etcpack__scope_args__=window.__etcpack__getBundle('3');
var normalize =__etcpack__scope_args__.default;
 // 兼容文件

__etcpack__scope_args__=window.__etcpack__getBundle('4');
 // 引入主模块

__etcpack__scope_args__=window.__etcpack__getBundle('17');
var appModule =__etcpack__scope_args__.default;
 // 先获取平台实例

platform({
  // 框架管理的区域
  el: document.getElementById('root'),
  // 全局样式
  styles: [normalize]
}) // 然后启动主模块
.bootstrap(appModule);
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/lib/nefbl.js
/*****************************************************************/
window.__etcpack__bundleSrc__['1']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('2');
 // 装饰器

__etcpack__scope_bundle__.Module = Nefbl.Module;
__etcpack__scope_bundle__.Component = Nefbl.Component;
__etcpack__scope_bundle__.Directive = Nefbl.Directive; // 核心方法

__etcpack__scope_bundle__.platform = Nefbl.platform;
__etcpack__scope_bundle__.mountComponent = Nefbl.mountComponent;
__etcpack__scope_bundle__.evalExpress = Nefbl.evalExpress;
__etcpack__scope_bundle__.getValue = Nefbl.getValue;
__etcpack__scope_bundle__.setValue = Nefbl.setValue; // 暴露的一些有用的方法

__etcpack__scope_bundle__.ref = Nefbl.ref;
__etcpack__scope_bundle__.reactive = Nefbl.reactive;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/nefbl/dist/nefbl.js
/*****************************************************************/
window.__etcpack__bundleSrc__['2']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /*!
 * nefbl - 新一代前端框架
 *
 * git+https://github.com/nefbl/nefbl.git
 *
 * author 你好2007 < https://hai2007.gitee.io/sweethome >
 *
 * version 0.2.1
 *
 * Copyright (c) 2021-2021 hai2007 走一步，再走一步。
 * Released under the MIT license
 *
 * Date:Sat Oct 09 2021 17:51:36 GMT+0800 (中国标准时间)
 */
(function () {
  'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = o[Symbol.iterator]();
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  /**
   * 判断一个值是不是Object。
   *
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是Object返回true，否则返回false
   */
  function _isObject (value) {
    var type = _typeof(value);

    return value != null && (type === 'object' || type === 'function');
  }

  var toString = Object.prototype.toString;
  /**
   * 获取一个值的类型字符串[object type]
   *
   * @param {*} value 需要返回类型的值
   * @returns {string} 返回类型字符串
   */

  function getType (value) {
    if (value == null) {
      return value === undefined ? '[object Undefined]' : '[object Null]';
    }

    return toString.call(value);
  }

  /**
   * 判断一个值是不是String。
   *
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是String返回true，否则返回false
   */

  function _isString (value) {
    var type = _typeof(value);

    return type === 'string' || type === 'object' && value != null && !Array.isArray(value) && getType(value) === '[object String]';
  }

  /**
   * 判断一个值是不是Function。
   *
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是Function返回true，否则返回false
   */

  function _isFunction (value) {
    if (!_isObject(value)) {
      return false;
    }

    var type = getType(value);
    return type === '[object Function]' || type === '[object AsyncFunction]' || type === '[object GeneratorFunction]' || type === '[object Proxy]';
  }

  /*!
   * 💡 - 值类型判断方法
   * https://github.com/hai2007/tool.js/blob/master/type.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2020-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */


  var isObject = _isObject; // 基本类型
  var isString = _isString;

  var isFunction = _isFunction;
  var isArray = function isArray(input) {
    return Array.isArray(input);
  };

  /**
   * 模块
   */

  function Module () {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var component = {},
        directive = {};
    var bootstrapComponent = null;
    var exports = {
      component: {},
      directive: {}
    };

    if (isArray(config.declarations)) {
      // 分析出指令和组件
      var _iterator = _createForOfIteratorHelper(config.declarations),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var Item = _step.value;
          var needExports = false;

          if (isArray(config.exports)) {
            // 判断是否需要暴露

            /**
             * 为什么这里暴露出去的需要从declarations中取？
             * 因为考虑到后期改造的时候，可能新增一些需要在本模块实例化等，
             * 这样的好处是保罗出去的和内置使用的保持一致，不会乱。
             */
            var _iterator2 = _createForOfIteratorHelper(config.exports),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var ExportItem = _step2.value;

                if (ExportItem === Item) {
                  needExports = true;
                  break;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          } // 组件


          if (Item.prototype.__type__ == "Component") {
            component[Item.prototype.__selector__] = Item; // bootstrap用于标记启动组件

            if (config.bootstrap === Item) {
              bootstrapComponent = Item;
            }

            if (needExports) {
              exports.component[Item.prototype.__selector__] = Item;
            }
          } // 指令
          else if (Item.prototype.__type__ == "Directive") {
              directive[Item.prototype.__selector__] = Item;

              if (needExports) {
                exports.directive[Item.prototype.__selector__] = Item;
              }
            }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    if (isArray(config.imports)) {
      // 分析导入的模块
      var _iterator3 = _createForOfIteratorHelper(config.imports),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var module = _step3.value;

          // 组件
          for (var key in module.prototype.__exports__.component) {
            component[key] = module.prototype.__exports__.component[key];
          } // 指令


          for (var _key in module.prototype.__exports__.directive) {
            directive[_key] = module.prototype.__exports__.directive[_key];
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }

    return function (target) {
      // 对象类型标记
      target.prototype.__type__ = 'Module'; // 登记所有的指令、组件（包括依赖的模块的）

      target.prototype.__component__ = component;
      target.prototype.__directive__ = directive; // 暴露出去的

      target.prototype.__exports__ = exports; // 可能还有启动组件

      target.prototype.__bootstrapComponent__ = bootstrapComponent;
    };
  }

  var $RegExp = {
    // 空白字符:http://www.w3.org/TR/css3-selectors/#whitespace
    blankReg: new RegExp("[\\x20\\t\\r\\n\\f]"),
    blanksReg: /^[\x20\t\r\n\f]{0,}$/,
    // 标志符
    identifier: /^[a-zA-Z_$][0-9a-zA-Z_$]{0,}$/
  };

  function analyseTag (attrString) {
    var attr = {},
        index = 0;
    attrString = attrString.trim();

    var getOneAttr = function getOneAttr() {
      // 属性名和属性值
      var attrName = "",
          attrValue = ""; // 先寻找属性名

      for (; index < attrString.length; index++) {
        // 寻找属性名的时候遇到空白或结尾的时候，肯定没有属性值
        if ($RegExp.blanksReg.test(attrString[index]) || index == attrString.length - 1) {
          attrName += attrString[index]; // 如果属性名是空白，就不需要记录了

          if (!$RegExp.blanksReg.test(attrName)) {
            attr[attrName.trim()] = "";
          }

          index += 1;
          break;
        } // 如果遇到等号，说明属性名寻找结束了
        else if (attrString[index] == '=') {
            // 接着寻找属性值
            index += 1; // 由于属性可能由引号包裹或直接暴露

            var preCode = null,
                preLeng = -1; // 如果是由'或者"包裹

            if (attrString.substr(index, 1) == '"' || attrString.substr(index, 1) == "'") {
              preCode = attrString.substr(index, 1);
              preLeng = 1;
              index += 1;
            } // 如果是由\'或\"包裹
            else if (attrString.substr(index, 2) == '\"' || attrString.substr(index, 2) == "\'") {
                preCode = attrString.substr(index, 2);
                preLeng = 2;
                index += 2;
              } // 开始正式寻找属性值
            // 如果没有包裹，是直接暴露在外面的
            // 我们寻找到空格或结尾即可


            if (preCode !== null) {
              for (; index < attrString.length; index++) {
                if (attrString.substr(index, preLeng) == preCode) {
                  attr[attrName.trim()] = attrValue.trim();
                  index += 2;
                  break;
                } else {
                  attrValue += attrString[index];
                }
              }
            } // 如果是包裹的
            // 我们确定寻找到对应的包裹闭合即可
            else {
                for (; index < attrString.length; index++) {
                  if ($RegExp.blanksReg.test(attrString[index])) {
                    attr[attrName.trim()] = attrValue.trim();
                    index += 1;
                    break;
                  } else {
                    attrValue += attrString[index];
                  }
                }
              }

            break;
          } else {
            attrName += attrString[index];
          }
      } // 如果还有字符串，继续解析


      if (index < attrString.length) {
        getOneAttr();
      }
    };

    getOneAttr();
    return attr;
  }

  function nextTagFun (template) {
    var i = -1,
        // 当前面对的字符
    currentChar = null; // 如果前面是获取的js或css，还有pre等开始标签，比较特殊，直接寻址闭合的

    var preIsSpecial = false,
        specialCode = "";
    var specialTag = ['script', 'pre', 'style', 'code']; // 获取下一个字符

    var next = function next() {
      currentChar = i++ < template.length - 1 ? template[i] : null;
      return currentChar;
    }; // 获取往后n个值


    var nextNValue = function nextNValue(n) {
      return template.substring(i, n + i > template.length ? template.length : n + i);
    };

    next(); // 剔除开头的空白

    while ($RegExp.blankReg.test(currentChar) && i < template.length - 1) {
      next();
    }
    /**
     * 一个Tag存在哪些类型？如下：
     * 1.<tag-name>       { tagName:'tag-name', type:'beginTag', attrs:{} }      开始标签
     * 2.</tag-name>      { tagName:'tag-name', type:'endTag'   }                结束标签
     * 3.<tag-name />     { tagName:'tag-name', type:'fullTag',  attrs:{} }      自闭合标签
     * 4.text             { tagName:'text',     type:'textcode' }                文本结点
     * 5.<!-- text -->    { tagName:'text',     type:'comment'  }                注释
     * 6.<!DOCTYPE text>  { tagName:'text',     type:'DOCTYPE'  }                声明
     *
     *
     */


    return function () {
      var tag = currentChar,
          tagObj = {};
      if (tag == null) return null;
      /**
       * 特殊标签内容获取
       * ========================================
       */
      // 如果是获取特殊标签里面的内容
      // 先不考虑里面包含'</XXX>'

      if (preIsSpecial) {
        tagObj.type = 'textcode';
        tagObj.tagName = tag;

        while (nextNValue(specialCode.length + 3) != '</' + specialCode + '>' && i < template.length) {
          tagObj.tagName += next();
        }

        tagObj.tagName = tagObj.tagName.replace(/<$/, '');
        preIsSpecial = false;
        return tagObj;
      }
      /**
       * 特殊标签获取
       * ========================================
       */
      // 针对特殊的comment


      if (nextNValue(4) == '<!--') {
        tagObj.type = 'comment';
        tagObj.tagName = tag;

        while (nextNValue(3) != '-->' && i < template.length) {
          tagObj.tagName += next();
        }

        next();
        next();
        next();
        tagObj.tagName = tagObj.tagName.replace(/^<!--/, '').replace(/-$/, '');
        return tagObj;
      } // 针对特殊的doctype


      if (nextNValue(9) == '<!DOCTYPE') {
        tagObj.type = 'DOCTYPE';
        tagObj.tagName = tag;

        while (nextNValue(1) != '>' && i < template.length) {
          tagObj.tagName += next();
        }

        next();
        tagObj.tagName = tagObj.tagName.replace(/^<!DOCTYPE/, '').replace(/>$/, '');
        return tagObj;
      }
      /**
       * 普通的
       * ========================================
       */
      // 如果是期望归结非文本结点
      else if (tag == '<') {
          // 标记是否处于属性值是字符串包裹中
          var isAttrString = false,
              attrLeftValue = null,
              attrLeftLen = null; // 如果在包裹中或者没有遇到‘>’说明没有结束

          while ((isAttrString || currentChar != '>') && i < template.length) {
            tag += next(); // 如果是包裹里面，试探是否即将遇到了结束

            if (isAttrString) {
              var next23Value = nextNValue(attrLeftLen + 1).substring(1);

              if (next23Value == attrLeftValue) {
                isAttrString = false;
              }
            } // 如果在包裹外面，试探是否即将进入包裹
            else {
                var next23Value = nextNValue(2);

                if (next23Value == '="' || next23Value == "='") {
                  attrLeftValue = next23Value.replace('=', '');
                  attrLeftLen = 1;
                  isAttrString = true;
                }

                next23Value = nextNValue(3);

                if (next23Value == '=\"' || next23Value == "=\'") {
                  attrLeftValue = next23Value.replace('=', '');
                  attrLeftLen = 2;
                  isAttrString = true;
                }
              }
          } // 针对特殊的结束标签


          if (/^<\//.test(tag)) {
            tagObj.tagName = tag.replace(/^<\//, '').replace(/>$/, '');
            tagObj.type = 'endTag';
          } else {
            if (/\/>$/.test(tag)) {
              tagObj.type = 'fullTag';
              tag = tag.replace(/\/>$/, '');
            } else {
              tagObj.type = 'beginTag';
              tag = tag.replace(/>$/, '');
            }

            tag = tag.replace(/^</, '');
            tagObj.tagName = "";
            var j = 0;

            for (; j < tag.length; j++) {
              if (tag[j] == ' ') break;
              tagObj.tagName += tag[j];
            }

            var attrString = tag.substring(j);

            if ($RegExp.blanksReg.test(attrString)) {
              tagObj.attrs = {};
            } else {
              tagObj.attrs = analyseTag(attrString);
            }
          }
        } // 如果是归结文本结点
        // 如果文本中包含<的先忽略考虑
        else {
            tagObj.type = 'textcode';
            tagObj.tagName = currentChar;

            while (nextNValue(1) != '<' && i < template.length) {
              tagObj.tagName += next();
            }

            tagObj.tagName = tagObj.tagName.replace(/<$/, '');
            i -= 1;
          } // 如果遇到开始script或者style、pre等特殊标签，标记开始获取特殊文本


      if (tagObj.type == 'beginTag') {
        if (specialTag.indexOf(tagObj.tagName.toLowerCase()) > -1) {
          preIsSpecial = true;
          specialCode = tagObj.tagName;
        }
      } // 如果遇到结束script或者style、pre等特殊标签，标记结束获取特殊文本
      else if (tagObj.type == 'endTag') {
          if (specialTag.indexOf(tagObj.tagName.toLowerCase()) > -1) {
            preIsSpecial = false;
          }
        }

      next();
      return tagObj;
    };
  }

  // 分析deep
  // 我们会在这里校对那些没有结束标签的开始标签
  // 这步结束以后，每个都是一个单独的标签
  // 也就是不用再区分开始或闭合了
  function analyseDeep (tagArray) {
    // 闭合标签
    tagArray = closeTag(tagArray);
    var deep = 0,
        tagDeepArray = [];
    tagArray.forEach(function (tag) {
      if (tag.type == 'beginTag') {
        tagDeepArray.push({
          type: "tag",
          name: tag.tagName,
          attrs: tag.attrs,
          __deep__: ++deep,
          __tagType__: "double"
        });
      } else if (tag.type == 'endTag') {
        deep -= 1;
      } else if (tag.type == 'textcode') {
        // 如果是文本
        tagDeepArray.push({
          type: "text",
          content: tag.tagName,
          __deep__: deep + 1
        });
      } else if (tag.type == 'comment') {
        // 如果是注释
        tagDeepArray.push({
          type: "comment",
          content: tag.tagName,
          __deep__: deep + 1
        });
      } else {
        // 如果是自闭合结点
        tagDeepArray.push({
          type: "tag",
          name: tag.tagName,
          attrs: tag.attrs,
          __deep__: deep + 1,
          __tagType__: "single"
        });
      }
    });
    return tagDeepArray;
  }

  var closeTag = function closeTag(tagArray) {
    var needClose = [];
    tagArray.forEach(function (tag, i) {
      if (tag.type == 'beginTag') {
        needClose.push([i, tag.tagName]);
      } else if (tag.type == 'endTag') {
        while (needClose.length > 0) {
          var needCloseTag = needClose.pop();

          if (needCloseTag[1] == tag.tagName) {
            break;
          } else {
            tagArray[needCloseTag[0]].type = 'fullTag';
          }
        }
      }
    });
    return tagArray;
  };

  /*!
   * 🔪 - 解析xhtml为json对象返回
   * https://github.com/hai2007/algorithm.js/blob/master/xhtmlToJson.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2020-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */
  // noIgnore为true表示不忽略任何标签

  function xhtmlToJson (template, noIgnore) {
    if (!isString(template)) throw new Error("Template must be a String!"); // 获取读取下一个标签对象

    var nextTag = nextTagFun(template.trim());
    var tag = nextTag(),
        DomTree = [];

    while (tag != null) {
      if (tag.type == 'textcode' && $RegExp.blanksReg.test(tag.tagName)) ; else if (tag.type == 'DOCTYPE') ; else if (tag.type == 'comment') {
        // 注释目前也默认过滤掉，除非显示声明不忽略
        if (noIgnore) {
          DomTree.push(tag);
        }
      } else {
        DomTree.push(tag);
      }

      tag = nextTag();
    } // 分析层次


    DomTree = analyseDeep(DomTree);
    /**
     * 模仿浏览器构建的一棵树,每个结点有如下属性：
     *
     * 1.parentNode index  父结点
     * 2.childNodes []     孩子结点
     * 3.preNode    index  前一个兄弟结点
     * 4.nextNode   index  后一个兄弟结点
     *
     * 5.attrs:{}          当前结点的属性
     * 6.name              节点名称
     * 7.type              节点类型（tag和text）
     * 8.content           文本结点内容
     *
     * 需要注意的是：如果一个文本结点内容只包含回车，tab，空格等空白字符，会直接被忽视
     */

    var presNode = [null],
        preDeep = 0;

    for (var i = 0; i < DomTree.length; i++) {
      // 当前结点
      var currentIndex = i,
          currentDeep = DomTree[i].__deep__;
      DomTree[i].childNodes = [];
      DomTree[i].preNode = null;
      DomTree[i].nextNode = null; // 前置三个结点

      var lastPre = presNode[presNode.length - 1];
      var last2Pre = presNode.length > 1 ? presNode[presNode.length - 2] : null; // 如果遇到的是兄弟结点

      if (currentDeep == preDeep) {
        // 修改兄弟关系
        DomTree[currentIndex].preNode = lastPre;
        DomTree[lastPre].nextNode = currentIndex; // 修改父子关系

        DomTree[currentIndex].parentNode = last2Pre;
        DomTree[last2Pre].childNodes.push(currentIndex); // 校对presNode

        presNode[presNode.length - 1] = currentIndex;
      } // 如果是遇到了孩子
      else if (currentDeep > preDeep) {
          // 修改兄弟关系
          // todo
          // 修改父子关系
          DomTree[currentIndex].parentNode = lastPre;
          if (lastPre != null) DomTree[lastPre].childNodes.push(currentIndex); // 校对presNode

          presNode.push(currentIndex);
        } // 如果是遇到了祖先
        else {
            var preTempIndex = presNode[presNode.length - 1 - (preDeep - currentDeep)];
            var preTemp2Index = presNode[presNode.length - 2 - (preDeep - currentDeep)]; // 修改兄弟关系

            DomTree[currentIndex].preNode = preTempIndex;
            if (preTempIndex != null) DomTree[preTempIndex].nextNode = currentIndex; // 修改父子关系

            DomTree[currentIndex].parentNode = preTemp2Index;
            if (preTemp2Index != null) DomTree[preTemp2Index].childNodes.push(currentIndex); // 校对presNode

            for (var j = 0; j < preDeep - currentDeep; j++) {
              presNode.pop();
            }

            presNode[presNode.length - 1] = currentIndex;
          }

      preDeep = currentDeep;
    }

    return DomTree;
  }

  // 在浏览器中利用style标签插入样式
  function addStylesClient(styles, uniqueId) {
    var styleElement = document.createElement('style');
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = styles.join(''); // 如果需要包裹

    if (uniqueId) {
      style = style.replace(/( {0,}){/g, "{");
      style = style.replace(/( {0,}),/g, ",");
      var temp = ""; // 分别表示：是否处于注释中、是否处于内容中、是否由于特殊情况在遇到{前完成了hash

      var isSpecial = false,
          isContent = false,
          hadComplete = false;

      for (var i = 0; i < style.length; i++) {
        if (style[i] == ':' && !isSpecial && !hadComplete && !isContent) {
          hadComplete = true;
          temp += "[" + uniqueId + "]";
        } else if (style[i] == '{' && !isSpecial) {
          isContent = true;
          if (!hadComplete) temp += "[" + uniqueId + "]";
        } else if (style[i] == '}' && !isSpecial) {
          isContent = false;
          hadComplete = false;
        } else if (style[i] == '/' && style[i + 1] == '*') {
          isSpecial = true;
        } else if (style[i] == '*' && style[i + 1] == '/') {
          isSpecial = false;
        } else if (style[i] == ',' && !isSpecial && !isContent) {
          if (!hadComplete) temp += "[" + uniqueId + "]";
          hadComplete = false;
        }

        temp += style[i];
      }

      style = temp;
    }

    styleElement.innerHTML = style;
    styleElement.setAttribute('type', 'text/css');
    head.appendChild(styleElement);
  }

  /**
   * 组件
   */

  var index = 0;
  function Component (config) {
    var uniqueId = null; // 加载css

    if (isArray(config.styles)) {
      uniqueId = "nefbl-scoped-" + index++;
      addStylesClient(config.styles, uniqueId);
    }

    var template = xhtmlToJson("<nefbl-component>" + config.template + "</nefbl-component>");
    return function (target) {
      // 对象类型标记
      target.prototype.__type__ = 'Component'; // 登记选择器

      target.prototype.__selector__ = config.selector; // 登记模板对象

      target.prototype.__template__ = template; // 记录唯一标识

      target.prototype.__uniqueId__ = uniqueId;
    };
  }

  /**
   * 指令
   */
  function Directive (config) {
    return function (target) {
      // 对象类型标记
      target.prototype.__type__ = 'Directive'; // 登记选择器

      target.prototype.__selector__ = config.selector;
    };
  }

  // 判断是否是合法的方法或数据key
  function isValidKey (key) {
    // 判断是不是_或者$开头的
    // 这两个内部预留了
    if (/^[_$]/.test(key)) {
      throw new Error('The beginning of _ or $ is not allowed：' + key);
    }
  }

  function watcher (component, data, key, doback) {
    // 记录值
    var value = data.value;
    var getter_setter = {
      get: function get() {
        return value;
      },
      set: function set(newValue) {
        value = newValue; // 回调通知组件更新

        doback();
      }
    }; // setter和getter添加监听

    Object.defineProperty(data, 'value', getter_setter); // 组件实例新增属性

    component[key] = value;
    Object.defineProperty(component, key, getter_setter);
  }

  function proxy (component, data, key, doback) {
    var proxy = new Proxy(data.value, {
      get: function get(_target, _key) {
        return _target[_key];
      },
      set: function set(_target, _key, _value) {
        var flag = Reflect.set(_target, _key, _value); // 回调通知组件更新

        doback();
        return flag;
      }
    });
    data.value = proxy;
    component[key] = proxy;
  }

  // 后续我们的任务就是对这个数组进行归约即可(归约交付给别的地方，这里不继续处理)

  /**
   * 例如：
   *  target={
   *      a:{
   *              value:9
   *         },
   *      b:7,
   *      flag:'no'
   *  }
   *  express= "a.value>10 && b< 11 ||flag=='yes'"
   * 变成数组以后应该是：
   *
   * // 比如最后的yes@value表示这是一个最终的值，不需要再计算了
   * ['a','[@value','value@value',']@value','>@value','10@value','&&@value','b','<@value','||@value','flag','==@value','yes@value']
   *
   * 然后，进一步解析得到：
   * [{value:9},'[','value',']','>',10,'&&',7,'<','||','no','==','yes']
   *
   * (当然，我们实际运算的时候，可能和这里不完全一致，这里只是为了方便解释我们的主体思想)
   *
   * 然后我们返回上面的结果即可！
   */
  // 除了上述原因，统一前置处理还有一个好处就是：
  // 可以提前对部分语法错误进行报错，方便定位调试
  // 因为后续的操作越来越复杂，错误越提前越容易定位

  var specialCode1 = ['+', '-', '*', '/', '%', '&', '|', '!', '?', ':', '[', ']', '(', ")", '>', '<', '='];
  var specialCode2 = ['+', '-', '*', '/', '%', '&', '|', '!', '?', ':', '>', '<', '=', '<=', '>=', '==', '===', '!=', '!=='];
  function analyseExpress (target, express, scope) {
    // 剔除开头和结尾的空白
    express = express.trim();
    var i = -1,
        // 当前面对的字符
    currentChar = null; // 获取下一个字符

    var next = function next() {
      currentChar = i++ < express.length - 1 ? express[i] : null;
      return currentChar;
    }; // 获取往后n个值


    var nextNValue = function nextNValue(n) {
      return express.substring(i, n + i > express.length ? express.length : n + i);
    };

    next();
    var expressArray = [];

    while (true) {
      if (i >= express.length) break; // 先匹配普通的符号
      // + - * / %
      // && || !
      // ? :
      // [ ] ( )
      // > < >= <= == === != !==
      // 如果是&或者|比较特殊

      if (specialCode1.indexOf(currentChar) > -1) {
        // 对于特殊的符号
        if (['&', '|', '='].indexOf(currentChar) > -1) {
          if (['==='].indexOf(nextNValue(3)) > -1) {
            expressArray.push(nextNValue(3));
            i += 2;
            next();
          } else if (['&&', '||', '=='].indexOf(nextNValue(2)) > -1) {
            expressArray.push(nextNValue(2));
            i += 1;
            next();
          } else {
            throw new Error("Illegal expression : " + express + "\nstep='analyseExpress',index=" + i);
          }
        } else {
          // 拦截部分比较特殊的
          if (['!=='].indexOf(nextNValue(3)) > -1) {
            expressArray.push(nextNValue(3));
            i += 2;
            next();
          } else if (['>=', '<=', '!='].indexOf(nextNValue(2)) > -1) {
            expressArray.push(nextNValue(2));
            i += 1;
            next();
          } // 普通的单一的
          else {
              expressArray.push(currentChar);
              next();
            }
        }
      } // 如果是字符串
      else if (['"', "'"].indexOf(currentChar) > -1) {
          var temp = "",
              beginTag = currentChar;
          next(); // 如果没有遇到结束标签
          // 目前没有考虑 '\'' 这种带转义字符的情况，当然，'\"'这种是支持的
          // 后续如果希望支持，优化这里即可

          while (currentChar != beginTag) {
            if (i >= express.length) {
              // 如果还没有遇到结束标识就结束了，属于字符串未闭合错误
              throw new Error("String unclosed error : " + express + "\nstep='analyseExpress',index=" + i);
            } // 继续拼接


            temp += currentChar;
            next();
          }

          expressArray.push(temp + "@string");
          next();
        } // 如果是数字
        else if (/\d/.test(currentChar)) {
            var dotFlag = 'no'; // no表示还没有匹配到.，如果已经匹配到了，标识为yes，如果匹配到了.，可是后面还没有遇到数组，标识为error

            var temp = currentChar;
            next();

            while (i < express.length) {
              if (/\d/.test(currentChar)) {
                temp += currentChar;
                if (dotFlag == 'error') dotFlag = 'yes';
              } else if ('.' == currentChar && dotFlag == 'no') {
                temp += currentChar;
                dotFlag = 'error';
              } else {
                break;
              }

              next();
            } // 如果小数点后面没有数字，辅助添加一个0


            if (dotFlag == 'error') temp += "0";
            expressArray.push(+temp);
          } // 如果是特殊符号
          // 也就是类似null、undefined等
          else if (['null', 'true'].indexOf(nextNValue(4)) > -1) {
              expressArray.push({
                "null": null,
                "true": true
              }[nextNValue(4)]);
              i += 3;
              next();
            } else if (['false'].indexOf(nextNValue(5)) > -1) {
              expressArray.push({
                'false': false
              }[nextNValue(5)]);
              i += 4;
              next();
            } else if (['undefined'].indexOf(nextNValue(9)) > -1) {
              expressArray.push({
                "undefined": undefined
              }[nextNValue(9)]);
              i += 8;
              next();
            } // 如果是空格
            else if ($RegExp.blankReg.test(currentChar)) {
                do {
                  next();
                } while ($RegExp.blankReg.test(currentChar) && i < express.length);
              } else {
                var dot = false; // 对于开头有.进行特殊捕获，因为有.意味着这个值应该可以变成['key']的形式
                // 这是为了和[key]进行区分，例如：
                // .key 等价于 ['key'] 翻译成这里就是 ['[','key',']']
                // 可是[key]就不一样了，翻译成这里以后应该是 ['[','这个值取决当前对象和scope',']']
                // 如果这里不进行特殊处理，后续区分需要额外的标记，浪费资源

                if (currentChar == '.') {
                  dot = true;
                  next();
                } // 如果是标志符

                /**
                 *  命名一个标识符时需要遵守如下的规则：
                 *  1.标识符中可以含有字母 、数字 、下划线_ 、$符号
                 *  2.标识符不能以数字开头
                 */
                // 当然，是不是关键字等我们就不校对了，因为没有太大的实际意义
                // 也就是类似flag等局部变量


                if ($RegExp.identifier.test(currentChar)) {
                  var len = 1;

                  while (i + len <= express.length && $RegExp.identifier.test(nextNValue(len))) {
                    len += 1;
                  }

                  if (dot) {
                    expressArray.push('[');
                    expressArray.push(nextNValue(len - 1) + '@string');
                    expressArray.push(']');
                  } else {
                    var tempKey = nextNValue(len - 1); // 如果不是有前置.，那就是需要求解了

                    var tempValue = tempKey in scope ? scope[tempKey] : target[tempKey];
                    expressArray.push(isString(tempValue) ? tempValue + "@string" : tempValue);
                  }

                  i += len - 2;
                  next();
                } // 都不是，那就是错误
                else {
                    throw new Error("Illegal express : " + express + "\nstep='analyseExpress',index=" + i);
                  }
              }
    } // 实际情况是，对于-1等特殊数字，可能存在误把1前面的-号作为运算符的错误，这里拦截校对一下


    var length = 0;

    for (var j = 0; j < expressArray.length; j++) {
      if (["+", "-"].indexOf(expressArray[j]) > -1 && ( // 如果前面的也是运算符或开头，这个应该就不应该是运算符了
      j == 0 || specialCode2.indexOf(expressArray[length - 1]) > -1)) {
        expressArray[length++] = +(expressArray[j] + expressArray[j + 1]);
        j += 1;
      } else {
        expressArray[length++] = expressArray[j];
      }
    }

    expressArray.length = length;
    return expressArray;
  }

  var getExpressValue = function getExpressValue(value) {
    // 这里是计算的内部，不需要考虑那么复杂的类型
    if (typeof value == 'string') return value.replace(/@string$/, '');
    return value;
  };

  var setExpressValue = function setExpressValue(value) {
    if (typeof value == 'string') return value + "@string";
    return value;
  };

  function evalValue (expressArray) {
    // 采用按照优先级顺序归约的思想进行
    // 需要明白，这里不会出现括号
    // （小括号或者中括号，当然，也不会有函数，这里只会有最简单的表达式）
    // 这也是我们可以如此归约的前提
    // + - * / %
    // && || !
    // ? :
    // > < >= <= == === != !==
    // !
    // 因为合并以后数组长度一定越来越短，我们直接复用以前的数组即可
    var length = 0,
        i = 0;

    for (; i < expressArray.length; i++) {
      if (expressArray[i] == '!') {
        // 由于是逻辑运算符，如果是字符串，最后的@string是否去掉已经没有意义了
        expressArray[length] = !expressArray[++i];
      } else expressArray[length] = expressArray[i];

      length += 1;
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // * / %

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '*') {
        // 假设不知道一定正确，主要是为了节约效率，是否提供错误提示，再议
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) * getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '/') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) / getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '%') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) % getExpressValue(expressArray[++i]);
      } else {
        // 上面不会导致数组增长
        expressArray[length++] = expressArray[i];
      }
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // + -

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '+') {
        expressArray[length - 1] = setExpressValue(getExpressValue(expressArray[length - 1]) + getExpressValue(expressArray[++i]));
      } else if (expressArray[i] == '-') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) - getExpressValue(expressArray[++i]);
      } else expressArray[length++] = expressArray[i];
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // > < >= <=

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '>') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) > getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '<') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) < getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '<=') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) <= getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '>=') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) >= getExpressValue(expressArray[++i]);
      } else expressArray[length++] = expressArray[i];
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // == === != !==

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '==') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) == getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '===') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) === getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '!=') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) != getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '!==') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) !== getExpressValue(expressArray[++i]);
      } else expressArray[length++] = expressArray[i];
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // && ||

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '&&') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) && getExpressValue(expressArray[1 + i]);
        i += 1;
      } else if (expressArray[i] == '||') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) || getExpressValue(expressArray[1 + i]);
        i += 1;
      } else expressArray[length++] = expressArray[i];
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // ?:

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '?') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) ? getExpressValue(expressArray[i + 1]) : getExpressValue(expressArray[i + 3]);
        i += 3;
      } else expressArray[length++] = expressArray[i];
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length;
    throw new Error('Unrecognized expression : [' + expressArray.toString() + "]");
  }

  function calcValue (target, expressArray, scope) {
    var value = expressArray[0] in scope ? scope[expressArray[0]] : target[expressArray[0]];

    for (var i = 1; i < expressArray.length; i++) {
      try {
        value = value[expressArray[i]];
      } catch (e) {
        console.error({
          target: target,
          scope: scope,
          expressArray: expressArray,
          index: i
        });
        throw e;
      }
    }

    return value;
  }

  var doit1 = function doit1(target, expressArray, scope) {
    // 先消小括号
    // 其实也就是归约小括号
    if (expressArray.indexOf('(') > -1) {
      var newExpressArray = [],
          temp = [],
          // 0表示还没有遇到左边的小括号
      // 1表示遇到了一个，以此类推，遇到一个右边的会减1
      flag = 0;

      for (var i = 0; i < expressArray.length; i++) {
        if (expressArray[i] == '(') {
          if (flag > 0) {
            // 说明这个应该是需要计算的括号里面的括号
            temp.push('(');
          }

          flag += 1;
        } else if (expressArray[i] == ')') {
          if (flag > 1) temp.push(')');
          flag -= 1; // 为0说明主的小括号归约结束了

          if (flag == 0) {
            var _value = evalValue(doit1(target, temp));

            newExpressArray.push(isString(_value) ? _value + '@string' : _value);
            temp = [];
          }
        } else {
          if (flag > 0) temp.push(expressArray[i]);else newExpressArray.push(expressArray[i]);
        }
      }

      expressArray = newExpressArray;
    } // 去掉小括号以后，调用中括号去掉方法


    return doit2(expressArray);
  }; // 中括号嵌套去掉方法


  var doit2 = function doit2(expressArray) {
    var hadMore = true;

    while (hadMore) {
      hadMore = false;
      var newExpressArray = [],
          temp = [],
          // 如果为true表示当前在试探寻找归约最小单元的结束
      flag = false; // 开始寻找里面需要归约的最小单元（也就是可以立刻获取值的）

      for (var i = 0; i < expressArray.length; i++) {
        // 这说明这是一个需要归约的
        // 不过不一定是最小单元
        // 遇到了，先记下了
        if (expressArray[i] == '[' && i != 0 && expressArray[i - 1] != ']') {
          if (flag) {
            // 如果之前已经遇到了，说明之前保存的是错误的，需要同步会主数组
            newExpressArray.push('[');

            for (var j = 0; j < temp.length; j++) {
              newExpressArray.push(temp[j]);
            }
          } else {
            // 如果之前没有遇到，修改标记即可
            flag = true;
          }

          temp = [];
        } // 如果遇到了结束，这说明当前暂存的就是最小归结单元
        // 计算后放回主数组
        else if (expressArray[i] == ']' && flag) {
            hadMore = true; // 计算

            var tempValue = evalValue(temp);
            var _value = newExpressArray[newExpressArray.length - 1][tempValue];
            newExpressArray[newExpressArray.length - 1] = isString(_value) ? _value + "@string" : _value; // 状态恢复

            flag = false;
          } else {
            if (flag) {
              temp.push(expressArray[i]);
            } else {
              newExpressArray.push(expressArray[i]);
            }
          }
      }

      expressArray = newExpressArray;
    }

    return expressArray;
  }; // 路径
  // ["[",express,"]","[",express"]","[",express,"]"]
  // 变成
  // [express][express][express]


  var doit3 = function doit3(expressArray) {
    var newExpressArray = [],
        temp = [];

    for (var i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '[') {
        temp = [];
      } else if (expressArray[i] == ']') {
        newExpressArray.push(evalValue(temp));
      } else {
        temp.push(expressArray[i]);
      }
    }

    return newExpressArray;
  }; // 获取路径数组(核心是归约的思想)


  function toPath(target, expressArray, scope) {
    var newExpressArray = doit1(target, expressArray); // 其实无法就三类
    // 第一类：[express][express][express]express
    // 第二类：express
    // 第三类：[express][express][express]

    var path; // 第二类

    if (newExpressArray[0] != '[') {
      path = [evalValue(newExpressArray)];
    } // 第三类
    else if (newExpressArray[newExpressArray.length - 1] == ']') {
        path = doit3(newExpressArray);
      } // 第一类
      else {
          var lastIndex = newExpressArray.lastIndexOf(']');
          var tempPath = doit3(newExpressArray.slice(0, lastIndex + 1));
          var tempArray = newExpressArray.slice(lastIndex + 1);
          tempArray.unshift(calcValue(target, tempPath, scope));
          path = [evalValue(tempArray)];
        }

    return path;
  }

  /*!
   * 🔪 - 设置或获取指定对象上字符串表达式对应的值
   * https://github.com/hai2007/algorithm.js/blob/master/value.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2020-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */
  /**
   * express举例子：
   *
   * [00]  ["a"].b[c]
   * [01]  a
   * [02]  [0]['value-index'][index+1]
   *
   * 如果是getValue,express还可以包含运算符：
   *  + - * / %  数值运算符
   *  && || !    逻辑运算符
   *
   * [03]  flag+10
   * [04]  a.b[index+1]-10
   * [05]  (a+b)/10-c[d]
   * [06]  [((a+b)-c)*f]+d
   *
   * [07]  !flag
   * [08]  (a>0 && b<=1) || !flag
   * [09]  '(flag)' == "("+temp+")"
   * [10]  a>10?"flag1":"flag2"
   *
   */
  // 解析一段表达式

  var evalExpress = function evalExpress(target, express, scope) {
    if (arguments.length < 3) scope = {};
    var expressArray = analyseExpress(target, express, scope);
    var path = toPath(target, expressArray, scope); // 如果不是表达式

    if (path.length > 1) throw new Error("Illegal expression : " + express + "\nstep='evalExpress',path=" + path + ",expressArray=" + expressArray);
    return path[0];
  }; // 获取

  var getValue = function getValue(target, express, scope) {
    if (arguments.length < 3) scope = {};
    var expressArray = analyseExpress(target, express, scope);
    var path = toPath(target, expressArray, scope);
    return calcValue(target, path, scope);
  }; // 设置

  var setValue = function setValue(target, express, value, scope) {
    if (arguments.length < 3) scope = {};
    var expressArray = analyseExpress(target, express, scope);
    var path = toPath(target, expressArray, scope);
    var _target = target;

    for (var i = 0; i < path.length - 1; i++) {
      // 如果需要补充
      if (!(path[i] in _target)) _target[path[i]] = isArray(_target) ? [] : {}; // 拼接下一个

      _target = _target[path[i]];
    }

    _target[path[path.length - 1]] = value;
    return target;
  };

  function mountComponent(target, Component, module) {
    var component = new Component();

    var observeFunction = function observeFunction() {
      if (isFunction(component.$beforeUpdate)) component.$beforeUpdate(); // 触发指令

      var _iterator = _createForOfIteratorHelper(component.__directives),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var directiveInstance = _step.value;

          if (isFunction(directiveInstance.instance.$update)) {
            directiveInstance.instance.$update(directiveInstance.el, {
              type: directiveInstance.type,
              exp: directiveInstance.exp,
              value: evalExpress(component, directiveInstance.exp),
              target: component
            });
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (isFunction(component.$updated)) component.$updated();
    };

    if (isFunction(component.$setup)) {
      // 获取当前组件需要双向绑定的数据、方法等
      var instance = component.$setup();

      for (var key in instance) {
        isValidKey(key); // ref

        if (instance[key].type == 'ref') {
          watcher(component, instance[key], key, observeFunction);
        } // reactive
        else if (instance[key].type == 'reactive') {
            proxy(component, instance[key], key, observeFunction);
          } // 方法
          else if (isFunction(instance[key])) {
              component[key] = instance[key];
            }
      }
    } // 记录子组件


    component.__children = []; // 记录指令

    component.__directives = [];
    var templateObj = component.__template__;

    (function createElement(index, pEl) {
      var vnode = templateObj[index],
          el = null;

      if (vnode.type == 'tag') {
        // 如果是组件
        if (vnode.name in module.__component__) {
          // 编译子组件并登记
          component.__children.push(mountComponent(pEl, module.__component__[vnode.name], module));
        } // 否则就是普通的标签
        else {
            el = document.createElement(vnode.name);

            for (var attrKey in vnode.attrs) {
              var attrKeys = (attrKey + ":").split(':'); // 指令

              if (attrKeys[0] in module.__directive__) {
                (function () {
                  var directiveInstance = new module.__directive__[attrKeys[0]]();
                  var type = attrKeys[1];
                  var exp = vnode.attrs[attrKey];

                  if (isFunction(directiveInstance.$inserted)) {
                    setTimeout(function () {
                      directiveInstance.$inserted(el, {
                        type: type,
                        exp: exp,
                        value: evalExpress(component, exp),
                        target: component
                      });
                    });
                  }

                  component.__directives.push({
                    instance: directiveInstance,
                    el: el,
                    type: type,
                    exp: exp
                  });
                })();
              } // 普通属性
              else {
                  el.setAttribute(attrKey, vnode.attrs[attrKey]);
                }
            }

            if (component.__uniqueId__ != null) {
              // 配置唯一标识
              el.setAttribute(component.__uniqueId__, "");
            } // 追加孩子


            var _iterator2 = _createForOfIteratorHelper(vnode.childNodes),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var subVnode = _step2.value;
                createElement(subVnode, el);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
      } else if (vnode.type == 'text') {
        el = document.createTextNode("");
        el.textContent = vnode.content.replace(/↵/g, '\n');
      }

      if (el != null) {
        // 追加到父亲结点
        pEl.appendChild(el);
      }
    })(0, target);

    if (isFunction(component.$mounted)) component.$mounted();
    return component;
  }

  function platform (options) {
    // 样式生效
    addStylesClient(options.styles || []); // 记录根组件

    var rootComponent = null;
    return {
      bootstrap: function bootstrap(Module) {
        var module = new Module(); // 在所有的指令和组件中登记所在模块

        var allList = _objectSpread2(_objectSpread2({}, module.__component__), module.__directive__);

        for (var key in allList) {
          allList[key].prototype._module = module;
        } // 通过启动组件，启动


        rootComponent = mountComponent(options.el, module.__bootstrapComponent__, module);
        return {
          // 根组件
          rootComponent: rootComponent,
          // 当前模块对象
          module: module
        };
      }
    };
  }

  function ref (data) {
    // 如果是定义的数据，不好监听，嵌套一层壳
    return {
      value: data,
      type: 'ref'
    };
  }

  function reactive (data) {
    // 如果是对象
    if (isObject(data)) {
      return {
        value: data,
        type: 'reactive'
      };
    } // 否则，还是用ref
    else {
        return ref(data);
      }
  }

  /**
   * 整理好对象并对外暴露调用接口
   */

  var Nefbl = {
    // 装饰器
    Module: Module,
    Component: Component,
    Directive: Directive,
    // 核心方法
    platform: platform,
    mountComponent: mountComponent,
    evalExpress: evalExpress,
    getValue: getValue,
    setValue: setValue,
    // 暴露的一些有用的方法
    ref: ref,
    reactive: reactive
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    module.exports = Nefbl;
  } else {
    window.Nefbl = Nefbl;
  }

}());

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/style/normalize.css
/*****************************************************************/
window.__etcpack__bundleSrc__['3']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "/*!\n * 👁️ - 统一不同浏览器的基础样式\n * https://github.com/hai2007/style.css/blob/master/normalize.css\n *\n * author hai2007 < https://hai2007.gitee.io/sweethome >\n *\n * Copyright (c) 2020-present hai2007 走一步，再走一步。\n * Released under the MIT license\n */\n\nhtml {\n    /* 防止iPhone在坚屏转向横屏时放大文字 */\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;\n    /* 统一行高 */\n    line-height: 1.15;\n}\n\nbutton,\ninput {\n    /* 兼容部分手机下border不显示问题 */\n    border: 1px solid #b2b2bd;\n}\n\narticle,\nfooter,\nheader,\nnav,\nsection {\n    /* 修正旧浏览器未定义的块级元素 */\n    display: block;\n}\n\ncanvas,\nsvg {\n    /* 修正旧浏览器未定义的行内块元素 */\n    display: inline-block;\n}\n\n* {\n    /* 统一不同浏览器盒子尺寸计算方法 */\n    box-sizing: border-box;\n}\n\n::-ms-clear,\n::-ms-reveal {\n    /* 去掉IE浏览器输入框叉叉和眼睛 */\n    display: none;\n}\n\nimg {\n    /* 针对火狐浏览器在img标签没有src时候的差异修复 */\n    display: inline-block;\n}\n\nhtml {\n    /* 设置默认字体为统一的安全字体 */\n    font-family: sans-serif;\n}\n\na {\n    /* 默认去掉下划线 */\n    text-decoration: none;\n}\n\nli {\n    /* 去掉前置索引 */\n    list-style-type: none;\n}\n\nul,\nol,\nli,\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    /* 去掉不喜欢的间距 */\n    -webkit-margin-before: 0;\n    -webkit-margin-after: 0;\n    -webkit-padding-start: 0;\n    /* 去掉不喜欢的间距，针对火狐浏览器等 */\n    margin-block-end: 0;\n    margin-block-start: 0;\n    padding-inline-start: 0;\n    /* 修改IE和其它浏览器不一致问题 */\n    padding: 0;\n    margin: 0;\n}\n\nbody {\n    /* 去掉默认的8px */\n    margin: 0;\n}\n\ntable {\n    /* 设置默认表格边框合并为一个单一的边框 */\n    border-collapse: collapse;\n}\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/polyfill/Promise.js
/*****************************************************************/
window.__etcpack__bundleSrc__['4']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /*!
 * ✔️ - Promise
 * https://github.com/hai2007/polyfill.js/blob/master/Promise.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

__etcpack__scope_args__=window.__etcpack__getBundle('5');
var globalNAMESPACE =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('6');
var isFunction=__etcpack__scope_args__.isFunction;
var isObject=__etcpack__scope_args__.isObject;
var isArray=__etcpack__scope_args__.isArray;

__etcpack__scope_args__=window.__etcpack__getBundle('16');
var doResolve=__etcpack__scope_args__.doResolve;
var changeState=__etcpack__scope_args__.changeState;
var triggerEvent=__etcpack__scope_args__.triggerEvent;


function Promise(doback) {

    if (!(this instanceof Promise)) {

        // 所有的报错方式和内容我们都尽力和原生的保持一致，下同
        throw new TypeError('undefined is not a promise');
    }

    if (!(isFunction(doback))) {
        throw new TypeError('Promise resolver ' + doback + ' is not a function');
    }

    /**
     * 参数初始化
     */

    // 当前的值
    this.__value = undefined;

    // 记录着由于then，catch或finally登记的方法
    // Array<onFulfilled|undefined, onRejected|undefined, callback|undefined>
    this.__hocks = [];

    // 状态
    this.__state = 'pending';

    /**
     * 准备完毕以后，开始处理
     */
    doResolve(doback, this);
}

// 添加辅助方法
Promise.prototype.$$changeState = changeState;
Promise.prototype.$$triggerEvent = triggerEvent;

/**
 * 原型上的方法
 */

// 添加解决(fulfillment)和拒绝(rejection)回调到当前 promise,
// 返回一个新的 promise,
// 将以回调的返回值来resolve。
Promise.prototype.then = function (onFulfilled, onRejected) {

    this.__hocks.push([onFulfilled, onRejected, undefined]);

    if (this.__state != 'pending') { this.$$triggerEvent(); }

    return this;

};

// 添加一个拒绝(rejection) 回调到当前 promise, 返回一个新的promise。
// 当这个回调函数被调用，
// 新 promise 将以它的返回值来resolve，
// 否则如果当前promise 进入fulfilled状态，
// 则以当前promise的完成结果作为新promise的完成结果。
Promise.prototype.catch = function (onRejected) {

    this.__hocks.push([undefined, onRejected, undefined]);

    if (this.__state != 'pending') { this.$$triggerEvent(); }

    return this;

};

// 添加一个事件处理回调于当前promise对象，
// 并且在原promise对象解析完毕后，
// 返回一个新的promise对象。
// 回调会在当前promise运行完毕后被调用，
// 无论当前promise的状态是完成(fulfilled)还是失败(rejected)。
Promise.prototype.finally = function (callback) {

    this.__hocks.push([undefined, undefined, callback]);

    if (this.__state != 'pending') { this.$$triggerEvent(); }

    return this;


};

/**
 * 静态方法
 */

// 返回一个状态由给定value决定的Promise对象。
// 如果该值是thenable(即，带有then方法的对象)，
// 返回的Promise对象的最终状态由then方法执行决定；
// 否则的话(该value为空，基本类型或者不带then方法的对象),
// 返回的Promise对象状态为fulfilled，
// 并且将该value传递给对应的then方法。
// 通常而言，如果您不知道一个值是否是Promise对象，使用Promise.resolve(value) 来返回一个Promise对象,
// 这样就能将该value以Promise对象形式使用。
Promise.resolve = function (value) {

    if (isObject(value) && value.constructor === Promise) {
        return value;
    }

    return new Promise(function (resolve) {
        resolve(value);
    });

};

// 返回一个状态为失败的Promise对象，
// 并将给定的失败信息传递给对应的处理方法。
Promise.reject = function (reason) {

    return new Promise(function (resolve, reject) {
        reject(reason);
    });

};

// 这个方法返回一个新的promise对象，
// 该promise对象在iterable参数对象里所有的promise对象都成功的时候才会触发成功，
// 一旦有任何一个iterable里面的promise对象失败则立即触发该promise对象的失败。
// 这个新的promise对象在触发成功状态以后，
// 会把一个包含iterable里所有promise返回值的数组作为成功回调的返回值，
// 顺序跟iterable的顺序保持一致；
// 如果这个新的promise对象触发了失败状态，
// 它会把iterable里第一个触发失败的promise对象的错误信息作为它的失败错误信息。
// Promise.all方法常被用于处理多个promise对象的状态集合.
Promise.all = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        var resultData = Array.prototype.slice.call(iterable), num = 0;

        if (resultData.length == 0) resolve([]);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                num += 1;

                if (item.__state == 'rejected') {

                    // 如果遇到第一个失败的，拒绝即可
                    reject(item.__value);
                } else {

                    resultData[index] = item.__value;

                    if (num == resultData.length) {
                        resolve(resultData);
                    }
                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < resultData.length; i++) {
            doHelp(i, resultData[i]);
        }

    });

};

// 等到所有promises都已敲定（settled）（每个promise都已兑现（fulfilled）或已拒绝（rejected））。
// 返回一个promise，该promise在所有promise完成后完成。并带有一个对象数组，每个对象对应每个promise的结果。
Promise.allSettled = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        var resultData = Array.prototype.slice.call(iterable), num = 0;

        if (resultData.length == 0) resolve([]);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                num += 1;

                resultData[index] = {
                    status: item.__state
                };

                if (item.__state == 'fulfilled') {
                    resultData[index].value = item.__value;
                } else {
                    resultData[index].reason = item.__value;
                }

                if (num == resultData.length) {
                    resolve(resultData);
                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < resultData.length; i++) {
            doHelp(i, resultData[i]);
        }

    });

};
// 收一个Promise对象的集合，
// 当其中的一个 promise 成功，
// 就返回那个成功的promise的值。
Promise.any = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        var num = 0;

        if (iterable.length == 0) resolve(undefined);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                num += 1;

                if (item.__state == 'rejected') {

                    if (num == iterable.length) {

                        // 为了兼容性，我们放弃AggregateError
                        return reject(new Error('All promises were rejected'));
                    }

                } else {

                    // 遇到第一个成功的，标记解决即可
                    resolve(item.__value);

                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < iterable.length; i++) {
            doHelp(i, iterable[i]);
        }

    });
};

// 当iterable参数里的任意一个子promise被成功或失败后，
// 父promise马上也会用子promise的成功返回值或失败详情作为参数调用父promise绑定的相应句柄，
// 并返回该promise对象。
Promise.race = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        if (iterable.length == 0) resolve(undefined);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                if (item.__state == 'rejected') {
                    reject(item.__value);
                } else {
                    resolve(item.__value);
                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < iterable.length; i++) {
            doHelp(i, iterable[i]);
        }

    });
};

// 如果Promise不存在
if (!('Promise' in globalNAMESPACE)) {
    globalNAMESPACE['Promise'] = Promise;
}

// 由于不同浏览器对一些具体的方法兼容不一样
// （比如一些浏览器支持Promise，可是不支持某个方法，需要对该方法进行兼容）
// 需要进一步嗅探
// 推迟支持

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/polyfill/.inner/globalNAMESPACE.js
/*****************************************************************/
window.__etcpack__bundleSrc__['5']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var globalNAMESPACE = (function () {

    // 浏览器环境
    if (typeof window !== 'undefined') return window;

    // nodejs环境
    if (typeof global !== 'undefined') return global;

    throw new Error('The current environment is not known!');

})();

// 获取当前环境的全局变量
__etcpack__scope_bundle__.default= globalNAMESPACE;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/type.js
/*****************************************************************/
window.__etcpack__bundleSrc__['6']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('7');
var _isObject =__etcpack__scope_args__.default;


__etcpack__scope_args__=window.__etcpack__getBundle('8');
var _isBoolean =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('10');
var _isNumber =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('11');
var _isString =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('12');
var _isSymbol =__etcpack__scope_args__.default;


__etcpack__scope_args__=window.__etcpack__getBundle('13');
var _isFunction =__etcpack__scope_args__.default;


__etcpack__scope_args__=window.__etcpack__getBundle('14');
var _isError =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('15');
var _isPlainObject =__etcpack__scope_args__.default;


var domTypeHelp = function (types, value) {
    return value !== null && typeof value === 'object' &&
        types.indexOf(value.nodeType) > -1 &&
        !_isPlainObject(value);
};

/*!
 * 💡 - 值类型判断方法
 * https://github.com/hai2007/tool.js/blob/master/type.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2020-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

__etcpack__scope_bundle__.isObject = _isObject;

// 基本类型
__etcpack__scope_bundle__.isUndefined = function (input) { return input === undefined };
__etcpack__scope_bundle__.isNull = function (input) { return input === null };
__etcpack__scope_bundle__.isBoolean = _isBoolean;
__etcpack__scope_bundle__.isNumber = _isNumber;
__etcpack__scope_bundle__.isString = _isString;
__etcpack__scope_bundle__.isSymbol = _isSymbol;

// 引用类型
__etcpack__scope_bundle__.isFunction = _isFunction;
__etcpack__scope_bundle__.isArray = function (input) { return Array.isArray(input) };
__etcpack__scope_bundle__.isError = _isError;
__etcpack__scope_bundle__.isPlainObject = _isPlainObject;

// 结点类型
__etcpack__scope_bundle__.isElement = function (input) { return domTypeHelp([1, 9, 11], input) };
__etcpack__scope_bundle__.isAttribute = function (input) { return domTypeHelp([2], input) };
__etcpack__scope_bundle__.isText = function (input) { return domTypeHelp([3], input) };
__etcpack__scope_bundle__.isComment = function (input) { return domTypeHelp([8], input) };

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isObject.js
/*****************************************************************/
window.__etcpack__bundleSrc__['7']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /**
 * 判断一个值是不是Object。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是Object返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    var type = typeof value;
    return value != null && (type === 'object' || type === 'function');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isBoolean.js
/*****************************************************************/
window.__etcpack__bundleSrc__['8']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('9');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是Boolean。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是Boolean返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    return value === true || value === false ||
        (value !== null && typeof value === 'object' && getType(value) === '[object Boolean]');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/getType.js
/*****************************************************************/
window.__etcpack__bundleSrc__['9']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var toString = Object.prototype.toString;

/**
 * 获取一个值的类型字符串[object type]
 *
 * @param {*} value 需要返回类型的值
 * @returns {string} 返回类型字符串
 */
__etcpack__scope_bundle__.default= function (value) {
    if (value == null) {
        return value === undefined ? '[object Undefined]' : '[object Null]';
    }
    return toString.call(value);
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isNumber.js
/*****************************************************************/
window.__etcpack__bundleSrc__['10']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('9');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是number。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是number返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    return typeof value === 'number' || (
        value !== null && typeof value === 'object' &&
        getType(value) === '[object Number]'
    );
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isString.js
/*****************************************************************/
window.__etcpack__bundleSrc__['11']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('9');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是String。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是String返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    var type = typeof value;
    return type === 'string' || (type === 'object' && value != null && !Array.isArray(value) && getType(value) === '[object String]');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isSymbol.js
/*****************************************************************/
window.__etcpack__bundleSrc__['12']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('9');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是symbol。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是symbol返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    var type = typeof value;
    return type === 'symbol' || (type === 'object' && value !== null && getType(value) === '[object Symbol]');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isFunction.js
/*****************************************************************/
window.__etcpack__bundleSrc__['13']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('9');
var getType =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('7');
var isObject =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是Function。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是Function返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    if (!isObject(value)) {
        return false;
    }

    var type = getType(value);
    return type === '[object Function]' || type === '[object AsyncFunction]' ||
        type === '[object GeneratorFunction]' || type === '[object Proxy]';
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isError.js
/*****************************************************************/
window.__etcpack__bundleSrc__['14']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('15');
var isPlainObject =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('9');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是错误对象。
 * `Error`, `EvalError`, `RangeError`, `ReferenceError`,`SyntaxError`, `TypeError`, or `URIError`
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是错误对象返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    if (value === null || typeof value !== 'object') {
        return false;
    }

    var type = getType(value);
    return type === '[object Error]' || type === '[object DOMException]' ||
        (typeof value.message === 'string' && typeof value.name === 'string' && !isPlainObject(value));
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isPlainObject.js
/*****************************************************************/
window.__etcpack__bundleSrc__['15']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('9');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是一个朴素的'对象'
 * 所谓"纯粹的对象"，就是该对象是通过"{}"或"new Object"创建的
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是朴素的'对象'返回true，否则返回false
 */

__etcpack__scope_bundle__.default= function (value) {
    if (value === null || typeof value !== 'object' || getType(value) != '[object Object]') {
        return false;
    }

    // 如果原型为null
    if (Object.getPrototypeOf(value) === null) {
        return true;
    }

    var proto = value;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(value) === proto;
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/polyfill/.inner/Promise/doResolve.js
/*****************************************************************/
window.__etcpack__bundleSrc__['16']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('6');
var isFunction=__etcpack__scope_args__.isFunction;
var isObject=__etcpack__scope_args__.isObject;


__etcpack__scope_bundle__.changeState = function (data, state) {

    // 更改状态
    this.__state = state;
    this.__value = data;

    // 由于状态改变了，触发对then，finnaly，catch等的执行更新
    this.$$triggerEvent();

};

__etcpack__scope_bundle__.triggerEvent = function () {

    // 这个方法的任务就是把__hocks中记录的方法依次执行了
    // 什么时候会停止？两种情况：
    // 1.队列执行完了
    // 2.遇到其中一个执行方法返回Promise

    var currentHock = null;

    // 同意状态就去寻找下一个onFulfilled
    // 拒绝状态就去寻找下一个onRejected
    // 数组下标0和1分别记录这两个状态，因此先根据状态确定下标即可
    var index = this.__state == 'fulfilled' ? 0 : 1, i;

    // 可能找到，可能到结尾都没有找到
    while (this.__hocks.length > 0) {

        if (isFunction(this.__hocks[0][index])) {
            currentHock = this.__hocks.shift();
            break;
        }

        // 对于路过的finally执行一下
        else if (isFunction(this.__hocks[0][2])) {
            this.__hocks[0][2]();
        }

        this.__hocks.shift();

    }

    // 如果找到了
    if (currentHock !== null) {
        var result = currentHock[index](this.__value);

        // 如果是Promise
        if (isObject(result) && result.constructor === this.constructor) {
            for (var i = 0; i < this.__hocks.length; i++) {
                result.__hocks.push(this.__hocks[i]);
                if (result.__state != 'pending') result.$$triggerEvent();
            }

            this.then = function (onFulfilled, onRejected) {

                result.then(onFulfilled, onRejected);
            };
            this.catch = function (onRejected) {

                result.catch(onRejected);
            };
            this.finally = function (callback) {

                result.finally(callback);
            };

        }

        // 否则
        else {

            this.__value = result;
            this.__state = "fulfilled";
            this.$$triggerEvent();

        }

    }

};

__etcpack__scope_bundle__.doResolve = function (doback, that) {

    // 防止重复修改状态
    var done = false;

    try {
        doback(function (value) {
            if (done) return; done = true;
            that.$$changeState(value, 'fulfilled');

        }, function (reason) {
            if (done) return; done = true;
            that.$$changeState(reason, 'rejected');

        });
    } catch (error) {
        if (done) return; done = true;
        that.$$changeState(error, 'rejected');
    }

};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/app.module.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['17']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Module=__etcpack__scope_args__.Module;
 // 页面

__etcpack__scope_args__=window.__etcpack__getBundle('18');
var AppComponent =__etcpack__scope_args__.default;


var _class = (_dec = Module({
  declarations: [AppComponent],
  imports: [],
  exports: [],
  bootstrap: AppComponent
}), _dec(_class2 = function _class2() {
  _classCallCheck(this, _class2);
}) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/index.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['18']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Component=__etcpack__scope_args__.Component;

__etcpack__scope_args__=window.__etcpack__getBundle('19');
var toJSON=__etcpack__scope_args__.toJSON;

__etcpack__scope_args__=window.__etcpack__getBundle('24');
var OpenWebEditor =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('26');
var style =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('27');
var template =__etcpack__scope_args__.default;


var _class = (_dec = Component({
  selector: "app-root",
  template: template,
  styles: [style]
}), _dec(_class2 = /*#__PURE__*/function () {
  function _class2() {
    _classCallCheck(this, _class2);
  }

  _createClass(_class2, [{
    key: "$mounted",
    value: function $mounted() {
      var target = new OpenWebEditor({
        el: document.getElementById('target'),
        color: {
          background: "#eeeeee",

          /*编辑器背景*/
          text: "#170",

          /*文本颜色*/
          number: "#888484",

          /*行号颜色*/
          edit: "#eaeaf1",

          /*编辑行背景色*/
          cursor: "#ff0000",

          /*光标颜色*/
          select: "#6c6cf1"
          /*选择背景*/

        },
        content: "",
        shader: ["javascript", {
          "text": "#000000",

          /*文本颜色*/
          "annotation": "#ff0000",

          /*注释颜色*/
          "insign": "#555555",

          /*符号颜色*/
          "key": "#ff0000",

          /*关键字颜色*/
          "string": "#ac4c1e",

          /*字符串颜色*/
          "funName": "#1e50b3",

          /*函数名称颜色*/
          "execName": "#1e83b1"
          /*执行方法颜色*/

        }],
        readonly: true
      });
      new OpenWebEditor({
        el: document.getElementById('source'),
        color: {
          background: "#ffffff",

          /*编辑器背景*/
          text: "#170",

          /*文本颜色*/
          number: "#888484",

          /*行号颜色*/
          edit: "#eaeaf1",

          /*编辑行背景色*/
          cursor: "#ff0000",

          /*光标颜色*/
          select: "#6c6cf1"
          /*选择背景*/

        },
        content: "/*\u8BF7\u76F4\u63A5\u5728\u6B64\u7F16\u8F91\u6216\u8005\u7C98\u8D34\u4F60\u9700\u8981\u683C\u5F0F\u5316\u7684json\u5B57\u7B26\u4E32\u5373\u53EF\uFF0C\n\u652F\u6301\u975E\u4E25\u683C\u6A21\u5F0F\uFF0C\u4F8B\u5982\uFF1A\n\n{\n    key:'value'\n}\n\n\u7531\u4EFB\u4F55\u95EE\u9898\uFF0C\u76F4\u63A5\u63D0issue\uFF1A https://github.com/hai2007/format-json/issues\n\n\u672C\u9879\u76EE\u57FA\u4E8E\uFF1A\n\u3010\u7F16\u8F91\u5668\u3011https://github.com/hai2007/Open-Web-Editor\n\u3010\u7B97\u6CD5\u652F\u6301\u3011https://github.com/hai2007/algorithm.js\n*/\n",
        shader: ["javascript", {
          "text": "#000000",

          /*文本颜色*/
          "annotation": "#6a9955",

          /*注释颜色*/
          "insign": "#555555",

          /*符号颜色*/
          "key": "#ff0000",

          /*关键字颜色*/
          "string": "#ac4c1e",

          /*字符串颜色*/
          "funName": "#1e50b3",

          /*函数名称颜色*/
          "execName": "#1e83b1"
          /*执行方法颜色*/

        }]
      }).updated(function () {
        try {
          target.valueOf(JSON.stringify(toJSON(this.valueOf()), null, 2));
        } catch (e) {
          target.valueOf("/*\n【发生了错误】\n" + e + "\n*/");
        } // 使得光标回到录入编辑器界面


        document.getElementById('source').click();
      });
    }
  }]);

  return _class2;
}()) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/algorithm/json.js
/*****************************************************************/
window.__etcpack__bundleSrc__['19']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /*!
 * 🔪 - 和json相关的一些操作
 * https://github.com/hai2007/algorithm.js/blob/master/json.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

__etcpack__scope_args__=window.__etcpack__getBundle('6');
var isString=__etcpack__scope_args__.isString;

__etcpack__scope_args__=window.__etcpack__getBundle('20');
var analyseWord =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('23');
var toValue =__etcpack__scope_args__.default;


// 把一段字符串变成json返回
__etcpack__scope_bundle__.toJSON = function (express) {

    if (isString(express)) {

        // 先分析出来单词
        var wordArray = analyseWord(express);

        /**
         * 思路：
         * 从后往前找，找到第一个需要归结的，直接归结，
         * 归结完毕以后，继续，知道找到开头，说明归结完毕，
         * 这样设计的好处是：
         * 从后往前找，一定是叶子，这就消除了递归。
         */
        var i = wordArray.length - 1, j;

        // 只要单词数组归结完毕
        while (wordArray.length > 1) {

            // 从后往前找第一个需要归结的子对象
            while (i >= 0 && (wordArray[i].type != 'insign' || ['{', '['].indexOf(wordArray[i].value) < 0)) {
                i = i - 1;
            }

            if (i < 0) {
                // 如果到开头都没有遇到，缺少开始符号
                throw new Error("Illegal express : " + express + "\nstep='toOne-searchBeginIndex',wordArray=" + wordArray);
            }

            // 然后合并
            j = i + 1;
            var subWordArray = [wordArray[i]];
            while (j < wordArray.length && (wordArray[j].type != 'insign' || wordArray[j].value != {
                "{": "}",
                "[": "]"
            }[wordArray[i].value])) {
                subWordArray.push(wordArray[j]);
                j = j + 1;
            }

            if (j >= wordArray.length) {
                // 如果到结尾都没有需要应该闭合的符号，缺少闭合符号
                throw new Error("Illegal express : " + express + "\nstep='toOne-searchEndIndex',wordArray=" + wordArray);
            } else {

                // 结尾追加进去
                subWordArray.push(wordArray[j]);

                // 归结
                wordArray[i] = toValue(subWordArray);

                // 调整
                wordArray.splice(i + 1, j - i);
            }


        }

        // 返回计算结果
        return wordArray[0].value;

    } else {

        throw new Error('The data passed is not a string.');

    }

};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/algorithm/.inner/json/analyseWord.js
/*****************************************************************/
window.__etcpack__bundleSrc__['20']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('21');
var ReadString=__etcpack__scope_args__.ReadString;


__etcpack__scope_bundle__.default= function (express) {

    // 剔除开头和结尾的空白
    express = express.trim();

    // 获取字符串分析对象
    var reader = ReadString(express);

    var wordArray = [];
    var tempWord = "";
    reader.readNext();

    // 定义一个追加普通串的方法
    var pushNormal = function () {
        tempWord = tempWord.trim();
        if (tempWord != '') {
            wordArray.push({
                type: "normal",
                value: tempWord
            });
        }
        tempWord = "";
    };

    while (true) {

        if (reader.index >= express.length) break;

        // 单行注释
        if (reader.getNextN(2) == '//') {
            while (!/\n/.test(reader.readNext()) && reader.index < express.length);
        }

        // 多行注释
        else if (reader.getNextN(2) == '/*') {
            while (reader.getNextN(2) != '*/') {
                if (reader.index >= express.length) {
                    throw new Error("Multiline comment not closed correctly : " + express + "\nstep='analyseWord-searchEndComment'");
                }
                reader.readNext();
            }
            reader.readNext();
            reader.readNext();
        }

        // 如果是边界符号
        else if (['{', '}', ',', '[', ']', ':'].indexOf(reader.currentChar) > -1) {
            pushNormal();

            wordArray.push({
                type: "insign",
                value: reader.currentChar
            });
            reader.readNext();
        }

        // 如果遇到字符串，应该是一个独立的单词
        else if (['"', "'"].indexOf(reader.currentChar) > -1) {

            var tempStrWord = "";
            while (['"', "'"].indexOf(reader.readNext()) < 0) {
                if (reader.index >= express.length) {
                    throw new Error("The string is not closed correctly : " + express + "\nstep='analyseWord-searchString',currentStrWord=" + tempStrWord);
                }
                tempStrWord += reader.currentChar;
            }
            reader.readNext();
            wordArray.push({
                type: "string",
                value: tempStrWord
            });

        } else {
            tempWord += reader.currentChar;
            reader.readNext();
        }

    }

    return wordArray;
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/string.js
/*****************************************************************/
window.__etcpack__bundleSrc__['21']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /*!
 * 💡 - 字符串操作
 * https://github.com/hai2007/tool.js/blob/master/string.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

__etcpack__scope_args__=window.__etcpack__getBundle('22');
var _ReadString =__etcpack__scope_args__.default;


// 字符串分析
__etcpack__scope_bundle__.ReadString = _ReadString;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/string/Read.js
/*****************************************************************/
window.__etcpack__bundleSrc__['22']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= function (express) {

    var reader = {
        index: -1,
        currentChar: null
    };

    // 读取下一个字符
    reader.readNext = function () {
        reader.currentChar = reader.index++ < express.length - 1 ? express[reader.index] : null;
        return reader.currentChar;
    };

    // 获取往后num个值
    reader.getNextN = function (num) {
        return express.substring(reader.index, num + reader.index > express.length ? express.length : num + reader.index);
    };

    return reader;
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/algorithm/.inner/json/toValue.js
/*****************************************************************/
window.__etcpack__bundleSrc__['23']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var toValue = function (word) {

    if (word.type != 'string' && word.type != 'object') {

        // 数字
        if (/[+-]{0,1}\d{1,}\.{0,1}\d{0,}/.test(word.value)) {
            return +word.value;
        }

        // undefined
        else if (word.value == 'undefined') {
            return undefined;
        }

        // null
        else if (word.value == 'null') {
            return null;
        }

        // false
        else if (word.value == 'false') {
            return false;
        }

        // true
        else if (word.value == 'true') {
            return true;
        }

    }

    return word.value;
}

__etcpack__scope_bundle__.default= function (wordArray) {

    var value, i;

    // 是json
    if (wordArray[0].value == '{') {
        value = {};
        for (i = 3; i < wordArray.length; i += 4) {
            value[wordArray[i - 2].value] = toValue(wordArray[i]);
        }
    }

    // 数组
    else {
        value = [];
        for (i = 2; i < wordArray.length; i += 2) {
            value.push(toValue(wordArray[i - 1]));
        }
    }

    return {
        type: "object",
        value: value
    };
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/lib/open-web-editor.js
/*****************************************************************/
window.__etcpack__bundleSrc__['24']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('25');

__etcpack__scope_bundle__.default= OpenWebEditor;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/open-web-editor/dist/open-web-editor.js
/*****************************************************************/
window.__etcpack__bundleSrc__['25']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /*!
* Open Web Editor - ✍️ An Editor Used on the Browser Side.
* git+https://github.com/hai2007/Open-Web-Editor.git
*
* author 你好2007
*
* version 0.3.2
*
* Copyright (c) 2020-2021 hai2007 走一步，再走一步。
* Released under the MIT license
*
* Date:Tue Jul 20 2021 13:18:10 GMT+0800 (中国标准时间)
*/

"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function () {
  'use strict';
  /**
   * 判断一个值是不是Object。
   *
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是Object返回true，否则返回false
   */

  function _isObject(value) {
    var type = _typeof(value);

    return value != null && (type === 'object' || type === 'function');
  }

  var toString = Object.prototype.toString;
  /**
   * 获取一个值的类型字符串[object type]
   *
   * @param {*} value 需要返回类型的值
   * @returns {string} 返回类型字符串
   */

  function getType(value) {
    if (value == null) {
      return value === undefined ? '[object Undefined]' : '[object Null]';
    }

    return toString.call(value);
  }
  /**
   * 判断一个值是不是String。
   *
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是String返回true，否则返回false
   */


  function _isString(value) {
    var type = _typeof(value);

    return type === 'string' || type === 'object' && value != null && !Array.isArray(value) && getType(value) === '[object String]';
  }
  /**
   * 判断一个值是不是Function。
   *
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是Function返回true，否则返回false
   */


  function _isFunction(value) {
    if (!_isObject(value)) {
      return false;
    }

    var type = getType(value);
    return type === '[object Function]' || type === '[object AsyncFunction]' || type === '[object GeneratorFunction]' || type === '[object Proxy]';
  }
  /**
   * 判断一个值是不是一个朴素的'对象'
   * 所谓"纯粹的对象"，就是该对象是通过"{}"或"new Object"创建的
   *
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是朴素的'对象'返回true，否则返回false
   */


  function _isPlainObject(value) {
    if (value === null || _typeof(value) !== 'object' || getType(value) != '[object Object]') {
      return false;
    } // 如果原型为null


    if (Object.getPrototypeOf(value) === null) {
      return true;
    }

    var proto = value;

    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }

    return Object.getPrototypeOf(value) === proto;
  }

  var domTypeHelp = function domTypeHelp(types, value) {
    return value !== null && _typeof(value) === 'object' && types.indexOf(value.nodeType) > -1 && !_isPlainObject(value);
  };

  var isString = _isString; // 引用类型

  var isFunction = _isFunction;

  var isArray = function isArray(input) {
    return Array.isArray(input);
  }; // 结点类型


  var isElement = function isElement(input) {
    return domTypeHelp([1, 9, 11], input);
  };

  var xhtml = {
    // 阻止冒泡
    "stopPropagation": function stopPropagation(event) {
      event = event || window.event;

      if (event.stopPropagation) {
        //这是其他非IE浏览器
        event.stopPropagation();
      } else {
        event.cancelBubble = true;
      }
    },
    // 阻止默认事件
    "preventDefault": function preventDefault(event) {
      event = event || window.event;

      if (event.preventDefault) {
        event.preventDefault();
      } else {
        event.returnValue = false;
      }
    },
    // 绑定事件
    "bind": function bind(el, eventType, callback) {
      if (window.attachEvent) {
        el.attachEvent("on" + eventType, callback); // 后绑定的先执行
      } else {
        el.addEventListener(eventType, callback, false); // 捕获
      }
    },
    // 触发事件
    "trigger": function trigger(dom, eventType) {
      var event; //创建event的对象实例。

      if (document.createEventObject) {
        // IE浏览器支持fireEvent方法
        event = document.createEventObject();
        dom.fireEvent('on' + eventType, event);
      } // 其他标准浏览器使用dispatchEvent方法
      else {
          event = document.createEvent('HTMLEvents'); // 3个参数：事件类型，是否冒泡，是否阻止浏览器的默认行为

          event.initEvent(eventType, true, false);
          dom.dispatchEvent(event);
        }
    },
    // 变成结点
    "toNode": function toNode(template) {
      var frame = document.createElement("div");
      frame.innerHTML = template;
      var childNodes = frame.childNodes;

      for (var i = 0; i < childNodes.length; i++) {
        if (isElement(childNodes[i])) return childNodes[i];
      }

      return null;
    },
    // 追加结点(内部结尾)
    "appendTo": function appendTo(el, template) {
      var node = isElement(template) ? template : this.toNode(template);
      el.appendChild(node);
      return node;
    },
    // 追加结点(内部开头)
    "prependTo": function prependTo(el, template) {
      var node = isElement(template) ? template : this.toNode(template);
      el.insertBefore(node, el.childNodes[0]);
      return node;
    },
    // 删除结点
    "remove": function remove(el) {
      el.parentNode.removeChild(el);
    },
    // 在被指定元素之后插入结点
    "after": function after(el, template) {
      var node = isElement(template) ? template : this.toNode(template);
      el.parentNode.insertBefore(node, el.nextSibling);
      return node;
    },
    // 修改样式
    "css": function css(el, styles) {
      for (var key in styles) {
        el.style[key] = styles[key];
      }
    },
    // 修改属性
    "attr": function attr(el, attrs) {
      for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
      }
    },
    // 获取鼠标相对特定元素左上角位置
    "position": function position(el, event) {
      event = event || window.event; // 返回元素的大小及其相对于视口的位置

      var bounding = el.getBoundingClientRect();
      if (!event || !event.clientX) throw new Error('Event is necessary!');
      var temp = {
        // 鼠标相对元素位置 = 鼠标相对窗口坐标 - 元素相对窗口坐标
        "x": event.clientX - bounding.left + el.scrollLeft,
        "y": event.clientY - bounding.top + el.scrollTop
      };
      return temp;
    },
    // 复制到剪切板
    "copy": function copy(text, callback, errorback) {
      var el = this.appendTo(document.body, '<textarea>' + text + '</textarea>'); // 执行复制

      el.select();

      try {
        var result = window.document.execCommand("copy", false, null);

        if (result) {
          if (isFunction(callback)) callback();
        } else {
          if (isFunction(errorback)) errorback();
        }
      } catch (e) {
        if (isFunction(errorback)) errorback(e);
      }

      document.body.removeChild(el);
    }
  }; // 计算文字长度

  function textWidth(text) {
    this.__helpCalcDOM.innerText = text;
    return this.__helpCalcDOM.offsetWidth;
  } // 计算最佳光标左边位置


  function bestLeftNum(x, lineNum) {
    if (arguments.length < 2) lineNum = lineNum || this.__lineNum;
    var text = this._contentArray[lineNum];
    if (x <= 40) return 0;
    if (x - 40 >= this.$$textWidth(text)) return text.length;
    var dist = x - 40,
        i = 1;

    for (; i < text.length; i++) {
      var tempDist = Math.abs(x - 40 - this.$$textWidth(text.substr(0, i)));
      if (tempDist > dist) break;
      dist = tempDist;
    }

    return i - 1;
  } // 计算光标对应的x,y值


  function calcCanvasXY(leftNum, lineNum) {
    return {
      x: this.$$textWidth(this._contentArray[lineNum].substr(0, leftNum)),
      y: lineNum * 21
    };
  } // 判断选区是否为空


  function selectIsNotBlank() {
    return this.__cursor1.lineNum != this.__cursor2.lineNum || this.__cursor1.leftNum != this.__cursor2.leftNum;
  } // 根据内容生成模板


  function toTemplate(line, index, noLineNumber) {
    var _this = this;

    var template = "";
    template += "<div style='min-width: fit-content;white-space: nowrap;line-height:21px;height:21px;'>";
    var lineStyle = noLineNumber ? "font-size:0;" : "";
    template += "<em style='" + lineStyle + "color:" + this._colorNumber + ";user-select: none;display:inline-block;font-style:normal;width:35px;text-align:right;margin-right:5px;'>" + (index + 1) + "</em>";
    line.forEach(function (text) {
      var contentText = text.content; // 提前对特殊字符进行处理

      contentText = contentText.replace(/\&/g, "&amp;");
      /*[&]*/

      contentText = contentText.replace(/</g, "&lt;");
      contentText = contentText.replace(/>/g, "&gt;");
      /*[<,>]*/

      template += "<span style='user-select: none;font-weight:" + _this._fontWeight + ";white-space: pre;color:" + text.color + "'>" + contentText + "</span>";
    });
    return template + "</div>";
  } // 整理当前输入框信息


  function getInputMessage(owe) {
    return {
      // 光标前面有多少个字符
      leftNum: owe.__leftNum,
      // 当前行之前有多少行
      lineNum: owe.__lineNum,
      // 光标left坐标
      x: owe.__cursorLeft,
      // 光标top坐标
      y: owe.__cursorTop,
      // 一行文本的高
      lineHeight: 21
    };
  } // 初始化结点


  function initDom() {
    var _this2 = this;

    this._el.innerHTML = "";
    xhtml.css(this._el, {
      "font-size": "12px",
      position: "relative",
      cursor: "text",
      "font-family": this._fontFamily,
      "background": this._colorBackground,
      overflow: "auto"
    });
    xhtml.bind(this._el, 'click', function () {
      // 由于有时候点击屏幕的时候，是滚动导致的，因此位置可能没有计算好前聚焦了，导致光标错位
      setTimeout(function () {
        _this2.__focusDOM.focus();
      });
    }); // 辅助计算标签

    this.__helpCalcDOM = xhtml.appendTo(this._el, "<span></span>");
    xhtml.css(this.__helpCalcDOM, {
      position: "absolute",
      "z-index": "-1",
      "white-space": "pre",
      "top": 0,
      "left": 0,
      "color": "rgba(0,0,0,0)",
      "font-weight": this._fontWeight
    }); // 辅助输入标签

    this.__helpInputDOM = xhtml.appendTo(this._el, "<div></div>");
    xhtml.css(this.__helpInputDOM, {
      position: "absolute",
      "z-index": 1
    });
    xhtml.bind(this.__helpInputDOM, 'click', function (event) {
      xhtml.stopPropagation(event);
      xhtml.preventDefault(event);

      _this2.__focusDOM.focus();
    }); // 光标

    this.__focusDOM = xhtml.appendTo(this._el, "<textarea></textarea>");
    xhtml.css(this.__focusDOM, {
      position: "absolute",
      width: "6px",
      "margin-top": "3px",
      height: "15px",
      "line-height": "15px",
      resize: "none",
      overflow: "hidden",
      padding: "0",
      outline: "none",
      border: "none",
      background: "rgba(0,0,0,0)",
      color: this._colorCursor
    });
    xhtml.attr(this.__focusDOM, {
      wrap: "off",
      autocorrect: "off",
      autocapitalize: "off",
      spellcheck: "false"
    });

    if (this._readonly) {
      xhtml.attr(this.__focusDOM, {
        readonly: true
      });
    } // 显示区域


    this.__showDOM = xhtml.appendTo(this._el, "<div></div>");
    xhtml.css(this.__showDOM, {
      padding: "10px 0"
    }); // 选中区域

    this.__selectCanvas = xhtml.appendTo(this._el, "<canvas></canvas>");
    xhtml.css(this.__selectCanvas, {
      position: "absolute",
      left: "40px",
      top: "10px",
      opacity: "0.5"
    });
    this.$$updateCanvasSize(1, 1);
  } // 初始化视图


  function initView() {
    // 初始化定位光标位置
    xhtml.css(this.__focusDOM, {
      left: 40 + this.$$textWidth(this._contentArray[this.__lineNum]) + "px",
      top: 10 + this.__lineNum * 21 + "px"
    });
  } // 更新编辑器内容视图


  function updateView() {
    var _this3 = this;

    // 如果有重复利用的行(可复用的过少就不选择这种方法了)
    if (this.__diff && this.__diff.beginNum + this.__diff.endNum > 10) {
      var lineDoms = this.__showDOM.childNodes;
      var lineDoms_length = lineDoms.length; // 先删除无用的行

      /**
       * 这里的删除需要稍微注意一下
       * 因为结点删除以后就没有了，这会导致lineDoms的更新，这也是为什么备份数组长度的原因
       * 倒着删除同样是因为这个原因
       */

      for (var i = lineDoms_length - this.__diff.endNum - 1; i >= this.__diff.beginNum; i--) {
        xhtml.remove(lineDoms[i]);
      } // 追加不足的行


      if (this.__diff.beginNum > 0) {
        for (var _i = this.__formatData.length - 1 - this.__diff.endNum; _i >= this.__diff.beginNum; _i--) {
          xhtml.after(lineDoms[this.__diff.beginNum - 1], this.$$toTemplate(this.__formatData[_i], _i, this._noLineNumber));
        }
      } else {
        // 如果开头没有结点保留，为了简单，我们直接采用prependTo方法追加
        for (var _i2 = this.__formatData.length - this.__diff.endNum - 1; _i2 >= 0; _i2--) {
          xhtml.prependTo(this.__showDOM, this.$$toTemplate(this.__formatData[_i2], _i2, this._noLineNumber));
        }
      } // 更新行号


      lineDoms = this.__showDOM.childNodes;

      for (var _i3 = this.__diff.beginNum; _i3 < this.__formatData.length; _i3++) {
        lineDoms[_i3].getElementsByTagName('em')[0].innerText = _i3 + 1;
      }
    } // 有时候，可能直接替换更快
    else if (this.__diff != "not update") {
        var template = "";

        this.__formatData.forEach(function (line, index) {
          template += _this3.$$toTemplate(line, index, _this3._noLineNumber);
        });

        this.__showDOM.innerHTML = template;
      }

    this.__diff = "not update";
    var tempLineDom = this.__showDOM.childNodes[this.__lineNum]; // 修改当前编辑的行

    if (!this._readonly && this.__lineDom) {
      this.__lineDom.style.backgroundColor = "rgba(0, 0, 0, 0)";
      tempLineDom.style.backgroundColor = this._colorEdit;
    }

    this.__lineDom = tempLineDom;
  } // 更新编辑器选中视图


  function updateSelectView() {
    var _this4 = this;

    var ctx = this.__selectCanvas.getContext('2d');

    ctx.fillStyle = this._colorSelect;
    ctx.clearRect(0, 0, this.__selectCanvas.scrollWidth, this.__selectCanvas.scrollHeight); // 绘制二个区间

    var drawerSelect = function drawerSelect(beginLeftNum, endLeftNum, lineNum) {
      var xy1 = _this4.$$calcCanvasXY(beginLeftNum, lineNum);

      var xy2 = _this4.$$calcCanvasXY(endLeftNum, lineNum); // 如何一行过少，前置一点点选中显示


      if (beginLeftNum == endLeftNum && beginLeftNum == 0) {
        ctx.fillRect(xy1.x, xy1.y, 5, 21);
      } else {
        ctx.fillRect(xy1.x, xy1.y, xy2.x - xy1.x, 21);
      }
    }; // 如果选中区域为空，不用绘制


    if (this.__cursor1.lineNum == this.__cursor2.lineNum && this.__cursor1.leftNum == this.__cursor2.leftNum) return;
    ctx.beginPath(); // 如果在一行

    if (this.__cursor1.lineNum == this.__cursor2.lineNum) {
      drawerSelect(this.__cursor1.leftNum, this.__cursor2.leftNum, this.__cursor1.lineNum);
    } // 如果选中的多于一行
    else {
        var beginCursor, endCursor;

        if (this.__cursor1.lineNum < this.__cursor2.lineNum) {
          beginCursor = this.__cursor1;
          endCursor = this.__cursor2;
        } else {
          beginCursor = this.__cursor2;
          endCursor = this.__cursor1;
        } // 绘制开始的结尾


        drawerSelect(beginCursor.leftNum, this._contentArray[beginCursor.lineNum].length, beginCursor.lineNum); // 绘制结束的开头

        drawerSelect(0, endCursor.leftNum, endCursor.lineNum); // 绘制两行之间

        for (var lineNum = beginCursor.lineNum + 1; lineNum < endCursor.lineNum; lineNum++) {
          drawerSelect(0, this._contentArray[lineNum].length, lineNum);
        }
      }
  } // 输入的时候更新光标位置


  function updateCursorPosition() {
    this.__cursorTop = this.__lineNum * 21 + 10;
    this.__cursorLeft = 40 + this.$$textWidth(this._contentArray[this.__lineNum].substring(0, this.__leftNum));
    xhtml.css(this.__focusDOM, {
      top: this.__cursorTop + "px",
      left: this.__cursorLeft + "px"
    });
  } // 更新画布尺寸


  function updateCanvasSize(width, height) {
    if (arguments.length < 2) {
      width = this._el.scrollWidth - 40;
      height = this._el.scrollHeight - 10;
    }

    xhtml.css(this.__selectCanvas, {
      width: width + "px",
      height: height + "px"
    });
    xhtml.attr(this.__selectCanvas, {
      width: width,
      height: height
    });
  } // 取消选区


  function cancelSelect() {
    this.$$updateCanvasSize(1, 1);
    this.__cursor1 = {
      leftNum: 0,
      lineNum: 0
    };
    this.__cursor2 = {
      leftNum: 0,
      lineNum: 0
    };
  } // 删除选区


  function deleteSelect() {
    // 假定cursor2是结束光标
    var beginCursor = this.__cursor2,
        endCursor = this.__cursor1; // 根据行号来校对

    if (this.__cursor1.lineNum < this.__cursor2.lineNum) {
      beginCursor = this.__cursor1;
      endCursor = this.__cursor2;
    } else if (this.__cursor1.lineNum == this.__cursor2.lineNum) {
      // 根据列号来校对
      if (this.__cursor1.leftNum < this.__cursor2.leftNum) {
        beginCursor = this.__cursor1;
        endCursor = this.__cursor2;
      }
    }

    var newLineText = this._contentArray[beginCursor.lineNum].substr(0, beginCursor.leftNum) + this._contentArray[endCursor.lineNum].substr(endCursor.leftNum);

    this._contentArray.splice(beginCursor.lineNum, endCursor.lineNum - beginCursor.lineNum + 1, newLineText); // 校对光标和选区


    this.__leftNum = this.__cursor1.leftNum = this.__cursor2.leftNum = beginCursor.leftNum;
    this.__lineNum = this.__cursor1.lineNum = this.__cursor2.lineNum = beginCursor.lineNum;
    this.$$cancelSelect();
  }
  /*!
   * 💡 - 获取键盘此时按下的键的组合结果
   * https://github.com/hai2007/tool.js/blob/master/getKeyString.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2021-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */
  // 字典表


  var dictionary = {
    // 数字
    48: [0, ')'],
    49: [1, '!'],
    50: [2, '@'],
    51: [3, '#'],
    52: [4, '$'],
    53: [5, '%'],
    54: [6, '^'],
    55: [7, '&'],
    56: [8, '*'],
    57: [9, '('],
    96: [0, 0],
    97: 1,
    98: 2,
    99: 3,
    100: 4,
    101: 5,
    102: 6,
    103: 7,
    104: 8,
    105: 9,
    106: "*",
    107: "+",
    109: "-",
    110: ".",
    111: "/",
    // 字母
    65: ["a", "A"],
    66: ["b", "B"],
    67: ["c", "C"],
    68: ["d", "D"],
    69: ["e", "E"],
    70: ["f", "F"],
    71: ["g", "G"],
    72: ["h", "H"],
    73: ["i", "I"],
    74: ["j", "J"],
    75: ["k", "K"],
    76: ["l", "L"],
    77: ["m", "M"],
    78: ["n", "N"],
    79: ["o", "O"],
    80: ["p", "P"],
    81: ["q", "Q"],
    82: ["r", "R"],
    83: ["s", "S"],
    84: ["t", "T"],
    85: ["u", "U"],
    86: ["v", "V"],
    87: ["w", "W"],
    88: ["x", "X"],
    89: ["y", "Y"],
    90: ["z", "Z"],
    // 方向
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    33: "page up",
    34: "page down",
    35: "end",
    36: "home",
    // 控制键
    16: "shift",
    17: "ctrl",
    18: "alt",
    91: "command",
    92: "command",
    93: "command",
    9: "tab",
    20: "caps lock",
    32: "spacebar",
    8: "backspace",
    13: "enter",
    27: "esc",
    46: "delete",
    45: "insert",
    144: "number lock",
    145: "scroll lock",
    12: "clear",
    19: "pause",
    // 功能键
    112: "f1",
    113: "f2",
    114: "f3",
    115: "f4",
    116: "f5",
    117: "f6",
    118: "f7",
    119: "f8",
    120: "f9",
    121: "f10",
    122: "f11",
    123: "f12",
    // 余下键
    189: ["-", "_"],
    187: ["=", "+"],
    219: ["[", "{"],
    221: ["]", "}"],
    220: ["\\", "|"],
    186: [";", ":"],
    222: ["'", '"'],
    188: [",", "<"],
    190: [".", ">"],
    191: ["/", "?"],
    192: ["`", "~"]
  }; // 非独立键字典

  var help_key = ["shift", "ctrl", "alt"];
  /**
   * 键盘按键
   * 返回键盘此时按下的键的组合结果
   */

  function getKeyString(event) {
    event = event || window.event;
    var keycode = event.keyCode || event.which;
    var key = dictionary[keycode] || keycode;
    if (!key) return;
    if (key.constructor !== Array) key = [key, key];
    var _key = key[0];
    var shift = event.shiftKey ? "shift+" : "",
        alt = event.altKey ? "alt+" : "",
        ctrl = event.ctrlKey ? "ctrl+" : "";
    var resultKey = "",
        preKey = ctrl + shift + alt;

    if (help_key.indexOf(key[0]) >= 0) {
      key[0] = key[1] = "";
    } // 判断是否按下了caps lock


    var lockPress = event.code == "Key" + event.key && !shift; // 只有字母（且没有按下功能Ctrl、shift或alt）区分大小写

    resultKey = preKey + (preKey == '' && lockPress ? key[1] : key[0]);

    if (key[0] == "") {
      resultKey = resultKey.replace(/\+$/, '');
    }

    return resultKey == '' ? _key : resultKey;
  } // 绑定键盘和鼠标等交互事件处理


  function bindEvent() {
    var _this5 = this;

    var mouseDown = false; // 辅助计算选择光标位置

    var calcCursor = function calcCursor(event) {
      var position = xhtml.position(_this5._el, event);
      var topIndex = Math.round((position.y - 20.5) / 21);
      if (topIndex < 0) topIndex = 0;
      if (topIndex >= _this5._contentArray.length) topIndex = _this5._contentArray.length - 1;
      return {
        leftNum: _this5.$$bestLeftNum(position.x, topIndex),
        lineNum: topIndex
      };
    }; // 获取光标之间的内容


    var calcTwoCursor = function calcTwoCursor() {
      // 假定cursor2是结束光标
      var beginCursor = _this5.__cursor2,
          endCursor = _this5.__cursor1; // 根据行号来校对

      if (_this5.__cursor1.lineNum < _this5.__cursor2.lineNum) {
        beginCursor = _this5.__cursor1;
        endCursor = _this5.__cursor2;
      } else if (_this5.__cursor1.lineNum == _this5.__cursor2.lineNum) {
        // 根据列号来校对
        if (_this5.__cursor1.leftNum < _this5.__cursor2.leftNum) {
          beginCursor = _this5.__cursor1;
          endCursor = _this5.__cursor2;
        }

        return _this5._contentArray[beginCursor.lineNum].substring(beginCursor.leftNum, endCursor.leftNum);
      } // 余下的一定是多行


      var resultData = "";
      resultData += _this5._contentArray[beginCursor.lineNum].substr(beginCursor.leftNum) + "\n";

      for (var lineNum = beginCursor.lineNum + 1; lineNum < endCursor.lineNum; lineNum++) {
        resultData += _this5._contentArray[lineNum] + "\n";
      }

      resultData += _this5._contentArray[endCursor.lineNum].substr(0, endCursor.leftNum);
      return resultData;
    }; // 鼠标按下的时候，记录开始光标位置并标记鼠标按下动作


    xhtml.bind(this._el, 'mousedown', function (event) {
      mouseDown = true;
      _this5.__cursor2 = _this5.__cursor1 = calcCursor(event);

      _this5.$$updateCanvasSize(); // 绘制选中效果


      _this5.$$updateSelectView();
    }); // 移动的时候不停的同步结束光标位置

    xhtml.bind(this._el, 'mousemove', function (event) {
      if (!mouseDown) return;
      _this5.__cursor2 = calcCursor(event); // 绘制选中效果

      _this5.$$updateSelectView();
    }); // 鼠标分开或移出的时候，标记鼠标放开

    xhtml.bind(this._el, 'mouseup', function () {
      return mouseDown = false;
    }); // xhtml.bind(this._el, 'mouseout', () => mouseDown = false);
    // 点击编辑界面

    xhtml.bind(this._el, 'click', function (event) {
      _this5.__helpInputDOM.innerHTML = '';
      var position = xhtml.position(_this5._el, event);
      var topIndex = Math.round((position.y - 20.5) / 21); // 如果超过了内容区域

      if (topIndex < 0 || topIndex >= _this5._contentArray.length) return;
      _this5.__lineNum = topIndex;
      _this5.__leftNum = _this5.$$bestLeftNum(position.x);

      _this5.$$updateCursorPosition();

      _this5.$$updateView();
    });

    var update = function update(text) {
      // 获取输入内容
      text = text || _this5.__focusDOM.value;
      text = _this5.$$filterText(text);
      _this5.__focusDOM.value = ""; // 如果有选区，先删除选区

      if (_this5.$$selectIsNotBlank()) _this5.$$deleteSelect(); // 如果输入的是回车，切割文本

      if (/^\n$/.test(text)) {
        if (_this5.__leftNum >= _this5._contentArray[_this5.__lineNum].length) {
          _this5._contentArray.splice(_this5.__lineNum + 1, 0, "");
        } else {
          _this5._contentArray.splice(_this5.__lineNum + 1, 0, _this5._contentArray[_this5.__lineNum].substring(_this5.__leftNum));

          _this5._contentArray[_this5.__lineNum] = _this5._contentArray[_this5.__lineNum].substring(0, _this5.__leftNum);
        }

        _this5.__lineNum += 1;
        _this5.__leftNum = 0;
      } // 否则就是一堆文本（包括复制来的）
      else {
          var textArray = text.split(/\n/);

          if (_this5._contentArray == null) {
            _this5._contentArray = textArray;
            _this5.__lineNum = _this5._contentArray.length - 1;
            _this5.__leftNum = _this5._contentArray[_this5.__lineNum].length;
          } // 如果只有一行文本(分开是为了加速)
          else if (textArray.length <= 1) {
              _this5._contentArray[_this5.__lineNum] = _this5._contentArray[_this5.__lineNum].substring(0, _this5.__leftNum) + text + _this5._contentArray[_this5.__lineNum].substring(_this5.__leftNum);
              _this5.__leftNum += text.length;
            } // 如果是复制的多行文本
            else {
                var _this5$_contentArray;

                // 需要切割的行两边文本
                var leftText = _this5._contentArray[_this5.__lineNum].substring(0, _this5.__leftNum);

                var rightText = _this5._contentArray[_this5.__lineNum].substring(_this5.__leftNum); // 旧行文本拼接进来


                textArray[0] = leftText + textArray[0];
                textArray[textArray.length - 1] += rightText; // 新内容记录下来

                (_this5$_contentArray = _this5._contentArray).splice.apply(_this5$_contentArray, [_this5.__lineNum, 1].concat(_toConsumableArray(textArray)));

                _this5.__lineNum += textArray.length - 1;
                _this5.__leftNum = textArray[textArray.length - 1].length - rightText.length;
              }
        } // 着色并更新视图


      _this5.__formatData = _this5.$$diff(_this5.$shader(_this5._contentArray.join('\n')));

      _this5.$$updateCursorPosition();

      _this5.$$updateView(); // 通知文本改动


      _this5.__updated__();
    }; // 中文输入开始


    xhtml.bind(this.__focusDOM, 'compositionstart', function () {
      _this5.__needUpdate = false;
      _this5.__focusDOM.style.color = "rgba(0,0,0,0)";
      _this5.__focusDOM.style.borderLeft = '1px solid ' + _this5._colorCursor;
    }); // 中文输入结束

    xhtml.bind(this.__focusDOM, 'compositionend', function () {
      _this5.__needUpdate = true;
      _this5.__focusDOM.style.color = _this5._colorCursor;
      _this5.__focusDOM.style.borderLeft = "none";
      update(); // 辅助输入

      if (_this5.$input != null) _this5.__helpInputEvent = _this5.$input(_this5.__helpInputDOM, getInputMessage(_this5), _this5._contentArray) || {};
    }); // 输入

    xhtml.bind(this.__focusDOM, 'input', function () {
      // 如果是中文输入开始，不应该更新
      if (_this5.__needUpdate) {
        update(); // 辅助输入

        if (_this5.$input != null) _this5.__helpInputEvent = _this5.$input(_this5.__helpInputDOM, getInputMessage(_this5), _this5._contentArray) || {};
      }
    }); // 记录此刻MAC电脑的Command是否按下

    var macCommand = false;
    xhtml.bind(this._el, 'keyup', function (event) {
      var keyStringCode = getKeyString(event);
      if (keyStringCode == 'command') macCommand = false;
    }); // 处理键盘控制

    xhtml.bind(this._el, 'keydown', function (event) {
      var keyStringCode = getKeyString(event);
      if (keyStringCode == 'command') macCommand = true; // 如果Command被按下，就需要补充ctrl以兼容MAC电脑

      if (macCommand && ['a', 'c', 'x'].indexOf(keyStringCode) > -1) {
        keyStringCode = "ctrl+" + keyStringCode;
      } // 辅助输入前置拦截


      if (_this5.__helpInputDOM.innerHTML != '') {
        var __helpInputEvent = _this5.__helpInputEvent[keyStringCode];

        if (isFunction(__helpInputEvent)) {
          // 如果返回true表示继续调用，否则此快捷键结束
          if (!__helpInputEvent()) return;
        } else {
          _this5.__helpInputDOM.innerHTML = '';
        }
      } // 只读模式需要拦截部分快捷键
      // 命令行不拦截


      if (_this5._readonly && ['ctrl+a', 'ctrl+c'].indexOf(keyStringCode) < 0) return; // 进入常规快捷键

      switch (keyStringCode) {
        // 全选
        case "ctrl+a":
          {
            // 修改选区范围
            _this5.__cursor1 = {
              leftNum: 0,
              lineNum: 0
            };
            _this5.__cursor2 = {
              lineNum: _this5._contentArray.length - 1,
              leftNum: _this5._contentArray[_this5._contentArray.length - 1].length
            }; // 绘制选中效果

            _this5.$$updateSelectView();

            break;
          }
        // 复制

        case "ctrl+c":
          {
            if (_this5.$$selectIsNotBlank()) {
              xhtml.copy(calcTwoCursor());

              _this5.__focusDOM.focus();
            }

            break;
          }
        // 剪切

        case "ctrl+x":
          {
            if (_this5.$$selectIsNotBlank()) {
              xhtml.copy(calcTwoCursor());

              _this5.__focusDOM.focus();

              _this5.$$deleteSelect(); // 由于内容改变，需要重新调用着色


              _this5.__formatData = _this5.$$diff(_this5.$shader(_this5._contentArray.join('\n'))); // 更新视图

              _this5.$$updateCursorPosition();

              _this5.$$updateView();

              _this5.$$cancelSelect(); // 通知文本改动


              _this5.__updated__();
            }

            break;
          }
        // 多空格输入或多行移位

        case "tab":
          {
            // tab用来控制输入多个空格，默认事件需要禁止
            xhtml.stopPropagation(event);
            xhtml.preventDefault(event); // 计算空格

            var blanks = "";

            for (var i = 0; i < _this5._tabSpace; i++) {
              blanks += " ";
            } // 如果有选区，特殊处理


            if (_this5.$$selectIsNotBlank()) {
              var beginLineNum = _this5.__cursor1.lineNum,
                  endLineNum = _this5.__cursor2.lineNum;

              if (beginLineNum > endLineNum) {
                beginLineNum = _this5.__cursor2.lineNum;
                endLineNum = _this5.__cursor1.lineNum;
              } // 在开头追究tab


              for (var lineNum = beginLineNum; lineNum <= endLineNum; lineNum++) {
                _this5._contentArray[lineNum] = blanks + _this5._contentArray[lineNum];
              } // 校对选择区域


              _this5.__cursor1.leftNum += _this5._tabSpace;
              _this5.__cursor2.leftNum += _this5._tabSpace; // 校对光标

              _this5.__leftNum += _this5._tabSpace;
              _this5.__formatData = _this5.$$diff(_this5.$shader(_this5._contentArray.join('\n')));

              _this5.$$updateCursorPosition();

              _this5.$$updateView();

              _this5.$$updateCanvasSize();

              _this5.$$updateSelectView(); // 通知文本改动


              _this5.__updated__();
            } else {
              update(blanks);
            }

            break;
          }
        // 光标向上

        case "up":
          {
            // 如果是第一行不需要任何处理
            if (_this5.__lineNum <= 0) return; // 向上一行

            _this5.__lineNum -= 1;
            _this5.__leftNum = _this5.$$bestLeftNum(_this5.$$textWidth(_this5._contentArray[_this5.__lineNum + 1].substr(0, _this5.__leftNum)) + 40);

            _this5.$$updateCursorPosition();

            _this5.$$updateView();

            _this5.$$cancelSelect();

            _this5._el.scrollTop -= 21;
            break;
          }
        // 光标向下

        case "down":
          {
            if (_this5.__lineNum >= _this5._contentArray.length - 1) return; // 向下一行

            _this5.__lineNum += 1;
            _this5.__leftNum = _this5.$$bestLeftNum(_this5.$$textWidth(_this5._contentArray[_this5.__lineNum - 1].substr(0, _this5.__leftNum)) + 40);

            _this5.$$updateCursorPosition();

            _this5.$$updateView();

            _this5.$$cancelSelect();

            _this5._el.scrollTop += 21;
            break;
          }
        // 光标向左

        case "left":
          {
            if (_this5.__leftNum <= 0) {
              if (_this5.__lineNum <= 0) return;
              _this5.__lineNum -= 1;
              _this5.__leftNum = _this5._contentArray[_this5.__lineNum].length;
            } else {
              _this5.__leftNum -= 1;
            }

            _this5.$$updateCursorPosition();

            _this5.$$cancelSelect();

            break;
          }
        // 光标向右

        case "right":
          {
            if (_this5.__leftNum >= _this5._contentArray[_this5.__lineNum].length) {
              if (_this5.__lineNum >= _this5._contentArray.length - 1) return;
              _this5.__lineNum += 1;
              _this5.__leftNum = 0;
            } else {
              _this5.__leftNum += 1;
            }

            _this5.$$updateCursorPosition();

            _this5.$$cancelSelect();

            break;
          }
        // 删除

        case "backspace":
          {
            // 如果有选区
            if (_this5.$$selectIsNotBlank()) {
              // 删除选区
              _this5.$$deleteSelect();
            } // 无选区的常规操作
            else {
                if (_this5.__leftNum <= 0) {
                  if (_this5.__lineNum <= 0) return;
                  _this5.__lineNum -= 1;
                  _this5.__leftNum = _this5._contentArray[_this5.__lineNum].length; // 一行的开头应该删除本行（合并到前一行）

                  _this5._contentArray[_this5.__lineNum] += _this5._contentArray[_this5.__lineNum + 1];

                  _this5._contentArray.splice(_this5.__lineNum + 1, 1);
                } else {
                  _this5.__leftNum -= 1;
                  _this5._contentArray[_this5.__lineNum] = _this5._contentArray[_this5.__lineNum].substring(0, _this5.__leftNum) + _this5._contentArray[_this5.__lineNum].substring(_this5.__leftNum + 1);
                }
              } // 由于内容改变，需要重新调用着色


            _this5.__formatData = _this5.$$diff(_this5.$shader(_this5._contentArray.join('\n'))); // 更新视图

            _this5.$$updateCursorPosition();

            _this5.$$updateView();

            _this5.$$cancelSelect(); // 通知文本改动


            _this5.__updated__();

            break;
          }
      }
    });
  } // 判断一行是否匹配


  var euqalLine = function euqalLine(line1, line2) {
    if (line1.length != line2.length) return false;

    for (var i = 0; i < line1.length; i++) {
      if (line1[i].content != line2[i].content || line1[i].color != line2[i].color) return false;
    }

    return true;
  };
  /**
   * 为了加速页面渲染，我们引入差异对比
   * 简单的理解就是：
   * 原本在数据改变的时候直接更新整个DOM的方式替换成只功能必要的DOM
   */


  function diff(newFormatData) {
    /**
     * 思路：
     * 
     * 从开始匹配无法匹配的，匹配条个数记作beginNum
     * 再从结尾匹配无法匹配的，匹配条个数记作endNum
     * 只有begin和end之间的数据需要更新DOM
     * 
     * 当然，也有特殊情况，因此在进行回归前，先把特殊情况提取处理
     * 
     */
    var oldFormatData = this.__formatData;

    if (oldFormatData) {
      // 寻找开始匹配行数
      var beginNum = 0;

      for (var i = 0; i < oldFormatData.length && i < newFormatData.length; i++) {
        if (!euqalLine(oldFormatData[i], newFormatData[i])) {
          break;
        }

        beginNum += 1;
      } // 寻找结束匹配行数


      var endNum = 0;

      for (var _i4 = 1; _i4 <= oldFormatData.length && _i4 <= newFormatData.length; _i4++) {
        if (!euqalLine(oldFormatData[oldFormatData.length - _i4], newFormatData[newFormatData.length - _i4])) {
          break;
        }

        endNum += 1;
      }

      var minLength = Math.min(oldFormatData.length, newFormatData.length); // 校对(如果复用重叠了)

      if (beginNum + endNum >= minLength) {
        endNum = minLength - beginNum - 1; // 由于不知道是删除还是增加，因此可能出现负数

        if (endNum < 0) endNum = 0;
      } // 对比以后的差异信息


      this.__diff = {
        beginNum: beginNum,
        endNum: endNum
      };
    }

    return newFormatData;
  } // 外来文本统一过滤处理


  function filterText(oralStr) {
    // 把tab统一变成空格
    var tab = "";

    for (var i = 0; i < this._tabSpace; i++) {
      tab += " ";
    }

    return oralStr.replace(/\t/g, tab);
  }

  function _inner_CSS_shader(textString, colors) {
    var shaderArray = []; // 当前面对的

    var i = 0; // 获取往后n个值

    var nextNValue = function nextNValue(n) {
      return textString.substring(i, n + i > textString.length ? textString.length : n + i);
    };

    var template = ""; // 1:选择器 tag
    // 2:属性名 attr
    // 3:属性值 string

    var state = "tag"; // 初始化模板，开始文本捕获

    var initTemplate = function initTemplate() {
      if (template != "") {
        shaderArray.push({
          color: {
            tag: colors.selector,
            attr: colors.attrKey,
            string: colors.attrValue
          }[state],
          content: template
        });
      }

      template = "";
    };

    while (true) {
      /* 1.注释 */
      if (nextNValue(2) == '/*') {
        initTemplate();

        while (nextNValue(2) !== '*/' && i < textString.length) {
          template += textString[i++];
        }

        shaderArray.push({
          color: colors.annotation,
          content: template + nextNValue(2)
        });
        i += 2;
        template = "";
      }
      /* 2.字符串 */
      else if (["'", '"'].indexOf(nextNValue(1)) > -1) {
          var strBorder = nextNValue(1);
          initTemplate();

          do {
            template += textString[i++];
          } while (nextNValue(1) != strBorder && i < textString.length); // 因为可能是没有字符导致的结束


          if (nextNValue(1) != strBorder) {
            strBorder = "";
          } else {
            i += 1;
          }

          shaderArray.push({
            color: colors.attrValue,
            content: template + strBorder
          });
          template = "";
        }
        /* 3.边界 */
        else if ([":", '{', '}', ";"].indexOf(nextNValue(1)) > -1) {
            initTemplate();
            shaderArray.push({
              color: colors.insign,
              content: nextNValue(1)
            });
            template = "";

            if (nextNValue(1) == '{' || nextNValue(1) == ';') {
              state = 'attr';
            } else if (nextNValue(1) == '}') {
              state = 'tag';
            } else {
              state = 'string';
            }

            i += 1;
          }
          /* 追加字符 */
          else {
              if (i >= textString.length) {
                initTemplate();
                break;
              } else {
                template += textString[i++];
              }
            }
    }

    return shaderArray;
  } // JS关键字


  var keyWords = ["abstract", "arguments", "boolean", "break", "byte", "case", "catch", "char", "class", "const", "continue", "debugger", "default", "delete", "do", "double", "else", "enum", "eval", "export", "extends", "false", "final", "finally", "float", "for", "function", "goto", "if", "implements", "import", "in", "instanceof", "int", "interface", "let", "long", "native", "new", "null", "package", "private", "protected", "public", "return", "short", "static", "super", "switch", "synchronized", "this", "throw", "throws", "transient", "true", "try", "typeof", "var", "void", "volatile", "while", "with", "yield"];

  function _inner_ES_shader(textString, colors) {
    var shaderArray = []; // 当前面对的

    var i = 0; // 获取往后n个值

    var nextNValue = function nextNValue(n) {
      return textString.substring(i, n + i > textString.length ? textString.length : n + i);
    };

    var template = ""; // 初始化模板，开始文本捕获

    var initTemplate = function initTemplate() {
      if (template != "") {
        // 考虑开始的(
        if (template[0] == '(') {
          shaderArray.push({
            color: colors.insign,
            content: "("
          });
          template = template.substr(1);
        }

        shaderArray.push({
          color: colors.text,
          content: template
        });
      }

      template = "";
    };

    while (true) {
      /* 1.注释1 */
      if (nextNValue(2) == '/*') {
        initTemplate();

        while (nextNValue(2) !== '*/' && i < textString.length) {
          template += textString[i++];
        }

        shaderArray.push({
          color: colors.annotation,
          content: template + nextNValue(2)
        });
        i += 2;
        template = "";
      }
      /* 2.注释2 */
      else if (nextNValue(2) == '//') {
          initTemplate();

          while (nextNValue(1) !== '\n' && i < textString.length) {
            template += textString[i++];
          }

          shaderArray.push({
            color: colors.annotation,
            content: template
          });
          template = "";
        }
        /* 3.字符串 */
        else if (["'", '"', '`'].indexOf(nextNValue(1)) > -1) {
            var strBorder = nextNValue(1);
            initTemplate();

            do {
              template += textString[i++];
            } while (nextNValue(1) != strBorder && i < textString.length); // 因为可能是没有字符导致的结束


            if (nextNValue(1) != strBorder) {
              strBorder = "";
            } else {
              i += 1;
            }

            shaderArray.push({
              color: colors.string,
              content: template + strBorder
            });
            template = "";
          }
          /* 4.函数定义 */
          else if (nextNValue(1) == '(' && (template[0] == ' ' || i - template.length - 1 >= 0 && textString[i - template.length - 1] == " ")) {
              shaderArray.push({
                color: colors.funName,
                content: template
              });
              i += 1;
              template = "(";
            }
            /* 5.方法调用 */
            else if (nextNValue(1) == '(') {
                shaderArray.push({
                  color: colors.execName,
                  content: template
                });
                i += 1;
                template = "(";
              }
              /* 6.边界 */
              else if ([";", '{', '}', '(', ')', '.', '\n', '=', '+', '>', '<', '[', ']', '-', '*', '/', '^', '*', '!'].indexOf(nextNValue(1)) > -1) {
                  initTemplate();
                  shaderArray.push({
                    color: colors.insign,
                    content: nextNValue(1)
                  });
                  template = "";
                  i += 1;
                }
                /* 7.关键字 */
                else if (nextNValue(1) == ' ' && keyWords.indexOf(template.trim()) > -1) {
                    shaderArray.push({
                      color: colors.key,
                      content: template + " "
                    });
                    template = "";
                    i += 1;
                  }
                  /* 追加字符 */
                  else {
                      if (i >= textString.length) {
                        initTemplate();
                        break;
                      } else {
                        template += textString[i++];
                      }
                    }
    }

    return shaderArray;
  }

  function _inner_HTML_shader(textString, colors) {
    var shaderArray = []; // 当前面对的

    var i = 0; // 获取往后n个值

    var nextNValue = function nextNValue(n) {
      return textString.substring(i, n + i > textString.length ? textString.length : n + i);
    };

    var template = ""; // 初始化模板，开始文本捕获

    var initTemplate = function initTemplate() {
      if (template != "") {
        shaderArray.push({
          color: colors.text,
          content: template
        });
      }

      template = "";
    }; // 匹配属性值模板


    var getAttrValueTemplate = function getAttrValueTemplate() {
      var endStr = " "; // 寻找属性值边界

      if (nextNValue(1) == '"') endStr = '"';
      if (nextNValue(1) == "'") endStr = "'"; // 到达边界前一直寻找下一个

      do {
        template += textString[i++];
      } while (nextNValue(1) != endStr && i < textString.length); // 如果是匹配成功而不是匹配到末尾


      if (endStr != " " && i < textString.length) {
        template += endStr;
        i += 1;
      }

      shaderArray.push({
        color: colors.attrValue,
        content: template
      });
      template = "";
    };

    while (true) {
      /* 1.注释 */
      if (nextNValue(4) == '<!--') {
        initTemplate();

        while (nextNValue(3) !== '-->' && i < textString.length) {
          template += textString[i++];
        }

        shaderArray.push({
          color: colors.annotation,
          content: template + nextNValue(3)
        });
        i += 3;
        template = "";
      }
      /* 2.</ */
      else if (nextNValue(2) == '</') {
          initTemplate();
          shaderArray.push({
            color: colors.insign,
            content: "</"
          });
          i += 2;

          while (nextNValue(1) !== '>' && i < textString.length) {
            template += textString[i++];
          }

          if (template != "") {
            shaderArray.push({
              color: colors.node,
              content: template
            });
            template = "";

            if (i < textString.length) {
              shaderArray.push({
                color: colors.insign,
                content: ">"
              });
              i += 1;
            }
          }
        }
        /* 3.< */
        else if (nextNValue(1) == '<' && nextNValue(2) != '< ') {
            var specialTag = "";
            initTemplate();
            shaderArray.push({
              color: colors.insign,
              content: "<"
            });
            i += 1; // 寻找标签名称

            while (nextNValue(1) != '>' && nextNValue(1) != ' ' && i < textString.length) {
              template += textString[i++];
            }

            if (template != '') {
              // 针对style和script这样特殊的标签，内部需要调用对应的着色器着色
              if (template == "style" || template == 'script') {
                specialTag = "</" + template + ">";
              }

              shaderArray.push({
                color: colors.node,
                content: template
              });
              template = '';

              if (i < textString.length) {
                // 寻找标签属性
                while (i < textString.length) {
                  // 遇到这个表示标签结束了
                  // 也就意味着标签匹配结束
                  if (nextNValue(1) == ">") {
                    initTemplate();
                    shaderArray.push({
                      color: colors.insign,
                      content: ">"
                    });
                    i += 1;
                    break;
                  } // 如果是空格，表示是属性之间，接着查看下一个即可
                  else if (nextNValue(1) != ' ') {
                      initTemplate(); // 匹配属性名称

                      if (nextNValue(1) != '"' && nextNValue(1) != "'") {
                        // 如果不是=或>和空格就继续
                        while (nextNValue(1) != "=" && nextNValue(1) != '>' && i < textString.length && nextNValue(1) != " ") {
                          template += textString[i++];
                        }

                        if (template != "") {
                          shaderArray.push({
                            color: colors.attrKey,
                            content: template
                          });
                          template = ""; // 如果下一个是=，就接着找属性值

                          if (nextNValue(1) == '=') {
                            shaderArray.push({
                              color: colors.insign,
                              content: "="
                            });
                            i += 1;

                            if (i < textString.length && nextNValue(1) != " " && nextNValue(1) != '>') {
                              // 寻找属性值
                              getAttrValueTemplate();
                            }
                          }
                        } else {
                          template += textString[i++];
                        }
                      } else if (nextNValue(1) == '=') {
                        shaderArray.push({
                          color: colors.insign,
                          content: "="
                        });
                        i += 1;
                      } else {
                        if (i < textString.length && nextNValue(1) != " " && nextNValue(1) != '>') {
                          getAttrValueTemplate();
                        }
                      }
                    } else {
                      template += textString[i++];
                    }
                }
              }
            }

            if (specialTag != "") {
              var oldI = i,
                  oldTemplate = template,
                  langHelp,
                  innerShaderArray;

              while (nextNValue(specialTag.length) != specialTag && i < textString.length) {
                template += textString[i++];
              }

              if (i < textString.length) {
                langHelp = specialTag.replace(/<\//, '');
                innerShaderArray = {
                  "style>": _inner_CSS_shader,
                  "script>": _inner_ES_shader
                }[langHelp](template, {
                  "style>": colors._css,
                  "script>": colors._javascript
                }[langHelp]);
                innerShaderArray.forEach(function (innerShader) {
                  shaderArray.push(innerShader);
                });
                template = "";
              } else {
                template = oldTemplate;
                i = oldI;
              }
            }
          }
          /* 追加字符 */
          else {
              if (i >= textString.length) {
                initTemplate();
                break;
              } else {
                template += textString[i++];
              }
            }
    }

    return shaderArray;
  } // 合并内容


  var toShaderReult = function toShaderReult(words) {
    var resultData = [[]],
        lineNum = 0;
    words.forEach(function (word) {
      var codeArray = word.content.split(/\n/),
          index;
      resultData[lineNum].push({
        color: word.color,
        content: codeArray[0]
      });

      for (index = 1; index < codeArray.length; index++) {
        lineNum += 1;
        resultData.push([]);
        resultData[lineNum].push({
          color: word.color,
          content: codeArray[index]
        });
      }
    });
    return resultData;
  }; // 初始化配置文件


  var initConfig = function initConfig(init, data) {
    var key;

    for (key in data) {
      try {
        init[key] = data[key];
      } catch (e) {
        throw new Error("Illegal property value！");
      }
    }

    return init;
  };

  var _deafultColors_html = {
    "text": "#000000",

    /*文本颜色*/
    "annotation": "#6a9955",

    /*注释颜色*/
    "insign": "#ffffff",

    /*符号颜色*/
    "node": "#1e50b3",

    /*结点颜色*/
    "attrKey": "#1e83b1",

    /*属性名称颜色*/
    "attrValue": "#ac4c1e"
    /*属性值颜色*/

  };
  var _deafultColors_css = {
    "annotation": "#6a9955",

    /*注释颜色*/
    "insign": "#ffffff",

    /*符号颜色*/
    "selector": "#1e50b3",

    /*选择器*/
    "attrKey": "#1e83b1",

    /*属性名称颜色*/
    "attrValue": "#ac4c1e"
    /*属性值颜色*/

  };
  var _deafultColors_javascript = {
    "text": "#000000",

    /*文本颜色*/
    "annotation": "#6a9955",

    /*注释颜色*/
    "insign": "#ffffff",

    /*符号颜色*/
    "key": "#ff0000",

    /*关键字颜色*/
    "string": "#ac4c1e",

    /*字符串颜色*/
    "funName": "#1e50b3",

    /*函数名称颜色*/
    "execName": "#1e83b1"
    /*执行方法颜色*/

  };

  function innerShader(lang, colors) {
    colors = colors || {};

    var _inner_shader, _inner_colors;

    if (lang == 'html') {
      colors._css = initConfig(_deafultColors_css, colors.css);
      colors._javascript = initConfig(_deafultColors_javascript, colors.javascript);
      _inner_colors = initConfig(_deafultColors_html, colors);
      _inner_shader = _inner_HTML_shader;
    } else if (lang == 'css') {
      _inner_colors = initConfig(_deafultColors_css, colors);
      _inner_shader = _inner_CSS_shader;
    } else if (lang == 'javascript') {
      _inner_colors = initConfig(_deafultColors_javascript, colors);
      _inner_shader = _inner_ES_shader;
    } else {
      throw new Error('Language not supported:' + lang + ",The languages available include: html、css、javascript!");
    }

    return function (textString) {
      return toShaderReult(_inner_shader(textString, _inner_colors));
    };
  }

  var owe = function owe(options) {
    var _this6 = this;

    if (!(this instanceof owe)) {
      throw new Error('Open-Web-Editor is a constructor and should be called with the `new` keyword');
    }
    /**
     *
     * [格式化配置]
     *
     * 所有的配置校验和默认值设置等都应该在这里进行
     * 经过这里处理以后，后续不需要再进行校验了
     * 因此这里的内容的更改一定要慎重
     *
     */
    // 编辑器挂载点


    if (isElement(options.el)) {
      // 着色器
      var shader = function shader() {
        var resultData = [];

        _this6._contentArray.forEach(function (text) {
          resultData.push([{
            content: text,
            color: _this6._colorText
          }]);
        });

        return resultData;
      }; // 格式化


      var format = function format(textString) {
        return textString;
      };

      this._el = options.el;
      this._el.owe_terminal = 'none'; // 公共配置

      options.color = options.color || {};
      this._colorBackground = options.color.background || "#d6d6e4";
      /*编辑器背景*/

      this._colorText = options.color.text || "#000000";
      /*普通文本颜色*/

      this._colorNumber = options.color.number || "#888484";
      /*行号颜色*/

      this._colorEdit = options.color.edit || "#eaeaf1";
      /*编辑行颜色*/

      this._colorCursor = options.color.cursor || "#ff0000";
      /*光标颜色*/

      this._colorSelect = options.color.select || "#6c6cf1";
      /*选择背景*/

      this._fontFamily = options["font-family"] || "新宋体";
      /*字体*/

      this._fontWeight = options["font-weight"] || 600;
      /*字重*/

      this._tabSpace = options.tabSpace || 4;
      /*设置一个tab表示多少个空格*/

      this._readonly = options.readonly || false;
      /*是否只读*/

      this._noLineNumber = options.noLineNumber || false;
      /*是否隐藏行号*/
      // 文本

      this._contentArray = isString(options.content) ? (this.$$filterText(options.content) + "").split("\n") : [""]; // 着色方法

      this.$shader = isFunction(options.shader) ? options.shader : isArray(options.shader) ? innerShader.apply(void 0, _toConsumableArray(options.shader)) : shader; // 格式化方法

      this.$format = isFunction(options.format) ? options.format : format; // 辅助输入

      this.$input = isFunction(options.input) ? options.input : null;
    } else {
      // 挂载点是必须的，一定要有
      throw new Error('options.el is not a element!');
    } // 先初始化DOM


    this.$$initDom(); // 初始化控制变量

    this.__needUpdate = true;
    this.__lineNum = this._contentArray.length - 1;
    this.__leftNum = this._contentArray[this.__lineNum].length;
    this.__cursor1 = this.__cursor2 = {
      leftNum: 0,
      lineNum: 0
    };
    this.__formatData = this.$$diff(this.$shader(this._contentArray.join('\n'))); // 初始化视图

    this.$$initView(); // 更新视图

    this.$$updateView(); // 绑定操作

    this.$$bindEvent();

    this.__updated__ = function () {}; // 编辑器管理的文本发生改变后会主动触发callback方法


    this.updated = function (callback) {
      _this6.__updated__ = callback;
    }; // 获取当前编辑器代码


    this.valueOf = function (content) {
      if (content || content == '') {
        // 先删除内容
        _this6._contentArray = null; // 输入以触发更新

        _this6.__focusDOM.value = content;
        xhtml.trigger(_this6.__focusDOM, 'input');

        _this6.__focusDOM.focus();
      }

      return _this6._contentArray.join('\n');
    }; // 在当前光标位置输入新的内容


    this.input = function () {
      var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var cursor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var number = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      // 先删除多余的内容
      if (cursor != 0) {
        if (number != 0) {
          _this6._contentArray[_this6.__lineNum] = _this6._contentArray[_this6.__lineNum].substring(0, _this6.__leftNum + cursor) + _this6._contentArray[_this6.__lineNum].substring(_this6.__leftNum + cursor + number);
        } // 修改光标位置


        _this6.__leftNum += cursor;
      } // 输入以触发更新


      _this6.__focusDOM.value = content;
      xhtml.trigger(_this6.__focusDOM, 'input');

      _this6.__focusDOM.focus();
    }; // 格式化代码


    this.format = function () {
      // 格式化内容
      _this6._contentArray = _this6.$format(_this6._contentArray.join('\n'), _this6._tabSpace).split('\n');
      _this6.__lineNum = _this6._contentArray.length - 1;
      _this6.__leftNum = _this6._contentArray[_this6.__lineNum].length; // 着色

      _this6.__formatData = _this6.$$diff(_this6.$shader(_this6._contentArray.join('\n'))); // 更新视图

      _this6.$$updateView(); // 更新光标位置


      _this6.$$initView();
    }; // 复制当前编辑器代码到电脑剪切板


    this.copy = function (callback, errorback) {
      xhtml.copy(_this6.valueOf(), callback, errorback);
    };
  }; // 挂载辅助方法


  owe.prototype.$$textWidth = textWidth;
  owe.prototype.$$bestLeftNum = bestLeftNum;
  owe.prototype.$$calcCanvasXY = calcCanvasXY;
  owe.prototype.$$selectIsNotBlank = selectIsNotBlank;
  owe.prototype.$$filterText = filterText;
  owe.prototype.$$toTemplate = toTemplate; // 挂载核心方法

  owe.prototype.$$initDom = initDom;
  owe.prototype.$$initView = initView;
  owe.prototype.$$updateView = updateView;
  owe.prototype.$$updateSelectView = updateSelectView;
  owe.prototype.$$updateCursorPosition = updateCursorPosition;
  owe.prototype.$$updateCanvasSize = updateCanvasSize;
  owe.prototype.$$cancelSelect = cancelSelect;
  owe.prototype.$$deleteSelect = deleteSelect;
  owe.prototype.$$bindEvent = bindEvent; // 性能优化系列方法

  owe.prototype.$$diff = diff;

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    module.exports = owe;
  } else {
    window.OpenWebEditor = owe;
  }
})();
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/index.scss
/*****************************************************************/
window.__etcpack__bundleSrc__['26']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "\n header{\n\nbackground-color: #fff;\n\nborder-bottom: 1px solid #eaecef;\n\nheight: 60px;\n\nline-height: 60px;\n\npadding-left: 80px;\n\npadding-right: 10px;\n\nbackground-image: url('./logo.png');\n\nbackground-size: auto 70%;\n\nbackground-position: 20px center;\n\nbackground-repeat: no-repeat;\n\nwhite-space: nowrap;\n\n}\n\n header>span{\n\nfont-family: cursive;\n\nfont-size: 20px;\n\nfont-weight: 200;\n\n}\n\n header>nav{\n\nposition: absolute;\n\nright: 10px;\n\ntop: 0;\n\nz-index: 2;\n\n}\n\n header>nav>span{\n\nmargin-right: 10px;\n\nfont-size: 14px;\n\ncursor: pointer;\n\npadding: 0 10px;\n\ndisplay: inline-block;\n\nvertical-align: top;\n\n}\n\n header>nav>span>a{\n\nposition: relative;\n\nmargin-right: 30px;\n\n}\n\n header>nav>span>a::after{\n\nposition: absolute;\n\nbackground-image: url('./images/link.png');\n\nbackground-repeat: no-repeat;\n\ncontent: \" \";\n\ndisplay: inline-block;\n\nwidth: 11px;\n\nheight: 11px;\n\ntop: 3px;\n\nright: -16px;\n\n}\n\n header>nav>span:hover{\n\nfont-weight: 800;\n\n}\n\n .container{\n\noverflow: hidden;\n\nposition: relative;\n\n}\n\n .container>div{\n\ndisplay: inline-block;\n\nvertical-align: top;\n\nwidth: 50%;\n\nheight: calc(100vh - 60px);\n\nborder: 1px solid #eaecef;\n\n}\n\n .container>div:last-child{\n\ncursor: not-allowed !important;\n\n}\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['27']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<header>\n    <span>\n        Format Json | 格式化json字符串的在线工具\n    </span>\n    <nav>\n        <span>\n            <a href=\"https://github.com/hai2007/format-json\" target=\"_blank\">GitHub</a>\n        </span>\n        <ui-search></ui-search>\n    </nav>\n</header>\n<div class='container'>\n    <div id=\"source\"></div>\n    <div id=\"target\"></div>\n</div>"
  
    return __etcpack__scope_bundle__;
}

window.__etcpack__bundleSrc__['0']();