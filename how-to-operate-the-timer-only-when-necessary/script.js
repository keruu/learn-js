(function () {
  window.addEventListener('DOMContentLoaded', function () {

    document.querySelector('body').addEventListener('click', function () {

      /**
       * Call function recursively until processing is complete.
       * 処理が終わるまで再帰的に関数を呼び出します。
       */
      var count = 1;
      var timer_process = function () {
        document.querySelector('#counter').innerHTML = count++;
        if (count < 30) {
          setTimeout(timer_process, 100);
        }
      };
      timer_process();

    });
  });

})();