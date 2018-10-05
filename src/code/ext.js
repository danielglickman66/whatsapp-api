document.addEventListener('DOMContentLoaded', function () {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function () {
    window.open('https://api.whatsapp.com/send?phone=9725'
        + document.getElementById('number').value);
  }, false);
}, false);