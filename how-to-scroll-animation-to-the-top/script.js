(function () {
  window.addEventListener('DOMContentLoaded', function () {

    /**
     * 座標表示処理
     */
    function show_coordinates() {

      /**
       * windowのscroll座標
       */
      document.querySelector('#windowscrollx').innerHTML = 'window scrollX: ' + window.scrollX;
      document.querySelector('#windowscrolly').innerHTML = 'window scrollY: ' + window.scrollY;
    }

    window.onload = show_coordinates;
    window.onresize = show_coordinates;
    window.onscroll = show_coordinates;

    document.querySelector('body').addEventListener('click', function () {

      /**
       * andjosh氏のスクロール
       * https://gist.github.com/andjosh/6764939
       *
       * kimwes氏のリビジョン
       * https://gist.github.com/andjosh/6764939#gistcomment-2404310
       */
      function andjosh_scroll(to, duration) {
        var element = document.scrollingElement || document.documentElement,
          start = element.scrollTop,
          change = to - start,
          startDate = +new Date(),
          // t = current time
          // b = start value
          // c = change in value
          // d = duration
          easeInOutQuad = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
          },
          animateScroll = function () {
            var currentDate = +new Date();
            var currentTime = currentDate - startDate;
            element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
            if (currentTime < duration) {
              requestAnimationFrame(animateScroll);
            } else {
              element.scrollTop = to;
            }
          };

        animateScroll();
      }

      andjosh_scroll(0, 1250);

      /**
       * 私のベタなスクロール
       */
      function my_poor_scroll() {
        var is_scroll = true,
          increment = 20,
          scroll_each = window.scrollY * (increment / 1000)
          ;

        var scroll_func = function () {
          if (is_scroll) {
            var y = window.scrollY - scroll_each;
            if (y <= 0) {
              y = 0;
              is_scroll = false;
            }
            window.scrollTo(window.scrollX, y);
            setTimeout(scroll_func, increment);
          }
        };
        scroll_func();
      }
      // my_poor_scroll();

    });
  });

})();