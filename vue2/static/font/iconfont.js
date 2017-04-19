;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-iconcheckcircle" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 84.736c-234.666667 0-426.666667 192-426.666667 426.666667s192 426.666667 426.666667 426.666667 426.666667-192 426.666667-426.666667S746.666667 84.736 512 84.736zM426.666667 724.736l-213.333333-213.333333 59.733333-59.733333 153.6 153.6 324.266667-324.266667 59.733333 59.733333L426.666667 724.736z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfavorite" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 898.389333l-59.733333-58.453333C230.4 647.936 85.333333 518.528 85.333333 359.936c0-129.408 102.4-229.546667 234.666667-229.546667 72.533333 0 145.066667 33.408 192 87.637333 46.933333-54.272 119.466667-87.637333 192-87.637333 132.266667 0 234.666667 100.181333 234.666667 229.546667 0 158.592-145.066667 288-366.933333 480L512 898.389333z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconremovecircleoutline" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M298.666667 471.722667l0 85.333333 426.666667 0 0-85.333333L298.666667 471.722667zM512 87.722667c-234.666667 0-426.666667 192-426.666667 426.666667s192 426.666667 426.666667 426.666667 426.666667-192 426.666667-426.666667S746.666667 87.722667 512 87.722667zM512 855.722667c-187.733333 0-341.333333-153.6-341.333333-341.333333s153.6-341.333333 341.333333-341.333333 341.333333 153.6 341.333333 341.333333S699.733333 855.722667 512 855.722667z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconshoppingcart" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M300.885333 768c-46.933333 0-85.333333 38.4-85.333333 85.333333s38.4 85.333333 85.333333 85.333333 85.333333-38.4 85.333333-85.333333S347.818667 768 300.885333 768zM44.885333 85.333333l0 85.333333 85.333333 0 153.6 324.266667-59.733333 102.4c-4.266667 12.8-8.533333 29.866667-8.533333 42.666667 0 46.933333 38.4 85.333333 85.333333 85.333333l512 0 0-85.333333-494.933333 0c-4.266667 0-8.533333-4.266667-8.533333-8.533333l0-4.266667 38.4-72.533333 315.733333 0c34.133333 0 59.733333-17.066667 72.533333-42.666667l153.6-277.333333c8.533333-8.533333 8.533333-12.8 8.533333-21.333333 0-25.6-17.066667-42.666667-42.666667-42.666667l-631.466667 0-38.4-85.333333L44.885333 85.333333zM727.552 768c-46.933333 0-85.333333 38.4-85.333333 85.333333s38.4 85.333333 85.333333 85.333333 85.333333-38.4 85.333333-85.333333S774.485333 768 727.552 768z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconthumbdown" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M640 83.072 256 83.072c-34.133333 0-64 21.333333-76.8 51.2l-128 302.933333c-4.266667 8.533333-8.533333 17.066667-8.533333 29.866667l0 81.066667 0 0 0 4.266667c0 46.933333 38.4 85.333333 85.333333 85.333333l268.8 0-42.666667 196.266667c0 4.266667 0 8.533333 0 12.8 0 17.066667 8.533333 34.133333 17.066667 46.933333l46.933333 42.666667 281.6-281.6c17.066667-17.066667 25.6-38.4 25.6-59.733333l0-426.666667C725.333333 121.472 686.933333 83.072 640 83.072zM810.666667 83.072l0 512 170.666667 0 0-512L810.666667 83.072z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconthumbup" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M42.666667 936.405333l170.666667 0 0-512L42.666667 424.405333 42.666667 936.405333zM981.333333 467.072c0-46.933333-38.4-85.333333-85.333333-85.333333l-268.8 0 42.666667-196.266667c0-4.266667 0-8.533333 0-12.8 0-17.066667-8.533333-34.133333-17.066667-46.933333l-46.933333-42.666667-281.6 281.6c-17.066667 12.8-25.6 34.133333-25.6 59.733333l0 426.666667c0 46.933333 38.4 85.333333 85.333333 85.333333l384 0c34.133333 0 64-21.333333 76.8-51.2l128-302.933333c4.266667-8.533333 4.266667-21.333333 8.533333-29.866667L981.333333 467.072 981.333333 467.072C981.333333 471.338667 981.333333 467.072 981.333333 467.072z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wb_icon_circle_add_ex" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 64C264.32 64 64 264.32 64 512s200.32 448 448 448 448-200.32 448-448S759.68 64 512 64zM707.84 544 544 544l0 163.84c0 15.36-14.08 28.16-32 28.16s-32-12.8-32-28.16L480 544 316.16 544C300.8 544 288 529.92 288 512s12.8-32 28.16-32L480 480 480 316.16C480 300.8 494.08 288 512 288s32 12.8 32 28.16L544 480l163.84 0c15.36 0 28.16 14.08 28.16 32S723.2 544 707.84 544z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-keyboardarrowright" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M366.933333 695.466667 563.2 503.466667 366.933333 307.2 426.666667 247.466667 682.666667 503.466667 426.666667 759.466667Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconclose" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M559.691185 513.040702l232.607732-232.607732c12.849656-12.849656 12.849656-33.665751 0-46.515407-12.849656-12.849656-33.665751-12.849656-46.515407 0l-232.607732 232.607732-232.607732-232.607732c-12.849656-12.849656-33.665751-12.849656-46.515407 0-12.849656 12.849656-12.849656 33.665751 0 46.515407l232.607732 232.607732-232.607732 232.607732c-12.849656 12.849656-12.849656 33.665751 0 46.515407 6.424316 6.424316 14.84101 9.637498 23.257703 9.637498 8.416693 0 16.833387-3.212158 23.257703-9.637498l232.607732-232.607732 232.607732 232.607732c6.424316 6.424316 14.84101 9.637498 23.257703 9.637498 8.416693 0 16.833387-3.212158 23.257703-9.637498 12.849656-12.849656 12.849656-33.665751 0-46.515407L559.691185 513.040702z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-arrow_lift" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M246.784 468.309333L689.834667 25.6c24.917333-24.917333 62.464-24.917333 87.381333 0s24.917333 62.464 0 87.381333l-399.36 399.36 399.36 399.36c24.917333 24.917333 24.917333 62.464 0 87.381334-24.917333 24.917333-62.464 24.917333-87.381333 0L246.784 555.690667c-24.917333-24.917333-24.917333-62.464 0-87.381334z" fill="#393A3A" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)