(function() {
  var clipboard = document.createElement('textarea');
  clipboard.id = 'clipboard';
  clipboard.style.position = 'fixed';
  clipboard.style.top = '0px';
  clipboard.style.left = '9999px';

  document.querySelector('body').appendChild(clipboard);

  function notification(x, y) {
    var notification = document.createElement('span');
    notification.classList.add('su_multi-copy');
    notification.style.top = (y - 50) + 'px';
    notification.style.left = (x - 30) + 'px';
    notification.innerHTML = 'Copied!';
    document.querySelector('body').appendChild(notification);
    setTimeout(function() {
      document.querySelector('body').removeChild(notification);
    }, 1000)
  }

  document.querySelector('body').addEventListener('click', function(e) {
    if (window.getSelection().toString() !== "") {
      clipboard.value += window.getSelection().toString() + '\n\n';
      clipboard.select();
      document.execCommand('copy');

      notification(e.clientX, e.clientY);
    }
  });
})();
