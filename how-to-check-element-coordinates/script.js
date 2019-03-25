(function () {
  window.addEventListener('DOMContentLoaded', function () {

    /**
     * 座標表示処理
     */
    function show_coordinates() {

      /**
       * #mainのclient座標
       */
      var main = document.querySelector('#main');
      document.querySelector('#clienttop').innerHTML = '#main clientTop: ' + main.clientTop;
      document.querySelector('#clientleft').innerHTML = '#main clientLeft: ' + main.clientLeft;
      document.querySelector('#clientwidth').innerHTML = '#main clientWidth: ' + main.clientWidth;
      document.querySelector('#clientheight').innerHTML = '#main clientHeight: ' + main.clientHeight;

      /**
       * #mainのscroll座標
       */
      document.querySelector('#scrolltop').innerHTML = '#main scrollTop: ' + main.scrollTop;
      document.querySelector('#scrollleft').innerHTML = '#main scrollLeft: ' + main.scrollLeft;
      document.querySelector('#scrollwidth').innerHTML = '#main scrollWidth: ' + main.scrollWidth;
      document.querySelector('#scrollheight').innerHTML = '#main scrollHeight: ' + main.scrollHeight;

      /**
       * windowのscroll座標
       */
      document.querySelector('#windowscrollx').innerHTML = 'window scrollX: ' + window.scrollX;
      document.querySelector('#windowscrolly').innerHTML = 'window scrollY: ' + window.scrollY;

      /**
       * windowのページ位置
       */
      document.querySelector('#windowpagexoffset').innerHTML = 'window pageXOffset: ' + window.pageXOffset;
      document.querySelector('#windowpageyoffset').innerHTML = 'window pageYOffset: ' + window.pageYOffset;

      /**
       * windowの外側サイズ
       */
      document.querySelector('#windowouterwidth').innerHTML = 'window outerWidth: ' + window.outerWidth;
      document.querySelector('#windowouterheight').innerHTML = 'window outerHeight: ' + window.outerHeight;

      /**
       * windowの内側サイズ
       */
      document.querySelector('#windowinnerwidth').innerHTML = 'window innerWidth: ' + window.innerWidth;
      document.querySelector('#windowinnerheight').innerHTML = 'window innerHeight: ' + window.innerHeight;

    }

    window.onload = show_coordinates;
    window.onresize = show_coordinates;
    window.onscroll = show_coordinates;

    /**
     * スクリーン座標更新のためのタイマーイベント
     */
    setInterval(function () {
      /**
       * windowのscreen座標
       */
      document.querySelector('#windowscreentop').innerHTML = 'window screenTop: ' + window.screenTop;
      document.querySelector('#windowscreenleft').innerHTML = 'window screenLeft: ' + window.screenLeft;
      document.querySelector('#windowscreeny').innerHTML = 'window screenY: ' + window.screenY;
      document.querySelector('#windowscreenx').innerHTML = 'window screenX: ' + window.screenX;
    }, 100);
  });

})();