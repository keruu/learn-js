(function () {
  window.addEventListener('DOMContentLoaded', function () {

    document.querySelector('body').addEventListener('click', function (event) {
      event.preventDefault();

      /**
       * 画面に出力するには、出力先要素を選択して、innerHTMLに値を格納します。
       * 元々の中身は消えます。
       */
      document.querySelector('.box-2').innerHTML = "要素の内容を書き換えます。<br>";

      /**
       * 画面に出力するには、出力先要素を選択して、innerHTMLに値を格納します。
       * 値は挿入されます。
       */
      document.querySelector('.box-2').insertAdjacentHTML('beforebegin', "要素よりも前に挿入します。<br>");
      document.querySelector('.box-2').insertAdjacentHTML('afterbegin', "要素の前に挿入します。<br>");
      document.querySelector('.box-2').insertAdjacentHTML('beforeend', "要素の後ろに挿入します。<br>");
      document.querySelector('.box-2').insertAdjacentHTML('afterend', "要素よりも後ろに挿入します。<br>");

      /**
       * コンソールに出力するには、console.log()に値を渡します。
       */
      console.log("hello");
    });

  });
})();